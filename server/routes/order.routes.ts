import { Router } from "express";
import { db } from "../db";
import { orders, orderItems, products, cartItems, cart as cartTable } from "@shared/schema";
import { isAuthenticated } from "../replitAuth";
import { eq, and } from "drizzle-orm";
import { z } from "zod";

const router = Router();

const createOrderSchema = z.object({
  items: z.array(z.any()).optional(),
  total: z.number(),
  paymentMethod: z.enum(["cash", "razorpay", "cod", "upi", "card", "netbanking"]).default("cod"),
  paymentStatus: z.string().default("pending"),
  userInfo: z.object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    phone: z.string(),
    address: z.string(),
    email: z.string().optional(),
  }).optional(),
});

// Create order from cart
router.post("/", async (req: any, res) => {
  try {
    const userId = req.session?.userId || req.user?.claims?.sub;
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const payload = createOrderSchema.parse(req.body);

    // Older sessions can leave duplicate cart rows behind, so collect every cart for this user.
    const userCarts = await db.select().from(cartTable).where(eq(cartTable.userId, userId));

    if (userCarts.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    const cartItemsList = (
      await Promise.all(
        userCarts.map((userCart) =>
          db.query.cartItems.findMany({
            where: eq(cartItems.cartId, userCart.id),
          })
        )
      )
    ).flat();

    if (cartItemsList.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    // Calculate total
    let totalAmount = 0;
    for (const item of cartItemsList) {
      totalAmount += Number(item.price || 0) * Number(item.quantity || 0);
    }

    // Get today's date
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayDate = today.toISOString().split("T")[0];

    // Normalize payment method
    let paymentMethod = payload.paymentMethod;
    if (paymentMethod === "cash") paymentMethod = "cod";

    // Get delivery address from userInfo or userCart
    const deliveryAddress = payload.userInfo?.address || "Delivery Address";

    // Create order
    const [newOrder] = await db
      .insert(orders)
      .values({
        userId,
        totalAmount: totalAmount.toString(),
        deliveryAddress,
        paymentMethod,
        paymentStatus: payload.paymentStatus,
        status: "PLACED",
        deliveryDate: todayDate,
        liters: cartItemsList.reduce((sum, item) => sum + Number(item.quantity || 0), 0),
      })
      .returning();

    // Create order items and reduce stock
    for (const item of cartItemsList) {
      await db.insert(orderItems).values({
        orderId: newOrder.id,
        productId: item.productId,
        quantity: Number(item.quantity || 0),
        price: item.price || "0",
        totalPrice: (Number(item.price || 0) * Number(item.quantity || 0)).toString(),
      });

      // Get current product stock and reduce it
      const product = item.productId
        ? await db.query.products.findFirst({
            where: eq(products.id, item.productId),
          })
        : null;
      
      if (product) {
        const newStock = Math.max(0, Number(product.stock || 0) - Number(item.quantity || 0));
        await db
          .update(products)
          .set({ stock: newStock })
          .where(eq(products.id, item.productId!));
      }
    }

    // Clear every cart row for the user before responding so every follow-up cart read is empty.
    await Promise.all(userCarts.map((userCart) => db.delete(cartItems).where(eq(cartItems.cartId, userCart.id))));

    res.set("Cache-Control", "no-store");
    res.status(201).json({ ...newOrder, cartCleared: true, clearedCartIds: userCarts.map((cart) => cart.id) });
  } catch (error: any) {
    console.error("Error creating order:", error);
    if (error.name === "ZodError") {
      return res.status(400).json({ message: "Invalid order data" });
    }
    res.status(500).json({ message: "Failed to create order" });
  }
});

// GET orders
router.get("/", async (req: any, res) => {
  try {
    const userId = req.session?.userId || req.user?.claims?.sub;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const userOrders = await db
      .select()
      .from(orders)
      .where(eq(orders.userId, userId));

    // Fetch items for each order
    const ordersWithItems = await Promise.all(
      userOrders.map(async (order) => {
        const items = await db
          .select()
          .from(orderItems)
          .where(eq(orderItems.orderId, order.id));
        
        const itemsWithProducts = await Promise.all(
          items.map(async (item) => {
            const product = item.productId
              ? await db.query.products.findFirst({
                  where: eq(products.id, item.productId),
                })
              : null;
            return { ...item, product };
          })
        );
        
        return { ...order, items: itemsWithProducts };
      })
    );

    res.set("Cache-Control", "no-store");
    res.json(ordersWithItems);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ message: "Failed to fetch orders" });
  }
});

// GET single order
router.get("/:id", async (req: any, res) => {
  try {
    const userId = req.session?.userId || req.user?.claims?.sub;
    const orderId = parseInt(req.params.id);

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const [order] = await db
      .select()
      .from(orders)
      .where(and(eq(orders.id, orderId), eq(orders.userId, userId)));

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    const items = await db
      .select()
      .from(orderItems)
      .where(eq(orderItems.orderId, orderId));

    const itemsWithProducts = await Promise.all(
      items.map(async (item) => {
        const product = item.productId
          ? await db.query.products.findFirst({
              where: eq(products.id, item.productId),
            })
          : null;
        return { ...item, product };
      })
    );

    res.set("Cache-Control", "no-store");
    res.json({ ...order, items: itemsWithProducts });
  } catch (error) {
    console.error("Error fetching order:", error);
    res.status(500).json({ message: "Failed to fetch order" });
  }
});

export default router;
