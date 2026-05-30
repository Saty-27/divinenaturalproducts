var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// shared/schema.ts
var schema_exports = {};
__export(schema_exports, {
  aboutUsSettings: () => aboutUsSettings,
  addresses: () => addresses,
  addressesRelations: () => addressesRelations,
  adminCustomerNotes: () => adminCustomerNotes,
  admins: () => admins,
  adminsRelations: () => adminsRelations,
  banners: () => banners,
  bills: () => bills,
  billsRelations: () => billsRelations,
  blogs: () => blogs,
  cart: () => cart,
  cartItems: () => cartItems,
  cartItemsRelations: () => cartItemsRelations,
  cartRelations: () => cartRelations,
  categories: () => categories,
  chatMessages: () => chatMessages,
  chatThreads: () => chatThreads,
  contactSettings: () => contactSettings,
  contactSubmissions: () => contactSubmissions,
  coupons: () => coupons,
  customSubscriptionPlans: () => customSubscriptionPlans,
  customSubscriptionPlansRelations: () => customSubscriptionPlansRelations,
  customerActivityLogs: () => customerActivityLogs,
  delegationLogs: () => delegationLogs,
  deliveryAssignments: () => deliveryAssignments,
  deliveryPartners: () => deliveryPartners,
  deliveryPartnersRelations: () => deliveryPartnersRelations,
  drivers: () => drivers,
  driversRelations: () => driversRelations,
  ethosCards: () => ethosCards,
  faqs: () => faqs,
  footerSettings: () => footerSettings,
  homepageSections: () => homepageSections,
  imageGallery: () => imageGallery,
  insertAddressSchema: () => insertAddressSchema,
  insertAdminCustomerNoteSchema: () => insertAdminCustomerNoteSchema,
  insertBannerSchema: () => insertBannerSchema,
  insertBlogSchema: () => insertBlogSchema,
  insertChatMessageSchema: () => insertChatMessageSchema,
  insertChatThreadSchema: () => insertChatThreadSchema,
  insertContactSubmissionSchema: () => insertContactSubmissionSchema,
  insertCustomSubscriptionPlanSchema: () => insertCustomSubscriptionPlanSchema,
  insertCustomerActivityLogSchema: () => insertCustomerActivityLogSchema,
  insertHomepageSectionSchema: () => insertHomepageSectionSchema,
  insertImageGallerySchema: () => insertImageGallerySchema,
  insertMilkSubscriptionSchema: () => insertMilkSubscriptionSchema,
  insertOrderSchema: () => insertOrderSchema,
  insertPasswordResetRequestSchema: () => insertPasswordResetRequestSchema,
  insertPasswordResetTokenSchema: () => insertPasswordResetTokenSchema,
  insertProductSchema: () => insertProductSchema,
  insertSiteSettingsSchema: () => insertSiteSettingsSchema,
  insertSubscriptionSchema: () => insertSubscriptionSchema,
  insertSupportTicketSchema: () => insertSupportTicketSchema,
  insertTicketMessageSchema: () => insertTicketMessageSchema,
  insertUserSubscriptionSchema: () => insertUserSubscriptionSchema,
  insertVideoBlogSchema: () => insertVideoBlogSchema,
  insertVideoGallerySchema: () => insertVideoGallerySchema,
  milkSubscriptions: () => milkSubscriptions,
  newsletterSettings: () => newsletterSettings,
  notifications: () => notifications,
  offers: () => offers,
  orderItems: () => orderItems,
  orderItemsRelations: () => orderItemsRelations,
  orders: () => orders,
  ordersRelations: () => ordersRelations,
  passwordResetRequests: () => passwordResetRequests,
  passwordResetTokens: () => passwordResetTokens,
  privacyPolicySettings: () => privacyPolicySettings,
  productDeals: () => productDeals,
  productVendors: () => productVendors,
  productVendorsRelations: () => productVendorsRelations,
  products: () => products,
  sessions: () => sessions,
  siteSettings: () => siteSettings,
  statsCounters: () => statsCounters,
  subscriptionDeliveries: () => subscriptionDeliveries,
  subscriptionDeliveriesRelations: () => subscriptionDeliveriesRelations,
  subscriptionsRelations: () => subscriptionsRelations,
  supportTickets: () => supportTickets,
  termsOfServiceSettings: () => termsOfServiceSettings,
  ticketMessages: () => ticketMessages,
  userSubscriptions: () => userSubscriptions,
  userSubscriptionsRelations: () => userSubscriptionsRelations,
  users: () => users,
  vendors: () => vendors,
  vendorsRelations: () => vendorsRelations,
  videoBlogs: () => videoBlogs,
  videoGallery: () => videoGallery
});
import {
  pgTable,
  text,
  varchar,
  timestamp,
  jsonb,
  index,
  serial,
  integer,
  decimal,
  boolean,
  date
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { relations } from "drizzle-orm";
var sessions, users, categories, products, vendors, deliveryPartners, deliveryAssignments, drivers, admins, delegationLogs, orders, orderItems, milkSubscriptions, subscriptionDeliveries, cart, cartItems, addresses, supportTickets, ticketMessages, adminCustomerNotes, customerActivityLogs, productVendors, notifications, bills, subscriptionsRelations, subscriptionDeliveriesRelations, ordersRelations, orderItemsRelations, vendorsRelations, deliveryPartnersRelations, driversRelations, adminsRelations, cartRelations, cartItemsRelations, addressesRelations, productVendorsRelations, billsRelations, banners, homepageSections, ethosCards, productDeals, statsCounters, faqs, newsletterSettings, footerSettings, aboutUsSettings, contactSettings, termsOfServiceSettings, privacyPolicySettings, siteSettings, contactSubmissions, insertAddressSchema, insertOrderSchema, insertSubscriptionSchema, insertMilkSubscriptionSchema, insertSupportTicketSchema, insertTicketMessageSchema, insertAdminCustomerNoteSchema, insertCustomerActivityLogSchema, insertProductSchema, insertBannerSchema, insertHomepageSectionSchema, insertContactSubmissionSchema, insertSiteSettingsSchema, offers, coupons, blogs, videoBlogs, imageGallery, videoGallery, insertBlogSchema, insertVideoBlogSchema, insertImageGallerySchema, insertVideoGallerySchema, passwordResetRequests, passwordResetTokens, chatThreads, chatMessages, insertPasswordResetRequestSchema, insertPasswordResetTokenSchema, insertChatThreadSchema, insertChatMessageSchema, customSubscriptionPlans, userSubscriptions, customSubscriptionPlansRelations, userSubscriptionsRelations, insertCustomSubscriptionPlanSchema, insertUserSubscriptionSchema;
var init_schema = __esm({
  "shared/schema.ts"() {
    "use strict";
    sessions = pgTable(
      "sessions",
      {
        sid: varchar("sid").primaryKey(),
        sess: jsonb("sess").notNull(),
        expire: timestamp("expire").notNull()
      },
      (table) => [index("IDX_session_expire").on(table.expire)]
    );
    users = pgTable("users", {
      id: varchar("id").primaryKey().notNull(),
      email: varchar("email").unique(),
      passwordHash: varchar("password_hash"),
      // For simple email/password auth
      firstName: varchar("first_name"),
      lastName: varchar("last_name"),
      profileImageUrl: varchar("profile_image_url"),
      phone: varchar("phone"),
      address: text("address"),
      gender: varchar("gender"),
      // male, female, other
      dob: date("dob"),
      // date of birth for STAGE 1
      role: varchar("role").notNull().default("customer"),
      // customer, admin, vendor, delivery, marketing_staff
      isActive: boolean("is_active").default(true),
      walletBalance: decimal("wallet_balance", { precision: 10, scale: 2 }).default("0"),
      lastLogin: timestamp("last_login"),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    categories = pgTable("categories", {
      id: serial("id").primaryKey(),
      name: varchar("name").notNull().unique(),
      description: text("description"),
      icon: varchar("icon"),
      // emoji or icon name - kept for compatibility, can store image URLs too
      isActive: boolean("is_active").default(true),
      type: varchar("type").notNull().default("physical"),
      // physical, service, digital
      createdAt: timestamp("created_at").defaultNow()
    });
    products = pgTable("products", {
      id: serial("id").primaryKey(),
      name: varchar("name").notNull(),
      sku: varchar("sku").unique(),
      description: text("description"),
      category: varchar("category").notNull(),
      // References categories.name
      type: varchar("type"),
      // physical, service, digital (can sync to category type or category name)
      price: decimal("price", { precision: 10, scale: 2 }),
      unit: varchar("unit"),
      // L, kg, g, piece, session, etc
      stock: integer("stock").default(0),
      expiryDate: date("expiry_date"),
      imageUrl: varchar("image_url"),
      isActive: boolean("is_active").default(true),
      isNew: boolean("is_new").default(false),
      // Flag for "Newly Launched" section
      isFeatured: boolean("is_featured").default(false),
      // Flag for featured products
      launchedAt: timestamp("launched_at"),
      // When product was launched (for sorting new products)
      redirectUrl: varchar("redirect_url"),
      // New fields for services / digital products:
      duration: varchar("duration"),
      details: text("details"),
      downloadUrl: varchar("download_url"),
      accessDetails: text("access_details"),
      createdAt: timestamp("created_at").defaultNow()
    });
    vendors = pgTable("vendors", {
      id: serial("id").primaryKey(),
      userId: varchar("user_id").references(() => users.id),
      businessName: varchar("business_name").notNull(),
      licenseNumber: varchar("license_number"),
      locationName: varchar("location_name").notNull(),
      // Borivali, Santa Cruz, Andheri etc.
      vendorType: varchar("vendor_type").notNull().default("SUB_VENDOR"),
      // HEAD_VENDOR, VENDOR, SUB_VENDOR
      headVendorId: integer("head_vendor_id"),
      // self-reference, will add constraint later
      parentVendorId: integer("parent_vendor_id"),
      // self-reference, will add constraint later
      dailyCapacity: integer("daily_capacity"),
      // in liters
      currentQuota: integer("current_quota").default(0),
      requirementToday: integer("requirement_today").default(0),
      requirementTomorrowForecast: integer("requirement_tomorrow_forecast").default(0),
      circulatedLiters: integer("circulated_liters").default(0),
      revenueToday: decimal("revenue_today", { precision: 10, scale: 2 }).default("0"),
      revenueTotal: decimal("revenue_total", { precision: 10, scale: 2 }).default("0"),
      paymentsPending: decimal("payments_pending", { precision: 10, scale: 2 }).default("0"),
      weeklyEarnings: decimal("weekly_earnings", { precision: 10, scale: 2 }).default("0"),
      monthlyEarnings: decimal("monthly_earnings", { precision: 10, scale: 2 }).default("0"),
      zone: varchar("zone"),
      isVerified: boolean("is_verified").default(false),
      createdAt: timestamp("created_at").defaultNow()
    });
    deliveryPartners = pgTable("delivery_partners", {
      id: serial("id").primaryKey(),
      userId: varchar("user_id").references(() => users.id),
      fullName: varchar("full_name").notNull(),
      email: varchar("email"),
      phone: varchar("phone").notNull().unique(),
      username: varchar("username").unique(),
      passwordHash: varchar("password_hash"),
      initialPassword: varchar("initial_password"),
      // Plain password for display only (admin use)
      aadhaarNumber: varchar("aadhaar_number"),
      panNumber: varchar("pan_number"),
      dob: date("dob"),
      vehicleType: varchar("vehicle_type"),
      licenseNumber: varchar("license_number"),
      address: text("address"),
      zone: varchar("zone"),
      status: varchar("status").default("active"),
      // active, blocked, suspended, pending_verification
      isVerified: boolean("is_verified").default(false),
      isAvailable: boolean("is_available").default(true),
      createdAt: timestamp("created_at").defaultNow()
    });
    deliveryAssignments = pgTable("delivery_assignments", {
      id: serial("id").primaryKey(),
      orderId: integer("order_id").references(() => orders.id),
      subscriptionId: integer("subscription_id").references(() => milkSubscriptions.id),
      partnerId: integer("partner_id").references(() => deliveryPartners.id),
      assignmentDate: date("assignment_date"),
      status: varchar("status").default("pending"),
      // pending, out_for_delivery, delivered, failed
      codAmount: decimal("cod_amount", { precision: 10, scale: 2 }).default("0"),
      collectionStatus: varchar("collection_status").default("pending"),
      // pending, received, not_received
      collectedCash: decimal("collected_cash", { precision: 10, scale: 2 }).default("0"),
      failedReason: varchar("failed_reason"),
      failedPhoto: text("failed_photo"),
      timeStarted: timestamp("time_started"),
      timeDelivered: timestamp("time_delivered"),
      customerInstructions: text("customer_instructions"),
      createdAt: timestamp("created_at").defaultNow()
    });
    drivers = pgTable("drivers", {
      id: serial("id").primaryKey(),
      name: varchar("name").notNull(),
      age: integer("age").notNull(),
      phone: varchar("phone").notNull(),
      aadharUrl: varchar("aadhar_url"),
      // optional KYC document
      panUrl: varchar("pan_url"),
      // optional KYC document
      vendorId: integer("vendor_id").references(() => vendors.id).notNull(),
      createdAt: timestamp("created_at").defaultNow()
    });
    admins = pgTable("admins", {
      id: serial("id").primaryKey(),
      userId: varchar("user_id").references(() => users.id).notNull(),
      name: varchar("name").notNull(),
      phone: varchar("phone").notNull(),
      role: varchar("role").notNull(),
      // SUPER, HEAD, SUB
      locationScope: jsonb("location_scope"),
      // array of location strings
      permissions: jsonb("permissions").notNull(),
      // permission flags object
      createdByUserId: varchar("created_by_user_id").references(() => users.id),
      createdAt: timestamp("created_at").defaultNow()
    });
    delegationLogs = pgTable("delegation_logs", {
      id: serial("id").primaryKey(),
      fromVendorId: integer("from_vendor_id").references(() => vendors.id).notNull(),
      toVendorId: integer("to_vendor_id").references(() => vendors.id).notNull(),
      orderIds: jsonb("order_ids").notNull(),
      // array of order IDs
      delegatedByAdminId: integer("delegated_by_admin_id").references(() => admins.id).notNull(),
      reason: text("reason").notNull(),
      timestamp: timestamp("timestamp").defaultNow()
    });
    orders = pgTable("orders", {
      id: serial("id").primaryKey(),
      userId: varchar("user_id").references(() => users.id),
      vendorId: integer("vendor_id").references(() => vendors.id),
      deliveryPartnerId: integer("delivery_partner_id").references(() => deliveryPartners.id),
      totalAmount: decimal("total_amount", { precision: 10, scale: 2 }).notNull(),
      liters: integer("liters").default(0),
      // total milk liters in order
      status: varchar("status").notNull().default("PLACED"),
      // PLACED, PREPARING, OUT, DELIVERED, FAILED
      deliverySlot: varchar("delivery_slot"),
      // morning, evening etc.
      deliveryDate: date("delivery_date").notNull(),
      deliveryTime: varchar("delivery_time"),
      deliveryAddress: text("delivery_address").notNull(),
      paymentStatus: varchar("payment_status").default("pending"),
      // pending, paid, failed
      paymentMethod: varchar("payment_method").default("cash_on_delivery"),
      // cash_on_delivery, online, wallet, upi
      paymentDate: timestamp("payment_date"),
      // when payment was received
      delegationLogId: integer("delegation_log_id").references(() => delegationLogs.id),
      notes: text("notes"),
      createdAt: timestamp("created_at").defaultNow()
    });
    orderItems = pgTable("order_items", {
      id: serial("id").primaryKey(),
      orderId: integer("order_id").references(() => orders.id),
      productId: integer("product_id").references(() => products.id),
      quantity: integer("quantity").notNull(),
      price: decimal("price", { precision: 10, scale: 2 }).notNull(),
      totalPrice: decimal("total_price", { precision: 10, scale: 2 }).notNull()
    });
    milkSubscriptions = pgTable("milk_subscriptions", {
      id: serial("id").primaryKey(),
      userId: varchar("user_id").references(() => users.id),
      productId: integer("product_id").references(() => products.id),
      quantity: integer("quantity").notNull(),
      frequency: varchar("frequency").notNull(),
      // daily, weekly, alternate
      deliveryTime: varchar("delivery_time"),
      startDate: date("start_date"),
      endDate: date("end_date"),
      pricePerL: decimal("price_per_l", { precision: 10, scale: 2 }),
      status: varchar("status").notNull().default("ACTIVE"),
      // ACTIVE, PAUSED, CANCELLED
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    subscriptionDeliveries = pgTable("subscription_deliveries", {
      id: serial("id").primaryKey(),
      subscriptionId: integer("subscription_id").references(() => milkSubscriptions.id),
      userId: varchar("user_id").references(() => users.id),
      deliveryDate: date("delivery_date"),
      quantity: integer("quantity"),
      status: varchar("status").default("pending"),
      // pending, delivered, missed, cancelled
      confirmedByUser: boolean("confirmed_by_user").default(false),
      confirmedAt: timestamp("confirmed_at"),
      createdAt: timestamp("created_at").defaultNow()
    });
    cart = pgTable("cart", {
      id: serial("id").primaryKey(),
      userId: varchar("user_id").references(() => users.id).unique(),
      createdAt: timestamp("created_at").defaultNow()
    });
    cartItems = pgTable("cart_items", {
      id: serial("id").primaryKey(),
      cartId: integer("cart_id").references(() => cart.id),
      productId: integer("product_id").references(() => products.id),
      quantity: integer("quantity"),
      price: decimal("price", { precision: 10, scale: 2 }),
      addedAt: timestamp("added_at").defaultNow()
    });
    addresses = pgTable("addresses", {
      id: serial("id").primaryKey(),
      userId: varchar("user_id").references(() => users.id),
      type: varchar("type").notNull(),
      // home, work, other
      address: text("address").notNull(),
      landmark: varchar("landmark"),
      city: varchar("city"),
      state: varchar("state"),
      pincode: varchar("pincode"),
      phone: varchar("phone"),
      isDefault: boolean("is_default").default(false),
      createdAt: timestamp("created_at").defaultNow()
    });
    supportTickets = pgTable("support_tickets", {
      id: serial("id").primaryKey(),
      userId: varchar("user_id").references(() => users.id),
      subject: varchar("subject").notNull(),
      description: text("description").notNull(),
      status: varchar("status").default("open"),
      // open, in_progress, resolved, closed
      priority: varchar("priority").default("normal"),
      // low, normal, high
      category: varchar("category"),
      // billing, delivery, product, general
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    ticketMessages = pgTable("ticket_messages", {
      id: serial("id").primaryKey(),
      ticketId: integer("ticket_id").references(() => supportTickets.id),
      userId: varchar("user_id").references(() => users.id),
      message: text("message").notNull(),
      createdAt: timestamp("created_at").defaultNow()
    });
    adminCustomerNotes = pgTable("admin_customer_notes", {
      id: serial("id").primaryKey(),
      customerId: varchar("customer_id").references(() => users.id).notNull(),
      noteText: text("note_text").notNull(),
      addedByAdminId: varchar("added_by_admin_id").references(() => users.id),
      addedByAdminName: varchar("added_by_admin_name"),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    customerActivityLogs = pgTable("customer_activity_logs", {
      id: serial("id").primaryKey(),
      customerId: varchar("customer_id").references(() => users.id).notNull(),
      type: varchar("type").notNull(),
      title: varchar("title").notNull(),
      description: text("description"),
      metadata: jsonb("metadata"),
      actorId: varchar("actor_id").references(() => users.id),
      actorName: varchar("actor_name"),
      createdAt: timestamp("created_at").defaultNow()
    });
    productVendors = pgTable("product_vendors", {
      id: serial("id").primaryKey(),
      productId: integer("product_id").references(() => products.id),
      vendorId: integer("vendor_id").references(() => vendors.id),
      createdAt: timestamp("created_at").defaultNow()
    });
    notifications = pgTable("notifications", {
      id: serial("id").primaryKey(),
      userId: varchar("user_id").references(() => users.id),
      type: varchar("type").notNull(),
      // order, subscription, billing, etc
      title: varchar("title").notNull(),
      message: text("message").notNull(),
      isRead: boolean("is_read").default(false),
      createdAt: timestamp("created_at").defaultNow()
    });
    bills = pgTable("bills", {
      id: serial("id").primaryKey(),
      userId: varchar("user_id").references(() => users.id).notNull(),
      month: integer("month").notNull(),
      // 1-12
      year: integer("year").notNull(),
      // 2025
      items: jsonb("items").notNull(),
      // Array of billing items
      subscriptionTotal: decimal("subscription_total", { precision: 10, scale: 2 }).default("0"),
      ordersTotal: decimal("orders_total", { precision: 10, scale: 2 }).default("0"),
      previousPending: decimal("previous_pending", { precision: 10, scale: 2 }).default("0"),
      penalty: decimal("penalty", { precision: 10, scale: 2 }).default("0"),
      discount: decimal("discount", { precision: 10, scale: 2 }).default("0"),
      finalAmount: decimal("final_amount", { precision: 10, scale: 2 }).notNull(),
      dueDate: date("due_date").notNull(),
      status: varchar("status").notNull().default("unpaid"),
      // unpaid, paid, overdue
      paymentDate: timestamp("payment_date"),
      paymentMethod: varchar("payment_method"),
      notes: text("notes"),
      // Admin uploads a bill/PDF for the user
      billPdfUrl: text("bill_pdf_url"),
      // User uploads payment screenshot
      paymentScreenshotUrl: text("payment_screenshot_url"),
      // pending_review | approved | rejected
      paymentScreenshotStatus: varchar("payment_screenshot_status"),
      paymentScreenshotUploadedAt: timestamp("payment_screenshot_uploaded_at"),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    subscriptionsRelations = relations(milkSubscriptions, ({ many, one }) => ({
      deliveries: many(subscriptionDeliveries),
      user: one(users, {
        fields: [milkSubscriptions.userId],
        references: [users.id]
      }),
      product: one(products, {
        fields: [milkSubscriptions.productId],
        references: [products.id]
      })
    }));
    subscriptionDeliveriesRelations = relations(subscriptionDeliveries, ({ one }) => ({
      subscription: one(milkSubscriptions, {
        fields: [subscriptionDeliveries.subscriptionId],
        references: [milkSubscriptions.id]
      }),
      user: one(users, {
        fields: [subscriptionDeliveries.userId],
        references: [users.id]
      })
    }));
    ordersRelations = relations(orders, ({ many, one }) => ({
      items: many(orderItems),
      user: one(users, {
        fields: [orders.userId],
        references: [users.id]
      })
    }));
    orderItemsRelations = relations(orderItems, ({ one }) => ({
      order: one(orders, {
        fields: [orderItems.orderId],
        references: [orders.id]
      }),
      product: one(products, {
        fields: [orderItems.productId],
        references: [products.id]
      })
    }));
    vendorsRelations = relations(vendors, ({ many, one }) => ({
      orders: many(orders),
      productVendors: many(productVendors),
      subscriptions: many(milkSubscriptions)
    }));
    deliveryPartnersRelations = relations(deliveryPartners, ({ one }) => ({
      user: one(users, {
        fields: [deliveryPartners.userId],
        references: [users.id]
      })
    }));
    driversRelations = relations(drivers, ({ one }) => ({
      vendor: one(vendors, {
        fields: [drivers.vendorId],
        references: [vendors.id]
      })
    }));
    adminsRelations = relations(admins, ({ one }) => ({
      user: one(users, {
        fields: [admins.userId],
        references: [users.id]
      })
    }));
    cartRelations = relations(cart, ({ many }) => ({
      items: many(cartItems)
    }));
    cartItemsRelations = relations(cartItems, ({ one }) => ({
      cart: one(cart, {
        fields: [cartItems.cartId],
        references: [cart.id]
      }),
      product: one(products, {
        fields: [cartItems.productId],
        references: [products.id]
      })
    }));
    addressesRelations = relations(addresses, ({ one }) => ({
      user: one(users, {
        fields: [addresses.userId],
        references: [users.id]
      })
    }));
    productVendorsRelations = relations(productVendors, ({ one }) => ({
      product: one(products, {
        fields: [productVendors.productId],
        references: [products.id]
      }),
      vendor: one(vendors, {
        fields: [productVendors.vendorId],
        references: [vendors.id]
      })
    }));
    billsRelations = relations(bills, ({ one }) => ({
      user: one(users, {
        fields: [bills.userId],
        references: [users.id]
      })
    }));
    banners = pgTable("banners", {
      id: serial("id").primaryKey(),
      title: varchar("title"),
      subtitle: text("subtitle"),
      imageUrl: varchar("image_url"),
      // Desktop image (default/fallback)
      imageUrlTablet: varchar("image_url_tablet"),
      // Tablet image (768px-1024px)
      imageUrlMobile: varchar("image_url_mobile"),
      // Mobile image (<768px)
      ctaText: varchar("cta_text"),
      // "Shop Now", "Order Today", etc.
      ctaLink: varchar("cta_link"),
      // Link to navigate on CTA click
      badgeText: varchar("badge_text"),
      // "25% OFF", "New", "Best Seller"
      displayOrder: integer("display_order").default(0),
      isActive: boolean("is_active").default(true),
      showOverlay: boolean("show_overlay").default(false),
      startDate: timestamp("start_date"),
      endDate: timestamp("end_date"),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    homepageSections = pgTable("homepage_sections", {
      id: serial("id").primaryKey(),
      sectionType: varchar("section_type").notNull(),
      // hero_stats, ethos, deals, new_launches, stats, faq, newsletter
      title: varchar("title"),
      subtitle: text("subtitle"),
      content: jsonb("content"),
      // Flexible JSON for section-specific data
      displayOrder: integer("display_order").default(0),
      isActive: boolean("is_active").default(true),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    ethosCards = pgTable("ethos_cards", {
      id: serial("id").primaryKey(),
      title: varchar("title").notNull(),
      description: text("description").notNull(),
      icon: varchar("icon").notNull(),
      // Icon name like "Leaf", "Heart", "Users", "Recycle"
      displayOrder: integer("display_order").default(0),
      isActive: boolean("is_active").default(true),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    productDeals = pgTable("product_deals", {
      id: serial("id").primaryKey(),
      productId: integer("product_id").references(() => products.id).notNull(),
      dealType: varchar("deal_type").notNull().default("PERCENT"),
      // PERCENT or FIXED
      dealValue: decimal("deal_value", { precision: 10, scale: 2 }).notNull(),
      // e.g., 25 for 25% or 50 for ₹50 off
      badgeText: varchar("badge_text"),
      // "25% OFF", "New", etc.
      priority: integer("priority").default(0),
      startsAt: timestamp("starts_at"),
      endsAt: timestamp("ends_at"),
      isActive: boolean("is_active").default(true),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    statsCounters = pgTable("stats_counters", {
      id: serial("id").primaryKey(),
      label: varchar("label").notNull(),
      // "Happy Customers", "Products", etc.
      value: integer("value").notNull(),
      // The number
      suffix: varchar("suffix"),
      // "+", "K", etc.
      icon: varchar("icon"),
      // Icon name
      displayOrder: integer("display_order").default(0),
      isActive: boolean("is_active").default(true),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    faqs = pgTable("faqs", {
      id: serial("id").primaryKey(),
      category: varchar("category").notNull().default("General"),
      question: varchar("question").notNull(),
      answer: text("answer").notNull(),
      order: integer("order").default(0),
      displayOrder: integer("display_order").default(0),
      isActive: boolean("is_active").default(true),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    newsletterSettings = pgTable("newsletter_settings", {
      id: serial("id").primaryKey(),
      title: varchar("title").notNull().default("Join Our Newsletter"),
      subtitle: text("subtitle"),
      ctaText: varchar("cta_text").default("Subscribe"),
      placeholderText: varchar("placeholder_text").default("Enter your email address"),
      isActive: boolean("is_active").default(true),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    footerSettings = pgTable("footer_settings", {
      id: serial("id").primaryKey(),
      companyName: varchar("company_name").default("Divine Naturals"),
      tagline: varchar("tagline").default("Pure. Fresh. Daily."),
      description: text("description"),
      phone: varchar("phone"),
      email: varchar("email"),
      address: text("address"),
      socialLinks: jsonb("social_links"),
      // { facebook: "url", instagram: "url", twitter: "url" }
      footerLinks: jsonb("footer_links"),
      // { shop: [...], account: [...], company: [...] }
      copyrightText: varchar("copyright_text"),
      isActive: boolean("is_active").default(true),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    aboutUsSettings = pgTable("about_us_settings", {
      id: serial("id").primaryKey(),
      // Section 1: Hero
      heroTitle: varchar("hero_title").default("Our Story"),
      heroSubtitle: text("hero_subtitle"),
      heroImageUrl: varchar("hero_image_url"),
      heroCtaText: varchar("hero_cta_text"),
      heroCtaLink: varchar("hero_cta_link"),
      // Section 2: Story
      storyHeading: varchar("story_heading"),
      storyDescription: text("story_description"),
      // Rich text
      storyImageUrl: varchar("story_image_url"),
      // Section 3: Values
      valuesTitle: varchar("values_title").default("Our Core Values"),
      values: jsonb("values"),
      // Array of { icon, title, description }
      // Section 4: Process
      processTitle: varchar("process_title").default("How It Works"),
      processSteps: jsonb("process_steps"),
      // Array of { icon, title, description }
      // Section 5: CTA
      ctaHeading: varchar("cta_heading"),
      ctaSubheading: text("cta_subheading"),
      ctaButtonText: varchar("cta_button_text"),
      ctaButtonLink: varchar("cta_button_link"),
      isActive: boolean("is_active").default(true),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    contactSettings = pgTable("contact_settings", {
      id: serial("id").primaryKey(),
      // Section 1: Hero
      heroTitle: varchar("hero_title").default("Contact Us"),
      heroSubtitle: text("hero_subtitle"),
      heroImageUrl: varchar("hero_image_url"),
      // Section 2: Info
      phone: varchar("phone"),
      email: varchar("email"),
      address: text("address"),
      businessHours: text("business_hours"),
      socialLinks: jsonb("social_links"),
      mapEmbedUrl: text("map_embed_url"),
      // Use text for long iframe links
      isActive: boolean("is_active").default(true),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    termsOfServiceSettings = pgTable("terms_of_service_settings", {
      id: serial("id").primaryKey(),
      title: varchar("title").default("Terms of Service"),
      lastUpdated: timestamp("last_updated").defaultNow(),
      content: text("content"),
      sections: jsonb("sections"),
      // Array of { title, content }
      isActive: boolean("is_active").default(true),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    privacyPolicySettings = pgTable("privacy_policy_settings", {
      id: serial("id").primaryKey(),
      title: varchar("title").default("Privacy Policy"),
      lastUpdated: timestamp("last_updated").defaultNow(),
      content: text("content"),
      sections: jsonb("sections"),
      // Array of { title, content }
      isActive: boolean("is_active").default(true),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    siteSettings = pgTable("site_settings", {
      id: serial("id").primaryKey(),
      brandName: varchar("brand_name").notNull().default("Divine Naturals"),
      logoUrl: varchar("logo_url"),
      faviconUrl: varchar("favicon_url"),
      primaryColor: varchar("primary_color").default("#16A34A"),
      secondaryColor: varchar("secondary_color").default("#FFF9F2"),
      upiId: varchar("upi_id"),
      bankName: varchar("bank_name"),
      accountNumber: varchar("account_number"),
      ifscCode: varchar("ifsc_code"),
      qrCodeUrl: text("qr_code_url"),
      isOnlinePaymentEnabled: boolean("is_online_payment_enabled").default(false),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    contactSubmissions = pgTable("contact_submissions", {
      id: serial("id").primaryKey(),
      name: varchar("name").notNull(),
      email: varchar("email").notNull(),
      phone: varchar("phone"),
      message: text("message").notNull(),
      status: varchar("status").default("new"),
      // new, read, replied
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    insertAddressSchema = createInsertSchema(addresses);
    insertOrderSchema = createInsertSchema(orders);
    insertSubscriptionSchema = createInsertSchema(milkSubscriptions);
    insertMilkSubscriptionSchema = createInsertSchema(milkSubscriptions);
    insertSupportTicketSchema = createInsertSchema(supportTickets);
    insertTicketMessageSchema = createInsertSchema(ticketMessages);
    insertAdminCustomerNoteSchema = createInsertSchema(adminCustomerNotes);
    insertCustomerActivityLogSchema = createInsertSchema(customerActivityLogs);
    insertProductSchema = createInsertSchema(products);
    insertBannerSchema = createInsertSchema(banners);
    insertHomepageSectionSchema = createInsertSchema(homepageSections);
    insertContactSubmissionSchema = createInsertSchema(contactSubmissions);
    insertSiteSettingsSchema = createInsertSchema(siteSettings);
    offers = pgTable("offers", {
      id: serial("id").primaryKey(),
      title: varchar("title").notNull(),
      description: text("description"),
      code: varchar("code").unique(),
      discount: varchar("discount"),
      minOrder: integer("min_order"),
      type: varchar("type"),
      // 'percentage', 'amount'
      category: varchar("category"),
      isActive: boolean("is_active").default(true),
      validFrom: date("valid_from").notNull(),
      validTo: date("valid_to").notNull(),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    coupons = pgTable("coupons", {
      id: serial("id").primaryKey(),
      code: varchar("code").unique().notNull(),
      discountType: varchar("discount_type").notNull(),
      // 'percentage', 'amount'
      discountValue: decimal("discount_value", { precision: 10, scale: 2 }).notNull(),
      maxDiscount: decimal("max_discount", { precision: 10, scale: 2 }),
      minOrderValue: decimal("min_order_value", { precision: 10, scale: 2 }),
      usageLimit: integer("usage_limit"),
      usageCount: integer("usage_count").default(0),
      isActive: boolean("is_active").default(true),
      validFrom: date("valid_from").notNull(),
      validTo: date("valid_to").notNull(),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    blogs = pgTable("blogs", {
      id: serial("id").primaryKey(),
      title: varchar("title").notNull(),
      slug: varchar("slug").unique().notNull(),
      shortDescription: text("short_description").notNull(),
      content: text("content").notNull(),
      featuredImage: varchar("featured_image"),
      keywords: text("keywords"),
      metaTitle: varchar("meta_title"),
      metaDescription: text("meta_description"),
      status: varchar("status").notNull().default("Draft"),
      // Draft, Published, Unpublished
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    videoBlogs = pgTable("video_blogs", {
      id: serial("id").primaryKey(),
      title: varchar("title").notNull(),
      slug: varchar("slug").unique().notNull(),
      shortDescription: text("short_description").notNull(),
      content: text("content"),
      videoType: varchar("video_type").notNull(),
      // YouTube, Vimeo, Local Upload, External URL
      videoUrl: varchar("video_url"),
      uploadedVideo: varchar("uploaded_video"),
      thumbnailImage: varchar("thumbnail_image"),
      keywords: text("keywords"),
      metaTitle: varchar("meta_title"),
      metaDescription: text("meta_description"),
      status: varchar("status").notNull().default("Draft"),
      // Draft, Published, Unpublished
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    imageGallery = pgTable("image_gallery", {
      id: serial("id").primaryKey(),
      title: varchar("title").notNull(),
      image: varchar("image").notNull(),
      altText: varchar("alt_text"),
      category: varchar("category").notNull().default("General"),
      sortOrder: integer("sort_order").default(0),
      status: varchar("status").notNull().default("Published"),
      // Draft, Published, Unpublished
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    videoGallery = pgTable("video_gallery", {
      id: serial("id").primaryKey(),
      title: varchar("title").notNull(),
      videoType: varchar("video_type").notNull(),
      // YouTube, Vimeo, Local Upload, External URL
      videoUrl: varchar("video_url"),
      uploadedVideo: varchar("uploaded_video"),
      thumbnailImage: varchar("thumbnail_image"),
      category: varchar("category").notNull().default("General"),
      sortOrder: integer("sort_order").default(0),
      status: varchar("status").notNull().default("Published"),
      // Draft, Published, Unpublished
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    insertBlogSchema = createInsertSchema(blogs);
    insertVideoBlogSchema = createInsertSchema(videoBlogs);
    insertImageGallerySchema = createInsertSchema(imageGallery);
    insertVideoGallerySchema = createInsertSchema(videoGallery);
    passwordResetRequests = pgTable("password_reset_requests", {
      id: serial("id").primaryKey(),
      userId: varchar("user_id").notNull(),
      email: varchar("email").notNull(),
      status: varchar("status").notNull().default("pending"),
      // pending, resolved
      createdAt: timestamp("created_at").defaultNow().notNull(),
      resolvedAt: timestamp("resolved_at")
    });
    passwordResetTokens = pgTable("password_reset_tokens", {
      id: serial("id").primaryKey(),
      userId: varchar("user_id").notNull(),
      tokenHash: varchar("token_hash").notNull(),
      expiresAt: timestamp("expires_at").notNull(),
      used: boolean("used").notNull().default(false),
      createdAt: timestamp("created_at").defaultNow().notNull()
    });
    chatThreads = pgTable("chat_threads", {
      id: serial("id").primaryKey(),
      userId: varchar("user_id").notNull(),
      status: varchar("status").notNull().default("pending"),
      // pending, active, resolved
      lastMessage: text("last_message"),
      unreadForAdmin: integer("unread_for_admin").notNull().default(0),
      unreadForUser: integer("unread_for_user").notNull().default(0),
      createdAt: timestamp("created_at").defaultNow().notNull(),
      updatedAt: timestamp("updated_at").defaultNow().notNull()
    });
    chatMessages = pgTable("chat_messages", {
      id: serial("id").primaryKey(),
      threadId: integer("thread_id").notNull(),
      senderId: varchar("sender_id"),
      // Can be null if sent by system
      senderRole: varchar("sender_role").notNull(),
      // user, admin
      message: text("message").notNull(),
      isRead: boolean("is_read").notNull().default(false),
      fileUrl: text("file_url"),
      fileName: text("file_name"),
      createdAt: timestamp("created_at").defaultNow().notNull()
    });
    insertPasswordResetRequestSchema = createInsertSchema(passwordResetRequests);
    insertPasswordResetTokenSchema = createInsertSchema(passwordResetTokens);
    insertChatThreadSchema = createInsertSchema(chatThreads);
    insertChatMessageSchema = createInsertSchema(chatMessages);
    customSubscriptionPlans = pgTable("custom_subscription_plans", {
      id: serial("id").primaryKey(),
      title: varchar("title").notNull(),
      productId: integer("product_id").references(() => products.id),
      customProductName: varchar("custom_product_name"),
      image: text("image"),
      quantity: varchar("quantity").notNull(),
      unitType: varchar("unit_type").notNull(),
      // Liter, Kg, Pack, Bottle, Custom
      price: decimal("price", { precision: 10, scale: 2 }).notNull(),
      originalPrice: decimal("original_price", { precision: 10, scale: 2 }),
      frequency: varchar("frequency").notNull(),
      // Daily, Alternate Days, Weekly, Monthly, Custom
      shortDescription: text("short_description"),
      detailedDescription: text("detailed_description"),
      benefits: jsonb("benefits").default([]),
      // array of bullet points
      deliveryTimeSlot: varchar("delivery_time_slot"),
      durationOptions: jsonb("duration_options").default([]),
      // array of strings (e.g. ['7 days', '15 days', '30 days'])
      status: varchar("status").notNull().default("active"),
      // active, inactive
      isFeatured: boolean("is_featured").default(false),
      sortOrder: integer("sort_order").default(0),
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    userSubscriptions = pgTable("user_subscriptions", {
      id: serial("id").primaryKey(),
      userId: varchar("user_id").references(() => users.id).notNull(),
      subscriptionPlanId: integer("subscription_plan_id").references(() => customSubscriptionPlans.id),
      customerName: varchar("customer_name").notNull(),
      email: varchar("email").notNull(),
      phone: varchar("phone").notNull(),
      address: text("address").notNull(),
      selectedQuantity: varchar("selected_quantity").notNull(),
      selectedFrequency: varchar("selected_frequency").notNull(),
      startDate: date("start_date").notNull(),
      duration: varchar("duration").notNull(),
      totalAmount: decimal("total_amount", { precision: 10, scale: 2 }).notNull(),
      paymentStatus: varchar("payment_status").notNull().default("pending"),
      // pending, paid, failed
      subscriptionStatus: varchar("subscription_status").notNull().default("active"),
      // active, paused, cancelled, completed
      createdAt: timestamp("created_at").defaultNow(),
      updatedAt: timestamp("updated_at").defaultNow()
    });
    customSubscriptionPlansRelations = relations(customSubscriptionPlans, ({ one }) => ({
      product: one(products, {
        fields: [customSubscriptionPlans.productId],
        references: [products.id]
      })
    }));
    userSubscriptionsRelations = relations(userSubscriptions, ({ one }) => ({
      user: one(users, {
        fields: [userSubscriptions.userId],
        references: [users.id]
      }),
      plan: one(customSubscriptionPlans, {
        fields: [userSubscriptions.subscriptionPlanId],
        references: [customSubscriptionPlans.id]
      })
    }));
    insertCustomSubscriptionPlanSchema = createInsertSchema(customSubscriptionPlans);
    insertUserSubscriptionSchema = createInsertSchema(userSubscriptions);
  }
});

// server/db.ts
var db_exports = {};
__export(db_exports, {
  db: () => db,
  pool: () => pool
});
import { Pool as NeonPool, neonConfig } from "@neondatabase/serverless";
import { drizzle as neonDrizzle } from "drizzle-orm/neon-serverless";
import pkg from "pg";
import { drizzle as pgDrizzle } from "drizzle-orm/node-postgres";
import ws from "ws";
var PgPool, isNeon, pool, db;
var init_db = __esm({
  "server/db.ts"() {
    "use strict";
    init_schema();
    ({ Pool: PgPool } = pkg);
    if (!process.env.DATABASE_URL) {
      throw new Error(
        "DATABASE_URL must be set. Did you forget to provision a database?"
      );
    }
    isNeon = process.env.DATABASE_URL.includes("neon.tech");
    pool = isNeon ? new NeonPool({ connectionString: process.env.DATABASE_URL }) : new PgPool({ connectionString: process.env.DATABASE_URL });
    if (isNeon) {
      neonConfig.webSocketConstructor = ws;
    }
    db = isNeon ? neonDrizzle({ client: pool, schema: schema_exports }) : pgDrizzle({ client: pool, schema: schema_exports });
  }
});

// server/utils/generateInvoice.ts
var generateInvoice_exports = {};
__export(generateInvoice_exports, {
  createInvoiceHTML: () => createInvoiceHTML,
  getBillInvoiceData: () => getBillInvoiceData
});
import { eq as eq24 } from "drizzle-orm";
function createInvoiceHTML(data) {
  const createdDate = (/* @__PURE__ */ new Date()).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  const monthYear = `${data.month} ${data.year}`;
  const itemsHTML = data.items.map(
    (item) => `
    <tr style="border-bottom: 1px solid #e5e7eb;">
      <td style="padding: 0.75rem; font-size: 0.875rem; text-align: left;">${item.date}</td>
      <td style="padding: 0.75rem; font-size: 0.875rem; text-align: left;">${item.description}</td>
      <td style="padding: 0.75rem; font-size: 0.875rem; text-align: center;">${item.quantity}</td>
      <td style="padding: 0.75rem; font-size: 0.875rem; text-align: right;">\u20B9${item.price.toLocaleString()}</td>
      <td style="padding: 0.75rem; font-size: 0.875rem; text-align: right; font-weight: 600;">\u20B9${item.total.toLocaleString()}</td>
    </tr>
  `
  ).join("");
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Divine Naturals Invoice</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: #f9fafb;
            padding: 2rem;
        }
        .invoice-container {
            background: white;
            max-width: 900px;
            margin: 0 auto;
            padding: 2rem;
            border-radius: 0.5rem;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            margin-bottom: 2rem;
            border-bottom: 3px solid #10b981;
            padding-bottom: 1.5rem;
        }
        .company-name {
            font-size: 1.75rem;
            font-weight: 700;
            color: #10b981;
            margin-bottom: 0.25rem;
        }
        .company-tagline {
            font-size: 0.875rem;
            color: #6b7280;
            font-style: italic;
        }
        .invoice-info {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            margin-bottom: 2rem;
        }
        .info-section h3 {
            font-size: 0.875rem;
            font-weight: 600;
            color: #374151;
            margin-bottom: 0.5rem;
            text-transform: uppercase;
        }
        .info-section p {
            font-size: 0.875rem;
            color: #6b7280;
            line-height: 1.6;
        }
        .summary-cards {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
            margin-bottom: 2rem;
        }
        .summary-card {
            background: #f3f4f6;
            padding: 1rem;
            border-radius: 0.5rem;
            border-left: 4px solid #3b82f6;
        }
        .summary-card.success {
            border-left-color: #10b981;
        }
        .summary-card.warning {
            border-left-color: #f59e0b;
        }
        .summary-card label {
            display: block;
            font-size: 0.75rem;
            color: #6b7280;
            font-weight: 600;
            margin-bottom: 0.25rem;
            text-transform: uppercase;
        }
        .summary-card .value {
            font-size: 1.5rem;
            font-weight: 700;
            color: #111827;
        }
        .items-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 2rem;
            margin-top: 2rem;
        }
        .items-table thead {
            background: #f3f4f6;
            border-bottom: 2px solid #e5e7eb;
        }
        .items-table th {
            padding: 0.75rem;
            text-align: left;
            font-size: 0.875rem;
            font-weight: 600;
            color: #374151;
        }
        .items-table td {
            padding: 0.75rem;
            font-size: 0.875rem;
            color: #6b7280;
        }
        .totals-section {
            display: flex;
            justify-content: flex-end;
            margin-bottom: 2rem;
        }
        .totals-box {
            width: 300px;
            border: 2px solid #e5e7eb;
            border-radius: 0.5rem;
            padding: 1rem;
        }
        .total-row {
            display: flex;
            justify-content: space-between;
            padding: 0.5rem 0;
            font-size: 0.875rem;
            color: #6b7280;
            border-bottom: 1px solid #e5e7eb;
        }
        .total-row.grand {
            border: none;
            padding: 1rem 0;
            font-size: 1.25rem;
            font-weight: 700;
            color: #111827;
            margin-top: 0.5rem;
        }
        .status-badge {
            display: inline-block;
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
            font-size: 0.875rem;
            font-weight: 600;
            margin-top: 1rem;
        }
        .status-badge.paid {
            background: #d1fae5;
            color: #065f46;
        }
        .status-badge.unpaid {
            background: #fef3c7;
            color: #92400e;
        }
        .status-badge.overdue {
            background: #fee2e2;
            color: #991b1b;
        }
        .footer {
            text-align: center;
            margin-top: 2rem;
            padding-top: 1rem;
            border-top: 1px solid #e5e7eb;
            font-size: 0.75rem;
            color: #9ca3af;
        }
        @media print {
            body {
                padding: 0;
                background: white;
            }
            .invoice-container {
                box-shadow: none;
                max-width: 100%;
            }
        }
    </style>
</head>
<body>
    <div class="invoice-container">
        <!-- Header -->
        <div class="header">
            <div class="company-name">\u{1F95B} DIVINE NATURALS</div>
            <div class="company-tagline">Pure. Fresh. Daily.</div>
        </div>

        <!-- Invoice Info -->
        <div class="invoice-info">
            <div class="info-section">
                <h3>\u{1F4CB} Bill Details</h3>
                <p><strong>Bill ID:</strong> #${data.billId}</p>
                <p><strong>Month:</strong> ${monthYear}</p>
                <p><strong>Generated:</strong> ${createdDate}</p>
                <p><strong>Due Date:</strong> ${new Date(data.dueDate).toLocaleDateString("en-IN")}</p>
            </div>
            <div class="info-section">
                <h3>\u{1F464} Customer Details</h3>
                <p><strong>${data.customerName}</strong></p>
                <p>${data.address}</p>
            </div>
        </div>

        <!-- Summary Cards -->
        <div class="summary-cards">
            <div class="summary-card">
                <label>Subscriptions</label>
                <div class="value">\u20B9${data.subscriptionTotal.toLocaleString()}</div>
            </div>
            <div class="summary-card">
                <label>Orders</label>
                <div class="value">\u20B9${data.ordersTotal.toLocaleString()}</div>
            </div>
            <div class="summary-card success">
                <label>Total Amount</label>
                <div class="value">\u20B9${data.finalAmount.toLocaleString()}</div>
            </div>
        </div>

        <!-- Items Table -->
        <table class="items-table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th style="text-align: center;">Qty</th>
                    <th style="text-align: right;">Rate</th>
                    <th style="text-align: right;">Total</th>
                </tr>
            </thead>
            <tbody>
                ${itemsHTML}
            </tbody>
        </table>

        <!-- Totals -->
        <div class="totals-section">
            <div class="totals-box">
                <div class="total-row">
                    <span>Subscriptions:</span>
                    <span>\u20B9${data.subscriptionTotal.toLocaleString()}</span>
                </div>
                <div class="total-row">
                    <span>Orders:</span>
                    <span>\u20B9${data.ordersTotal.toLocaleString()}</span>
                </div>
                ${data.previousPending > 0 ? `
                <div class="total-row">
                    <span>Previous Due:</span>
                    <span>\u20B9${data.previousPending.toLocaleString()}</span>
                </div>
                ` : ""}
                ${data.penalty > 0 ? `
                <div class="total-row warning">
                    <span>\u26A0\uFE0F Penalty:</span>
                    <span>\u20B9${data.penalty.toLocaleString()}</span>
                </div>
                ` : ""}
                ${data.discount > 0 ? `
                <div class="total-row success">
                    <span>\u2705 Discount:</span>
                    <span>-\u20B9${data.discount.toLocaleString()}</span>
                </div>
                ` : ""}
                <div class="total-row grand">
                    <span>Grand Total:</span>
                    <span>\u20B9${data.finalAmount.toLocaleString()}</span>
                </div>
            </div>
        </div>

        <!-- Status Badge -->
        <div>
            <span class="status-badge ${data.status === "paid" ? "paid" : data.status === "overdue" ? "overdue" : "unpaid"}">
                ${data.status === "paid" ? "\u2705 PAID" : data.status === "overdue" ? "\u26A0\uFE0F OVERDUE" : "\u{1F7E7} UNPAID"}
            </span>
        </div>

        <!-- Footer -->
        <div class="footer">
            <p>This is an automatically generated invoice. Please retain for your records.</p>
            <p>For queries, contact Divine Naturals customer support.</p>
        </div>
    </div>
</body>
</html>
  `;
  return html;
}
async function getBillInvoiceData(billId) {
  const bill = await db.select().from(bills).where(eq24(bills.id, billId));
  if (!bill.length) return null;
  const billRecord = bill[0];
  const user = await db.select().from(users).where(eq24(users.id, billRecord.userId));
  if (!user.length) return null;
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const items = typeof billRecord.items === "string" ? JSON.parse(billRecord.items) : billRecord.items;
  const dueDateVal = billRecord.dueDate;
  const dueDateStr = typeof dueDateVal === "string" ? dueDateVal : dueDateVal instanceof Date ? dueDateVal.toISOString() : dueDateVal ? new Date(dueDateVal).toISOString() : "";
  const createdAtVal = billRecord.createdAt;
  const createdAtStr = createdAtVal instanceof Date ? createdAtVal.toISOString() : createdAtVal ? new Date(createdAtVal).toISOString() : (/* @__PURE__ */ new Date()).toISOString();
  return {
    billId: billRecord.id,
    customerName: `${user[0].firstName || ""} ${user[0].lastName || ""}`.trim() || "N/A",
    address: user[0].address || "N/A",
    month: monthNames[billRecord.month - 1],
    year: billRecord.year,
    items: items || [],
    subscriptionTotal: Number(billRecord.subscriptionTotal || 0),
    ordersTotal: Number(billRecord.ordersTotal || 0),
    previousPending: Number(billRecord.previousPending || 0),
    penalty: Number(billRecord.penalty || 0),
    discount: Number(billRecord.discount || 0),
    finalAmount: Number(billRecord.finalAmount || 0),
    dueDate: dueDateStr,
    status: billRecord.status,
    generatedDate: createdAtStr
  };
}
var init_generateInvoice = __esm({
  "server/utils/generateInvoice.ts"() {
    "use strict";
    init_db();
    init_schema();
  }
});

// server/utils/generateInvoicePDF.ts
var generateInvoicePDF_exports = {};
__export(generateInvoicePDF_exports, {
  generateInvoicePDF: () => generateInvoicePDF
});
import PDFDocument from "pdfkit";
function generateInvoicePDF(data, res) {
  const doc = new PDFDocument({
    size: "A4",
    margins: { top: 50, bottom: 50, left: 50, right: 50 }
  });
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", `attachment; filename="invoice_${data.customerName.replace(/\s+/g, "_")}_${data.month}_${data.year}.pdf"`);
  doc.pipe(res);
  doc.fillColor("#16a34a").font("Helvetica-Bold").fontSize(24).text("DIVINE NATURALS", 50, 50);
  doc.fillColor("#6b7280").font("Helvetica-Oblique").fontSize(9).text("Pure. Fresh. Daily.", 50, 78);
  doc.fillColor("#111827").font("Helvetica-Bold").fontSize(12).text(`INVOICE`, 400, 50, { align: "right", width: 162 });
  doc.fillColor("#4b5563").font("Helvetica").fontSize(9);
  doc.text(`Invoice ID: #${data.billId}`, 400, 68, { align: "right", width: 162 });
  doc.text(`Billing Month: ${data.month} ${data.year}`, 400, 82, { align: "right", width: 162 });
  doc.text(`Generated: ${new Date(data.generatedDate).toLocaleDateString("en-IN")}`, 400, 96, { align: "right", width: 162 });
  doc.moveTo(50, 115).lineTo(562, 115).strokeColor("#e5e7eb").lineWidth(1).stroke();
  let y = 130;
  doc.fillColor("#9ca3af").font("Helvetica-Bold").fontSize(8).text("BILL TO:", 50, y);
  doc.fillColor("#9ca3af").font("Helvetica-Bold").fontSize(8).text("STATUS & DUE DATE:", 320, y);
  y += 12;
  doc.fillColor("#111827").font("Helvetica-Bold").fontSize(11).text(data.customerName, 50, y);
  const statusUpper = data.status.toUpperCase();
  const statusColor = statusUpper === "PAID" ? "#16a34a" : statusUpper === "OVERDUE" ? "#ef4444" : "#ca8a04";
  doc.fillColor(statusColor).font("Helvetica-Bold").fontSize(11).text(statusUpper, 320, y);
  y += 16;
  doc.fillColor("#4b5563").font("Helvetica").fontSize(9.5).text(data.address, 50, y, { width: 240 });
  doc.fillColor("#4b5563").font("Helvetica").fontSize(9.5).text(`Due Date: ${new Date(data.dueDate).toLocaleDateString("en-IN")}`, 320, y);
  y = 210;
  const cardWidth = 150;
  const cardHeight = 45;
  const cardGap = 16;
  doc.roundedRect(50, y, cardWidth, cardHeight, 6).fillOpacity(0.04).fill("#16a34a");
  doc.fillOpacity(1);
  doc.fillColor("#16a34a").font("Helvetica-Bold").fontSize(7.5).text("SUBSCRIPTIONS", 62, y + 10);
  doc.fillColor("#111827").font("Helvetica-Bold").fontSize(13).text(`Rs. ${data.subscriptionTotal.toLocaleString()}`, 62, y + 22);
  doc.roundedRect(50 + cardWidth + cardGap, y, cardWidth, cardHeight, 6).fillOpacity(0.04).fill("#3b82f6");
  doc.fillOpacity(1);
  doc.fillColor("#3b82f6").font("Helvetica-Bold").fontSize(7.5).text("ONE-TIME ORDERS", 50 + cardWidth + cardGap + 12, y + 10);
  doc.fillColor("#111827").font("Helvetica-Bold").fontSize(13).text(`Rs. ${data.ordersTotal.toLocaleString()}`, 50 + cardWidth + cardGap + 12, y + 22);
  doc.roundedRect(50 + (cardWidth + cardGap) * 2, y, cardWidth, cardHeight, 6).fillOpacity(0.04).fill("#10b981");
  doc.fillOpacity(1);
  doc.fillColor("#10b981").font("Helvetica-Bold").fontSize(7.5).text("TOTAL AMOUNT", 50 + (cardWidth + cardGap) * 2 + 12, y + 10);
  doc.fillColor("#111827").font("Helvetica-Bold").fontSize(13).text(`Rs. ${data.finalAmount.toLocaleString()}`, 50 + (cardWidth + cardGap) * 2 + 12, y + 22);
  y = 280;
  doc.rect(50, y, 512, 22).fill("#f3f4f6");
  doc.fillColor("#374151").font("Helvetica-Bold").fontSize(8.5);
  doc.text("Date", 60, y + 7);
  doc.text("Description", 130, y + 7);
  doc.text("Qty", 340, y + 7, { width: 40, align: "center" });
  doc.text("Rate", 390, y + 7, { width: 70, align: "right" });
  doc.text("Total", 470, y + 7, { width: 85, align: "right" });
  y += 22;
  doc.font("Helvetica").fontSize(8.5).fillColor("#4b5563");
  if (data.items && data.items.length > 0) {
    data.items.forEach((item, idx) => {
      const descHeight = doc.heightOfString(item.description || item.name || "", { width: 200 });
      const rowHeight = Math.max(descHeight + 10, 22);
      if (y + rowHeight > 740) {
        doc.addPage();
        y = 50;
        doc.rect(50, y, 512, 22).fill("#f3f4f6");
        doc.fillColor("#374151").font("Helvetica-Bold").fontSize(8.5);
        doc.text("Date", 60, y + 7);
        doc.text("Description", 130, y + 7);
        doc.text("Qty", 340, y + 7, { width: 40, align: "center" });
        doc.text("Rate", 390, y + 7, { width: 70, align: "right" });
        doc.text("Total", 470, y + 7, { width: 85, align: "right" });
        y += 22;
        doc.font("Helvetica").fontSize(8.5).fillColor("#4b5563");
      }
      if (idx % 2 === 1) {
        doc.rect(50, y, 512, rowHeight).fill("#f9fafb");
        doc.fillColor("#4b5563");
      }
      doc.text(item.date || "-", 60, y + 6);
      doc.text(item.description || item.name || "-", 130, y + 6, { width: 200 });
      doc.text((item.quantity || item.qty || 1).toString(), 340, y + 6, { width: 40, align: "center" });
      const rate = Number(item.rate || item.price || 0);
      const total = Number(item.total || 0);
      doc.text(`Rs. ${rate.toFixed(2)}`, 390, y + 6, { width: 70, align: "right" });
      doc.text(`Rs. ${total.toFixed(2)}`, 470, y + 6, { width: 85, align: "right" });
      doc.moveTo(50, y + rowHeight).lineTo(562, y + rowHeight).strokeColor("#f3f4f6").lineWidth(0.5).stroke();
      y += rowHeight;
    });
  } else {
    doc.text("No billing transactions recorded for this period.", 60, y + 10, { align: "center", width: 492 });
    y += 30;
  }
  if (y + 130 > 740) {
    doc.addPage();
    y = 50;
  }
  y += 15;
  const totalBoxX = 330;
  const totalBoxW = 232;
  doc.rect(totalBoxX, y, totalBoxW, 115).strokeColor("#e5e7eb").lineWidth(1).stroke();
  let subY = y + 8;
  const drawTotalRow = (label, value, isGrand = false, isDiscount = false) => {
    doc.font(isGrand ? "Helvetica-Bold" : "Helvetica").fontSize(isGrand ? 10 : 8.5).fillColor(isGrand ? "#111827" : "#4b5563");
    doc.text(label, totalBoxX + 12, subY);
    const prefix = isDiscount ? "-Rs. " : "Rs. ";
    doc.text(`${prefix}${value.toLocaleString()}`, totalBoxX + 110, subY, { width: 110, align: "right" });
    if (!isGrand) {
      doc.moveTo(totalBoxX + 12, subY + 14).lineTo(totalBoxX + totalBoxW - 12, subY + 14).strokeColor("#f3f4f6").lineWidth(0.5).stroke();
      subY += 18;
    }
  };
  drawTotalRow("Subscriptions:", data.subscriptionTotal);
  drawTotalRow("One-Time Orders:", data.ordersTotal);
  if (data.previousPending > 0) {
    drawTotalRow("Previous Due:", data.previousPending);
  }
  if (data.penalty > 0) {
    drawTotalRow("Penalty:", data.penalty);
  }
  if (data.discount > 0) {
    drawTotalRow("Discount:", data.discount, false, true);
  }
  subY = y + 92;
  doc.moveTo(totalBoxX + 12, subY - 4).lineTo(totalBoxX + totalBoxW - 12, subY - 4).strokeColor("#e5e7eb").lineWidth(1).stroke();
  drawTotalRow("Grand Total:", data.finalAmount, true);
  doc.fillColor("#9ca3af").font("Helvetica").fontSize(7.5);
  doc.text("This is an automatically generated electronic invoice. No signature is required.", 50, 735, { align: "center", width: 512 });
  doc.text("Thank you for choosing Divine Naturals! For support, contact support@divinenaturals.com", 50, 746, { align: "center", width: 512 });
  doc.end();
}
var init_generateInvoicePDF = __esm({
  "server/utils/generateInvoicePDF.ts"() {
    "use strict";
  }
});

// server/index.ts
import "dotenv/config";
import express2 from "express";
import fileUpload from "express-fileupload";
import cron from "node-cron";
import path7 from "path";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
init_schema();
init_db();
import { eq, and, desc, asc, or, isNull, lte, gte } from "drizzle-orm";
var DatabaseStorage = class {
  // User operations - mandatory for Replit Auth
  async getUser(id) {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }
  async upsertUser(userData) {
    const [user] = await db.insert(users).values(userData).onConflictDoUpdate({
      target: users.id,
      set: {
        ...userData,
        updatedAt: /* @__PURE__ */ new Date()
      }
    }).returning();
    return user;
  }
  async updateUser(id, userData) {
    const [user] = await db.update(users).set({
      ...userData,
      updatedAt: /* @__PURE__ */ new Date()
    }).where(eq(users.id, id)).returning();
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  }
  // Get user by email
  async getUserByEmail(email) {
    const [user] = await db.select().from(users).where(eq(users.email, email));
    return user;
  }
  // Create user with password (for simple auth)
  async createUserWithPassword(userData) {
    const [user] = await db.insert(users).values(userData).returning();
    return user;
  }
  // Category operations
  async getCategories() {
    return await db.select().from(categories).where(eq(categories.isActive, true)).orderBy(asc(categories.name));
  }
  async createCategory(category) {
    const [newCategory] = await db.insert(categories).values(category).returning();
    return newCategory;
  }
  async updateCategory(id, category) {
    const result = await db.update(categories).set(category).where(eq(categories.id, id)).returning();
    if (!result || result.length === 0) {
      throw new Error("Category not found");
    }
    return result[0];
  }
  async deleteCategory(id) {
    await db.update(categories).set({ isActive: false }).where(eq(categories.id, id));
  }
  // Product operations
  async getProducts() {
    return await db.select().from(products).where(eq(products.isActive, true)).orderBy(asc(products.name));
  }
  async getProductsByCategory(category) {
    return await db.select().from(products).where(and(eq(products.category, category), eq(products.isActive, true))).orderBy(asc(products.name));
  }
  async createProduct(product) {
    const [newProduct] = await db.insert(products).values(product).returning();
    return newProduct;
  }
  async updateProduct(id, product) {
    const result = await db.update(products).set(product).where(eq(products.id, id)).returning();
    if (!result || result.length === 0) {
      throw new Error("Product not found");
    }
    return result[0];
  }
  // Order operations
  async getOrdersByUser(userId) {
    return await db.select().from(orders).where(eq(orders.userId, userId)).orderBy(desc(orders.createdAt));
  }
  async getOrderById(id) {
    const [order] = await db.select().from(orders).where(eq(orders.id, id));
    return order;
  }
  async createOrder(order) {
    const [newOrder] = await db.insert(orders).values(order).returning();
    return newOrder;
  }
  async updateOrderStatus(id, status) {
    const [order] = await db.select().from(orders).where(eq(orders.id, id));
    const [updatedOrder] = await db.update(orders).set({ status }).where(eq(orders.id, id)).returning();
    if (status.toUpperCase() === "DELIVERED" && order && order.status.toUpperCase() !== "DELIVERED") {
      const items = await this.getOrderItemsByOrder(id);
      for (const item of items) {
        if (item.productId) {
          await this.decrementProductStock(item.productId, item.quantity);
          await this.recordStockMovement({
            productId: item.productId,
            type: "OUT",
            reason: "ORDER_DELIVERED",
            quantity: item.quantity,
            previousStock: 0,
            // Would need more queries to get exact
            newStock: 0,
            notes: `Order #${id} delivered`
          });
        }
      }
    }
    return updatedOrder;
  }
  async decrementProductStock(productId, quantity) {
    const [product] = await db.select().from(products).where(eq(products.id, productId));
    if (product) {
      const newStock = Math.max(0, (product.stock || 0) - quantity);
      await db.update(products).set({ stock: newStock }).where(eq(products.id, productId));
    }
  }
  async updateVendorRequirement(vendorId, liters) {
    const [vendor] = await db.select().from(vendors).where(eq(vendors.id, vendorId));
    if (vendor) {
      const currentCirculated = vendor.circulatedLiters || 0;
      const currentRequirement = vendor.requirementToday || 0;
      const newCirculated = currentCirculated + liters;
      const newRequirement = Math.max(0, currentRequirement - liters);
      await db.update(vendors).set({
        circulatedLiters: newCirculated,
        requirementToday: newRequirement
      }).where(eq(vendors.id, vendorId));
    }
  }
  async recordStockMovement(movement) {
    console.log("\u{1F4E6} Stock Movement Recorded:", movement);
  }
  async getOrdersForDelivery(deliveryPartnerId) {
    return await db.select().from(orders).where(eq(orders.deliveryPartnerId, deliveryPartnerId)).orderBy(asc(orders.deliveryDate));
  }
  // Order items operations
  async getOrderItemsByOrder(orderId) {
    return await db.select().from(orderItems).where(eq(orderItems.orderId, orderId));
  }
  async createOrderItem(orderItem) {
    const [newOrderItem] = await db.insert(orderItems).values(orderItem).returning();
    return newOrderItem;
  }
  // Milk subscription operations
  async getMilkSubscriptionByUser(userId) {
    const [subscription] = await db.select().from(milkSubscriptions).where(and(eq(milkSubscriptions.userId, userId), eq(milkSubscriptions.status, "ACTIVE")));
    return subscription;
  }
  async createMilkSubscription(subscription) {
    const [newSubscription] = await db.insert(milkSubscriptions).values(subscription).returning();
    return newSubscription;
  }
  async updateMilkSubscription(id, subscription) {
    const [updatedSubscription] = await db.update(milkSubscriptions).set(subscription).where(eq(milkSubscriptions.id, id)).returning();
    return updatedSubscription;
  }
  // Vendor operations
  async getVendors() {
    return await db.select().from(vendors).orderBy(asc(vendors.businessName));
  }
  async getVendorByUser(userId) {
    const [vendor] = await db.select().from(vendors).where(eq(vendors.userId, userId));
    return vendor;
  }
  async createVendor(vendor) {
    const [newVendor] = await db.insert(vendors).values(vendor).returning();
    return newVendor;
  }
  // Delivery partner operations
  async getDeliveryPartners() {
    return await db.select().from(deliveryPartners);
  }
  async getDeliveryPartnerByUser(userId) {
    const [partner] = await db.select().from(deliveryPartners).where(eq(deliveryPartners.userId, userId));
    return partner;
  }
  async createDeliveryPartner(partner) {
    const [newPartner] = await db.insert(deliveryPartners).values(partner).returning();
    return newPartner;
  }
  // Notification operations
  async getNotificationsByUser(userId) {
    return await db.select().from(notifications).where(eq(notifications.userId, userId)).orderBy(desc(notifications.createdAt));
  }
  async createNotification(notification) {
    const [newNotification] = await db.insert(notifications).values(notification).returning();
    return newNotification;
  }
  async markNotificationAsRead(id) {
    const [updatedNotification] = await db.update(notifications).set({ isRead: true }).where(eq(notifications.id, id)).returning();
    return updatedNotification;
  }
  // Cart operations
  async addToCart(userId, productId, quantity) {
    let userCart = await db.select().from(cart).where(eq(cart.userId, userId)).limit(1);
    let cartId;
    if (userCart.length === 0) {
      const [newCart] = await db.insert(cart).values({ userId }).returning();
      cartId = newCart.id;
    } else {
      cartId = userCart[0].id;
    }
    const [product] = await db.select().from(products).where(eq(products.id, productId));
    if (!product) {
      throw new Error("Product not found");
    }
    const existingItem = await db.select().from(cartItems).where(and(eq(cartItems.cartId, cartId), eq(cartItems.productId, productId))).limit(1);
    if (existingItem.length > 0) {
      const [updatedItem] = await db.update(cartItems).set({ quantity: (existingItem[0].quantity || 0) + quantity }).where(eq(cartItems.id, existingItem[0].id)).returning();
      return updatedItem;
    } else {
      const [newItem] = await db.insert(cartItems).values({ cartId, productId, quantity, price: product.price }).returning();
      return newItem;
    }
  }
  async getCartItems(userId) {
    const userCart = await db.select().from(cart).where(eq(cart.userId, userId)).limit(1);
    if (userCart.length === 0) {
      return [];
    }
    const items = await db.select({
      id: cartItems.id,
      cartId: cartItems.cartId,
      productId: cartItems.productId,
      quantity: cartItems.quantity,
      price: cartItems.price,
      productName: products.name,
      productImage: products.imageUrl,
      productUnit: products.unit
    }).from(cartItems).innerJoin(products, eq(cartItems.productId, products.id)).where(eq(cartItems.cartId, userCart[0].id));
    return items;
  }
  async clearCart(userId) {
    const userCart = await db.select().from(cart).where(eq(cart.userId, userId)).limit(1);
    if (userCart.length > 0) {
      await db.delete(cartItems).where(eq(cartItems.cartId, userCart[0].id));
    }
  }
  // Inward log operations (deprecated - table removed from schema)
  async createInwardLog(inwardLog) {
    return {};
  }
  // Vendor approval
  async approveVendor(vendorId) {
    const [updatedVendor] = await db.update(vendors).set({ isVerified: true }).where(eq(vendors.id, vendorId)).returning();
    return updatedVendor;
  }
  // Admin order management
  async getAllOrders() {
    return await db.select().from(orders).orderBy(desc(orders.createdAt));
  }
  async assignDeliveryPartner(orderId, deliveryPartnerId) {
    const [partner] = await db.select().from(deliveryPartners).where(
      and(eq(deliveryPartners.id, deliveryPartnerId), eq(deliveryPartners.isAvailable, true))
    );
    if (!partner) {
      throw new Error("Delivery partner not found or not available");
    }
    const [order] = await db.select().from(orders).where(eq(orders.id, orderId));
    if (!order) {
      throw new Error("Order not found");
    }
    const result = await db.update(orders).set({ deliveryPartnerId }).where(eq(orders.id, orderId)).returning();
    if (!result || result.length === 0) {
      throw new Error("Failed to update order");
    }
    return result[0];
  }
  async updateOrderPayment(orderId, paymentData) {
    const [order] = await db.select().from(orders).where(eq(orders.id, orderId));
    if (!order) {
      throw new Error("Order not found");
    }
    if (paymentData.paymentStatus) {
      const validStatuses = ["pending", "paid", "failed", "refunded"];
      if (!validStatuses.includes(paymentData.paymentStatus)) {
        throw new Error("Invalid payment status");
      }
    }
    const result = await db.update(orders).set(paymentData).where(eq(orders.id, orderId)).returning();
    if (!result || result.length === 0) {
      throw new Error("Failed to update order payment");
    }
    return result[0];
  }
  // Driver management
  async addDriver(driver) {
    const [newDriver] = await db.insert(drivers).values(driver).returning();
    return newDriver;
  }
  async getDriversByVendor(vendorId) {
    return await db.select().from(drivers).where(eq(drivers.vendorId, vendorId)).orderBy(desc(drivers.createdAt));
  }
  async getAllStockMovements() {
    return [];
  }
  async getStockMovementsByProduct(productId) {
    return [];
  }
  // Customer management - get all customers
  async getAllCustomers() {
    return await db.select().from(users).where(eq(users.role, "customer")).orderBy(desc(users.createdAt));
  }
  // Subscription management - get all subscriptions
  async getAllSubscriptions() {
    const allSubscriptions = await db.select().from(milkSubscriptions).orderBy(desc(milkSubscriptions.createdAt));
    const enrichedSubscriptions = await Promise.all(
      allSubscriptions.map(async (sub) => {
        const user = sub.userId ? await this.getUser(sub.userId) : void 0;
        return { ...sub, user };
      })
    );
    return enrichedSubscriptions;
  }
  // Admin stats
  async getAdminStats() {
    const allOrders = await db.select().from(orders);
    const allProducts = await db.select().from(products);
    const allVendors = await db.select().from(vendors);
    const allDeliveryPartners = await db.select().from(deliveryPartners);
    const allCustomers = await db.select().from(users).where(eq(users.role, "customer"));
    const totalRevenue = allOrders.reduce((sum, order) => {
      return sum + (parseFloat(order.totalAmount) || 0);
    }, 0);
    const pendingOrders = allOrders.filter((o) => o.status === "pending").length;
    const completedOrders = allOrders.filter((o) => o.status === "completed").length;
    const lowStockProducts = allProducts.filter((p) => p.stock && p.stock <= 50).length;
    return {
      totalOrders: allOrders.length,
      pendingOrders,
      completedOrders,
      totalRevenue: Math.round(totalRevenue),
      totalCustomers: allCustomers.length,
      totalProducts: allProducts.length,
      totalVendors: allVendors.length,
      totalDeliveryPartners: allDeliveryPartners.length,
      lowStockProducts
    };
  }
  // Banner operations
  async getBanners() {
    const { banners: banners2 } = await Promise.resolve().then(() => (init_schema(), schema_exports));
    return await db.select().from(banners2).orderBy(asc(banners2.displayOrder));
  }
  async getActiveBanners() {
    const { banners: banners2 } = await Promise.resolve().then(() => (init_schema(), schema_exports));
    const now = /* @__PURE__ */ new Date();
    return await db.select().from(banners2).where(
      and(
        eq(banners2.isActive, true),
        or(isNull(banners2.startDate), lte(banners2.startDate, now)),
        or(isNull(banners2.endDate), gte(banners2.endDate, now))
      )
    ).orderBy(asc(banners2.displayOrder));
  }
  async createBanner(bannerData) {
    const { banners: banners2 } = await Promise.resolve().then(() => (init_schema(), schema_exports));
    const [banner] = await db.insert(banners2).values(bannerData).returning();
    return banner;
  }
  async updateBanner(id, bannerData) {
    const { banners: banners2 } = await Promise.resolve().then(() => (init_schema(), schema_exports));
    const [banner] = await db.update(banners2).set({ ...bannerData, updatedAt: /* @__PURE__ */ new Date() }).where(eq(banners2.id, id)).returning();
    return banner;
  }
  async deleteBanner(id) {
    const { banners: banners2 } = await Promise.resolve().then(() => (init_schema(), schema_exports));
    await db.delete(banners2).where(eq(banners2.id, id));
  }
  // Homepage CMS operations
  async getEthosCards() {
    const { ethosCards: ethosCards2 } = await Promise.resolve().then(() => (init_schema(), schema_exports));
    return await db.select().from(ethosCards2).orderBy(asc(ethosCards2.displayOrder));
  }
  async getActiveEthosCards() {
    const { ethosCards: ethosCards2 } = await Promise.resolve().then(() => (init_schema(), schema_exports));
    return await db.select().from(ethosCards2).where(eq(ethosCards2.isActive, true)).orderBy(asc(ethosCards2.displayOrder));
  }
  async getStatsCounters() {
    const { statsCounters: statsCounters2 } = await Promise.resolve().then(() => (init_schema(), schema_exports));
    return await db.select().from(statsCounters2).orderBy(asc(statsCounters2.displayOrder));
  }
  async getActiveStatsCounters() {
    const { statsCounters: statsCounters2 } = await Promise.resolve().then(() => (init_schema(), schema_exports));
    return await db.select().from(statsCounters2).where(eq(statsCounters2.isActive, true)).orderBy(asc(statsCounters2.displayOrder));
  }
  async getFAQs() {
    const { faqs: faqs2 } = await Promise.resolve().then(() => (init_schema(), schema_exports));
    return await db.select().from(faqs2).orderBy(asc(faqs2.displayOrder));
  }
  async getActiveFAQs() {
    const { faqs: faqs2 } = await Promise.resolve().then(() => (init_schema(), schema_exports));
    return await db.select().from(faqs2).where(eq(faqs2.isActive, true)).orderBy(asc(faqs2.displayOrder));
  }
  async getNewsletterSettings() {
    const { newsletterSettings: newsletterSettings2 } = await Promise.resolve().then(() => (init_schema(), schema_exports));
    const [settings] = await db.select().from(newsletterSettings2).limit(1);
    return settings || null;
  }
  async getFooterSettings() {
    const { footerSettings: footerSettings2 } = await Promise.resolve().then(() => (init_schema(), schema_exports));
    const [settings] = await db.select().from(footerSettings2).limit(1);
    return settings || null;
  }
  async updateNewsletterSettings(settingsData) {
    const { newsletterSettings: newsletterSettings2 } = await Promise.resolve().then(() => (init_schema(), schema_exports));
    const existing = await this.getNewsletterSettings();
    if (existing) {
      const [updated] = await db.update(newsletterSettings2).set({ ...settingsData, updatedAt: /* @__PURE__ */ new Date() }).where(eq(newsletterSettings2.id, existing.id)).returning();
      return updated;
    } else {
      const [created] = await db.insert(newsletterSettings2).values(settingsData).returning();
      return created;
    }
  }
  async updateFooterSettings(settingsData) {
    const { footerSettings: footerSettings2 } = await Promise.resolve().then(() => (init_schema(), schema_exports));
    const existing = await this.getFooterSettings();
    if (existing) {
      const [updated] = await db.update(footerSettings2).set({ ...settingsData, updatedAt: /* @__PURE__ */ new Date() }).where(eq(footerSettings2.id, existing.id)).returning();
      return updated;
    } else {
      const [created] = await db.insert(footerSettings2).values(settingsData).returning();
      return created;
    }
  }
  // CMS Settings operations
  async getAboutUsSettings() {
    const { aboutUsSettings: aboutUsSettings2 } = await Promise.resolve().then(() => (init_schema(), schema_exports));
    const [settings] = await db.select().from(aboutUsSettings2).limit(1);
    return settings || null;
  }
  async getContactSettings() {
    const { contactSettings: contactSettings2 } = await Promise.resolve().then(() => (init_schema(), schema_exports));
    const [settings] = await db.select().from(contactSettings2).limit(1);
    return settings || null;
  }
  async getTermsOfServiceSettings() {
    const { termsOfServiceSettings: termsOfServiceSettings2 } = await Promise.resolve().then(() => (init_schema(), schema_exports));
    const [settings] = await db.select().from(termsOfServiceSettings2).limit(1);
    return settings || null;
  }
  async getPrivacyPolicySettings() {
    const { privacyPolicySettings: privacyPolicySettings2 } = await Promise.resolve().then(() => (init_schema(), schema_exports));
    const [settings] = await db.select().from(privacyPolicySettings2).limit(1);
    return settings || null;
  }
  async updateAboutUsSettings(settingsData) {
    const { aboutUsSettings: aboutUsSettings2 } = await Promise.resolve().then(() => (init_schema(), schema_exports));
    const existing = await this.getAboutUsSettings();
    if (existing) {
      const [updated] = await db.update(aboutUsSettings2).set({ ...settingsData, updatedAt: /* @__PURE__ */ new Date() }).where(eq(aboutUsSettings2.id, existing.id)).returning();
      return updated;
    } else {
      const [created] = await db.insert(aboutUsSettings2).values(settingsData).returning();
      return created;
    }
  }
  async updateContactSettings(settingsData) {
    const { contactSettings: contactSettings2 } = await Promise.resolve().then(() => (init_schema(), schema_exports));
    const existing = await this.getContactSettings();
    if (existing) {
      const [updated] = await db.update(contactSettings2).set({ ...settingsData, updatedAt: /* @__PURE__ */ new Date() }).where(eq(contactSettings2.id, existing.id)).returning();
      return updated;
    } else {
      const [created] = await db.insert(contactSettings2).values(settingsData).returning();
      return created;
    }
  }
  async updateTermsOfServiceSettings(settingsData) {
    const { termsOfServiceSettings: termsOfServiceSettings2 } = await Promise.resolve().then(() => (init_schema(), schema_exports));
    const existing = await this.getTermsOfServiceSettings();
    if (existing) {
      const [updated] = await db.update(termsOfServiceSettings2).set({ ...settingsData, updatedAt: /* @__PURE__ */ new Date() }).where(eq(termsOfServiceSettings2.id, existing.id)).returning();
      return updated;
    } else {
      const [created] = await db.insert(termsOfServiceSettings2).values(settingsData).returning();
      return created;
    }
  }
  async updatePrivacyPolicySettings(settingsData) {
    const { privacyPolicySettings: privacyPolicySettings2 } = await Promise.resolve().then(() => (init_schema(), schema_exports));
    const existing = await this.getPrivacyPolicySettings();
    if (existing) {
      const [updated] = await db.update(privacyPolicySettings2).set({ ...settingsData, updatedAt: /* @__PURE__ */ new Date() }).where(eq(privacyPolicySettings2.id, existing.id)).returning();
      return updated;
    } else {
      const [created] = await db.insert(privacyPolicySettings2).values(settingsData).returning();
      return created;
    }
  }
  async getSiteSettings() {
    const { siteSettings: siteSettings2 } = await Promise.resolve().then(() => (init_schema(), schema_exports));
    const [settings] = await db.select().from(siteSettings2).limit(1);
    return settings || null;
  }
  async updateSiteSettings(settingsData) {
    const { siteSettings: siteSettings2 } = await Promise.resolve().then(() => (init_schema(), schema_exports));
    const existing = await this.getSiteSettings();
    if (existing) {
      const [updated] = await db.update(siteSettings2).set({ ...settingsData, updatedAt: /* @__PURE__ */ new Date() }).where(eq(siteSettings2.id, existing.id)).returning();
      return updated;
    } else {
      const [created] = await db.insert(siteSettings2).values(settingsData).returning();
      return created;
    }
  }
  // User Management Implementations
  async getAllUsers() {
    return await db.select().from(users).orderBy(desc(users.createdAt));
  }
  // Password reset operations Implementations
  async createPasswordResetRequest(request) {
    const [created] = await db.insert(passwordResetRequests).values(request).returning();
    return created;
  }
  async getPasswordResetRequests() {
    return await db.select().from(passwordResetRequests).orderBy(desc(passwordResetRequests.createdAt));
  }
  async getPasswordResetRequestById(id) {
    const [request] = await db.select().from(passwordResetRequests).where(eq(passwordResetRequests.id, id));
    return request;
  }
  async updatePasswordResetRequestStatus(id, status, resolvedAt) {
    const [updated] = await db.update(passwordResetRequests).set({ status, resolvedAt }).where(eq(passwordResetRequests.id, id)).returning();
    return updated;
  }
  async createPasswordResetToken(token) {
    const [created] = await db.insert(passwordResetTokens).values(token).returning();
    return created;
  }
  async getPasswordResetToken(tokenHash) {
    const [token] = await db.select().from(passwordResetTokens).where(eq(passwordResetTokens.tokenHash, tokenHash));
    return token;
  }
  async markPasswordResetTokenUsed(id) {
    await db.update(passwordResetTokens).set({ used: true }).where(eq(passwordResetTokens.id, id));
  }
  // Chat Support operations Implementations
  async getOrCreateChatThread(userId) {
    const [existing] = await db.select().from(chatThreads).where(eq(chatThreads.userId, userId));
    if (existing) {
      return existing;
    }
    const [created] = await db.insert(chatThreads).values({ userId, status: "pending" }).returning();
    return created;
  }
  async getChatThreadById(id) {
    const [thread] = await db.select().from(chatThreads).where(eq(chatThreads.id, id));
    return thread;
  }
  async getChatThreads() {
    const allThreads = await db.select().from(chatThreads).orderBy(desc(chatThreads.updatedAt));
    const threadsWithUser = [];
    for (const thread of allThreads) {
      const [user] = await db.select().from(users).where(eq(users.id, thread.userId));
      threadsWithUser.push({
        ...thread,
        user
      });
    }
    return threadsWithUser;
  }
  async getChatMessages(threadId) {
    return await db.select().from(chatMessages).where(eq(chatMessages.threadId, threadId)).orderBy(asc(chatMessages.createdAt));
  }
  async createChatMessage(message) {
    const [created] = await db.insert(chatMessages).values(message).returning();
    await db.update(chatThreads).set({ lastMessage: message.message, updatedAt: /* @__PURE__ */ new Date() }).where(eq(chatThreads.id, message.threadId));
    return created;
  }
  async updateChatThreadStatus(id, status) {
    const [updated] = await db.update(chatThreads).set({ status }).where(eq(chatThreads.id, id)).returning();
    return updated;
  }
  async incrementUnreadCount(threadId, forRole) {
    const [thread] = await db.select().from(chatThreads).where(eq(chatThreads.id, threadId));
    if (thread) {
      if (forRole === "admin") {
        await db.update(chatThreads).set({ unreadForAdmin: thread.unreadForAdmin + 1 }).where(eq(chatThreads.id, threadId));
      } else {
        await db.update(chatThreads).set({ unreadForUser: thread.unreadForUser + 1 }).where(eq(chatThreads.id, threadId));
      }
    }
  }
  async resetUnreadCount(threadId, forRole) {
    if (forRole === "admin") {
      await db.update(chatThreads).set({ unreadForAdmin: 0 }).where(eq(chatThreads.id, threadId));
    } else {
      await db.update(chatThreads).set({ unreadForUser: 0 }).where(eq(chatThreads.id, threadId));
    }
  }
};
var storage = new DatabaseStorage();

// server/replitAuth.ts
import * as client from "openid-client";
import { Strategy } from "openid-client/passport";
import passport from "passport";
import session from "express-session";
import memoize from "memoizee";
import connectPg from "connect-pg-simple";
if (!process.env.REPLIT_DOMAINS) {
  console.warn("REPLIT_DOMAINS not provided, OIDC auth will be disabled");
}
var getOidcConfig = memoize(
  async () => {
    if (!process.env.REPLIT_DOMAINS) return null;
    return await client.discovery(
      new URL(process.env.ISSUER_URL ?? "https://replit.com/oidc"),
      process.env.REPL_ID
    );
  },
  { maxAge: 3600 * 1e3 }
);
function getSession() {
  const sessionTtl = 30 * 24 * 60 * 60 * 1e3;
  const pgStore = connectPg(session);
  const sessionStore = new pgStore({
    conString: process.env.DATABASE_URL,
    createTableIfMissing: true,
    ttl: sessionTtl,
    tableName: "sessions"
  });
  return session({
    secret: process.env.SESSION_SECRET || "dev-secret-replace-in-production-1bbb8dc397432601dbfd287a827825dfa4b44f0dca956dd83527bd6f94e0cbac5c144424ec2c2819725d1abe72d2894d72f0086fcc23f2a87bf28e235348cddb",
    store: sessionStore,
    resave: true,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: sessionTtl,
      sameSite: "lax",
      path: "/"
    }
  });
}
function updateUserSession(user, tokens) {
  user.claims = tokens.claims();
  user.access_token = tokens.access_token;
  user.refresh_token = tokens.refresh_token;
  user.expires_at = user.claims?.exp;
}
async function upsertUser(claims) {
  await storage.upsertUser({
    id: claims["sub"],
    email: claims["email"],
    firstName: claims["first_name"],
    lastName: claims["last_name"],
    profileImageUrl: claims["profile_image_url"]
  });
}
async function setupAuth(app2) {
  app2.set("trust proxy", 1);
  const sessionMiddleware = getSession();
  app2.use((req, res, next) => {
    const path8 = req.path;
    if (!path8.startsWith("/api")) {
      return next();
    }
    sessionMiddleware(req, res, next);
  });
  app2.use((req, res, next) => {
    if (!req.path.startsWith("/api")) {
      return next();
    }
    passport.initialize()(req, res, next);
  });
  app2.use((req, res, next) => {
    if (!req.path.startsWith("/api")) {
      return next();
    }
    passport.session()(req, res, next);
  });
  const config = await getOidcConfig();
  const verify = async (tokens, verified) => {
    const user = {};
    updateUserSession(user, tokens);
    await upsertUser(tokens.claims());
    const claims = tokens.claims();
    if (claims && claims["sub"]) {
      const dbUser = await storage.getUser(claims["sub"]);
      if (dbUser) {
        user.role = dbUser.role;
        user.id = dbUser.id;
      }
    }
    verified(null, user);
  };
  if (process.env.REPLIT_DOMAINS) {
    for (const domain of process.env.REPLIT_DOMAINS.split(",")) {
      const strategy = new Strategy(
        {
          name: `replitauth:${domain}`,
          config,
          scope: "openid email profile offline_access",
          callbackURL: `https://${domain}/api/callback`
        },
        verify
      );
      passport.use(strategy);
    }
  }
  passport.serializeUser((user, cb) => cb(null, user));
  passport.deserializeUser((user, cb) => cb(null, user));
  app2.get("/api/login", (req, res, next) => {
    passport.authenticate(`replitauth:${req.hostname}`, {
      prompt: "login consent",
      scope: ["openid", "email", "profile", "offline_access"]
    })(req, res, next);
  });
  app2.get("/api/callback", (req, res, next) => {
    passport.authenticate(`replitauth:${req.hostname}`, {
      successReturnToOrRedirect: "/",
      failureRedirect: "/api/login"
    })(req, res, next);
  });
  app2.get("/api/logout", (req, res) => {
    req.logout(() => {
      res.redirect(
        client.buildEndSessionUrl(config, {
          client_id: process.env.REPL_ID,
          post_logout_redirect_uri: `${req.protocol}://${req.hostname}`
        }).href
      );
    });
  });
}
var isAuthenticated = async (req, res, next) => {
  const session2 = req.session;
  if (session2 && session2.userId) {
    return next();
  }
  const user = req.user;
  if (!req.isAuthenticated() || !user?.expires_at) {
    return res.status(401).json({ message: "Unauthorized - Please log in" });
  }
  const now = Math.floor(Date.now() / 1e3);
  if (now <= user.expires_at) {
    return next();
  }
  const refreshToken = user.refresh_token;
  if (!refreshToken) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
  try {
    const config = await getOidcConfig();
    const tokenResponse = await client.refreshTokenGrant(config, refreshToken);
    updateUserSession(user, tokenResponse);
    return next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
};

// server/routes/auth.routes.ts
import { nanoid } from "nanoid";
import bcryptjs from "bcryptjs";
function setupAuthRoutes(app2) {
  app2.post("/api/auth/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
      }
      const user = await storage.getUserByEmail(email);
      if (!user) {
        return res.status(401).json({
          message: "User not found. Please sign up first.",
          code: "USER_NOT_FOUND"
        });
      }
      if (user.isActive === false) {
        return res.status(403).json({
          message: "Your account has been blocked. Please contact support.",
          code: "USER_BLOCKED"
        });
      }
      const passwordMatch = await bcryptjs.compare(
        password,
        user.passwordHash || ""
      );
      if (!passwordMatch) {
        return res.status(401).json({ message: "Invalid password" });
      }
      await storage.updateUser(user.id, { lastLogin: /* @__PURE__ */ new Date() });
      req.session.userId = user.id;
      req.session.userRole = user.role;
      req.session.userEmail = user.email;
      console.log("\u{1F4DD} Setting session:", {
        sessionId: req.sessionID,
        userId: user.id,
        email: user.email
      });
      req.session.save((err) => {
        if (err) {
          console.error("\u274C Session save error:", err);
          return res.status(500).json({ message: "Failed to create session" });
        }
        console.log("\u2705 Session saved successfully:", {
          sessionId: req.sessionID,
          userId: req.session.userId
        });
        res.json({
          message: "Login successful",
          user: {
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            phone: user.phone,
            role: user.role
          }
        });
      });
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ message: "Login failed" });
    }
  });
  app2.post("/api/auth/signup", async (req, res) => {
    try {
      const { email, password, firstName, lastName, phone, address } = req.body;
      const profilePhoto = req.files?.profilePhoto;
      if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email format" });
      }
      if (password.length < 6) {
        return res.status(400).json({
          message: "Password must be at least 6 characters"
        });
      }
      const existingUser = await storage.getUserByEmail(email);
      if (existingUser) {
        return res.status(409).json({
          message: "Email already registered. Please login instead.",
          code: "USER_EXISTS"
        });
      }
      const salt = await bcryptjs.genSalt(10);
      const passwordHash = await bcryptjs.hash(password, salt);
      let profileImageUrl = void 0;
      if (profilePhoto) {
        profileImageUrl = `/uploads/${profilePhoto.name}`;
      }
      const newUser = await storage.createUserWithPassword({
        id: nanoid(),
        email,
        passwordHash,
        firstName,
        lastName,
        phone,
        address,
        profileImageUrl,
        role: "customer",
        isActive: true,
        lastLogin: /* @__PURE__ */ new Date()
      });
      req.session.userId = newUser.id;
      req.session.userRole = newUser.role;
      req.session.userEmail = newUser.email;
      req.session.save((err) => {
        if (err) {
          return res.status(500).json({ message: "Failed to create session" });
        }
        res.status(201).json({
          message: "Signup successful",
          user: {
            id: newUser.id,
            email: newUser.email,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            role: newUser.role
          }
        });
      });
    } catch (error) {
      console.error("Signup error:", error);
      res.status(500).json({ message: "Signup failed" });
    }
  });
  app2.get("/api/auth/current-user", async (req, res) => {
    if (!req.session?.userId) {
      return res.status(401).json({ message: "Not authenticated" });
    }
    try {
      const user = await storage.getUser(req.session.userId);
      if (!user) {
        return res.status(401).json({ message: "User not found" });
      }
      if (user.isActive === false) {
        req.session.destroy(() => {
        });
        return res.status(403).json({ message: "Your account has been blocked. Please contact support." });
      }
      res.json({
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
        address: user.address,
        profileImageUrl: user.profileImageUrl,
        role: user.role
      });
    } catch (error) {
      console.error("Error fetching current user:", error);
      res.status(500).json({ message: "Failed to fetch user" });
    }
  });
  app2.post("/api/auth/change-password", async (req, res) => {
    if (!req.session?.userId) {
      return res.status(401).json({ message: "Not authenticated" });
    }
    try {
      const { currentPassword, newPassword } = req.body;
      if (!currentPassword || !newPassword) {
        return res.status(400).json({ message: "Current and new passwords are required" });
      }
      if (newPassword.length < 6) {
        return res.status(400).json({ message: "New password must be at least 6 characters" });
      }
      const user = await storage.getUser(req.session.userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      const isMatch = await bcryptjs.compare(currentPassword, user.passwordHash || "");
      if (!isMatch) {
        return res.status(400).json({ message: "Incorrect current password" });
      }
      const salt = await bcryptjs.genSalt(10);
      const newHash = await bcryptjs.hash(newPassword, salt);
      await storage.updateUser(user.id, { passwordHash: newHash });
      res.json({ message: "Password updated successfully" });
    } catch (error) {
      console.error("Change password error:", error);
      res.status(500).json({ message: "Failed to change password" });
    }
  });
  app2.post("/api/admin/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
      }
      const adminUsername = process.env.ADMIN_USERNAME || "DivineNaturalsMDKauldeepRao";
      const adminPassword = process.env.ADMIN_PASSWORD || "DivineNaturals@2025";
      if (username !== adminUsername || password !== adminPassword) {
        console.log("\u274C Admin login failed: Invalid credentials for", username);
        return res.status(401).json({ message: "Invalid admin credentials" });
      }
      req.session.isAdminLoggedIn = true;
      req.session.adminUsername = username;
      req.session.save((err) => {
        if (err) {
          console.error("\u274C Admin session save error:", err);
          return res.status(500).json({ message: "Failed to create session" });
        }
        console.log("\u2705 Admin session created:", {
          sessionId: req.sessionID,
          admin: username
        });
        res.json({
          message: "Admin login successful",
          admin: {
            username
          }
        });
      });
    } catch (error) {
      console.error("Admin login error:", error);
      res.status(500).json({ message: "Admin login failed" });
    }
  });
  app2.get("/api/admin/current-admin", (req, res) => {
    console.log("\u{1F50D} Checking admin session:", {
      sessionId: req.sessionID,
      isAdminLoggedIn: req.session?.isAdminLoggedIn,
      username: req.session?.adminUsername
    });
    if (!req.session?.isAdminLoggedIn) {
      return res.status(401).json({ message: "Not authenticated as admin" });
    }
    res.json({
      username: req.session.adminUsername
    });
  });
  app2.post("/api/admin/logout", (req, res) => {
    req.session.isAdminLoggedIn = false;
    req.session.adminUsername = null;
    req.session.save(() => {
      res.json({ message: "Admin logged out" });
    });
  });
  app2.post("/api/auth/logout", (req, res) => {
    req.session.destroy(() => {
      res.json({ message: "Logged out" });
    });
  });
}

// server/routes/cart.routes.ts
import { Router } from "express";

// server/storage/cart.repository.ts
init_db();
init_schema();
import { eq as eq2, and as and2 } from "drizzle-orm";
var CartRepository = class {
  async getUserCarts(userId) {
    return db.select().from(cart).where(eq2(cart.userId, userId));
  }
  async getOrCreateCart(userId) {
    const [existing] = await this.getUserCarts(userId);
    if (existing) {
      return existing;
    }
    const [newCart] = await db.insert(cart).values({ userId }).returning();
    return newCart;
  }
  async getCartWithItems(userId) {
    let userCarts = await this.getUserCarts(userId);
    if (userCarts.length === 0) {
      userCarts = [await this.getOrCreateCart(userId)];
    }
    const cartItemsByCart = await Promise.all(
      userCarts.map(
        (userCart) => db.query.cartItems.findMany({
          where: eq2(cartItems.cartId, userCart.id),
          with: {
            product: true
          }
        })
      )
    );
    return {
      cart: userCarts[0],
      items: cartItemsByCart.flat()
    };
  }
  async addOrUpdateItem(userId, productId, quantity) {
    const userCart = await this.getOrCreateCart(userId);
    const product = await db.query.products.findFirst({
      where: eq2(products.id, productId)
    });
    if (!product) {
      throw new Error("Product not found");
    }
    const existingItem = await db.query.cartItems.findFirst({
      where: and2(
        eq2(cartItems.cartId, userCart.id),
        eq2(cartItems.productId, productId)
      )
    });
    if (existingItem) {
      const [updated] = await db.update(cartItems).set({ quantity: Number(existingItem.quantity || 0) + quantity }).where(eq2(cartItems.id, existingItem.id)).returning();
      return updated;
    }
    const [newItem] = await db.insert(cartItems).values({
      cartId: userCart.id,
      productId,
      quantity,
      price: product.price
    }).returning();
    return newItem;
  }
  async updateItemQuantity(userId, cartItemId, quantity) {
    const userCarts = await this.getUserCarts(userId);
    if (quantity <= 0) {
      await this.removeItem(userId, cartItemId);
      return null;
    }
    for (const userCart of userCarts) {
      const [updated] = await db.update(cartItems).set({ quantity }).where(
        and2(eq2(cartItems.id, cartItemId), eq2(cartItems.cartId, userCart.id))
      ).returning();
      if (updated) return updated;
    }
    return null;
  }
  async removeItem(userId, cartItemId) {
    const userCarts = await this.getUserCarts(userId);
    await Promise.all(
      userCarts.map(
        (userCart) => db.delete(cartItems).where(
          and2(eq2(cartItems.id, cartItemId), eq2(cartItems.cartId, userCart.id))
        )
      )
    );
  }
  async clearCart(userId) {
    const userCarts = await this.getUserCarts(userId);
    await Promise.all(
      userCarts.map((userCart) => db.delete(cartItems).where(eq2(cartItems.cartId, userCart.id)))
    );
  }
  async getCartSummary(userId) {
    const { items } = await this.getCartWithItems(userId);
    const subtotal = items.reduce((sum, item) => {
      const itemTotal = Number(item.price || 0) * Number(item.quantity || 0);
      return sum + itemTotal;
    }, 0);
    const deliveryFee = subtotal >= 500 ? 0 : 40;
    const total = subtotal + deliveryFee;
    return {
      subtotal,
      deliveryFee,
      discount: 0,
      total,
      itemCount: items.reduce((sum, item) => sum + Number(item.quantity || 0), 0)
    };
  }
};
var cartRepository = new CartRepository();

// server/routes/cart.routes.ts
import { z } from "zod";
var router = Router();
router.get("/", async (req, res) => {
  try {
    const userId = req.session?.userId || req.user?.claims?.sub;
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized - Please log in" });
    }
    const result = await cartRepository.getCartWithItems(userId);
    res.set("Cache-Control", "no-store");
    res.json(result.items || []);
  } catch (error) {
    console.error("Error fetching cart:", error);
    res.status(500).json({ message: "Failed to fetch cart" });
  }
});
router.get("/summary", async (req, res) => {
  try {
    const userId = req.session?.userId || req.user?.claims?.sub;
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const summary = await cartRepository.getCartSummary(userId);
    res.set("Cache-Control", "no-store");
    res.json(summary);
  } catch (error) {
    console.error("Error fetching cart summary:", error);
    res.status(500).json({ message: "Failed to fetch cart summary" });
  }
});
var addItemSchema = z.object({
  productId: z.number(),
  quantity: z.number().positive().default(1)
});
router.post("/items", async (req, res) => {
  try {
    const userId = req.session?.userId || req.user?.claims?.sub;
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const { productId, quantity } = addItemSchema.parse(req.body);
    const item = await cartRepository.addOrUpdateItem(userId, productId, quantity);
    res.set("Cache-Control", "no-store");
    res.json(item);
  } catch (error) {
    console.error("Error adding item to cart:", error);
    res.status(500).json({ message: "Failed to add item to cart" });
  }
});
var updateItemSchema = z.object({
  quantity: z.number().min(0)
});
router.patch("/items/:id", async (req, res) => {
  try {
    const userId = req.session?.userId || req.user?.claims?.sub;
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const itemId = parseInt(req.params.id);
    const { quantity } = updateItemSchema.parse(req.body);
    const item = await cartRepository.updateItemQuantity(userId, itemId, quantity);
    res.set("Cache-Control", "no-store");
    res.json(item);
  } catch (error) {
    console.error("Error updating cart item:", error);
    res.status(500).json({ message: "Failed to update cart item" });
  }
});
router.delete("/items/:id", async (req, res) => {
  try {
    const userId = req.session?.userId || req.user?.claims?.sub;
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const itemId = parseInt(req.params.id);
    await cartRepository.removeItem(userId, itemId);
    res.set("Cache-Control", "no-store");
    res.json({ success: true });
  } catch (error) {
    console.error("Error removing cart item:", error);
    res.status(500).json({ message: "Failed to remove cart item" });
  }
});
router.delete("/", async (req, res) => {
  try {
    const userId = req.session?.userId || req.user?.claims?.sub;
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    await cartRepository.clearCart(userId);
    res.set("Cache-Control", "no-store");
    res.json({ success: true, items: [], summary: { subtotal: 0, deliveryFee: 0, discount: 0, total: 0, itemCount: 0 } });
  } catch (error) {
    console.error("Error clearing cart:", error);
    res.status(500).json({ message: "Failed to clear cart" });
  }
});
var cart_routes_default = router;

// server/routes/address.routes.ts
import { Router as Router2 } from "express";

// server/storage/address.repository.ts
init_db();
init_schema();
import { eq as eq3, and as and3 } from "drizzle-orm";
var AddressRepository = class {
  async getAddressesByUser(userId) {
    return await db.query.addresses.findMany({
      where: eq3(addresses.userId, userId),
      orderBy: (addresses3, { desc: desc13 }) => [desc13(addresses3.isDefault)]
    });
  }
  async getAddressById(addressId) {
    return await db.query.addresses.findFirst({
      where: eq3(addresses.id, addressId)
    });
  }
  async createAddress(data) {
    if (data.isDefault) {
      await db.update(addresses).set({ isDefault: false }).where(eq3(addresses.userId, data.userId));
    }
    const [address] = await db.insert(addresses).values(data).returning();
    return address;
  }
  async updateAddress(addressId, userId, data) {
    if (data.isDefault) {
      await db.update(addresses).set({ isDefault: false }).where(eq3(addresses.userId, userId));
    }
    const [updated] = await db.update(addresses).set(data).where(and3(eq3(addresses.id, addressId), eq3(addresses.userId, userId))).returning();
    return updated;
  }
  async deleteAddress(addressId, userId) {
    await db.delete(addresses).where(and3(eq3(addresses.id, addressId), eq3(addresses.userId, userId)));
  }
  async setDefaultAddress(addressId, userId) {
    await db.update(addresses).set({ isDefault: false }).where(eq3(addresses.userId, userId));
    const [updated] = await db.update(addresses).set({ isDefault: true }).where(and3(eq3(addresses.id, addressId), eq3(addresses.userId, userId))).returning();
    return updated;
  }
  async getDefaultAddress(userId) {
    return await db.query.addresses.findFirst({
      where: and3(eq3(addresses.userId, userId), eq3(addresses.isDefault, true))
    });
  }
};
var addressRepository = new AddressRepository();

// server/routes/address.routes.ts
init_schema();
var router2 = Router2();
router2.use(isAuthenticated);
router2.get("/", async (req, res) => {
  try {
    const userId = req.session?.userId || req.user?.claims?.sub;
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const addresses3 = await addressRepository.getAddressesByUser(userId);
    res.json(addresses3);
  } catch (error) {
    console.error("Error fetching addresses:", error);
    res.status(500).json({ message: "Failed to fetch addresses" });
  }
});
router2.get("/:id", async (req, res) => {
  try {
    const addressId = parseInt(req.params.id);
    const address = await addressRepository.getAddressById(addressId);
    if (!address) {
      return res.status(404).json({ message: "Address not found" });
    }
    res.json(address);
  } catch (error) {
    console.error("Error fetching address:", error);
    res.status(500).json({ message: "Failed to fetch address" });
  }
});
router2.post("/", async (req, res) => {
  try {
    const userId = req.session?.userId || req.user?.claims?.sub;
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const addressData = insertAddressSchema.parse({ ...req.body, userId });
    const address = await addressRepository.createAddress(addressData);
    res.json(address);
  } catch (error) {
    console.error("Error creating address:", error);
    res.status(500).json({ message: "Failed to create address" });
  }
});
router2.patch("/:id", async (req, res) => {
  try {
    const userId = req.session?.userId || req.user?.claims?.sub;
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const addressId = parseInt(req.params.id);
    const addressData = req.body;
    const address = await addressRepository.updateAddress(addressId, userId, addressData);
    res.json(address);
  } catch (error) {
    console.error("Error updating address:", error);
    res.status(500).json({ message: "Failed to update address" });
  }
});
router2.delete("/:id", async (req, res) => {
  try {
    const userId = req.session?.userId || req.user?.claims?.sub;
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const addressId = parseInt(req.params.id);
    await addressRepository.deleteAddress(addressId, userId);
    res.json({ success: true });
  } catch (error) {
    console.error("Error deleting address:", error);
    res.status(500).json({ message: "Failed to delete address" });
  }
});
router2.patch("/:id/set-default", async (req, res) => {
  try {
    const userId = req.session?.userId || req.user?.claims?.sub;
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const addressId = parseInt(req.params.id);
    const address = await addressRepository.setDefaultAddress(addressId, userId);
    res.json(address);
  } catch (error) {
    console.error("Error setting default address:", error);
    res.status(500).json({ message: "Failed to set default address" });
  }
});
var address_routes_default = router2;

// server/routes/order.routes.ts
init_db();
init_schema();
import { Router as Router3 } from "express";
import { eq as eq4, and as and4 } from "drizzle-orm";
import { z as z2 } from "zod";
var router3 = Router3();
var createOrderSchema = z2.object({
  items: z2.array(z2.any()).optional(),
  total: z2.number(),
  paymentMethod: z2.enum(["cash", "razorpay", "cod", "upi", "card", "netbanking"]).default("cod"),
  paymentStatus: z2.string().default("pending"),
  userInfo: z2.object({
    firstName: z2.string().optional(),
    lastName: z2.string().optional(),
    phone: z2.string(),
    address: z2.string(),
    email: z2.string().optional()
  }).optional()
});
router3.post("/", async (req, res) => {
  try {
    const userId = req.session?.userId || req.user?.claims?.sub;
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const payload = createOrderSchema.parse(req.body);
    const userCarts = await db.select().from(cart).where(eq4(cart.userId, userId));
    if (userCarts.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }
    const cartItemsList = (await Promise.all(
      userCarts.map(
        (userCart) => db.query.cartItems.findMany({
          where: eq4(cartItems.cartId, userCart.id)
        })
      )
    )).flat();
    if (cartItemsList.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }
    let totalAmount = 0;
    for (const item of cartItemsList) {
      totalAmount += Number(item.price || 0) * Number(item.quantity || 0);
    }
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    const todayDate = today.toISOString().split("T")[0];
    let paymentMethod = payload.paymentMethod;
    if (paymentMethod === "cash") paymentMethod = "cod";
    const deliveryAddress = payload.userInfo?.address || "Delivery Address";
    const [newOrder] = await db.insert(orders).values({
      userId,
      totalAmount: totalAmount.toString(),
      deliveryAddress,
      paymentMethod,
      paymentStatus: payload.paymentStatus,
      status: "PLACED",
      deliveryDate: todayDate,
      liters: cartItemsList.reduce((sum, item) => sum + Number(item.quantity || 0), 0)
    }).returning();
    for (const item of cartItemsList) {
      await db.insert(orderItems).values({
        orderId: newOrder.id,
        productId: item.productId,
        quantity: Number(item.quantity || 0),
        price: item.price || "0",
        totalPrice: (Number(item.price || 0) * Number(item.quantity || 0)).toString()
      });
      const product = item.productId ? await db.query.products.findFirst({
        where: eq4(products.id, item.productId)
      }) : null;
      if (product) {
        const newStock = Math.max(0, Number(product.stock || 0) - Number(item.quantity || 0));
        await db.update(products).set({ stock: newStock }).where(eq4(products.id, item.productId));
      }
    }
    await Promise.all(userCarts.map((userCart) => db.delete(cartItems).where(eq4(cartItems.cartId, userCart.id))));
    res.set("Cache-Control", "no-store");
    res.status(201).json({ ...newOrder, cartCleared: true, clearedCartIds: userCarts.map((cart2) => cart2.id) });
  } catch (error) {
    console.error("Error creating order:", error);
    if (error.name === "ZodError") {
      return res.status(400).json({ message: "Invalid order data" });
    }
    res.status(500).json({ message: "Failed to create order" });
  }
});
router3.get("/", async (req, res) => {
  try {
    const userId = req.session?.userId || req.user?.claims?.sub;
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const userOrders = await db.select().from(orders).where(eq4(orders.userId, userId));
    const ordersWithItems = await Promise.all(
      userOrders.map(async (order) => {
        const items = await db.select().from(orderItems).where(eq4(orderItems.orderId, order.id));
        const itemsWithProducts = await Promise.all(
          items.map(async (item) => {
            const product = item.productId ? await db.query.products.findFirst({
              where: eq4(products.id, item.productId)
            }) : null;
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
router3.get("/:id", async (req, res) => {
  try {
    const userId = req.session?.userId || req.user?.claims?.sub;
    const orderId = parseInt(req.params.id);
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const [order] = await db.select().from(orders).where(and4(eq4(orders.id, orderId), eq4(orders.userId, userId)));
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    const items = await db.select().from(orderItems).where(eq4(orderItems.orderId, orderId));
    const itemsWithProducts = await Promise.all(
      items.map(async (item) => {
        const product = item.productId ? await db.query.products.findFirst({
          where: eq4(products.id, item.productId)
        }) : null;
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
var order_routes_default = router3;

// server/routes/support.routes.ts
import { Router as Router4 } from "express";

// server/storage/support.repository.ts
init_db();
init_schema();
import { eq as eq5, desc as desc2 } from "drizzle-orm";
var SupportRepository = class {
  async getTicketsByUser(userId) {
    return await db.query.supportTickets.findMany({
      where: eq5(supportTickets.userId, userId),
      orderBy: [desc2(supportTickets.createdAt)]
    });
  }
  async getTicketById(ticketId) {
    const ticket = await db.query.supportTickets.findFirst({
      where: eq5(supportTickets.id, ticketId)
    });
    if (!ticket) return null;
    const messages = await db.query.ticketMessages.findMany({
      where: eq5(ticketMessages.ticketId, ticketId),
      orderBy: (ticketMessages2, { asc: asc7 }) => [asc7(ticketMessages2.createdAt)]
    });
    return { ticket, messages };
  }
  async createTicket(data) {
    const [ticket] = await db.insert(supportTickets).values(data).returning();
    return ticket;
  }
  async addMessage(data) {
    const [message] = await db.insert(ticketMessages).values(data).returning();
    await db.update(supportTickets).set({ updatedAt: /* @__PURE__ */ new Date() }).where(eq5(supportTickets.id, data.ticketId));
    return message;
  }
  async updateTicketStatus(ticketId, status) {
    const [updated] = await db.update(supportTickets).set({
      status,
      updatedAt: /* @__PURE__ */ new Date(),
      ...status === "resolved" || status === "closed" ? { resolvedAt: /* @__PURE__ */ new Date() } : {}
    }).where(eq5(supportTickets.id, ticketId)).returning();
    return updated;
  }
  async getFaqs(category) {
    if (category) {
      return await db.query.faqs.findMany({
        where: eq5(faqs.category, category),
        orderBy: (faqs2, { asc: asc7 }) => [asc7(faqs2.order)]
      });
    }
    return await db.query.faqs.findMany({
      where: eq5(faqs.isActive, true),
      orderBy: (faqs2, { asc: asc7 }) => [asc7(faqs2.order)]
    });
  }
};
var supportRepository = new SupportRepository();

// server/routes/support.routes.ts
init_schema();
var router4 = Router4();
var requireAuth = (req, res, next) => {
  if (req.path.startsWith("/faqs")) {
    return next();
  }
  return isAuthenticated(req, res, next);
};
router4.use(requireAuth);
router4.get("/tickets", async (req, res) => {
  try {
    const userId = req.user.claims.sub;
    const tickets = await supportRepository.getTicketsByUser(userId);
    res.json(tickets);
  } catch (error) {
    console.error("Error fetching tickets:", error);
    res.status(500).json({ message: "Failed to fetch support tickets" });
  }
});
router4.get("/tickets/:id", async (req, res) => {
  try {
    const ticketId = parseInt(req.params.id);
    const result = await supportRepository.getTicketById(ticketId);
    if (!result) {
      return res.status(404).json({ message: "Ticket not found" });
    }
    res.json(result);
  } catch (error) {
    console.error("Error fetching ticket:", error);
    res.status(500).json({ message: "Failed to fetch ticket" });
  }
});
router4.post("/tickets", async (req, res) => {
  try {
    const userId = req.user.claims.sub;
    const ticketData = insertSupportTicketSchema.parse({ ...req.body, userId });
    const ticket = await supportRepository.createTicket(ticketData);
    res.json(ticket);
  } catch (error) {
    console.error("Error creating ticket:", error);
    res.status(500).json({ message: "Failed to create support ticket" });
  }
});
router4.post("/tickets/:id/messages", async (req, res) => {
  try {
    const userId = req.user.claims.sub;
    const ticketId = parseInt(req.params.id);
    const messageData = insertTicketMessageSchema.parse({
      ...req.body,
      ticketId,
      userId,
      isStaff: false
    });
    const message = await supportRepository.addMessage(messageData);
    res.json(message);
  } catch (error) {
    console.error("Error adding message:", error);
    res.status(500).json({ message: "Failed to add message" });
  }
});
router4.get("/faqs", async (req, res) => {
  try {
    const category = req.query.category;
    const faqs2 = await supportRepository.getFaqs(category);
    res.json(faqs2);
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    res.status(500).json({ message: "Failed to fetch FAQs" });
  }
});
var support_routes_default = router4;

// server/routes/offers.routes.ts
import { Router as Router5 } from "express";

// server/storage/offers.repository.ts
init_db();
init_schema();
import { eq as eq6, and as and5, sql } from "drizzle-orm";
var OffersRepository = class {
  async getActiveOffers() {
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    return await db.query.offers.findMany({
      where: and5(
        eq6(offers.isActive, true),
        sql`${offers.validFrom} <= ${today}`,
        sql`${offers.validTo} >= ${today}`
      ),
      orderBy: (offers2, { desc: desc13 }) => [desc13(offers2.createdAt)]
    });
  }
  async getOfferById(offerId) {
    return await db.query.offers.findFirst({
      where: eq6(offers.id, offerId)
    });
  }
  async validateCoupon(code) {
    const coupon = await db.query.coupons.findFirst({
      where: eq6(coupons.code, code.toUpperCase())
    });
    if (!coupon) {
      return { valid: false, message: "Invalid coupon code" };
    }
    if (!coupon.isActive) {
      return { valid: false, message: "This coupon is no longer active" };
    }
    const today = /* @__PURE__ */ new Date();
    if (today < new Date(coupon.validFrom) || today > new Date(coupon.validTo)) {
      return { valid: false, message: "This coupon has expired" };
    }
    if (coupon.usageLimit && (coupon.usageCount || 0) >= coupon.usageLimit) {
      return { valid: false, message: "This coupon has reached its usage limit" };
    }
    return { valid: true, coupon };
  }
  async applyCoupon(code, orderAmount) {
    const validation = await this.validateCoupon(code);
    if (!validation.valid || !validation.coupon) {
      throw new Error(validation.message || "Invalid coupon");
    }
    const coupon = validation.coupon;
    if (coupon.minOrderValue && orderAmount < parseFloat(coupon.minOrderValue)) {
      throw new Error(`Minimum order value of \u20B9${coupon.minOrderValue} required`);
    }
    let discount = 0;
    if (coupon.discountType === "percentage") {
      discount = orderAmount * parseFloat(coupon.discountValue) / 100;
      if (coupon.maxDiscount && discount > parseFloat(coupon.maxDiscount)) {
        discount = parseFloat(coupon.maxDiscount);
      }
    } else {
      discount = parseFloat(coupon.discountValue);
    }
    return { discount, coupon };
  }
  async incrementCouponUsage(couponId) {
    await db.update(coupons).set({ usageCount: sql`${coupons.usageCount} + 1` }).where(eq6(coupons.id, couponId));
  }
};
var offersRepository = new OffersRepository();

// server/routes/offers.routes.ts
import { z as z3 } from "zod";
var router5 = Router5();
router5.get("/", async (req, res) => {
  try {
    const offers2 = await offersRepository.getActiveOffers();
    res.json(offers2);
  } catch (error) {
    console.error("Error fetching offers:", error);
    res.status(500).json({ message: "Failed to fetch offers" });
  }
});
router5.get("/:id", async (req, res) => {
  try {
    const offerId = parseInt(req.params.id);
    const offer = await offersRepository.getOfferById(offerId);
    if (!offer) {
      return res.status(404).json({ message: "Offer not found" });
    }
    res.json(offer);
  } catch (error) {
    console.error("Error fetching offer:", error);
    res.status(500).json({ message: "Failed to fetch offer" });
  }
});
var validateCouponSchema = z3.object({
  code: z3.string()
});
router5.post("/validate-coupon", async (req, res) => {
  try {
    const { code } = validateCouponSchema.parse(req.body);
    const result = await offersRepository.validateCoupon(code);
    res.json(result);
  } catch (error) {
    console.error("Error validating coupon:", error);
    res.status(500).json({ message: "Failed to validate coupon" });
  }
});
var applyCouponSchema = z3.object({
  code: z3.string(),
  orderAmount: z3.number().positive()
});
router5.post("/apply-coupon", async (req, res) => {
  try {
    const { code, orderAmount } = applyCouponSchema.parse(req.body);
    const result = await offersRepository.applyCoupon(code, orderAmount);
    res.json(result);
  } catch (error) {
    console.error("Error applying coupon:", error);
    res.status(400).json({ message: error.message || "Failed to apply coupon" });
  }
});
var offers_routes_default = router5;

// server/routes/subscription.routes.ts
init_db();
init_schema();
import { Router as Router6 } from "express";
import { eq as eq7, and as and6 } from "drizzle-orm";
var router6 = Router6();
router6.use(isAuthenticated);
var toAmount = (value) => {
  const amount = Number.parseFloat(`${value ?? 0}`);
  return Number.isFinite(amount) ? amount : 0;
};
var getMonthlyDeliveryCount = (frequency) => {
  const normalized = `${frequency || "daily"}`.toLowerCase().trim();
  if (normalized.includes("week")) return 4;
  if (normalized.includes("alternate") || normalized.includes("every other")) return 15;
  if (normalized.includes("month")) return 1;
  return 30;
};
router6.post("/", async (req, res) => {
  try {
    const userId = req.session?.userId || req.user?.claims?.sub;
    if (!userId) return res.status(401).json({ message: "Unauthorized" });
    const { productId, quantity, frequency, deliveryTime } = req.body;
    const productIdInt = parseInt(productId);
    const product = await db.query.products.findFirst({
      where: eq7(products.id, productIdInt)
    });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    const tomorrow = /* @__PURE__ */ new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowStr = tomorrow.toISOString().split("T")[0];
    const deliveryStartDate = new Date(tomorrowStr);
    const newSub = await db.insert(milkSubscriptions).values({
      userId,
      productId: productIdInt,
      quantity: parseInt(quantity),
      frequency,
      deliveryTime,
      startDate: tomorrowStr,
      status: "ACTIVE",
      pricePerL: product.price
    }).returning();
    res.status(201).json({ message: "Subscription created", subscription: newSub[0] });
  } catch (error) {
    console.error("Error creating subscription:", error);
    res.status(500).json({ message: "Failed to create subscription" });
  }
});
router6.get("/me", async (req, res) => {
  try {
    const userId = req.session?.userId || req.user?.claims?.sub;
    if (!userId) return res.status(401).json({ message: "Unauthorized" });
    const subscriptions = await db.select().from(milkSubscriptions).where(eq7(milkSubscriptions.userId, userId));
    const todayStr = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    const todayDate = new Date(todayStr);
    const subscriptionsWithProducts = await Promise.all(
      subscriptions.map(async (sub) => {
        const product = sub.productId ? await db.query.products.findFirst({
          where: eq7(products.id, sub.productId)
        }) : void 0;
        const perDeliveryAmount = toAmount(sub.pricePerL || product?.price) * toAmount(sub.quantity || 1);
        const monthlyDeliveryCount = getMonthlyDeliveryCount(sub.frequency);
        const todayDelivery = await db.query.subscriptionDeliveries.findFirst({
          where: and6(
            eq7(subscriptionDeliveries.subscriptionId, sub.id),
            eq7(subscriptionDeliveries.deliveryDate, todayStr)
          )
        });
        return {
          ...sub,
          product,
          perDeliveryAmount,
          monthlyDeliveryCount,
          monthlyAmount: perDeliveryAmount * monthlyDeliveryCount,
          todayDeliveryStatus: todayDelivery ? todayDelivery.status : "Pending",
          todayDeliveryConfirmed: todayDelivery ? todayDelivery.confirmedByUser : false
        };
      })
    );
    res.json(subscriptionsWithProducts || []);
  } catch (error) {
    console.error("Error fetching subscriptions:", error);
    res.status(500).json({ message: "Failed to fetch subscriptions" });
  }
});
router6.post("/:id/confirm-delivery", async (req, res) => {
  try {
    const userId = req.session?.userId || req.user?.claims?.sub;
    if (!userId) return res.status(401).json({ message: "Unauthorized" });
    const subscriptionId = parseInt(req.params.id);
    const todayStr = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    const todayDate = new Date(todayStr);
    const subscription = await db.query.milkSubscriptions.findFirst({
      where: and6(
        eq7(milkSubscriptions.id, subscriptionId),
        eq7(milkSubscriptions.userId, userId)
      )
    });
    if (!subscription) {
      return res.status(404).json({ message: "Subscription not found" });
    }
    if (subscription.status !== "ACTIVE") {
      return res.status(400).json({ message: "Subscription is not active" });
    }
    const existingDelivery = await db.query.subscriptionDeliveries.findFirst({
      where: and6(
        eq7(subscriptionDeliveries.subscriptionId, subscriptionId),
        eq7(subscriptionDeliveries.deliveryDate, todayStr)
      )
    });
    if (existingDelivery) {
      if (existingDelivery.confirmedByUser) {
        return res.status(400).json({ message: "Milk delivery already confirmed for today" });
      }
      const updated = await db.update(subscriptionDeliveries).set({
        status: "Delivered",
        confirmedByUser: true,
        confirmedAt: /* @__PURE__ */ new Date()
      }).where(eq7(subscriptionDeliveries.id, existingDelivery.id)).returning();
      return res.json({ message: "Today's delivery marked as received", delivery: updated[0] });
    } else {
      const newDelivery = await db.insert(subscriptionDeliveries).values({
        subscriptionId,
        userId,
        deliveryDate: todayStr,
        quantity: subscription.quantity,
        status: "Delivered",
        confirmedByUser: true,
        confirmedAt: /* @__PURE__ */ new Date()
      }).returning();
      return res.json({ message: "Today's delivery marked as received", delivery: newDelivery[0] });
    }
  } catch (error) {
    console.error("Error confirming delivery:", error);
    res.status(500).json({ message: "Failed to confirm delivery" });
  }
});
router6.put("/:id", async (req, res) => {
  try {
    const userId = req.session?.userId || req.user?.claims?.sub;
    if (!userId) return res.status(401).json({ message: "Unauthorized" });
    const subscriptionId = parseInt(req.params.id);
    const { quantity, frequency, deliveryTime } = req.body;
    const updated = await db.update(milkSubscriptions).set({ quantity: parseFloat(quantity), frequency, deliveryTime }).where(and6(eq7(milkSubscriptions.id, subscriptionId), eq7(milkSubscriptions.userId, userId))).returning();
    if (!updated.length) {
      return res.status(404).json({ message: "Subscription not found" });
    }
    res.json(updated[0]);
  } catch (error) {
    console.error("Error updating subscription:", error);
    res.status(500).json({ message: "Failed to update subscription" });
  }
});
router6.put("/:id/pause", async (req, res) => {
  try {
    const userId = req.session?.userId || req.user?.claims?.sub;
    if (!userId) return res.status(401).json({ message: "Unauthorized" });
    const subscriptionId = parseInt(req.params.id);
    const updated = await db.update(milkSubscriptions).set({ status: "PAUSED" }).where(and6(eq7(milkSubscriptions.id, subscriptionId), eq7(milkSubscriptions.userId, userId))).returning();
    if (!updated.length) {
      return res.status(404).json({ message: "Subscription not found" });
    }
    res.json(updated[0]);
  } catch (error) {
    console.error("Error pausing subscription:", error);
    res.status(500).json({ message: "Failed to pause subscription" });
  }
});
router6.put("/:id/resume", async (req, res) => {
  try {
    const userId = req.session?.userId || req.user?.claims?.sub;
    if (!userId) return res.status(401).json({ message: "Unauthorized" });
    const subscriptionId = parseInt(req.params.id);
    const updated = await db.update(milkSubscriptions).set({ status: "ACTIVE" }).where(and6(eq7(milkSubscriptions.id, subscriptionId), eq7(milkSubscriptions.userId, userId))).returning();
    if (!updated.length) {
      return res.status(404).json({ message: "Subscription not found" });
    }
    res.json(updated[0]);
  } catch (error) {
    console.error("Error resuming subscription:", error);
    res.status(500).json({ message: "Failed to resume subscription" });
  }
});
router6.put("/:id/skip-tomorrow", async (req, res) => {
  try {
    const userId = req.session?.userId || req.user?.claims?.sub;
    if (!userId) return res.status(401).json({ message: "Unauthorized" });
    const subscriptionId = parseInt(req.params.id);
    const tomorrow = /* @__PURE__ */ new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    await db.insert(subscriptionDeliveries).values({
      subscriptionId,
      userId,
      deliveryDate: tomorrow.toISOString().split("T")[0],
      quantity: 0,
      status: "SKIPPED"
    });
    res.json({ message: "Tomorrow's delivery skipped" });
  } catch (error) {
    console.error("Error skipping delivery:", error);
    res.status(500).json({ message: "Failed to skip delivery" });
  }
});
router6.delete("/:id", async (req, res) => {
  try {
    const userId = req.session?.userId || req.user?.claims?.sub;
    if (!userId) return res.status(401).json({ message: "Unauthorized" });
    const subscriptionId = parseInt(req.params.id);
    const updated = await db.update(milkSubscriptions).set({ status: "CANCELLED" }).where(and6(eq7(milkSubscriptions.id, subscriptionId), eq7(milkSubscriptions.userId, userId))).returning();
    if (!updated.length) {
      return res.status(404).json({ message: "Subscription not found" });
    }
    res.json({ message: "Subscription cancelled" });
  } catch (error) {
    console.error("Error cancelling subscription:", error);
    res.status(500).json({ message: "Failed to cancel subscription" });
  }
});
router6.get("/me/history", async (req, res) => {
  try {
    const userId = req.session?.userId || req.user?.claims?.sub;
    if (!userId) return res.status(401).json({ message: "Unauthorized" });
    const deliveries = await db.select().from(subscriptionDeliveries).where(eq7(subscriptionDeliveries.userId, userId));
    res.json(deliveries);
  } catch (error) {
    console.error("Error fetching delivery history:", error);
    res.status(500).json({ message: "Failed to fetch history" });
  }
});
var subscription_routes_default = router6;

// server/routes/admin-subscriptions.routes.ts
init_db();
init_schema();
import { Router as Router7 } from "express";
import { eq as eq8 } from "drizzle-orm";

// server/middleware/auth.ts
function checkRole(allowedRoles) {
  return async (req, res, next) => {
    if (req.session?.isAdminLoggedIn && allowedRoles.includes("admin")) {
      return next();
    }
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized - Please log in" });
    }
    try {
      const freshUser = await storage.getUser(req.user.id);
      const userRole = freshUser?.role || req.user.role;
      if (!allowedRoles.includes(userRole)) {
        return res.status(403).json({
          message: `Forbidden - This endpoint requires one of these roles: ${allowedRoles.join(", ")}`,
          yourRole: userRole
        });
      }
      req.user.role = userRole;
      next();
    } catch (error) {
      console.error("Error checking user role:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };
}
async function requireAdminAccess(req, res, next) {
  if (req.session?.isAdminLoggedIn) {
    console.log(`\u2705 Authorized ${req.method} ${req.originalUrl} via Admin Session`);
    return next();
  }
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized - Please log in" });
  }
  try {
    const freshUser = await storage.getUser(req.user.id);
    const userRole = freshUser?.role || req.user.role;
    if (userRole !== "admin") {
      console.log(`\u{1F6AB} 403 Forbidden - Admin access required for ${req.method} ${req.originalUrl}. userRole:`, userRole);
      return res.status(403).json({
        message: "Admin access required (middleware/auth)",
        yourRole: userRole
      });
    }
    req.user.role = userRole;
    console.log(`\u2705 Authorized ${req.method} ${req.originalUrl} for user:`, freshUser?.id);
    next();
  } catch (error) {
    console.error("Error checking user role:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
var requireCustomer = checkRole(["customer"]);
var requireVendor = checkRole(["vendor"]);
var requireDelivery = checkRole(["delivery"]);
var requireAdmin = checkRole(["admin"]);
var requireCustomerOrAdmin = checkRole(["customer", "admin"]);
var requireVendorOrAdmin = checkRole(["vendor", "admin"]);

// server/routes/admin-subscriptions.routes.ts
var router7 = Router7();
router7.get("/", requireAdminAccess, async (req, res) => {
  try {
    const allSubs = await db.select().from(milkSubscriptions);
    const withDetails = await Promise.all(
      allSubs.map(async (sub) => {
        const customer = await db.query.users.findFirst({
          where: eq8(users.id, sub.userId)
        });
        const product = await db.query.products.findFirst({
          where: eq8(products.id, sub.productId)
        });
        return { ...sub, customer, product };
      })
    );
    res.json(withDetails);
  } catch (error) {
    console.error("Error fetching subscriptions:", error);
    res.status(500).json({ message: "Failed to fetch subscriptions" });
  }
});
router7.get("/today/requirement", requireAdminAccess, async (req, res) => {
  try {
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    const deliveries = await db.select().from(subscriptionDeliveries).where(eq8(subscriptionDeliveries.deliveryDate, today));
    const totalRequired = deliveries.reduce((sum, d) => sum + (d.quantity || 0), 0);
    res.json({
      date: today,
      totalRequired,
      deliveryCount: deliveries.length,
      deliveries
    });
  } catch (error) {
    console.error("Error fetching daily requirement:", error);
    res.status(500).json({ message: "Failed to fetch daily requirement" });
  }
});
router7.patch("/:id/status", requireAdminAccess, async (req, res) => {
  try {
    const subId = parseInt(req.params.id);
    const { status } = req.body;
    const updated = await db.update(milkSubscriptions).set({ status }).where(eq8(milkSubscriptions.id, subId)).returning();
    if (!updated.length) {
      return res.status(404).json({ message: "Subscription not found" });
    }
    res.json(updated[0]);
  } catch (error) {
    console.error("Error updating subscription:", error);
    res.status(500).json({ message: "Failed to update subscription" });
  }
});
router7.post("/", requireAdminAccess, async (req, res) => {
  try {
    const { userId, productId, quantity, frequency, deliveryTime, pricePerL } = req.body;
    if (!userId || !productId) {
      return res.status(400).json({ message: "Customer and Product are required" });
    }
    const productIdInt = parseInt(productId);
    const product = await db.query.products.findFirst({
      where: eq8(products.id, productIdInt)
    });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    const tomorrow = /* @__PURE__ */ new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowStr = tomorrow.toISOString().split("T")[0];
    const newSub = await db.insert(milkSubscriptions).values({
      userId,
      productId: productIdInt,
      quantity: parseInt(quantity || "1"),
      frequency: frequency || "daily",
      deliveryTime: deliveryTime || "7-8 AM",
      startDate: tomorrowStr,
      status: "ACTIVE",
      pricePerL: pricePerL !== void 0 && pricePerL !== "" ? pricePerL.toString() : product.price
    }).returning();
    res.status(201).json({ message: "Subscription created", subscription: newSub[0] });
  } catch (error) {
    console.error("Error creating subscription:", error);
    res.status(500).json({ message: "Failed to create subscription" });
  }
});
router7.put("/:id", requireAdminAccess, async (req, res) => {
  try {
    const subId = parseInt(req.params.id);
    const { userId, productId, quantity, frequency, deliveryTime, pricePerL } = req.body;
    const productIdInt = parseInt(productId);
    const product = await db.query.products.findFirst({
      where: eq8(products.id, productIdInt)
    });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    const updated = await db.update(milkSubscriptions).set({
      userId,
      productId: productIdInt,
      quantity: parseInt(quantity || "1"),
      frequency: frequency || "daily",
      deliveryTime: deliveryTime || "7-8 AM",
      pricePerL: pricePerL !== void 0 && pricePerL !== "" ? pricePerL.toString() : product.price
    }).where(eq8(milkSubscriptions.id, subId)).returning();
    if (!updated.length) {
      return res.status(404).json({ message: "Subscription not found" });
    }
    res.json({ message: "Subscription updated", subscription: updated[0] });
  } catch (error) {
    console.error("Error updating subscription:", error);
    res.status(500).json({ message: "Failed to update subscription" });
  }
});
router7.delete("/:id", requireAdminAccess, async (req, res) => {
  try {
    const subId = parseInt(req.params.id);
    const deleted = await db.delete(milkSubscriptions).where(eq8(milkSubscriptions.id, subId)).returning();
    if (!deleted.length) {
      return res.status(404).json({ message: "Subscription not found" });
    }
    res.json({ message: "Subscription deleted", subscription: deleted[0] });
  } catch (error) {
    console.error("Error deleting subscription:", error);
    res.status(500).json({ message: "Failed to delete subscription" });
  }
});
router7.get("/dashboard-summary", requireAdminAccess, async (req, res) => {
  try {
    const todayStr = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    const todayDate = new Date(todayStr);
    const tomorrow = /* @__PURE__ */ new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowStr = tomorrow.toISOString().split("T")[0];
    const tomorrowDate = new Date(tomorrowStr);
    const allSubs = await db.select().from(milkSubscriptions);
    const activeSubs = allSubs.filter((s) => s.status === "ACTIVE");
    const activeSubscriptionsCount = activeSubs.length;
    const todayActive = activeSubs.filter((s) => {
      const start = s.startDate ? new Date(s.startDate) : null;
      return start && start <= todayDate;
    });
    const todayRequired = todayActive.reduce((sum, s) => sum + parseFloat(s.quantity.toString()), 0);
    const tomorrowActive = activeSubs.filter((s) => {
      const start = s.startDate ? new Date(s.startDate) : null;
      return start && start <= tomorrowDate;
    });
    const tomorrowRequired = tomorrowActive.reduce((sum, s) => sum + parseFloat(s.quantity.toString()), 0);
    const todayDeliveries = await db.select().from(subscriptionDeliveries).where(eq8(subscriptionDeliveries.deliveryDate, todayStr));
    const todayDelivered = todayDeliveries.filter((d) => d.status?.toLowerCase() === "delivered").reduce((sum, d) => sum + parseFloat((d.quantity || 0).toString()), 0);
    const todayRemaining = Math.max(0, todayRequired - todayDelivered);
    const deliveredSubIds = new Set(
      todayDeliveries.filter((d) => d.status?.toLowerCase() === "delivered").map((d) => d.subscriptionId)
    );
    const pendingDeliveriesTodayCount = todayActive.filter((s) => !deliveredSubIds.has(s.id)).length;
    res.json({
      todayRequired,
      todayDelivered,
      todayRemaining,
      tomorrowRequired,
      activeSubscriptionsCount,
      pendingDeliveriesTodayCount
    });
  } catch (error) {
    console.error("Error fetching dashboard summary:", error);
    res.status(500).json({ message: "Failed to fetch dashboard summary" });
  }
});
router7.get("/deliveries", requireAdminAccess, async (req, res) => {
  try {
    const dateParam = req.query.date;
    const queryDateStr = dateParam || (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    const queryDate = new Date(queryDateStr);
    const allSubs = await db.select().from(milkSubscriptions);
    const actualDeliveries = await db.select().from(subscriptionDeliveries).where(eq8(subscriptionDeliveries.deliveryDate, queryDateStr));
    const deliveryMap = new Map(actualDeliveries.map((d) => [d.subscriptionId, d]));
    const trackingList = await Promise.all(
      allSubs.filter((sub) => {
        if (deliveryMap.has(sub.id)) return true;
        if (sub.status !== "ACTIVE") return false;
        const start = sub.startDate ? new Date(sub.startDate) : null;
        return start && start <= queryDate;
      }).map(async (sub) => {
        const customer = await db.query.users.findFirst({
          where: eq8(users.id, sub.userId)
        });
        const product = await db.query.products.findFirst({
          where: eq8(products.id, sub.productId)
        });
        const delivery = deliveryMap.get(sub.id);
        return {
          id: delivery?.id || `virtual-${sub.id}`,
          subscriptionId: sub.id,
          customerId: sub.userId,
          customerName: customer ? `${customer.firstName || ""} ${customer.lastName || ""}`.trim() : "Unknown Customer",
          productName: product ? product.name : "Unknown Product",
          quantity: delivery ? delivery.quantity || 0 : sub.quantity,
          status: delivery ? delivery.status : "Pending",
          confirmedByUser: delivery ? delivery.confirmedByUser : false,
          confirmedAt: delivery ? delivery.confirmedAt : null,
          deliveryDate: queryDateStr
        };
      })
    );
    trackingList.sort((a, b) => a.customerName.localeCompare(b.customerName));
    res.json(trackingList);
  } catch (error) {
    console.error("Error fetching deliveries list:", error);
    res.status(500).json({ message: "Failed to fetch deliveries list" });
  }
});
var admin_subscriptions_routes_default = router7;

// server/routes/admin-customers.routes.ts
init_db();
init_schema();
import { Router as Router8 } from "express";
import { and as and7, desc as desc3, eq as eq9, inArray, ne, sql as sql2 } from "drizzle-orm";
var router8 = Router8();
var crmTablesReady = false;
var ensureCrmTables = async () => {
  if (crmTablesReady) return;
  await db.execute(sql2`
    CREATE TABLE IF NOT EXISTS admin_customer_notes (
      id SERIAL PRIMARY KEY,
      customer_id VARCHAR NOT NULL REFERENCES users(id),
      note_text TEXT NOT NULL,
      added_by_admin_id VARCHAR REFERENCES users(id),
      added_by_admin_name VARCHAR,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW()
    )
  `);
  await db.execute(sql2`
    CREATE TABLE IF NOT EXISTS customer_activity_logs (
      id SERIAL PRIMARY KEY,
      customer_id VARCHAR NOT NULL REFERENCES users(id),
      type VARCHAR NOT NULL,
      title VARCHAR NOT NULL,
      description TEXT,
      metadata JSONB,
      actor_id VARCHAR REFERENCES users(id),
      actor_name VARCHAR,
      created_at TIMESTAMP DEFAULT NOW()
    )
  `);
  await db.execute(sql2`CREATE INDEX IF NOT EXISTS idx_admin_customer_notes_customer_id ON admin_customer_notes(customer_id)`);
  await db.execute(sql2`CREATE INDEX IF NOT EXISTS idx_customer_activity_logs_customer_id ON customer_activity_logs(customer_id)`);
  crmTablesReady = true;
};
var numberValue = (value) => {
  const parsed = Number(value ?? 0);
  return Number.isFinite(parsed) ? parsed : 0;
};
var moneyString = (value) => value.toFixed(2);
var toDateKey = (value) => {
  if (!value) return null;
  if (typeof value === "string") return value.split("T")[0];
  if (value instanceof Date) return value.toISOString().split("T")[0];
  return null;
};
var makeName = (user) => `${user?.firstName || ""} ${user?.lastName || ""}`.trim() || user?.email || user?.phone || "Unknown Customer";
var makeOrderCode = (id) => `ORD${String(id).padStart(4, "0")}`;
var makeInvoiceCode = (id) => `INV${String(id).padStart(4, "0")}`;
var makeSubscriptionCode = (id) => `SUB${String(id).padStart(4, "0")}`;
var getAdminActor = (req) => ({
  actorId: req.user?.id || req.user?.claims?.sub || null,
  actorName: req.user?.claims?.email || (req.session?.isAdminLoggedIn ? "Admin" : "Admin")
});
var addActivityLog = async (customerId, type, title, description, req, metadata = {}) => {
  await ensureCrmTables();
  const actor = getAdminActor(req);
  await db.insert(customerActivityLogs).values({
    customerId,
    type,
    title,
    description,
    metadata,
    actorId: actor.actorId || void 0,
    actorName: actor.actorName
  });
};
var getCustomer = async (customerId) => {
  return db.query.users.findFirst({
    where: eq9(users.id, customerId)
  });
};
var getCustomerAddresses = async (customerId) => {
  return db.select().from(addresses).where(eq9(addresses.userId, customerId));
};
var getDefaultAddress = (customerAddresses) => customerAddresses.find((address) => address.isDefault) || customerAddresses[0] || null;
var getDetailedOrders = async (customerId) => {
  const customerOrders = await db.select().from(orders).where(eq9(orders.userId, customerId)).orderBy(desc3(orders.createdAt));
  const orderIds = customerOrders.map((order) => order.id);
  const itemRows = orderIds.length ? await db.select({ item: orderItems, product: products }).from(orderItems).leftJoin(products, eq9(orderItems.productId, products.id)).where(inArray(orderItems.orderId, orderIds)) : [];
  const itemsByOrder = /* @__PURE__ */ new Map();
  for (const row of itemRows) {
    const id = row.item.orderId;
    if (!id) continue;
    const current = itemsByOrder.get(id) || [];
    current.push({
      ...row.item,
      product: row.product,
      productName: row.product?.name || `Product #${row.item.productId}`,
      unit: row.product?.unit || ""
    });
    itemsByOrder.set(id, current);
  }
  return customerOrders.map((order) => {
    const items = itemsByOrder.get(order.id) || [];
    const totalQuantity = items.reduce((sum, item) => sum + numberValue(item.quantity), 0);
    const productsOrdered = items.length ? items.map((item) => `${item.productName} x ${item.quantity}`).join(", ") : order.liters ? `${order.liters}L milk order` : "Order items unavailable";
    return {
      ...order,
      orderCode: makeOrderCode(order.id),
      products: items,
      productsOrdered,
      quantity: totalQuantity || numberValue(order.liters),
      orderAmount: moneyString(numberValue(order.totalAmount)),
      deliveryStatus: order.status,
      deliveryDate: order.deliveryDate,
      invoiceUrl: null
    };
  });
};
var getDetailedSubscriptions = async (customerId) => {
  const customerSubscriptions = await db.select({ subscription: milkSubscriptions, product: products }).from(milkSubscriptions).leftJoin(products, eq9(milkSubscriptions.productId, products.id)).where(eq9(milkSubscriptions.userId, customerId)).orderBy(desc3(milkSubscriptions.createdAt));
  const subscriptionIds = customerSubscriptions.map((row) => row.subscription.id);
  const deliveryRows = subscriptionIds.length ? await db.select().from(subscriptionDeliveries).where(inArray(subscriptionDeliveries.subscriptionId, subscriptionIds)) : [];
  return customerSubscriptions.map(({ subscription, product }) => {
    const relatedDeliveries = deliveryRows.filter((delivery) => delivery.subscriptionId === subscription.id);
    const deliveredRows = relatedDeliveries.filter((delivery) => `${delivery.status}`.toLowerCase() === "delivered");
    const pendingRows = relatedDeliveries.filter((delivery) => `${delivery.status}`.toLowerCase() === "pending");
    const quantity = numberValue(subscription.quantity);
    const price = numberValue(subscription.pricePerL || product?.price);
    const createdAt = subscription.createdAt ? new Date(subscription.createdAt) : null;
    const createdHour = createdAt ? createdAt.getHours() : null;
    const isBeforeCutoff = createdHour === null ? null : createdHour < 21;
    return {
      ...subscription,
      subscriptionCode: makeSubscriptionCode(subscription.id),
      product,
      productName: product?.name || `Product #${subscription.productId}`,
      dailyQuantity: quantity,
      subscriptionType: subscription.frequency,
      deliveryStartDate: subscription.startDate,
      createdDateTime: subscription.createdAt,
      cutoffStatus: isBeforeCutoff === null ? "unknown" : isBeforeCutoff ? "before_9_pm" : "after_9_pm",
      cutoffMessage: isBeforeCutoff === null ? "Cut-off information is unavailable for this subscription." : isBeforeCutoff ? "This subscription was created before 9 PM, so delivery starts from the next day." : "This subscription was created after 9 PM, so delivery starts from the day after tomorrow.",
      totalDeliveredQuantity: deliveredRows.reduce((sum, delivery) => sum + numberValue(delivery.quantity), 0),
      totalPendingQuantity: pendingRows.reduce((sum, delivery) => sum + numberValue(delivery.quantity || quantity), 0),
      monthlyAmount: moneyString(quantity * price * 30),
      deliveriesCount: relatedDeliveries.length
    };
  });
};
var isSubscriptionDueOn = (subscription, dateKey) => {
  if (`${subscription.status}`.toUpperCase() !== "ACTIVE") return false;
  const startKey = toDateKey(subscription.startDate);
  const endKey = toDateKey(subscription.endDate);
  if (startKey && startKey > dateKey) return false;
  if (endKey && endKey < dateKey) return false;
  const frequency = `${subscription.frequency || "daily"}`.toLowerCase();
  if (frequency === "daily") return true;
  if (!startKey) return false;
  const targetDate = /* @__PURE__ */ new Date(`${dateKey}T00:00:00`);
  const startDate = /* @__PURE__ */ new Date(`${startKey}T00:00:00`);
  if (frequency === "weekly") {
    return targetDate.getDay() === startDate.getDay();
  }
  if (frequency === "alternate") {
    const days = Math.floor((targetDate.getTime() - startDate.getTime()) / 864e5);
    return days >= 0 && days % 2 === 0;
  }
  return true;
};
var getDetailedDeliveries = async (customerId) => {
  const deliveries = await db.select({
    delivery: subscriptionDeliveries,
    subscription: milkSubscriptions,
    product: products
  }).from(subscriptionDeliveries).leftJoin(milkSubscriptions, eq9(subscriptionDeliveries.subscriptionId, milkSubscriptions.id)).leftJoin(products, eq9(milkSubscriptions.productId, products.id)).where(eq9(subscriptionDeliveries.userId, customerId)).orderBy(desc3(subscriptionDeliveries.deliveryDate));
  const assignmentRows = await db.select({
    assignment: deliveryAssignments,
    partner: deliveryPartners
  }).from(deliveryAssignments).leftJoin(deliveryPartners, eq9(deliveryAssignments.partnerId, deliveryPartners.id)).where(eq9(deliveryAssignments.status, "delivered"));
  return deliveries.map(({ delivery, subscription, product }) => {
    const relatedAssignment = assignmentRows.find(
      (row) => row.assignment.subscriptionId === delivery.subscriptionId && toDateKey(row.assignment.assignmentDate) === toDateKey(delivery.deliveryDate)
    );
    const required = numberValue(subscription?.quantity || delivery.quantity);
    const status = `${delivery.status || "pending"}`.toLowerCase();
    const delivered = status === "delivered" ? numberValue(delivery.quantity || required) : 0;
    return {
      ...delivery,
      subscriptionCode: delivery.subscriptionId ? makeSubscriptionCode(delivery.subscriptionId) : "N/A",
      productName: product?.name || `Product #${subscription?.productId || ""}`.trim() || "Subscription product",
      quantityRequired: required,
      quantityDelivered: delivered,
      deliveryStatus: delivery.status || "pending",
      confirmedByUser: status === "delivered" ? true : null,
      confirmedTime: status === "delivered" ? delivery.createdAt : null,
      deliveryPartner: relatedAssignment?.partner?.fullName || relatedAssignment?.partner?.phone || null,
      adminRemarks: relatedAssignment?.assignment?.failedReason || null
    };
  });
};
var getTodayDelivery = async (customerId, subscriptionsData, deliveriesData) => {
  const todayKey = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  const subscriptions = subscriptionsData || await getDetailedSubscriptions(customerId);
  const deliveries = deliveriesData || await getDetailedDeliveries(customerId);
  const dueSubscriptions = subscriptions.filter((subscription) => isSubscriptionDueOn(subscription, todayKey));
  const todayDeliveries = deliveries.filter((delivery) => toDateKey(delivery.deliveryDate) === todayKey);
  const scheduledRequired = dueSubscriptions.reduce((sum, subscription) => sum + numberValue(subscription.quantity), 0);
  const recordedRequired = todayDeliveries.reduce((sum, delivery) => sum + numberValue(delivery.quantityRequired), 0);
  const required = Math.max(scheduledRequired, recordedRequired);
  const delivered = todayDeliveries.reduce((sum, delivery) => sum + numberValue(delivery.quantityDelivered), 0);
  const remaining = Math.max(required - delivered, 0);
  let status = "Pending";
  if (required === 0) status = "No Delivery Scheduled";
  else if (delivered >= required) status = "Delivered";
  else if (delivered > 0) status = "Partial Delivered";
  const lastDelivered = todayDeliveries.find((delivery) => numberValue(delivery.quantityDelivered) > 0);
  return {
    date: todayKey,
    required,
    delivered,
    remaining,
    status,
    confirmedByUser: lastDelivered?.confirmedByUser || false,
    confirmedTime: lastDelivered?.confirmedTime || null
  };
};
var getBills = async (customerId) => {
  return db.select().from(bills).where(eq9(bills.userId, customerId)).orderBy(desc3(bills.year), desc3(bills.month));
};
var getPayments = async (customerId) => {
  const customerBills = await getBills(customerId);
  return customerBills.map((bill) => {
    const total = numberValue(bill.finalAmount);
    const paid = bill.status === "paid" ? total : 0;
    const pending = Math.max(total - paid, 0);
    return {
      invoiceId: makeInvoiceCode(bill.id),
      billId: bill.id,
      billingMonth: `${bill.month}/${bill.year}`,
      billingPeriod: `${bill.month}/${bill.year}`,
      totalMilkQuantity: Array.isArray(bill.items) ? bill.items.reduce((sum, item) => sum + numberValue(item.quantity), 0) : 0,
      subscriptionAmount: moneyString(numberValue(bill.subscriptionTotal)),
      orderAmount: moneyString(numberValue(bill.ordersTotal)),
      discount: moneyString(numberValue(bill.discount)),
      paidAmount: moneyString(paid),
      pendingAmount: moneyString(pending),
      paymentMethod: bill.paymentMethod || "N/A",
      paymentStatus: bill.status,
      paymentDate: bill.paymentDate,
      invoiceDownloadUrl: `/api/bills/${bill.id}/pdf`,
      dueDate: bill.dueDate,
      finalAmount: moneyString(total),
      previousPending: moneyString(numberValue(bill.previousPending))
    };
  });
};
var getComplaints = async (customerId) => {
  const tickets = await db.select().from(supportTickets).where(eq9(supportTickets.userId, customerId)).orderBy(desc3(supportTickets.createdAt));
  if (!tickets.length) return [];
  const ticketIds = tickets.map((ticket) => ticket.id);
  const messages = await db.select().from(ticketMessages).where(inArray(ticketMessages.ticketId, ticketIds));
  return tickets.map((ticket) => {
    const ticketThread = messages.filter((message) => message.ticketId === ticket.id).sort((a, b) => new Date(a.createdAt || 0).getTime() - new Date(b.createdAt || 0).getTime());
    const adminReply = [...ticketThread].reverse().find((message) => message.userId !== customerId);
    const isResolved = ["resolved", "closed"].includes(`${ticket.status}`.toLowerCase());
    return {
      complaintId: ticket.id,
      date: ticket.createdAt,
      subject: ticket.subject,
      message: ticket.description,
      status: ticket.status,
      adminReply: adminReply?.message || null,
      resolvedDate: isResolved ? ticket.updatedAt : null,
      priority: ticket.priority,
      category: ticket.category
    };
  });
};
var getNotes = async (customerId) => {
  await ensureCrmTables();
  return db.select().from(adminCustomerNotes).where(eq9(adminCustomerNotes.customerId, customerId)).orderBy(desc3(adminCustomerNotes.createdAt));
};
var getStoredActivity = async (customerId) => {
  await ensureCrmTables();
  return db.select().from(customerActivityLogs).where(eq9(customerActivityLogs.customerId, customerId)).orderBy(desc3(customerActivityLogs.createdAt));
};
var getActivity = async (customerId) => {
  const [customer, detailedOrders, detailedSubscriptions, deliveries, payments, complaints, notes, stored] = await Promise.all([
    getCustomer(customerId),
    getDetailedOrders(customerId),
    getDetailedSubscriptions(customerId),
    getDetailedDeliveries(customerId),
    getPayments(customerId),
    getComplaints(customerId),
    getNotes(customerId),
    getStoredActivity(customerId)
  ]);
  const events = [];
  if (customer?.createdAt) {
    events.push({
      type: "Account Created",
      title: "Customer account created",
      description: `${makeName(customer)} joined Divine Naturals.`,
      createdAt: customer.createdAt
    });
  }
  detailedOrders.forEach((order) => {
    events.push({
      type: "Order Placed",
      title: `Order ${order.orderCode} placed`,
      description: `${order.productsOrdered} for \u20B9${order.orderAmount}.`,
      createdAt: order.createdAt
    });
  });
  detailedSubscriptions.forEach((subscription) => {
    events.push({
      type: "Subscription Created",
      title: `${subscription.productName} subscription created`,
      description: `${subscription.quantity} ${subscription.product?.unit || "unit"} ${subscription.frequency}.`,
      createdAt: subscription.createdAt
    });
  });
  deliveries.forEach((delivery) => {
    if (`${delivery.deliveryStatus}`.toLowerCase() !== "pending") {
      events.push({
        type: "Milk Delivered",
        title: `${delivery.productName} delivery ${delivery.deliveryStatus}`,
        description: `${delivery.quantityDelivered}/${delivery.quantityRequired} delivered.`,
        createdAt: delivery.confirmedTime || delivery.createdAt || delivery.deliveryDate
      });
    }
  });
  payments.forEach((payment) => {
    if (payment.paymentDate) {
      events.push({
        type: "Payment Made",
        title: `Payment marked ${payment.paymentStatus}`,
        description: `Invoice ${payment.invoiceId}: \u20B9${payment.paidAmount} paid, \u20B9${payment.pendingAmount} pending.`,
        createdAt: payment.paymentDate
      });
    } else {
      events.push({
        type: "Invoice Generated",
        title: `Invoice ${payment.invoiceId} generated`,
        description: `Bill amount \u20B9${payment.finalAmount}.`,
        createdAt: payment.dueDate
      });
    }
  });
  complaints.forEach((complaint) => {
    events.push({
      type: "Complaint Created",
      title: complaint.subject,
      description: complaint.message,
      createdAt: complaint.date
    });
  });
  notes.forEach((note) => {
    events.push({
      type: "Admin Note Added",
      title: "Admin note added",
      description: note.noteText,
      createdAt: note.createdAt,
      actorName: note.addedByAdminName
    });
  });
  stored.forEach((activity) => events.push(activity));
  return events.filter((event) => event.createdAt).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, 100);
};
var getCustomerSummary = async (customer, detailedOrders, detailedSubscriptions, deliveries, payments) => {
  const activeSubscriptions = detailedSubscriptions.filter((sub) => `${sub.status}`.toUpperCase() === "ACTIVE");
  const totalSpent = detailedOrders.filter((order) => `${order.paymentStatus}`.toLowerCase() === "paid").reduce((sum, order) => sum + numberValue(order.totalAmount), 0);
  const orderTotal = detailedOrders.reduce((sum, order) => sum + numberValue(order.totalAmount), 0);
  const pendingDues = payments.reduce((sum, payment) => sum + numberValue(payment.pendingAmount), 0);
  const totalLitersDelivered = deliveries.reduce((sum, delivery) => sum + numberValue(delivery.quantityDelivered), 0);
  const todayKey = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  const lastDelivery = deliveries.find((delivery) => {
    const status = `${delivery.deliveryStatus}`.toLowerCase();
    const deliveryDate = toDateKey(delivery.deliveryDate);
    return deliveryDate && deliveryDate <= todayKey && status !== "pending" && status !== "upcoming";
  }) || deliveries[0];
  return {
    totalOrders: detailedOrders.length,
    totalSubscriptions: detailedSubscriptions.length,
    activeSubscriptions: activeSubscriptions.length,
    totalAmountSpent: moneyString(totalSpent || orderTotal),
    pendingAmount: moneyString(pendingDues),
    walletBalance: moneyString(numberValue(customer.walletBalance)),
    totalLitersDelivered,
    lastDeliveryStatus: lastDelivery ? `${lastDelivery.deliveryStatus} on ${toDateKey(lastDelivery.deliveryDate) || "latest delivery"}` : "No deliveries yet"
  };
};
var getCustomerProfile = async (customerId) => {
  const customer = await getCustomer(customerId);
  if (!customer) return null;
  const [customerAddresses, detailedOrders, detailedSubscriptions, deliveries, payments, complaints, notes] = await Promise.all([
    getCustomerAddresses(customerId),
    getDetailedOrders(customerId),
    getDetailedSubscriptions(customerId),
    getDetailedDeliveries(customerId),
    getPayments(customerId),
    getComplaints(customerId),
    getNotes(customerId)
  ]);
  const summary = await getCustomerSummary(customer, detailedOrders, detailedSubscriptions, deliveries, payments);
  const todayDelivery = await getTodayDelivery(customerId, detailedSubscriptions, deliveries);
  const activity = await getActivity(customerId);
  const defaultAddress = getDefaultAddress(customerAddresses);
  const previousPending = payments.reduce((sum, payment) => sum + numberValue(payment.previousPending), 0);
  const currentMonthBill = payments[0] ? numberValue(payments[0].finalAmount) : 0;
  const outstandingBalance = numberValue(summary.pendingAmount);
  return {
    customer: {
      id: customer.id,
      customerId: customer.id,
      name: makeName(customer),
      firstName: customer.firstName,
      lastName: customer.lastName,
      email: customer.email,
      phone: customer.phone,
      alternatePhone: defaultAddress?.phone && defaultAddress.phone !== customer.phone ? defaultAddress.phone : null,
      accountCreatedDate: customer.createdAt,
      lastLoginDate: null,
      status: customer.isActive ? "Active" : "Blocked",
      role: customer.role,
      walletBalance: moneyString(numberValue(customer.walletBalance))
    },
    contact: {
      fullName: makeName(customer),
      email: customer.email,
      phone: customer.phone,
      alternatePhone: defaultAddress?.phone && defaultAddress.phone !== customer.phone ? defaultAddress.phone : null
    },
    addresses: customerAddresses,
    defaultAddress,
    summary,
    todayDelivery,
    orders: detailedOrders,
    subscriptions: detailedSubscriptions,
    deliveries,
    payments,
    invoices: payments,
    complaints,
    notes,
    dues: {
      outstandingBalance: moneyString(outstandingBalance),
      currentMonthBill: moneyString(currentMonthBill),
      previousPending: moneyString(previousPending),
      totalPayable: moneyString(outstandingBalance),
      lastPaymentDate: payments.find((payment) => payment.paymentDate)?.paymentDate || null,
      nextBillingDate: new Date((/* @__PURE__ */ new Date()).getFullYear(), (/* @__PURE__ */ new Date()).getMonth() + 1, 1).toISOString()
    },
    activity
  };
};
router8.use(requireAdminAccess);
router8.get("/", async (_req, res) => {
  try {
    const allCustomers = await db.query.users.findMany({
      where: ne(users.role, "admin"),
      orderBy: [desc3(users.createdAt)]
    });
    const customersWithStats = await Promise.all(
      allCustomers.map(async (customer) => {
        const [customerOrders, customerSubscriptions, customerBills] = await Promise.all([
          db.select().from(orders).where(eq9(orders.userId, customer.id)),
          db.select().from(milkSubscriptions).where(eq9(milkSubscriptions.userId, customer.id)),
          db.select().from(bills).where(eq9(bills.userId, customer.id))
        ]);
        const totalSpending = customerOrders.reduce((sum, order) => sum + numberValue(order.totalAmount), 0);
        const pendingAmount = customerBills.reduce((sum, bill) => {
          if (bill.status === "paid") return sum;
          return sum + numberValue(bill.finalAmount);
        }, 0);
        return {
          id: customer.id,
          name: makeName(customer),
          phone: customer.phone || "N/A",
          email: customer.email || "N/A",
          orderCount: customerOrders.length,
          subscriptionCount: customerSubscriptions.length,
          activeSubscriptionCount: customerSubscriptions.filter((sub) => `${sub.status}`.toUpperCase() === "ACTIVE").length,
          totalSpending: moneyString(totalSpending),
          pendingAmount: moneyString(pendingAmount),
          joinedDate: customer.createdAt,
          status: customer.isActive ? "Active" : "Blocked"
        };
      })
    );
    res.json(customersWithStats);
  } catch (error) {
    console.error("Error fetching customers:", error);
    res.status(500).json({ message: "Failed to fetch customers" });
  }
});
router8.get("/:customerId", async (req, res) => {
  try {
    const profile = await getCustomerProfile(req.params.customerId);
    if (!profile) return res.status(404).json({ message: "Customer not found" });
    res.json(profile);
  } catch (error) {
    console.error("Error fetching customer details:", error);
    res.status(500).json({ message: "Failed to fetch customer details" });
  }
});
router8.get("/:customerId/orders", async (req, res) => {
  try {
    res.json(await getDetailedOrders(req.params.customerId));
  } catch (error) {
    console.error("Error fetching customer orders:", error);
    res.status(500).json({ message: "Failed to fetch customer orders" });
  }
});
router8.get("/:customerId/subscriptions", async (req, res) => {
  try {
    res.json(await getDetailedSubscriptions(req.params.customerId));
  } catch (error) {
    console.error("Error fetching customer subscriptions:", error);
    res.status(500).json({ message: "Failed to fetch customer subscriptions" });
  }
});
router8.get("/:customerId/deliveries", async (req, res) => {
  try {
    res.json(await getDetailedDeliveries(req.params.customerId));
  } catch (error) {
    console.error("Error fetching customer deliveries:", error);
    res.status(500).json({ message: "Failed to fetch customer deliveries" });
  }
});
router8.get("/:customerId/payments", async (req, res) => {
  try {
    res.json(await getPayments(req.params.customerId));
  } catch (error) {
    console.error("Error fetching customer payments:", error);
    res.status(500).json({ message: "Failed to fetch customer payments" });
  }
});
router8.get("/:customerId/invoices", async (req, res) => {
  try {
    res.json(await getPayments(req.params.customerId));
  } catch (error) {
    console.error("Error fetching customer invoices:", error);
    res.status(500).json({ message: "Failed to fetch customer invoices" });
  }
});
router8.get("/:customerId/complaints", async (req, res) => {
  try {
    res.json(await getComplaints(req.params.customerId));
  } catch (error) {
    console.error("Error fetching customer complaints:", error);
    res.status(500).json({ message: "Failed to fetch customer complaints" });
  }
});
router8.get("/:customerId/activity", async (req, res) => {
  try {
    res.json(await getActivity(req.params.customerId));
  } catch (error) {
    console.error("Error fetching customer activity:", error);
    res.status(500).json({ message: "Failed to fetch customer activity" });
  }
});
router8.get("/:customerId/notes", async (req, res) => {
  try {
    res.json(await getNotes(req.params.customerId));
  } catch (error) {
    console.error("Error fetching customer notes:", error);
    res.status(500).json({ message: "Failed to fetch customer notes" });
  }
});
router8.post("/:customerId/notes", async (req, res) => {
  try {
    await ensureCrmTables();
    const customer = await getCustomer(req.params.customerId);
    if (!customer) return res.status(404).json({ message: "Customer not found" });
    const noteText = `${req.body.noteText || req.body.text || ""}`.trim();
    if (!noteText) return res.status(400).json({ message: "Note text is required" });
    const actor = getAdminActor(req);
    const [note] = await db.insert(adminCustomerNotes).values({
      customerId: req.params.customerId,
      noteText,
      addedByAdminId: actor.actorId || void 0,
      addedByAdminName: actor.actorName
    }).returning();
    await addActivityLog(req.params.customerId, "Admin Note Added", "Admin note added", noteText, req);
    res.status(201).json(note);
  } catch (error) {
    console.error("Error creating customer note:", error);
    res.status(500).json({ message: "Failed to create customer note" });
  }
});
router8.put("/:customerId/notes/:noteId", async (req, res) => {
  try {
    await ensureCrmTables();
    const noteText = `${req.body.noteText || req.body.text || ""}`.trim();
    if (!noteText) return res.status(400).json({ message: "Note text is required" });
    const [updated] = await db.update(adminCustomerNotes).set({ noteText, updatedAt: /* @__PURE__ */ new Date() }).where(and7(eq9(adminCustomerNotes.id, Number(req.params.noteId)), eq9(adminCustomerNotes.customerId, req.params.customerId))).returning();
    if (!updated) return res.status(404).json({ message: "Note not found" });
    await addActivityLog(req.params.customerId, "Admin Note Updated", "Admin note updated", noteText, req);
    res.json(updated);
  } catch (error) {
    console.error("Error updating customer note:", error);
    res.status(500).json({ message: "Failed to update customer note" });
  }
});
router8.delete("/:customerId/notes/:noteId", async (req, res) => {
  try {
    await ensureCrmTables();
    const deleted = await db.delete(adminCustomerNotes).where(and7(eq9(adminCustomerNotes.id, Number(req.params.noteId)), eq9(adminCustomerNotes.customerId, req.params.customerId))).returning();
    if (!deleted.length) return res.status(404).json({ message: "Note not found" });
    await addActivityLog(req.params.customerId, "Admin Note Deleted", "Admin note deleted", deleted[0].noteText, req);
    res.json({ success: true });
  } catch (error) {
    console.error("Error deleting customer note:", error);
    res.status(500).json({ message: "Failed to delete customer note" });
  }
});
router8.put("/:customerId/status", async (req, res) => {
  try {
    const status = `${req.body.status || ""}`.toLowerCase();
    if (!["active", "blocked", "unblocked"].includes(status)) {
      return res.status(400).json({ message: "Status must be active, blocked, or unblocked" });
    }
    const isActive = status === "active" || status === "unblocked";
    const [updated] = await db.update(users).set({ isActive, updatedAt: /* @__PURE__ */ new Date() }).where(eq9(users.id, req.params.customerId)).returning();
    if (!updated) return res.status(404).json({ message: "Customer not found" });
    await addActivityLog(
      req.params.customerId,
      isActive ? "Customer Activated" : "Customer Blocked",
      isActive ? "Customer account activated" : "Customer account blocked",
      isActive ? "Customer can place orders, create subscriptions, and confirm deliveries." : "Customer cannot place new orders, create subscriptions, or mark deliveries as received.",
      req,
      { status }
    );
    res.json({ id: updated.id, status: updated.isActive ? "Active" : "Blocked" });
  } catch (error) {
    console.error("Error updating customer status:", error);
    res.status(500).json({ message: "Failed to update customer status" });
  }
});
router8.put("/:customerId/address", async (req, res) => {
  try {
    const customer = await getCustomer(req.params.customerId);
    if (!customer) return res.status(404).json({ message: "Customer not found" });
    const existingAddressId = req.body.id ? Number(req.body.id) : null;
    const addressPayload = {
      userId: req.params.customerId,
      type: req.body.type || "home",
      address: req.body.address || "",
      landmark: req.body.landmark || null,
      city: req.body.city || null,
      state: req.body.state || null,
      pincode: req.body.pincode || null,
      phone: req.body.phone || null,
      isDefault: req.body.isDefault ?? true
    };
    if (!addressPayload.address.trim()) {
      return res.status(400).json({ message: "Address is required" });
    }
    let updatedAddress;
    if (existingAddressId) {
      [updatedAddress] = await db.update(addresses).set(addressPayload).where(and7(eq9(addresses.id, existingAddressId), eq9(addresses.userId, req.params.customerId))).returning();
    } else {
      [updatedAddress] = await db.insert(addresses).values(addressPayload).returning();
    }
    if (!updatedAddress) return res.status(404).json({ message: "Address not found" });
    await addActivityLog(
      req.params.customerId,
      "Address Updated",
      "Customer delivery address updated",
      updatedAddress.address,
      req,
      { addressId: updatedAddress.id }
    );
    res.json(updatedAddress);
  } catch (error) {
    console.error("Error updating customer address:", error);
    res.status(500).json({ message: "Failed to update customer address" });
  }
});
var admin_customers_routes_default = router8;

// server/routes/billing.routes.ts
init_db();
init_schema();
import { Router as Router9 } from "express";
import { desc as desc4, eq as eq10, and as and8, gte as gte3, lte as lte3, sql as sql3 } from "drizzle-orm";
import Razorpay from "razorpay";
var router9 = Router9();
var razorpayInstance = null;
var getRazorpayInstance = () => {
  if (!razorpayInstance && process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET) {
    razorpayInstance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET
    });
  }
  return razorpayInstance;
};
var toAmount2 = (value) => {
  const amount = Number.parseFloat(`${value ?? 0}`);
  return Number.isFinite(amount) ? amount : 0;
};
var toIsoDate = (date2) => date2.toISOString().split("T")[0];
var getMonthLabel = (year, month) => new Date(year, month - 1, 1).toLocaleDateString("en-IN", {
  month: "long",
  year: "numeric"
});
var normalizeBillStatus = (status, amount = 0) => {
  if (amount <= 0) return "NO_DUES";
  const normalized = `${status || "unpaid"}`.toLowerCase();
  if (normalized === "paid") return "PAID";
  if (normalized === "overdue") return "OVERDUE";
  return "PENDING";
};
var getDaysLeft = (dueDate) => {
  const due = new Date(dueDate);
  due.setHours(23, 59, 59, 999);
  return Math.ceil((due.getTime() - Date.now()) / (1e3 * 60 * 60 * 24));
};
var parseBillItems = (items) => {
  if (Array.isArray(items)) return items;
  if (typeof items === "string") {
    try {
      const parsed = JSON.parse(items);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }
  return [];
};
var asDate = (value) => {
  if (!value) return null;
  const date2 = value instanceof Date ? value : new Date(value);
  return Number.isNaN(date2.getTime()) ? null : date2;
};
var countDeliveriesInMonth = (subscription, year, month) => {
  const startOfMonth = new Date(year, month - 1, 1);
  const endOfMonth = new Date(year, month, 0);
  const subscriptionStart = asDate(subscription.startDate) || startOfMonth;
  const subscriptionEnd = asDate(subscription.endDate) || endOfMonth;
  const start = subscriptionStart > startOfMonth ? subscriptionStart : startOfMonth;
  const end = subscriptionEnd < endOfMonth ? subscriptionEnd : endOfMonth;
  if (start > end) return 0;
  const normalized = `${subscription.frequency || "daily"}`.toLowerCase();
  if (normalized.includes("week")) {
    return Math.max(0, Math.ceil(((end.getTime() - start.getTime()) / (1e3 * 60 * 60 * 24) + 1) / 7));
  }
  if (normalized.includes("alternate") || normalized.includes("every other")) {
    return Math.max(0, Math.ceil(((end.getTime() - start.getTime()) / (1e3 * 60 * 60 * 24) + 1) / 2));
  }
  if (normalized.includes("month")) return 1;
  return Math.max(0, Math.floor((end.getTime() - start.getTime()) / (1e3 * 60 * 60 * 24)) + 1);
};
var buildAdjustments = (billLike) => {
  const adjustments = [];
  const previousPending = toAmount2(billLike.previousPending ?? billLike.previousDue);
  const penalty = toAmount2(billLike.penalty);
  const discount = toAmount2(billLike.discount);
  if (previousPending > 0) adjustments.push({ type: "Previous Pending", amount: previousPending, direction: "charge" });
  if (penalty > 0) adjustments.push({ type: "Penalty", amount: penalty, direction: "charge" });
  if (discount > 0) adjustments.push({ type: "Discount", amount: discount, direction: "discount" });
  return adjustments;
};
var formatStoredBill = (bill) => {
  const amount = toAmount2(bill.finalAmount);
  const rawItems = parseBillItems(bill.items);
  const subscriptionItems = rawItems.filter((item) => `${item.type || item.description || ""}`.toLowerCase().includes("subscription")).map((item) => ({
    name: item.productName || item.name || item.description || "Subscription delivery",
    quantity: toAmount2(item.quantity),
    rate: toAmount2(item.pricePerUnit ?? item.price ?? item.rate),
    total: Math.round(toAmount2(item.total)),
    date: item.date || null
  }));
  const orderItemsList = rawItems.filter((item) => !`${item.type || item.description || ""}`.toLowerCase().includes("subscription")).map((item) => ({
    name: item.productName || item.name || item.description || (item.orderId ? `Order #${item.orderId}` : "Order"),
    quantity: toAmount2(item.quantity || 1),
    rate: toAmount2(item.pricePerUnit ?? item.price ?? item.rate),
    total: Math.round(toAmount2(item.total)),
    date: item.date || null
  }));
  return {
    id: bill.id,
    billId: bill.id,
    month: getMonthLabel(Number(bill.year), Number(bill.month)),
    monthNumber: Number(bill.month),
    year: Number(bill.year),
    amount,
    finalAmount: amount,
    subscriptionTotal: toAmount2(bill.subscriptionTotal),
    ordersTotal: toAmount2(bill.ordersTotal),
    previousDue: toAmount2(bill.previousPending),
    previousPending: toAmount2(bill.previousPending),
    penalty: toAmount2(bill.penalty),
    discount: toAmount2(bill.discount),
    status: normalizeBillStatus(bill.status, amount),
    rawStatus: bill.status,
    dueDate: bill.dueDate,
    daysLeft: getDaysLeft(bill.dueDate),
    paidDate: bill.paymentDate ? new Date(bill.paymentDate).toISOString() : "",
    paymentDate: bill.paymentDate,
    paymentMethod: bill.paymentMethod || "",
    notes: bill.notes || "",
    createdAt: bill.createdAt,
    updatedAt: bill.updatedAt,
    items: rawItems,
    subscriptionItems,
    orderItems: orderItemsList,
    adjustments: buildAdjustments(bill),
    isGenerated: true,
    isPreview: false,
    // Payment workflow fields
    billPdfUrl: bill.billPdfUrl || null,
    paymentScreenshotUrl: bill.paymentScreenshotUrl || null,
    paymentScreenshotStatus: bill.paymentScreenshotStatus || null,
    paymentScreenshotUploadedAt: bill.paymentScreenshotUploadedAt || null
  };
};
var addLineItem = (items, nextItem) => {
  const key = `${nextItem.name}|${nextItem.rate}|${nextItem.type}`;
  const existing = items.find((item) => item.key === key);
  if (existing) {
    existing.quantity += nextItem.quantity;
    existing.total += nextItem.total;
    return;
  }
  items.push({ ...nextItem, key });
};
async function buildLiveCurrentBill(userId, targetDate = /* @__PURE__ */ new Date()) {
  const year = targetDate.getFullYear();
  const month = targetDate.getMonth() + 1;
  const startDate = new Date(year, month - 1, 1);
  const endDate = new Date(year, month, 0, 23, 59, 59, 999);
  const startDateStr = toIsoDate(startDate);
  const endDateStr = toIsoDate(endDate);
  const subscriptionItems = [];
  const deliveryRows = await db.select().from(subscriptionDeliveries).where(
    and8(
      eq10(subscriptionDeliveries.userId, userId),
      gte3(subscriptionDeliveries.deliveryDate, startDateStr),
      lte3(subscriptionDeliveries.deliveryDate, endDateStr)
    )
  );
  const billableDeliveries = deliveryRows.filter((delivery) => {
    const status = `${delivery.status || ""}`.toLowerCase();
    return !["missed", "cancelled", "canceled", "skipped"].includes(status) && toAmount2(delivery.quantity) > 0;
  });
  if (billableDeliveries.length > 0) {
    for (const delivery of billableDeliveries) {
      const subscription = await db.query.milkSubscriptions.findFirst({
        where: eq10(milkSubscriptions.id, delivery.subscriptionId)
      });
      const product = subscription?.productId ? await db.query.products.findFirst({ where: eq10(products.id, subscription.productId) }) : null;
      const rate = toAmount2(subscription?.pricePerL || product?.price);
      const quantity = toAmount2(delivery.quantity);
      addLineItem(subscriptionItems, {
        type: "subscription",
        name: `${product?.name || "Subscription"} deliveries`,
        quantity,
        rate,
        total: quantity * rate,
        source: "actual-deliveries"
      });
    }
  } else {
    const activeSubscriptions = await db.select().from(milkSubscriptions).where(and8(eq10(milkSubscriptions.userId, userId), eq10(milkSubscriptions.status, "ACTIVE")));
    for (const subscription of activeSubscriptions) {
      const product = subscription.productId ? await db.query.products.findFirst({ where: eq10(products.id, subscription.productId) }) : null;
      const deliveries = countDeliveriesInMonth(subscription, year, month);
      const rate = toAmount2(subscription.pricePerL || product?.price);
      const quantity = toAmount2(subscription.quantity) * deliveries;
      if (quantity <= 0 || rate <= 0) continue;
      addLineItem(subscriptionItems, {
        type: "subscription",
        name: `${product?.name || "Subscription"} estimated deliveries`,
        quantity,
        rate,
        total: quantity * rate,
        source: "active-subscription-estimate"
      });
    }
  }
  const monthOrders = await db.select().from(orders).where(
    and8(
      eq10(orders.userId, userId),
      gte3(orders.createdAt, startDate),
      lte3(orders.createdAt, endDate)
    )
  );
  const orderItemsList = [];
  for (const order of monthOrders) {
    const items = await db.select().from(orderItems).where(eq10(orderItems.orderId, order.id));
    if (items.length === 0) {
      addLineItem(orderItemsList, {
        type: "order",
        name: `Order #${order.id}`,
        quantity: 1,
        rate: toAmount2(order.totalAmount),
        total: toAmount2(order.totalAmount),
        source: "order"
      });
      continue;
    }
    for (const item of items) {
      const product = item.productId ? await db.query.products.findFirst({ where: eq10(products.id, item.productId) }) : null;
      const rate = toAmount2(item.price);
      const quantity = toAmount2(item.quantity);
      addLineItem(orderItemsList, {
        type: "order",
        name: `${product?.name || "Order item"} (Order #${order.id})`,
        quantity,
        rate,
        total: toAmount2(item.totalPrice || rate * quantity),
        source: "order-item"
      });
    }
  }
  const previousBills = await db.select().from(bills).where(and8(eq10(bills.userId, userId), sql3`${bills.status} in ('unpaid', 'overdue')`));
  const previousPending = previousBills.filter((bill) => Number(bill.year) < year || Number(bill.year) === year && Number(bill.month) < month).reduce((sum, bill) => sum + toAmount2(bill.finalAmount), 0);
  const subscriptionTotal = subscriptionItems.reduce((sum, item) => sum + toAmount2(item.total), 0);
  const ordersTotal = orderItemsList.reduce((sum, item) => sum + toAmount2(item.total), 0);
  const penalty = 0;
  const discount = 0;
  const finalAmount = Math.max(0, subscriptionTotal + ordersTotal + previousPending + penalty - discount);
  const dueDate = new Date(year, month, 5);
  return {
    id: null,
    billId: null,
    month: getMonthLabel(year, month),
    monthNumber: month,
    year,
    amount: Math.round(finalAmount),
    finalAmount: Math.round(finalAmount),
    subscriptionTotal: Math.round(subscriptionTotal),
    ordersTotal: Math.round(ordersTotal),
    previousDue: Math.round(previousPending),
    previousPending: Math.round(previousPending),
    penalty,
    discount,
    status: normalizeBillStatus("unpaid", finalAmount),
    rawStatus: "preview",
    dueDate: dueDate.toISOString(),
    daysLeft: getDaysLeft(dueDate),
    paidDate: "",
    paymentDate: null,
    paymentMethod: "",
    notes: "",
    createdAt: null,
    updatedAt: null,
    items: [...subscriptionItems, ...orderItemsList],
    subscriptionItems: subscriptionItems.map(({ key, ...item }) => ({ ...item, total: Math.round(item.total) })),
    orderItems: orderItemsList.map(({ key, ...item }) => ({ ...item, total: Math.round(item.total) })),
    adjustments: buildAdjustments({ previousPending, penalty, discount }),
    isGenerated: false,
    isPreview: true,
    calculationSource: billableDeliveries.length > 0 ? "actual-deliveries" : "active-subscription-estimate"
  };
}
router9.get("/today-requirements", async (req, res) => {
  try {
    const today = /* @__PURE__ */ new Date();
    const todayStr = today.toISOString().split("T")[0];
    const dayOfWeek = today.getDay();
    const activeSubscriptions = await db.select().from(milkSubscriptions).where(eq10(milkSubscriptions.status, "ACTIVE"));
    let totalLiters = 0;
    let totalDeliveries = 0;
    const subscriptionMap = /* @__PURE__ */ new Map();
    for (const sub of activeSubscriptions) {
      const startDate = sub.startDate ? new Date(sub.startDate) : null;
      const endDate = sub.endDate ? new Date(sub.endDate) : null;
      if (startDate && startDate > today) continue;
      if (endDate && endDate < today) continue;
      let isDeliveryDay = false;
      if (sub.frequency === "daily") {
        isDeliveryDay = true;
      } else if (sub.frequency === "weekly") {
        if (startDate) {
          const startDayOfWeek = startDate.getDay();
          isDeliveryDay = dayOfWeek === startDayOfWeek;
        }
      } else if (sub.frequency === "alternate") {
        if (startDate) {
          const daysDiff = Math.floor((today.getTime() - startDate.getTime()) / (1e3 * 60 * 60 * 24));
          isDeliveryDay = daysDiff % 2 === 0;
        }
      }
      if (!isDeliveryDay) continue;
      if (!sub.userId || !sub.productId) continue;
      const user = await db.query.users.findFirst({
        where: eq10(users.id, sub.userId)
      });
      const product = await db.query.products.findFirst({
        where: eq10(products.id, sub.productId)
      });
      if (user && product) {
        let defaultAddr = null;
        try {
          const addrs = await db.select().from(addresses).where(and8(eq10(addresses.userId, sub.userId), eq10(addresses.isDefault, true))).limit(1);
          defaultAddr = addrs[0] || null;
        } catch (err) {
          console.error("Error fetching address:", err);
        }
        const quantity = Number(sub.quantity || 0);
        totalLiters += quantity;
        totalDeliveries += 1;
        if (!subscriptionMap.has(sub.productId)) {
          subscriptionMap.set(sub.productId, {
            productId: sub.productId,
            productName: product.name || "Unknown",
            totalLiters: 0,
            byArea: /* @__PURE__ */ new Map()
            // Group by area
          });
        }
        const mapEntry = subscriptionMap.get(sub.productId);
        mapEntry.totalLiters += quantity;
        const area = defaultAddr?.city || "Mumbai";
        if (!mapEntry.byArea.has(area)) {
          mapEntry.byArea.set(area, []);
        }
        mapEntry.byArea.get(area).push({
          userId: user.id,
          customerName: `${user.firstName || ""} ${user.lastName || ""}`.trim(),
          liters: quantity,
          deliveryTime: sub.deliveryTime || "Not specified",
          address: defaultAddr?.address || user.address || "Awaiting address details",
          landmark: defaultAddr?.landmark || "",
          city: defaultAddr?.city || "Mumbai",
          state: defaultAddr?.state || "Maharashtra",
          pincode: defaultAddr?.pincode || "",
          phone: defaultAddr?.phone || user.phone || ""
        });
      }
    }
    const requirements = Array.from(subscriptionMap.values()).map((req2) => ({
      productId: req2.productId,
      productName: req2.productName,
      totalLiters: req2.totalLiters,
      byArea: Object.fromEntries(req2.byArea)
    }));
    res.json({
      date: todayStr,
      totalLitersNeeded: totalLiters,
      totalDeliveries,
      requirements
    });
  } catch (error) {
    console.error("Error fetching today's requirements:", error);
    res.status(500).json({ message: "Failed to fetch requirements" });
  }
});
router9.get("/", async (req, res) => {
  try {
    const userId = req.session?.userId || req.user?.claims?.sub;
    if (!userId) return res.status(401).json({ message: "Unauthorized" });
    const userBills = await db.select().from(bills).where(eq10(bills.userId, userId)).orderBy(desc4(bills.year), desc4(bills.month), desc4(bills.id));
    res.set("Cache-Control", "no-store");
    res.json(userBills.map(formatStoredBill));
  } catch (error) {
    console.error("Error fetching bills:", error);
    res.status(500).json({ message: "Failed to fetch bills" });
  }
});
router9.get("/current", async (req, res) => {
  try {
    const userId = req.session?.userId || req.user?.claims?.sub;
    if (!userId) return res.status(401).json({ message: "Unauthorized" });
    const now = /* @__PURE__ */ new Date();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    const outstandingBills = await db.select().from(bills).where(
      and8(
        eq10(bills.userId, userId),
        sql3`${bills.status} in ('unpaid', 'overdue')`
      )
    ).orderBy(desc4(bills.year), desc4(bills.month), desc4(bills.id)).limit(1);
    if (outstandingBills.length > 0) {
      res.set("Cache-Control", "no-store");
      return res.json(formatStoredBill(outstandingBills[0]));
    }
    const currentGeneratedBill = await db.select().from(bills).where(and8(eq10(bills.userId, userId), eq10(bills.month, month), eq10(bills.year, year))).limit(1);
    const response = currentGeneratedBill.length > 0 ? formatStoredBill(currentGeneratedBill[0]) : await buildLiveCurrentBill(userId, now);
    res.set("Cache-Control", "no-store");
    res.json(response);
  } catch (error) {
    console.error("Error fetching billing:", error);
    res.status(500).json({ message: "Failed to fetch billing data" });
  }
});
router9.get("/history", async (req, res) => {
  try {
    const userId = req.session?.userId || req.user?.claims?.sub;
    if (!userId) return res.status(401).json({ message: "Unauthorized" });
    const userBills = await db.select().from(bills).where(eq10(bills.userId, userId)).orderBy(desc4(bills.year), desc4(bills.month), desc4(bills.id));
    res.set("Cache-Control", "no-store");
    res.json(userBills.map(formatStoredBill));
  } catch (error) {
    console.error("Error fetching billing history:", error);
    res.status(500).json({ message: "Failed to fetch billing history" });
  }
});
router9.get("/:id", async (req, res) => {
  try {
    const userId = req.session?.userId || req.user?.claims?.sub;
    if (!userId) return res.status(401).json({ message: "Unauthorized" });
    const billId = Number.parseInt(req.params.id, 10);
    if (!Number.isFinite(billId)) {
      return res.status(400).json({ message: "Invalid bill ID" });
    }
    const bill = await db.query.bills.findFirst({
      where: and8(eq10(bills.id, billId), eq10(bills.userId, userId))
    });
    if (!bill) {
      return res.status(404).json({ message: "Bill not found" });
    }
    res.set("Cache-Control", "no-store");
    res.json(formatStoredBill(bill));
  } catch (error) {
    console.error("Error fetching bill details:", error);
    res.status(500).json({ message: "Failed to fetch bill details" });
  }
});
router9.post("/pay", async (req, res) => {
  try {
    const userId = req.session?.userId || req.user?.claims?.sub;
    if (!userId) return res.status(401).json({ message: "Unauthorized" });
    const { amount, currency = "INR" } = req.body;
    if (!amount || amount <= 0) {
      return res.status(400).json({ message: "Invalid amount" });
    }
    const options = {
      amount: Math.round(amount * 100),
      // Convert to paise
      currency,
      receipt: `bill_${userId}_${Date.now()}`,
      payment_capture: 1
    };
    const instance = getRazorpayInstance();
    if (!instance) {
      return res.status(500).json({ message: "Payment service not configured" });
    }
    const response = await instance.orders.create(options);
    res.json({
      orderId: response.id,
      amount,
      currency,
      keyId: process.env.RAZORPAY_KEY_ID
    });
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    res.status(500).json({ message: "Failed to create payment order" });
  }
});
router9.post("/verify-payment", async (req, res) => {
  try {
    const userId = req.session?.userId || req.user?.claims?.sub;
    if (!userId) return res.status(401).json({ message: "Unauthorized" });
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    const crypto2 = __require("crypto");
    const generated_signature = crypto2.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET || "").update(`${razorpay_order_id}|${razorpay_payment_id}`).digest("hex");
    if (generated_signature === razorpay_signature) {
      const currentDate = /* @__PURE__ */ new Date();
      const currentMonth = currentDate.getMonth();
      const currentYear = currentDate.getFullYear();
      const startDate = new Date(currentYear, currentMonth, 1);
      const endDate = new Date(currentYear, currentMonth + 1, 0);
      await db.update(orders).set({
        paymentStatus: "paid",
        paymentDate: /* @__PURE__ */ new Date()
      }).where(
        and8(
          eq10(orders.userId, userId),
          eq10(orders.paymentStatus, "pending"),
          gte3(orders.createdAt, startDate),
          lte3(orders.createdAt, endDate)
        )
      );
      res.json({
        success: true,
        message: "Payment verified successfully",
        orderId: razorpay_order_id
      });
    } else {
      res.status(400).json({ message: "Payment verification failed" });
    }
  } catch (error) {
    console.error("Error verifying payment:", error);
    res.status(500).json({ message: "Failed to verify payment" });
  }
});
var billing_routes_default = router9;

// server/routes/admin-billing.routes.ts
init_db();
init_schema();
import { Router as Router10 } from "express";
import { eq as eq11, and as and9, gte as gte4, lte as lte4, sql as sql4 } from "drizzle-orm";
var router10 = Router10();
router10.get("/", async (req, res) => {
  try {
    const status = req.query.status;
    const userId = req.query.userId;
    let whereConditions = [];
    if (status && status !== "all") {
      whereConditions.push(eq11(bills.status, status));
    }
    if (userId) {
      whereConditions.push(eq11(bills.userId, userId));
    }
    const allBills = whereConditions.length > 0 ? await db.select().from(bills).where(and9(...whereConditions)) : await db.select().from(bills);
    const billsWithUsers = await Promise.all(
      allBills.map(async (bill) => {
        const user = await db.query.users.findFirst({
          where: eq11(users.id, bill.userId)
        });
        return { ...bill, user };
      })
    );
    res.json(billsWithUsers);
  } catch (error) {
    console.error("Error fetching bills:", error);
    res.status(500).json({ message: "Failed to fetch bills" });
  }
});
router10.get("/payment-screenshots", async (req, res) => {
  try {
    const pendingBills = await db.select().from(bills).where(sql4`payment_screenshot_url IS NOT NULL`);
    const billsWithUsers = await Promise.all(
      pendingBills.map(async (bill) => {
        const user = await db.query.users.findFirst({
          where: eq11(users.id, bill.userId)
        });
        return { ...bill, user };
      })
    );
    res.json(billsWithUsers);
  } catch (error) {
    console.error("Error fetching payment screenshots:", error);
    res.status(500).json({ message: "Failed to fetch payment screenshots" });
  }
});
router10.get("/:id", async (req, res) => {
  try {
    const billId = parseInt(req.params.id);
    const bill = await db.query.bills.findFirst({
      where: eq11(bills.id, billId)
    });
    if (!bill) {
      return res.status(404).json({ message: "Bill not found" });
    }
    const user = await db.query.users.findFirst({
      where: eq11(users.id, bill.userId)
    });
    res.json({ ...bill, user });
  } catch (error) {
    console.error("Error fetching bill:", error);
    res.status(500).json({ message: "Failed to fetch bill" });
  }
});
router10.patch("/:id/mark-paid", async (req, res) => {
  try {
    const billId = parseInt(req.params.id);
    const { paymentMethod } = req.body;
    const updated = await db.update(bills).set({
      status: "paid",
      paymentDate: sql4`now()`,
      paymentMethod: paymentMethod || "manual",
      updatedAt: sql4`now()`
    }).where(eq11(bills.id, billId)).returning();
    if (!updated.length) {
      return res.status(404).json({ message: "Bill not found" });
    }
    res.json({ success: true, bill: updated[0], message: "Bill marked as paid" });
  } catch (error) {
    console.error("Error marking bill as paid:", error);
    res.status(500).json({ message: "Failed to mark bill as paid" });
  }
});
router10.patch("/:id/extend-due", async (req, res) => {
  try {
    const billId = parseInt(req.params.id);
    const { newDueDate } = req.body;
    if (!newDueDate) {
      return res.status(400).json({ message: "New due date is required" });
    }
    const updated = await db.update(bills).set({
      dueDate: new Date(newDueDate).toISOString().split("T")[0],
      updatedAt: sql4`now()`
    }).where(eq11(bills.id, billId)).returning();
    if (!updated.length) {
      return res.status(404).json({ message: "Bill not found" });
    }
    res.json({ success: true, bill: updated[0], message: "Due date extended" });
  } catch (error) {
    console.error("Error extending due date:", error);
    res.status(500).json({ message: "Failed to extend due date" });
  }
});
router10.patch("/:id/penalty", async (req, res) => {
  try {
    const billId = parseInt(req.params.id);
    const { penaltyAmount } = req.body;
    if (!penaltyAmount || penaltyAmount <= 0) {
      return res.status(400).json({ message: "Invalid penalty amount" });
    }
    const bill = await db.query.bills.findFirst({
      where: eq11(bills.id, billId)
    });
    if (!bill) {
      return res.status(404).json({ message: "Bill not found" });
    }
    const newPenalty = Number(bill.penalty || 0) + Number(penaltyAmount);
    const newFinal = Number(bill.finalAmount) - Number(bill.penalty || 0) + newPenalty;
    const updated = await db.update(bills).set({
      penalty: newPenalty,
      finalAmount: newFinal,
      updatedAt: sql4`now()`
    }).where(eq11(bills.id, billId)).returning();
    res.json({ success: true, bill: updated[0], message: `Penalty of \u20B9${penaltyAmount} added` });
  } catch (error) {
    console.error("Error adding penalty:", error);
    res.status(500).json({ message: "Failed to add penalty" });
  }
});
router10.patch("/:id/discount", async (req, res) => {
  try {
    const billId = parseInt(req.params.id);
    const { discountAmount } = req.body;
    if (!discountAmount || discountAmount < 0) {
      return res.status(400).json({ message: "Invalid discount amount" });
    }
    const bill = await db.query.bills.findFirst({
      where: eq11(bills.id, billId)
    });
    if (!bill) {
      return res.status(404).json({ message: "Bill not found" });
    }
    const newDiscount = Number(bill.discount || 0) + Number(discountAmount);
    const newFinal = Number(bill.finalAmount) - Number(bill.discount || 0) + newDiscount;
    const updated = await db.update(bills).set({
      discount: newDiscount,
      finalAmount: Math.max(0, newFinal),
      updatedAt: sql4`now()`
    }).where(eq11(bills.id, billId)).returning();
    res.json({ success: true, bill: updated[0], message: `Discount of \u20B9${discountAmount} applied` });
  } catch (error) {
    console.error("Error adding discount:", error);
    res.status(500).json({ message: "Failed to add discount" });
  }
});
router10.post("/generate", async (req, res) => {
  try {
    const { userId, month, year } = req.body;
    if (!userId || !month || !year) {
      return res.status(400).json({ message: "userId, month, and year are required" });
    }
    const existingBill = await db.select().from(bills).where(
      and9(
        eq11(bills.userId, userId),
        eq11(bills.month, month),
        eq11(bills.year, year)
      )
    );
    if (existingBill.length > 0) {
      return res.status(400).json({ message: "Bill already exists for this month" });
    }
    const userSubs = await db.select().from(milkSubscriptions).where(eq11(milkSubscriptions.userId, userId));
    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 0);
    const monthOrders = await db.select().from(orders).where(
      and9(
        eq11(orders.userId, userId),
        gte4(orders.createdAt, startDate),
        lte4(orders.createdAt, endDate)
      )
    );
    let subscriptionTotal = 0;
    const billItems = [];
    for (const sub of userSubs) {
      const product = await db.query.products.findFirst({
        where: eq11(products.id, sub.productId)
      });
      if (product && sub.status === "ACTIVE") {
        const daysInMonth = new Date(year, month, 0).getDate();
        let deliveries = daysInMonth;
        if (sub.frequency === "weekly") {
          deliveries = Math.ceil(daysInMonth / 7);
        } else if (sub.frequency === "alternate") {
          deliveries = Math.ceil(daysInMonth / 2);
        }
        const total = Number(sub.quantity || 0) * Number(sub.pricePerL || product.price) * deliveries;
        subscriptionTotal += total;
        billItems.push({
          type: "subscription",
          productId: sub.productId,
          productName: product.name,
          quantity: deliveries,
          pricePerUnit: sub.pricePerL || product.price,
          total: Math.round(total)
        });
      }
    }
    let ordersTotal = 0;
    for (const order of monthOrders) {
      ordersTotal += Number(order.totalAmount || 0);
      billItems.push({
        type: "order",
        orderId: order.id,
        productName: `Order #${order.id}`,
        quantity: 1,
        pricePerUnit: Number(order.totalAmount || 0),
        total: Math.round(Number(order.totalAmount || 0))
      });
    }
    const dueDate = new Date(year, month - 1, 5);
    const finalAmount = subscriptionTotal + ordersTotal;
    const newBill = await db.insert(bills).values({
      userId,
      month,
      year,
      items: billItems,
      subscriptionTotal,
      ordersTotal,
      previousPending: 0,
      penalty: 0,
      discount: 0,
      finalAmount,
      dueDate: dueDate.toISOString().split("T")[0],
      status: "unpaid"
    }).returning();
    res.json({ success: true, bill: newBill[0], message: "Bill generated successfully" });
  } catch (error) {
    console.error("Error generating bill:", error);
    res.status(500).json({ message: "Failed to generate bill" });
  }
});
router10.post("/:id/upload-bill", async (req, res) => {
  try {
    const billId = parseInt(req.params.id);
    const { billPdfUrl } = req.body;
    if (!billPdfUrl) {
      return res.status(400).json({ message: "billPdfUrl is required" });
    }
    const updated = await db.update(bills).set({ billPdfUrl, updatedAt: sql4`now()` }).where(eq11(bills.id, billId)).returning();
    if (!updated.length) {
      return res.status(404).json({ message: "Bill not found" });
    }
    res.json({ success: true, bill: updated[0], message: "Bill PDF uploaded" });
  } catch (error) {
    console.error("Error uploading bill PDF:", error);
    res.status(500).json({ message: "Failed to upload bill PDF" });
  }
});
router10.post("/:id/approve-screenshot", async (req, res) => {
  try {
    const billId = parseInt(req.params.id);
    const updated = await db.update(bills).set({
      paymentScreenshotStatus: "approved",
      status: "paid",
      paymentDate: sql4`now()`,
      paymentMethod: "online_transfer",
      updatedAt: sql4`now()`
    }).where(eq11(bills.id, billId)).returning();
    if (!updated.length) {
      return res.status(404).json({ message: "Bill not found" });
    }
    res.json({ success: true, bill: updated[0], message: "Screenshot approved \u2013 bill marked as paid" });
  } catch (error) {
    console.error("Error approving screenshot:", error);
    res.status(500).json({ message: "Failed to approve screenshot" });
  }
});
router10.post("/:id/reject-screenshot", async (req, res) => {
  try {
    const billId = parseInt(req.params.id);
    const { reason } = req.body;
    const updated = await db.update(bills).set({
      paymentScreenshotStatus: "rejected",
      notes: reason ? `Screenshot rejected: ${reason}` : "Screenshot rejected by admin",
      updatedAt: sql4`now()`
    }).where(eq11(bills.id, billId)).returning();
    if (!updated.length) {
      return res.status(404).json({ message: "Bill not found" });
    }
    res.json({ success: true, bill: updated[0], message: "Screenshot rejected" });
  } catch (error) {
    console.error("Error rejecting screenshot:", error);
    res.status(500).json({ message: "Failed to reject screenshot" });
  }
});
var admin_billing_routes_default = router10;

// server/routes/rbac.routes.ts
import { Router as Router11 } from "express";
init_schema();
init_db();
import { eq as eq12 } from "drizzle-orm";
import path from "path";
import fs from "fs";
var router11 = Router11();
router11.post("/auth/verify-phone", async (req, res) => {
  try {
    const { phone, otp } = req.body;
    if (!phone || !otp) {
      return res.status(400).json({ message: "Phone and OTP are required" });
    }
    if (otp !== "1234") {
      return res.status(401).json({ message: "Invalid OTP" });
    }
    const userId = `user_${phone.replace(/\D/g, "").slice(-10)}`;
    let user = await storage.getUser(userId);
    if (!user) {
      user = await storage.upsertUser({
        id: userId,
        phone,
        role: "customer"
      });
    }
    req.session.userId = userId;
    req.session.user = { id: userId, phone };
    req.session.userRole = user.role || "customer";
    req.session.userEmail = user.email || null;
    req.session.save((err) => {
      if (err) {
        console.error("Session save error:", err);
        return res.status(500).json({ message: "Session save failed" });
      }
      res.json({ success: true, userId });
    });
  } catch (error) {
    console.error("Error verifying phone:", error);
    res.status(500).json({ message: "Verification failed" });
  }
});
router11.post("/auth/register", async (req, res) => {
  try {
    const { phone, otp } = req.body;
    if (!phone || !otp) {
      return res.status(400).json({ message: "Phone and OTP are required" });
    }
    if (otp !== "1234") {
      return res.status(401).json({ message: "Invalid OTP" });
    }
    const userId = `user_${phone.replace(/\D/g, "").slice(-10)}`;
    const user = await storage.upsertUser({
      id: userId,
      phone,
      role: "customer"
    });
    req.session.userId = userId;
    req.session.user = { id: userId, phone };
    req.session.userRole = user.role || "customer";
    req.session.userEmail = user.email || null;
    req.session.save((err) => {
      if (err) {
        console.error("Session save error:", err);
        return res.status(500).json({ message: "Session save failed" });
      }
      res.json({ success: true, userId, redirectTo: "/auth/personal-details" });
    });
  } catch (error) {
    console.error("Error registering:", error);
    res.status(500).json({ message: "Registration failed" });
  }
});
router11.get("/auth/user", async (req, res) => {
  try {
    const userId = req.session?.userId || req.user?.id || req.user?.claims?.sub;
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const user = await storage.getUser(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({
      id: user.id,
      role: user.role,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phone,
      address: user.address,
      gender: user.gender,
      dob: user.dob,
      profileImageUrl: user.profileImageUrl,
      walletBalance: user.walletBalance,
      isActive: user.isActive,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    });
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Failed to fetch user" });
  }
});
router11.put("/user/profile", async (req, res) => {
  try {
    const userId = req.session?.userId || req.user?.id || req.user?.claims?.sub;
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const { firstName, lastName, email, phone, address, gender, dob } = req.body;
    const updatedUser = await storage.updateUser(userId, {
      firstName,
      lastName,
      email,
      phone,
      address,
      gender,
      dob: dob ? dob : void 0
    });
    res.json({
      success: true,
      message: "Profile updated successfully",
      user: {
        id: updatedUser.id,
        firstName: updatedUser.firstName,
        lastName: updatedUser.lastName,
        email: updatedUser.email,
        phone: updatedUser.phone,
        address: updatedUser.address
      }
    });
  } catch (error) {
    console.error("Error updating user profile:", error);
    res.status(500).json({ message: "Failed to update profile" });
  }
});
router11.get("/products", async (_req, res) => {
  try {
    const allProducts = await storage.getProducts();
    res.json(allProducts);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Failed to fetch products" });
  }
});
router11.get("/site-settings", async (_req, res) => {
  try {
    const settings = await storage.getSiteSettings();
    res.json(settings || { brandName: "Divine Naturals" });
  } catch (error) {
    console.error("Error fetching site settings:", error);
    res.status(500).json({ message: "Failed to fetch site settings" });
  }
});
router11.get("/categories", async (req, res) => {
  try {
    const categories2 = await storage.getCategories();
    res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
    res.json(categories2);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ message: "Failed to fetch categories" });
  }
});
router11.put("/categories/:id", requireAdminAccess, async (req, res) => {
  try {
    const categoryId = parseInt(req.params.id);
    const { name, description, icon, type, active } = req.body;
    if (isNaN(categoryId)) {
      return res.status(400).json({ message: "Invalid category ID" });
    }
    const updates = {};
    if (name !== void 0) updates.name = name;
    if (description !== void 0) updates.description = description;
    if (icon !== void 0) updates.icon = icon;
    if (type !== void 0) updates.type = type;
    if (active !== void 0) updates.isActive = active;
    const category = await storage.updateCategory(categoryId, updates);
    res.json({ success: true, category, message: "Category updated successfully" });
  } catch (error) {
    console.error("Error updating category:", error);
    res.status(500).json({ message: "Failed to update category" });
  }
});
router11.delete("/categories/:id", requireAdminAccess, async (req, res) => {
  try {
    const categoryId = parseInt(req.params.id);
    if (isNaN(categoryId)) {
      return res.status(400).json({ message: "Invalid category ID" });
    }
    await storage.deleteCategory(categoryId);
    res.json({ success: true, message: "Category deleted successfully" });
  } catch (error) {
    console.error("Error deleting category:", error);
    res.status(500).json({ message: "Failed to delete category" });
  }
});
router11.post("/cart", requireCustomer, async (req, res) => {
  try {
    const userId = req.user.claims.sub;
    const { productId, quantity } = req.body;
    if (!productId || !quantity) {
      return res.status(400).json({ message: "Product ID and quantity are required" });
    }
    const cartItem = await storage.addToCart(userId, productId, quantity);
    res.json({ success: true, cartItem });
  } catch (error) {
    console.error("Error adding to cart:", error);
    res.status(500).json({ message: "Failed to add item to cart" });
  }
});
router11.get("/cart", requireCustomer, async (req, res) => {
  try {
    const userId = req.user.claims.sub;
    const cartItems2 = await storage.getCartItems(userId);
    res.json(cartItems2);
  } catch (error) {
    console.error("Error fetching cart:", error);
    res.status(500).json({ message: "Failed to fetch cart" });
  }
});
router11.post("/orders", requireCustomer, async (req, res) => {
  try {
    const userId = req.user.claims.sub;
    const { deliveryAddress, deliveryDate } = req.body;
    if (!deliveryAddress || !deliveryDate) {
      return res.status(400).json({ message: "Delivery address and date are required" });
    }
    const cartItems2 = await storage.getCartItems(userId);
    if (!cartItems2 || cartItems2.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }
    const totalAmount = cartItems2.reduce((sum, item) => {
      return sum + parseFloat(item.price) * item.quantity;
    }, 0);
    const orderData = {
      userId,
      totalAmount: totalAmount.toFixed(2),
      deliveryAddress,
      deliveryDate,
      status: "pending"
    };
    const order = await storage.createOrder(orderData);
    for (const item of cartItems2) {
      await storage.createOrderItem({
        orderId: order.id,
        productId: item.productId,
        quantity: item.quantity,
        price: item.price,
        totalPrice: (parseFloat(item.price) * item.quantity).toFixed(2)
      });
    }
    await storage.clearCart(userId);
    res.json({ success: true, order });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ message: "Failed to create order" });
  }
});
router11.get("/milk-subscription", requireCustomer, async (req, res) => {
  try {
    const userId = req.user.claims.sub;
    const subscription = await storage.getMilkSubscriptionByUser(userId);
    res.json(subscription || null);
  } catch (error) {
    console.error("Error fetching subscription:", error);
    res.status(500).json({ message: "Failed to fetch subscription" });
  }
});
router11.post("/milk-subscription", requireCustomer, async (req, res) => {
  try {
    const userId = req.user.claims.sub;
    const subscriptionData = insertMilkSubscriptionSchema.parse({ ...req.body, userId });
    const subscription = await storage.createMilkSubscription(subscriptionData);
    res.json({ success: true, subscription });
  } catch (error) {
    console.error("Error creating subscription:", error);
    res.status(500).json({ message: "Failed to create subscription" });
  }
});
router11.patch("/milk-subscription/:id/pause", requireCustomer, async (req, res) => {
  try {
    const subscriptionId = parseInt(req.params.id);
    const userId = req.user.claims.sub;
    const subscription = await storage.getMilkSubscriptionByUser(userId);
    if (!subscription || subscription.id !== subscriptionId) {
      return res.status(403).json({ message: "Not authorized to pause this subscription" });
    }
    const updated = await storage.updateMilkSubscription(subscriptionId, {
      status: "PAUSED"
    });
    res.json({ success: true, subscription: updated, message: "Subscription paused successfully" });
  } catch (error) {
    console.error("Error pausing subscription:", error);
    res.status(500).json({ message: "Failed to pause subscription" });
  }
});
router11.patch("/milk-subscription/:id/resume", requireCustomer, async (req, res) => {
  try {
    const subscriptionId = parseInt(req.params.id);
    const userId = req.user.claims.sub;
    const subscription = await storage.getMilkSubscriptionByUser(userId);
    if (!subscription || subscription.id !== subscriptionId) {
      return res.status(403).json({ message: "Not authorized to resume this subscription" });
    }
    const updated = await storage.updateMilkSubscription(subscriptionId, {
      status: "ACTIVE"
    });
    res.json({ success: true, subscription: updated, message: "Subscription resumed successfully" });
  } catch (error) {
    console.error("Error resuming subscription:", error);
    res.status(500).json({ message: "Failed to resume subscription" });
  }
});
router11.put("/personal-details", requireCustomer, async (req, res) => {
  try {
    const userId = req.user.claims.sub;
    const { firstName, lastName, email, gender, dob } = req.body;
    if (!firstName || !lastName || !email) {
      return res.status(400).json({ message: "First name, last name, and email are required" });
    }
    const updated = await storage.upsertUser({
      id: userId,
      firstName,
      lastName,
      email,
      gender: gender || void 0,
      dob: dob || void 0
    });
    res.json({
      success: true,
      user: {
        id: updated.id,
        firstName: updated.firstName,
        lastName: updated.lastName,
        email: updated.email
      },
      message: "Personal details saved successfully"
    });
  } catch (error) {
    console.error("Error saving personal details:", error);
    res.status(500).json({ message: "Failed to save personal details" });
  }
});
router11.get(["/vendors/dashboard", "/vendor/dashboard", "/vendor/me/dashboard"], requireVendor, async (req, res) => {
  try {
    const userId = req.user.claims.sub;
    const vendor = await storage.getVendorByUser(userId);
    if (!vendor) {
      return res.status(404).json({ message: "Vendor profile not found" });
    }
    const metrics = {
      dailyRequirement: vendor.requirementToday || 0,
      weeklyRevenue: vendor.weeklyEarnings || "0.00",
      fulfillmentRate: (vendor.requirementToday || 0) > 0 ? ((vendor.circulatedLiters || 0) / (vendor.requirementToday || 1) * 100).toFixed(2) : "0.00",
      circulatedLiters: vendor.circulatedLiters || 0,
      revenueToday: vendor.revenueToday || "0.00",
      businessName: vendor.businessName,
      locationName: vendor.locationName,
      isVerified: vendor.isVerified
    };
    res.json(metrics);
  } catch (error) {
    console.error("Error fetching vendor dashboard:", error);
    res.status(500).json({ message: "Failed to fetch dashboard data" });
  }
});
router11.post(["/vendors/inward", "/vendor/inward"], requireVendor, async (req, res) => {
  try {
    const userId = req.user.claims.sub;
    const { litersArrived, litersDelivered, litersPending, driverInfo } = req.body;
    if (!litersArrived || !litersDelivered || litersPending === void 0 || !driverInfo) {
      return res.status(400).json({ message: "All inward entry fields are required" });
    }
    const vendor = await storage.getVendorByUser(userId);
    if (!vendor) {
      return res.status(404).json({ message: "Vendor profile not found" });
    }
    const inwardEntry = await storage.createInwardLog({
      vendorId: vendor.id,
      litersArrived,
      litersDelivered,
      litersPending,
      driverInfo,
      reportedByUserId: userId,
      sentToAdmin: true,
      status: "PENDING"
    });
    if (litersDelivered > 0) {
      await storage.updateVendorRequirement(vendor.id, litersDelivered);
    }
    res.json({ success: true, inwardEntry });
  } catch (error) {
    console.error("Error logging inward entry:", error);
    res.status(500).json({ message: "Failed to log inward entry" });
  }
});
router11.post("/vendors/driver", requireVendor, async (req, res) => {
  try {
    const userId = req.user.claims.sub;
    const { name, age, phone, aadharUrl, panUrl } = req.body;
    if (!name || !age || !phone) {
      return res.status(400).json({ message: "Driver name, age, and phone are required" });
    }
    const vendor = await storage.getVendorByUser(userId);
    if (!vendor) {
      return res.status(404).json({ message: "Vendor profile not found" });
    }
    const driver = await storage.addDriver({
      name,
      age,
      phone,
      aadharUrl,
      panUrl,
      vendorId: vendor.id
    });
    res.json({ success: true, driver, message: "Driver added successfully" });
  } catch (error) {
    console.error("Error adding driver:", error);
    res.status(500).json({ message: "Failed to add driver" });
  }
});
router11.get("/vendors/drivers", requireVendor, async (req, res) => {
  try {
    const userId = req.user.claims.sub;
    const vendor = await storage.getVendorByUser(userId);
    if (!vendor) {
      return res.status(404).json({ message: "Vendor profile not found" });
    }
    const drivers2 = await storage.getDriversByVendor(vendor.id);
    res.json(drivers2);
  } catch (error) {
    console.error("Error fetching drivers:", error);
    res.status(500).json({ message: "Failed to fetch drivers" });
  }
});
router11.get("/delivery/assignments", requireDelivery, async (req, res) => {
  try {
    const userId = req.user.claims.sub;
    const deliveryPartner = await storage.getDeliveryPartnerByUser(userId);
    if (!deliveryPartner) {
      return res.status(404).json({ message: "Delivery partner profile not found" });
    }
    const assignments = await storage.getOrdersForDelivery(deliveryPartner.id);
    res.json(assignments);
  } catch (error) {
    console.error("Error fetching delivery assignments:", error);
    res.status(500).json({ message: "Failed to fetch assignments" });
  }
});
router11.put("/delivery/status/:id", requireDelivery, async (req, res) => {
  try {
    const orderId = parseInt(req.params.id);
    const { status } = req.body;
    const userId = req.user.claims.sub;
    if (!status) {
      return res.status(400).json({ message: "Status is required" });
    }
    const validStatuses = ["pending", "processing", "out_for_delivery", "delivered", "cancelled"];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: "Invalid status value" });
    }
    const deliveryPartner = await storage.getDeliveryPartnerByUser(userId);
    if (!deliveryPartner) {
      return res.status(404).json({ message: "Delivery partner profile not found" });
    }
    const order = await storage.getOrderById(orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    if (order.deliveryPartnerId !== deliveryPartner.id) {
      return res.status(403).json({ message: "Not authorized to update this order" });
    }
    const updatedOrder = await storage.updateOrderStatus(orderId, status);
    res.json({ success: true, order: updatedOrder });
  } catch (error) {
    console.error("Error updating order status:", error);
    res.status(500).json({ message: "Failed to update order status" });
  }
});
router11.get("/admin/vendors", requireAdmin, async (req, res) => {
  try {
    const vendors2 = await storage.getVendors();
    const vendorList = vendors2.map((vendor) => ({
      id: vendor.id,
      businessName: vendor.businessName,
      locationName: vendor.locationName,
      licenseNumber: vendor.licenseNumber,
      vendorType: vendor.vendorType,
      isApproved: vendor.isVerified,
      // isVerified serves as isApproved
      requirementToday: vendor.requirementToday,
      circulatedLiters: vendor.circulatedLiters,
      revenueToday: vendor.revenueToday,
      createdAt: vendor.createdAt
    }));
    res.json(vendorList);
  } catch (error) {
    console.error("Error fetching vendors:", error);
    res.status(500).json({ message: "Failed to fetch vendors" });
  }
});
router11.post("/admin/vendors/approve/:id", requireAdmin, async (req, res) => {
  try {
    const vendorId = parseInt(req.params.id);
    if (isNaN(vendorId)) {
      return res.status(400).json({ message: "Invalid vendor ID" });
    }
    const vendor = await storage.approveVendor(vendorId);
    res.json({ success: true, vendor, message: "Vendor approved successfully" });
  } catch (error) {
    console.error("Error approving vendor:", error);
    res.status(500).json({ message: "Failed to approve vendor" });
  }
});
router11.post("/admin/update-password", async (req, res) => {
  try {
    const { email, newPassword } = req.body;
    if (!email || !newPassword) {
      return res.status(400).json({ message: "Email and password are required" });
    }
    if (newPassword.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters" });
    }
    const user = await db.query.users.findFirst({
      where: eq12(users.email, email)
    });
    if (!user) {
      return res.status(404).json({ message: "Admin user not found" });
    }
    await storage.updateUser(user.id, { passwordHash: newPassword });
    res.json({ success: true, message: "Password updated successfully" });
  } catch (error) {
    console.error("Error updating password:", error);
    res.status(500).json({ message: "Failed to update password" });
  }
});
router11.post("/admin/categories", requireAdminAccess, async (req, res) => {
  try {
    const { name, description, icon, type } = req.body;
    if (!name) {
      return res.status(400).json({ message: "Category name is required" });
    }
    const category = await storage.createCategory({
      name,
      description,
      icon,
      type: type || "physical",
      isActive: true
    });
    res.json({ success: true, category, message: "Category added successfully" });
  } catch (error) {
    console.error("Error adding category:", error);
    res.status(500).json({ message: "Failed to add category" });
  }
});
router11.put("/admin/categories/:id", requireAdminAccess, async (req, res) => {
  try {
    const categoryId = parseInt(req.params.id);
    const { name, description, icon, type, active } = req.body;
    if (isNaN(categoryId)) {
      return res.status(400).json({ message: "Invalid category ID" });
    }
    const updates = {};
    if (name !== void 0) updates.name = name;
    if (description !== void 0) updates.description = description;
    if (icon !== void 0) updates.icon = icon;
    if (type !== void 0) updates.type = type;
    if (active !== void 0) updates.isActive = active;
    const category = await storage.updateCategory(categoryId, updates);
    res.json({ success: true, category, message: "Category updated successfully" });
  } catch (error) {
    console.error("Error updating category:", error);
    res.status(500).json({ message: "Failed to update category" });
  }
});
router11.delete("/admin/categories/:id", requireAdminAccess, async (req, res) => {
  try {
    const categoryId = parseInt(req.params.id);
    if (isNaN(categoryId)) {
      return res.status(400).json({ message: "Invalid category ID" });
    }
    await storage.deleteCategory(categoryId);
    res.json({ success: true, message: "Category deleted successfully" });
  } catch (error) {
    console.error("Error deleting category:", error);
    res.status(500).json({ message: "Failed to delete category" });
  }
});
router11.post("/admin/generate-ai-image", requireAdminAccess, async (req, res) => {
  try {
    const { prompt, productName } = req.body;
    if (!prompt) {
      return res.status(400).json({ message: "Prompt is required for generation" });
    }
    console.log(`AI Image generation requested for: ${productName}`);
    console.log(`Prompt: ${prompt}`);
    const fileName = `ai_${Date.now()}_${productName.toLowerCase().replace(/\s+/g, "_")}.png`;
    const publicPath = `/images/products/${fileName}`;
    res.json({
      success: true,
      url: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=800",
      // High-quality milk placeholder
      message: "AI image generated successfully (Demo Mode)"
    });
  } catch (error) {
    console.error("Error generating AI image:", error);
    res.status(500).json({ message: "AI generation failed" });
  }
});
router11.post("/admin/upload-product-image", requireAdminAccess, async (req, res) => {
  try {
    console.log("Upload request received");
    if (!req.files || !req.files.image) {
      console.log("No files in request:", req.files);
      return res.status(400).json({ message: "No image file provided" });
    }
    const image = req.files.image;
    console.log("Received image:", image.name, "Size:", image.size);
    const sanitizedName = image.name.replace(/[^a-zA-Z0-9.-]/g, "_");
    const fileName = `${Date.now()}_${sanitizedName}`;
    const uploadPath = path.join(process.cwd(), "public", "products", fileName);
    console.log("Uploading to:", uploadPath);
    const dir = path.dirname(uploadPath);
    if (!fs.existsSync(dir)) {
      console.log("Creating directory:", dir);
      fs.mkdirSync(dir, { recursive: true });
    }
    await image.mv(uploadPath);
    console.log("File moved successfully");
    const imageUrl = `/products/${fileName}`;
    res.json({ url: imageUrl });
  } catch (error) {
    console.error("Error uploading product image:", error);
    res.status(500).json({ message: "Failed to upload image" });
  }
});
router11.post("/admin/upload-banner-image", requireAdminAccess, async (req, res) => {
  try {
    if (!req.files || !req.files.image) {
      return res.status(400).json({ message: "No image file provided" });
    }
    const image = req.files.image;
    const sanitizedName = image.name.replace(/[^a-zA-Z0-9.-]/g, "_");
    const fileName = `${Date.now()}_banner_${sanitizedName}`;
    const uploadPath = path.join(process.cwd(), "public", "banners", fileName);
    const dir = path.dirname(uploadPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    await image.mv(uploadPath);
    const imageUrl = `/banners/${fileName}`;
    res.json({ url: imageUrl });
  } catch (error) {
    console.error("Error uploading banner image:", error);
    res.status(500).json({ message: "Failed to upload image" });
  }
});
router11.post("/admin/products", requireAdminAccess, async (req, res) => {
  try {
    const { name, description, category, type, price, unit, stock, imageUrl, duration, details, downloadUrl, accessDetails } = req.body;
    if (!name || !category) {
      return res.status(400).json({ message: "Item Name and Category are required" });
    }
    const product = await storage.createProduct({
      name,
      description,
      category,
      type: type || category,
      price: price ? price.toString() : null,
      unit: unit || null,
      stock: stock !== void 0 && stock !== "" ? parseInt(stock) : 0,
      imageUrl,
      duration: duration || null,
      details: details || null,
      downloadUrl: downloadUrl || null,
      accessDetails: accessDetails || null,
      isActive: true
    });
    res.json({ success: true, product, message: "Item added successfully" });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ message: "Failed to add item" });
  }
});
router11.put("/admin/products/:id", requireAdminAccess, async (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const updates = req.body;
    if (isNaN(productId)) {
      return res.status(400).json({ message: "Invalid product ID" });
    }
    const currentProduct = await storage.getProducts();
    const existingProduct = currentProduct.find((p) => p.id === productId);
    const product = await storage.updateProduct(productId, updates);
    if (updates.stock !== void 0 && existingProduct && existingProduct.stock !== updates.stock) {
      const userId = req.user?.claims?.sub;
      const previousStock = existingProduct.stock || 0;
      const quantityDiff = updates.stock - previousStock;
      await storage.recordStockMovement({
        productId,
        type: quantityDiff > 0 ? "IN" : "OUT",
        reason: "ADMIN_ADJUST",
        quantity: quantityDiff,
        previousStock,
        newStock: updates.stock,
        createdBy: userId,
        notes: "Manual stock adjustment by admin"
      });
    }
    res.json({ success: true, product, message: "Product updated successfully" });
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ message: "Failed to update product" });
  }
});
router11.delete("/admin/products/:id", requireAdminAccess, async (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    if (isNaN(productId)) {
      return res.status(400).json({ message: "Invalid product ID" });
    }
    const product = await storage.updateProduct(productId, { isActive: false });
    res.json({ success: true, product, message: "Product deactivated successfully" });
  } catch (error) {
    console.error("Error deactivating product:", error);
    res.status(500).json({ message: "Failed to deactivate product" });
  }
});
router11.get("/admin/orders", requireAdmin, async (req, res) => {
  try {
    const orders2 = await storage.getAllOrders();
    res.json(orders2);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ message: "Failed to fetch orders" });
  }
});
router11.put("/admin/orders/:id/assign-delivery", requireAdmin, async (req, res) => {
  try {
    const orderId = parseInt(req.params.id);
    const { deliveryPartnerId } = req.body;
    if (isNaN(orderId) || !deliveryPartnerId) {
      return res.status(400).json({ message: "Order ID and delivery partner ID required" });
    }
    const order = await storage.assignDeliveryPartner(orderId, deliveryPartnerId);
    res.json({ success: true, order, message: "Delivery partner assigned successfully" });
  } catch (error) {
    console.error("Error assigning delivery partner:", error);
    res.status(500).json({ message: "Failed to assign delivery partner" });
  }
});
router11.put("/admin/orders/:id/payment", requireAdmin, async (req, res) => {
  try {
    const orderId = parseInt(req.params.id);
    const { paymentStatus, paymentMethod, paymentDate } = req.body;
    if (isNaN(orderId)) {
      return res.status(400).json({ message: "Invalid order ID" });
    }
    const order = await storage.updateOrderPayment(orderId, {
      paymentStatus,
      paymentMethod,
      paymentDate: paymentDate ? new Date(paymentDate) : /* @__PURE__ */ new Date()
    });
    res.json({ success: true, order, message: "Payment status updated successfully" });
  } catch (error) {
    console.error("Error updating payment:", error);
    res.status(500).json({ message: "Failed to update payment" });
  }
});
router11.get("/admin/customers", requireAdmin, async (req, res) => {
  try {
    const customers = await storage.getAllCustomers();
    res.json(customers);
  } catch (error) {
    console.error("Error fetching customers:", error);
    res.status(500).json({ message: "Failed to fetch customers" });
  }
});
router11.get("/admin/subscriptions", requireAdmin, async (req, res) => {
  try {
    const subscriptions = await storage.getAllSubscriptions();
    res.json(subscriptions);
  } catch (error) {
    console.error("Error fetching subscriptions:", error);
    res.status(500).json({ message: "Failed to fetch subscriptions" });
  }
});
router11.get("/admin/vendors", requireAdmin, async (req, res) => {
  try {
    const vendors2 = await storage.getVendors();
    res.json(vendors2);
  } catch (error) {
    console.error("Error fetching vendors:", error);
    res.status(500).json({ message: "Failed to fetch vendors" });
  }
});
router11.post("/admin/cms/privacy-policy", requireAdminAccess, async (req, res) => {
  const updated = await storage.updatePrivacyPolicySettings(req.body);
  res.json(updated);
});
router11.get("/admin/site-settings", requireAdminAccess, async (_req, res) => {
  const settings = await storage.getSiteSettings();
  res.json(settings || { brandName: "Divine Naturals" });
});
router11.post("/admin/site-settings", requireAdminAccess, async (req, res) => {
  const updated = await storage.updateSiteSettings(req.body);
  res.json(updated);
});
router11.get("/admin/stats", requireAdmin, async (req, res) => {
  try {
    const stats = await storage.getAdminStats();
    res.json(stats);
  } catch (error) {
    console.error("Error fetching stats:", error);
    res.status(500).json({ message: "Failed to fetch stats" });
  }
});
router11.put("/admin/orders/:id", requireAdmin, async (req, res) => {
  try {
    const orderId = parseInt(req.params.id);
    const { status } = req.body;
    if (isNaN(orderId) || !status) {
      return res.status(400).json({ message: "Order ID and status are required" });
    }
    const order = await storage.updateOrderStatus(orderId, status);
    res.json({ success: true, order, message: "Order status updated successfully" });
  } catch (error) {
    console.error("Error updating order status:", error);
    res.status(500).json({ message: "Failed to update order status" });
  }
});
router11.get("/admin/stock-movements", requireAdmin, async (req, res) => {
  try {
    const movements = await storage.getAllStockMovements();
    res.json(movements);
  } catch (error) {
    console.error("Error fetching stock movements:", error);
    res.status(500).json({ message: "Failed to fetch stock movements" });
  }
});
router11.get("/admin/stock-movements/:productId", requireAdmin, async (req, res) => {
  try {
    const productId = parseInt(req.params.productId);
    if (isNaN(productId)) {
      return res.status(400).json({ message: "Invalid product ID" });
    }
    const movements = await storage.getStockMovementsByProduct(productId);
    res.json(movements);
  } catch (error) {
    console.error("Error fetching stock movements:", error);
    res.status(500).json({ message: "Failed to fetch stock movements" });
  }
});
router11.post("/storage/upload", requireAdmin, async (req, res) => {
  try {
    const { file, path: path8, data, dataUrl } = req.body;
    if (dataUrl) {
      const timestamp2 = Date.now();
      const uniquePath = `${path8}-${timestamp2}`.replace(/\s+/g, "-");
      return res.json({ url: dataUrl });
    }
    if (data) {
      const timestamp2 = Date.now();
      const uniquePath = `${path8}-${timestamp2}`.replace(/\s+/g, "-");
      const dataURLPrefix = "data:image/jpeg;base64,";
      return res.json({ url: `${dataURLPrefix}${data}` });
    }
    return res.status(400).json({ message: "Please upload via URL or try again" });
  } catch (error) {
    console.error("Error uploading file:", error);
    res.status(500).json({ message: "Failed to upload file" });
  }
});
var rbac_routes_default = router11;

// server/routes/banners.routes.ts
init_db();
init_schema();
import { Router as Router12 } from "express";
import { eq as eq13, asc as asc2, and as and10, lte as lte5, gte as gte5, isNull as isNull2, or as or2 } from "drizzle-orm";
var router12 = Router12();
router12.get("/public", async (req, res) => {
  try {
    const now = /* @__PURE__ */ new Date();
    const activeBanners = await db.select().from(banners).where(
      and10(
        eq13(banners.isActive, true),
        or2(
          isNull2(banners.startDate),
          lte5(banners.startDate, now)
        ),
        or2(
          isNull2(banners.endDate),
          gte5(banners.endDate, now)
        )
      )
    ).orderBy(asc2(banners.displayOrder));
    res.json(activeBanners);
  } catch (error) {
    console.error("Error fetching public banners:", error);
    res.status(500).json({ message: "Failed to fetch banners" });
  }
});
router12.get("/", requireAdminAccess, async (req, res) => {
  try {
    const allBanners = await db.select().from(banners).orderBy(asc2(banners.displayOrder));
    res.json(allBanners);
  } catch (error) {
    console.error("Error fetching banners:", error);
    res.status(500).json({ message: "Failed to fetch banners" });
  }
});
router12.post("/", requireAdminAccess, async (req, res) => {
  try {
    const { title, subtitle, imageUrl, imageUrlTablet, imageUrlMobile, ctaText, ctaLink, badgeText, displayOrder, isActive, showOverlay, startDate, endDate } = req.body;
    const [newBanner] = await db.insert(banners).values({
      title,
      subtitle,
      imageUrl,
      imageUrlTablet: imageUrlTablet || null,
      imageUrlMobile: imageUrlMobile || null,
      ctaText,
      ctaLink,
      badgeText,
      displayOrder: displayOrder || 0,
      isActive: isActive !== false,
      showOverlay: showOverlay !== false,
      startDate: startDate ? new Date(startDate) : null,
      endDate: endDate ? new Date(endDate) : null
    }).returning();
    res.status(201).json(newBanner);
  } catch (error) {
    console.error("Error creating banner:", error);
    res.status(500).json({ message: "Failed to create banner" });
  }
});
router12.put("/:id", requireAdminAccess, async (req, res) => {
  try {
    const bannerId = parseInt(req.params.id);
    const { title, subtitle, imageUrl, imageUrlTablet, imageUrlMobile, ctaText, ctaLink, badgeText, displayOrder, isActive, showOverlay, startDate, endDate } = req.body;
    const [updatedBanner] = await db.update(banners).set({
      title,
      subtitle,
      imageUrl,
      imageUrlTablet: imageUrlTablet || null,
      imageUrlMobile: imageUrlMobile || null,
      ctaText,
      ctaLink,
      badgeText,
      displayOrder,
      isActive,
      showOverlay,
      startDate: startDate ? new Date(startDate) : null,
      endDate: endDate ? new Date(endDate) : null,
      updatedAt: /* @__PURE__ */ new Date()
    }).where(eq13(banners.id, bannerId)).returning();
    if (!updatedBanner) {
      return res.status(404).json({ message: "Banner not found" });
    }
    res.json(updatedBanner);
  } catch (error) {
    console.error("Error updating banner:", error);
    res.status(500).json({ message: "Failed to update banner" });
  }
});
router12.delete("/:id", requireAdminAccess, async (req, res) => {
  try {
    const bannerId = parseInt(req.params.id);
    const [deletedBanner] = await db.delete(banners).where(eq13(banners.id, bannerId)).returning();
    if (!deletedBanner) {
      return res.status(404).json({ message: "Banner not found" });
    }
    res.json({ message: "Banner deleted successfully" });
  } catch (error) {
    console.error("Error deleting banner:", error);
    res.status(500).json({ message: "Failed to delete banner" });
  }
});
router12.get("/sections/public", async (req, res) => {
  try {
    const activeSections = await db.select().from(homepageSections).where(eq13(homepageSections.isActive, true)).orderBy(asc2(homepageSections.displayOrder));
    res.json(activeSections);
  } catch (error) {
    console.error("Error fetching homepage sections:", error);
    res.status(500).json({ message: "Failed to fetch sections" });
  }
});
router12.get("/sections", requireAdminAccess, async (req, res) => {
  try {
    const allSections = await db.select().from(homepageSections).orderBy(asc2(homepageSections.displayOrder));
    res.json(allSections);
  } catch (error) {
    console.error("Error fetching sections:", error);
    res.status(500).json({ message: "Failed to fetch sections" });
  }
});
router12.post("/sections", requireAdminAccess, async (req, res) => {
  try {
    const { sectionType, title, subtitle, content, displayOrder, isActive } = req.body;
    if (!sectionType) {
      return res.status(400).json({ message: "Section type is required" });
    }
    const [newSection] = await db.insert(homepageSections).values({
      sectionType,
      title,
      subtitle,
      content,
      displayOrder: displayOrder || 0,
      isActive: isActive !== false
    }).returning();
    res.status(201).json(newSection);
  } catch (error) {
    console.error("Error creating section:", error);
    res.status(500).json({ message: "Failed to create section" });
  }
});
var banners_routes_default = router12;

// server/routes/homepage.routes.ts
init_db();
init_schema();
import { Router as Router13 } from "express";
import { eq as eq14, asc as asc3, desc as desc5, and as and11, lte as lte6, gte as gte6, isNull as isNull3, or as or3 } from "drizzle-orm";
var router13 = Router13();
router13.get("/ethos/public", async (req, res) => {
  try {
    const cards = await db.select().from(ethosCards).where(eq14(ethosCards.isActive, true)).orderBy(asc3(ethosCards.displayOrder));
    res.json(cards);
  } catch (error) {
    console.error("Error fetching ethos cards:", error);
    res.status(500).json({ message: "Failed to fetch ethos cards" });
  }
});
router13.get("/ethos", requireAdminAccess, async (req, res) => {
  try {
    const cards = await db.select().from(ethosCards).orderBy(asc3(ethosCards.displayOrder));
    res.json(cards);
  } catch (error) {
    console.error("Error fetching ethos cards:", error);
    res.status(500).json({ message: "Failed to fetch ethos cards" });
  }
});
router13.post("/ethos", requireAdminAccess, async (req, res) => {
  try {
    const { title, description, icon, displayOrder, isActive } = req.body;
    const [card] = await db.insert(ethosCards).values({
      title,
      description,
      icon,
      displayOrder: displayOrder || 0,
      isActive: isActive !== false
    }).returning();
    res.status(201).json(card);
  } catch (error) {
    console.error("Error creating ethos card:", error);
    res.status(500).json({ message: "Failed to create ethos card" });
  }
});
router13.put("/ethos/:id", requireAdminAccess, async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { title, description, icon, displayOrder, isActive } = req.body;
    const [card] = await db.update(ethosCards).set({ title, description, icon, displayOrder, isActive, updatedAt: /* @__PURE__ */ new Date() }).where(eq14(ethosCards.id, id)).returning();
    if (!card) return res.status(404).json({ message: "Card not found" });
    res.json(card);
  } catch (error) {
    console.error("Error updating ethos card:", error);
    res.status(500).json({ message: "Failed to update ethos card" });
  }
});
router13.delete("/ethos/:id", requireAdminAccess, async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const [card] = await db.delete(ethosCards).where(eq14(ethosCards.id, id)).returning();
    if (!card) return res.status(404).json({ message: "Card not found" });
    res.json({ message: "Card deleted successfully" });
  } catch (error) {
    console.error("Error deleting ethos card:", error);
    res.status(500).json({ message: "Failed to delete ethos card" });
  }
});
router13.get("/stats/public", async (req, res) => {
  try {
    const counters = await db.select().from(statsCounters).where(eq14(statsCounters.isActive, true)).orderBy(asc3(statsCounters.displayOrder));
    res.json(counters);
  } catch (error) {
    console.error("Error fetching stats counters:", error);
    res.status(500).json({ message: "Failed to fetch stats counters" });
  }
});
router13.get("/stats", requireAdminAccess, async (req, res) => {
  try {
    const counters = await db.select().from(statsCounters).orderBy(asc3(statsCounters.displayOrder));
    res.json(counters);
  } catch (error) {
    console.error("Error fetching stats counters:", error);
    res.status(500).json({ message: "Failed to fetch stats counters" });
  }
});
router13.post("/stats", requireAdminAccess, async (req, res) => {
  try {
    const { label, value, suffix, icon, displayOrder, isActive } = req.body;
    const [counter] = await db.insert(statsCounters).values({
      label,
      value,
      suffix,
      icon,
      displayOrder: displayOrder || 0,
      isActive: isActive !== false
    }).returning();
    res.status(201).json(counter);
  } catch (error) {
    console.error("Error creating stats counter:", error);
    res.status(500).json({ message: "Failed to create stats counter" });
  }
});
router13.put("/stats/:id", requireAdminAccess, async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { label, value, suffix, icon, displayOrder, isActive } = req.body;
    const [counter] = await db.update(statsCounters).set({ label, value, suffix, icon, displayOrder, isActive, updatedAt: /* @__PURE__ */ new Date() }).where(eq14(statsCounters.id, id)).returning();
    if (!counter) return res.status(404).json({ message: "Counter not found" });
    res.json(counter);
  } catch (error) {
    console.error("Error updating stats counter:", error);
    res.status(500).json({ message: "Failed to update stats counter" });
  }
});
router13.delete("/stats/:id", requireAdminAccess, async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const [counter] = await db.delete(statsCounters).where(eq14(statsCounters.id, id)).returning();
    if (!counter) return res.status(404).json({ message: "Counter not found" });
    res.json({ message: "Counter deleted successfully" });
  } catch (error) {
    console.error("Error deleting stats counter:", error);
    res.status(500).json({ message: "Failed to delete stats counter" });
  }
});
router13.get("/faqs/public", async (req, res) => {
  try {
    const faqList = await db.select().from(faqs).where(eq14(faqs.isActive, true)).orderBy(asc3(faqs.displayOrder));
    res.json(faqList);
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    res.status(500).json({ message: "Failed to fetch FAQs" });
  }
});
router13.get("/faqs", requireAdminAccess, async (req, res) => {
  try {
    const faqList = await db.select().from(faqs).orderBy(asc3(faqs.displayOrder));
    res.json(faqList);
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    res.status(500).json({ message: "Failed to fetch FAQs" });
  }
});
router13.post("/faqs", requireAdminAccess, async (req, res) => {
  try {
    const { question, answer, category, displayOrder, isActive } = req.body;
    const [faq] = await db.insert(faqs).values({
      question,
      answer,
      category: category || "General",
      displayOrder: displayOrder || 0,
      isActive: isActive !== false
    }).returning();
    res.status(201).json(faq);
  } catch (error) {
    console.error("Error creating FAQ:", error);
    res.status(500).json({ message: "Failed to create FAQ" });
  }
});
router13.put("/faqs/:id", requireAdminAccess, async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { question, answer, category, displayOrder, isActive } = req.body;
    const [faq] = await db.update(faqs).set({ question, answer, category, displayOrder, isActive, updatedAt: /* @__PURE__ */ new Date() }).where(eq14(faqs.id, id)).returning();
    if (!faq) return res.status(404).json({ message: "FAQ not found" });
    res.json(faq);
  } catch (error) {
    console.error("Error updating FAQ:", error);
    res.status(500).json({ message: "Failed to update FAQ" });
  }
});
router13.delete("/faqs/:id", requireAdminAccess, async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const [faq] = await db.delete(faqs).where(eq14(faqs.id, id)).returning();
    if (!faq) return res.status(404).json({ message: "FAQ not found" });
    res.json({ message: "FAQ deleted successfully" });
  } catch (error) {
    console.error("Error deleting FAQ:", error);
    res.status(500).json({ message: "Failed to delete FAQ" });
  }
});
router13.get("/deals/public", async (req, res) => {
  try {
    const now = /* @__PURE__ */ new Date();
    const deals = await db.select({
      id: productDeals.id,
      productId: productDeals.productId,
      dealType: productDeals.dealType,
      dealValue: productDeals.dealValue,
      badgeText: productDeals.badgeText,
      priority: productDeals.priority,
      product: products
    }).from(productDeals).innerJoin(products, eq14(productDeals.productId, products.id)).where(
      and11(
        eq14(productDeals.isActive, true),
        eq14(products.isActive, true),
        or3(isNull3(productDeals.startsAt), lte6(productDeals.startsAt, now)),
        or3(isNull3(productDeals.endsAt), gte6(productDeals.endsAt, now))
      )
    ).orderBy(asc3(productDeals.priority));
    res.json(deals);
  } catch (error) {
    console.error("Error fetching deals:", error);
    res.status(500).json({ message: "Failed to fetch deals" });
  }
});
router13.get("/deals", requireAdminAccess, async (req, res) => {
  try {
    const deals = await db.select({
      id: productDeals.id,
      productId: productDeals.productId,
      dealType: productDeals.dealType,
      dealValue: productDeals.dealValue,
      badgeText: productDeals.badgeText,
      priority: productDeals.priority,
      startsAt: productDeals.startsAt,
      endsAt: productDeals.endsAt,
      isActive: productDeals.isActive,
      product: products
    }).from(productDeals).leftJoin(products, eq14(productDeals.productId, products.id)).orderBy(asc3(productDeals.priority));
    res.json(deals);
  } catch (error) {
    console.error("Error fetching deals:", error);
    res.status(500).json({ message: "Failed to fetch deals" });
  }
});
router13.post("/deals", requireAdminAccess, async (req, res) => {
  try {
    const { productId, dealType, dealValue, badgeText, priority, startsAt, endsAt, isActive } = req.body;
    const [deal] = await db.insert(productDeals).values({
      productId,
      dealType: dealType || "PERCENT",
      dealValue,
      badgeText,
      priority: priority || 0,
      startsAt: startsAt ? new Date(startsAt) : null,
      endsAt: endsAt ? new Date(endsAt) : null,
      isActive: isActive !== false
    }).returning();
    res.status(201).json(deal);
  } catch (error) {
    console.error("Error creating deal:", error);
    res.status(500).json({ message: "Failed to create deal" });
  }
});
router13.put("/deals/:id", requireAdminAccess, async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { productId, dealType, dealValue, badgeText, priority, startsAt, endsAt, isActive } = req.body;
    const [deal] = await db.update(productDeals).set({
      productId,
      dealType,
      dealValue,
      badgeText,
      priority,
      startsAt: startsAt ? new Date(startsAt) : null,
      endsAt: endsAt ? new Date(endsAt) : null,
      isActive,
      updatedAt: /* @__PURE__ */ new Date()
    }).where(eq14(productDeals.id, id)).returning();
    if (!deal) return res.status(404).json({ message: "Deal not found" });
    res.json(deal);
  } catch (error) {
    console.error("Error updating deal:", error);
    res.status(500).json({ message: "Failed to update deal" });
  }
});
router13.delete("/deals/:id", requireAdminAccess, async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const [deal] = await db.delete(productDeals).where(eq14(productDeals.id, id)).returning();
    if (!deal) return res.status(404).json({ message: "Deal not found" });
    res.json({ message: "Deal deleted successfully" });
  } catch (error) {
    console.error("Error deleting deal:", error);
    res.status(500).json({ message: "Failed to delete deal" });
  }
});
router13.get("/new-products/public", async (req, res) => {
  try {
    const newProducts = await db.select().from(products).where(and11(eq14(products.isActive, true), eq14(products.isNew, true))).orderBy(desc5(products.launchedAt), desc5(products.createdAt)).limit(8);
    res.json(newProducts);
  } catch (error) {
    console.error("Error fetching new products:", error);
    res.status(500).json({ message: "Failed to fetch new products" });
  }
});
router13.get("/newsletter/public", async (req, res) => {
  try {
    const [settings] = await db.select().from(newsletterSettings).where(eq14(newsletterSettings.isActive, true)).limit(1);
    res.json(settings || null);
  } catch (error) {
    console.error("Error fetching newsletter settings:", error);
    res.status(500).json({ message: "Failed to fetch newsletter settings" });
  }
});
router13.get("/newsletter", requireAdminAccess, async (req, res) => {
  try {
    const [settings] = await db.select().from(newsletterSettings).limit(1);
    res.json(settings || null);
  } catch (error) {
    console.error("Error fetching newsletter settings:", error);
    res.status(500).json({ message: "Failed to fetch newsletter settings" });
  }
});
router13.put("/newsletter", requireAdminAccess, async (req, res) => {
  try {
    const { title, subtitle, ctaText, placeholderText, isActive } = req.body;
    const [existing] = await db.select().from(newsletterSettings).limit(1);
    if (existing) {
      const [updated] = await db.update(newsletterSettings).set({ title, subtitle, ctaText, placeholderText, isActive, updatedAt: /* @__PURE__ */ new Date() }).where(eq14(newsletterSettings.id, existing.id)).returning();
      res.json(updated);
    } else {
      const [created] = await db.insert(newsletterSettings).values({ title, subtitle, ctaText, placeholderText, isActive }).returning();
      res.status(201).json(created);
    }
  } catch (error) {
    console.error("Error updating newsletter settings:", error);
    res.status(500).json({ message: "Failed to update newsletter settings" });
  }
});
router13.get("/footer/public", async (req, res) => {
  try {
    const [settings] = await db.select().from(footerSettings).where(eq14(footerSettings.isActive, true)).limit(1);
    res.json(settings || null);
  } catch (error) {
    console.error("Error fetching footer settings:", error);
    res.status(500).json({ message: "Failed to fetch footer settings" });
  }
});
router13.get("/footer", requireAdminAccess, async (req, res) => {
  try {
    const [settings] = await db.select().from(footerSettings).limit(1);
    res.json(settings || null);
  } catch (error) {
    console.error("Error fetching footer settings:", error);
    res.status(500).json({ message: "Failed to fetch footer settings" });
  }
});
router13.put("/footer", requireAdminAccess, async (req, res) => {
  try {
    const { companyName, tagline, description, phone, email, address, socialLinks, footerLinks, copyrightText, isActive } = req.body;
    const [existing] = await db.select().from(footerSettings).limit(1);
    if (existing) {
      const [updated] = await db.update(footerSettings).set({ companyName, tagline, description, phone, email, address, socialLinks, footerLinks, copyrightText, isActive, updatedAt: /* @__PURE__ */ new Date() }).where(eq14(footerSettings.id, existing.id)).returning();
      res.json(updated);
    } else {
      const [created] = await db.insert(footerSettings).values({ companyName, tagline, description, phone, email, address, socialLinks, footerLinks, copyrightText, isActive }).returning();
      res.status(201).json(created);
    }
  } catch (error) {
    console.error("Error updating footer settings:", error);
    res.status(500).json({ message: "Failed to update footer settings" });
  }
});
var homepage_routes_default = router13;

// server/routes/cms.routes.ts
init_db();
init_schema();
import { Router as Router14 } from "express";
import { eq as eq15 } from "drizzle-orm";
var router14 = Router14();
router14.get("/about-us/public", async (req, res) => {
  try {
    const [data] = await db.select().from(aboutUsSettings).where(eq15(aboutUsSettings.isActive, true));
    res.json(data || {});
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch about us" });
  }
});
router14.get("/about-us", requireAdminAccess, async (req, res) => {
  try {
    const [data] = await db.select().from(aboutUsSettings);
    res.json(data || {});
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch about us" });
  }
});
router14.put("/about-us", requireAdminAccess, async (req, res) => {
  try {
    const {
      heroTitle,
      heroSubtitle,
      heroImageUrl,
      heroCtaText,
      heroCtaLink,
      storyHeading,
      storyDescription,
      storyImageUrl,
      valuesTitle,
      values,
      processTitle,
      processSteps,
      ctaHeading,
      ctaSubheading,
      ctaButtonText,
      ctaButtonLink,
      isActive
    } = req.body;
    const [data] = await db.update(aboutUsSettings).set({
      heroTitle,
      heroSubtitle,
      heroImageUrl,
      heroCtaText,
      heroCtaLink,
      storyHeading,
      storyDescription,
      storyImageUrl,
      valuesTitle,
      values,
      processTitle,
      processSteps,
      ctaHeading,
      ctaSubheading,
      ctaButtonText,
      ctaButtonLink,
      isActive,
      updatedAt: /* @__PURE__ */ new Date()
    }).where(eq15(aboutUsSettings.id, 1)).returning();
    res.json(data);
  } catch (error) {
    console.error("Update About Us error:", error);
    res.status(500).json({ message: "Failed to update about us" });
  }
});
router14.get("/contact/public", async (req, res) => {
  try {
    const [data] = await db.select().from(contactSettings).where(eq15(contactSettings.isActive, true));
    res.json(data || {});
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch contact info" });
  }
});
router14.get("/contact", requireAdminAccess, async (req, res) => {
  try {
    const [data] = await db.select().from(contactSettings);
    res.json(data || {});
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch contact info" });
  }
});
router14.put("/contact", requireAdminAccess, async (req, res) => {
  try {
    const {
      heroTitle,
      heroSubtitle,
      heroImageUrl,
      phone,
      email,
      address,
      businessHours,
      socialLinks,
      mapEmbedUrl,
      isActive
    } = req.body;
    const [data] = await db.update(contactSettings).set({
      heroTitle,
      heroSubtitle,
      heroImageUrl,
      phone,
      email,
      address,
      businessHours,
      socialLinks,
      mapEmbedUrl,
      isActive,
      updatedAt: /* @__PURE__ */ new Date()
    }).where(eq15(contactSettings.id, 1)).returning();
    res.json(data);
  } catch (error) {
    console.error("Update Contact error:", error);
    res.status(500).json({ message: "Failed to update contact info" });
  }
});
router14.get("/terms-of-service/public", async (req, res) => {
  try {
    const [data] = await db.select().from(termsOfServiceSettings).where(eq15(termsOfServiceSettings.isActive, true));
    res.json(data || {});
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch terms of service" });
  }
});
router14.get("/terms-of-service", requireAdminAccess, async (req, res) => {
  try {
    const [data] = await db.select().from(termsOfServiceSettings);
    res.json(data || {});
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch terms of service" });
  }
});
router14.put("/terms-of-service", requireAdminAccess, async (req, res) => {
  try {
    const { title, content, sections, isActive } = req.body;
    const [data] = await db.update(termsOfServiceSettings).set({ title, content, sections, isActive, updatedAt: /* @__PURE__ */ new Date() }).where(eq15(termsOfServiceSettings.id, 1)).returning();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Failed to update terms of service" });
  }
});
router14.get("/privacy-policy/public", async (req, res) => {
  try {
    const [data] = await db.select().from(privacyPolicySettings).where(eq15(privacyPolicySettings.isActive, true));
    res.json(data || {});
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch privacy policy" });
  }
});
router14.get("/privacy-policy", requireAdminAccess, async (req, res) => {
  try {
    const [data] = await db.select().from(privacyPolicySettings);
    res.json(data || {});
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch privacy policy" });
  }
});
router14.put("/privacy-policy", requireAdminAccess, async (req, res) => {
  try {
    const { title, content, sections, isActive } = req.body;
    const [data] = await db.update(privacyPolicySettings).set({ title, content, sections, isActive, updatedAt: /* @__PURE__ */ new Date() }).where(eq15(privacyPolicySettings.id, 1)).returning();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Failed to update privacy policy" });
  }
});
var cms_routes_default = router14;

// server/routes/contact-submissions.routes.ts
init_db();
init_schema();
import { eq as eq16, desc as desc6 } from "drizzle-orm";
function setupContactSubmissionsRoutes(app2) {
  app2.post("/api/contact-submissions", async (req, res) => {
    try {
      const { name, email, phone, message } = req.body;
      if (!name || !email || !message) {
        return res.status(400).json({ message: "Name, email and message are required" });
      }
      const [submission] = await db.insert(contactSubmissions).values({ name, email, phone, message, status: "new" }).returning();
      res.status(201).json(submission);
    } catch (error) {
      res.status(500).json({ message: "Failed to submit contact form" });
    }
  });
  app2.get("/api/admin/contact-submissions", async (req, res) => {
    try {
      const submissions = await db.select().from(contactSubmissions).orderBy(desc6(contactSubmissions.createdAt));
      res.json(submissions);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch submissions" });
    }
  });
  app2.put("/api/admin/contact-submissions/:id/read", async (req, res) => {
    try {
      const [submission] = await db.update(contactSubmissions).set({ status: "read", updatedAt: /* @__PURE__ */ new Date() }).where(eq16(contactSubmissions.id, parseInt(req.params.id))).returning();
      res.json(submission);
    } catch (error) {
      res.status(500).json({ message: "Failed to update submission" });
    }
  });
  app2.delete("/api/admin/contact-submissions/:id", async (req, res) => {
    try {
      await db.delete(contactSubmissions).where(eq16(contactSubmissions.id, parseInt(req.params.id)));
      res.json({ message: "Deleted" });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete submission" });
    }
  });
}

// server/jobs/auto-delivery.ts
init_db();
init_schema();
import { eq as eq17 } from "drizzle-orm";
async function generateDailyDeliveries() {
  try {
    const tomorrow = /* @__PURE__ */ new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowStr = tomorrow.toISOString().split("T")[0];
    const activeSubscriptions = await db.select().from(milkSubscriptions).where(eq17(milkSubscriptions.status, "ACTIVE"));
    for (const sub of activeSubscriptions) {
      if (sub.frequency === "daily") {
        await db.insert(subscriptionDeliveries).values({
          subscriptionId: sub.id,
          userId: sub.userId,
          deliveryDate: tomorrowStr,
          quantity: sub.quantity,
          status: "Pending"
        }).catch(() => null);
      } else if (sub.frequency === "weekly") {
        const dayOfWeek = tomorrow.getDay();
        if (dayOfWeek === 0) {
          await db.insert(subscriptionDeliveries).values({
            subscriptionId: sub.id,
            userId: sub.userId,
            deliveryDate: tomorrowStr,
            quantity: sub.quantity,
            status: "Pending"
          }).catch(() => null);
        }
      } else if (sub.frequency === "alternate") {
        const lastDelivery = await db.select().from(subscriptionDeliveries).where(eq17(subscriptionDeliveries.subscriptionId, sub.id));
        if (lastDelivery.length === 0) {
          await db.insert(subscriptionDeliveries).values({
            subscriptionId: sub.id,
            userId: sub.userId,
            deliveryDate: tomorrowStr,
            quantity: sub.quantity,
            status: "Pending"
          }).catch(() => null);
        }
      }
    }
    console.log(`\u2705 Generated deliveries for ${tomorrow.toDateString()}`);
  } catch (error) {
    console.error("\u274C Error generating daily deliveries:", error);
  }
}
function startDeliveryScheduler() {
  const midnight = () => {
    const now = /* @__PURE__ */ new Date();
    const tomorrow = /* @__PURE__ */ new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 1, 0);
    return tomorrow.getTime() - now.getTime();
  };
  setInterval(generateDailyDeliveries, midnight());
}

// server/routes/blog.routes.ts
init_db();
init_schema();
import { Router as Router15 } from "express";
import { eq as eq18, and as and12, ne as ne2, desc as desc7 } from "drizzle-orm";
init_schema();
var router15 = Router15();
var slugify = (text2) => {
  return text2.toString().toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
};
router15.get("/admin/blogs", requireAdminAccess, async (req, res) => {
  try {
    const list = await db.select().from(blogs).orderBy(desc7(blogs.createdAt));
    res.json(list);
  } catch (error) {
    console.error("Error listing blogs:", error);
    res.status(500).json({ message: "Failed to list blogs." });
  }
});
router15.get("/admin/blogs/:id", requireAdminAccess, async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const [blog] = await db.select().from(blogs).where(eq18(blogs.id, id));
    if (!blog) return res.status(404).json({ message: "Blog not found." });
    res.json(blog);
  } catch (error) {
    console.error("Error getting blog:", error);
    res.status(500).json({ message: "Failed to get blog." });
  }
});
router15.post("/admin/blogs", requireAdminAccess, async (req, res) => {
  try {
    const parsedData = insertBlogSchema.parse(req.body);
    let slug = parsedData.slug ? slugify(parsedData.slug) : slugify(parsedData.title);
    if (!slug) {
      return res.status(400).json({ message: "A valid title or slug is required to generate the URL." });
    }
    const [existing] = await db.select().from(blogs).where(eq18(blogs.slug, slug));
    if (existing) {
      return res.status(400).json({ message: "This slug already exists. Please choose another slug." });
    }
    const [newBlog] = await db.insert(blogs).values({
      ...parsedData,
      slug,
      status: parsedData.status || "Draft"
    }).returning();
    res.status(201).json(newBlog);
  } catch (error) {
    console.error("Error creating blog:", error);
    if (error.name === "ZodError") {
      return res.status(400).json({ message: "Invalid blog data.", errors: error.errors });
    }
    res.status(500).json({ message: "Failed to create blog." });
  }
});
router15.put("/admin/blogs/:id", requireAdminAccess, async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const parsedData = insertBlogSchema.partial().parse(req.body);
    const [blog] = await db.select().from(blogs).where(eq18(blogs.id, id));
    if (!blog) return res.status(404).json({ message: "Blog not found." });
    let slug = blog.slug;
    if (parsedData.slug || parsedData.title) {
      slug = slugify(parsedData.slug || parsedData.title || "");
      const [existing] = await db.select().from(blogs).where(and12(eq18(blogs.slug, slug), ne2(blogs.id, id)));
      if (existing) {
        return res.status(400).json({ message: "This slug already exists. Please choose another slug." });
      }
    }
    const [updatedBlog] = await db.update(blogs).set({
      ...parsedData,
      slug,
      updatedAt: /* @__PURE__ */ new Date()
    }).where(eq18(blogs.id, id)).returning();
    res.json(updatedBlog);
  } catch (error) {
    console.error("Error updating blog:", error);
    if (error.name === "ZodError") {
      return res.status(400).json({ message: "Invalid blog data.", errors: error.errors });
    }
    res.status(500).json({ message: "Failed to update blog." });
  }
});
router15.delete("/admin/blogs/:id", requireAdminAccess, async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const deleted = await db.delete(blogs).where(eq18(blogs.id, id)).returning();
    if (!deleted.length) return res.status(404).json({ message: "Blog not found." });
    res.json({ success: true, message: "Blog deleted successfully." });
  } catch (error) {
    console.error("Error deleting blog:", error);
    res.status(500).json({ message: "Failed to delete blog." });
  }
});
router15.get("/blogs", async (req, res) => {
  try {
    const search = req.query.search;
    let list = await db.select().from(blogs).where(eq18(blogs.status, "Published")).orderBy(desc7(blogs.createdAt));
    if (search) {
      const searchLower = search.toLowerCase();
      list = list.filter(
        (b) => b.title.toLowerCase().includes(searchLower) || b.shortDescription.toLowerCase().includes(searchLower) || b.content.toLowerCase().includes(searchLower)
      );
    }
    res.json(list);
  } catch (error) {
    console.error("Error fetching public blogs:", error);
    res.status(500).json({ message: "Failed to fetch blogs." });
  }
});
router15.get("/blogs/:slug", async (req, res) => {
  try {
    const slug = req.params.slug;
    const [blog] = await db.select().from(blogs).where(and12(eq18(blogs.slug, slug), eq18(blogs.status, "Published")));
    if (!blog) return res.status(404).json({ message: "Blog article not found." });
    const allBlogs = await db.select().from(blogs).where(and12(eq18(blogs.status, "Published"), ne2(blogs.id, blog.id))).limit(3);
    res.json({ blog, related: allBlogs });
  } catch (error) {
    console.error("Error fetching public blog detail:", error);
    res.status(500).json({ message: "Failed to fetch blog article." });
  }
});
var blog_routes_default = router15;

// server/routes/video-blog.routes.ts
init_db();
init_schema();
import { Router as Router16 } from "express";
import { eq as eq19, and as and13, ne as ne3, desc as desc8 } from "drizzle-orm";
init_schema();
var router16 = Router16();
var slugify2 = (text2) => {
  return text2.toString().toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
};
var convertToEmbedUrl = (url, type) => {
  if (!url) return "";
  const typeLower = type.toLowerCase();
  if (typeLower === "youtube") {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) {
      return `https://www.youtube.com/embed/${match[2]}`;
    }
  } else if (typeLower === "vimeo") {
    const regExp = /vimeo\.com\/(?:video\/)?([0-9]+)/;
    const match = url.match(regExp);
    if (match) {
      return `https://player.vimeo.com/video/${match[1]}`;
    }
  }
  return url;
};
router16.get("/admin/video-blogs", requireAdminAccess, async (req, res) => {
  try {
    const list = await db.select().from(videoBlogs).orderBy(desc8(videoBlogs.createdAt));
    res.json(list);
  } catch (error) {
    console.error("Error listing video blogs:", error);
    res.status(500).json({ message: "Failed to list video blogs." });
  }
});
router16.get("/admin/video-blogs/:id", requireAdminAccess, async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const [blog] = await db.select().from(videoBlogs).where(eq19(videoBlogs.id, id));
    if (!blog) return res.status(404).json({ message: "Video blog not found." });
    res.json(blog);
  } catch (error) {
    console.error("Error getting video blog:", error);
    res.status(500).json({ message: "Failed to get video blog." });
  }
});
router16.post("/admin/video-blogs", requireAdminAccess, async (req, res) => {
  try {
    const parsedData = insertVideoBlogSchema.parse(req.body);
    let slug = parsedData.slug ? slugify2(parsedData.slug) : slugify2(parsedData.title);
    if (!slug) {
      return res.status(400).json({ message: "A valid title or slug is required to generate the URL." });
    }
    const [existing] = await db.select().from(videoBlogs).where(eq19(videoBlogs.slug, slug));
    if (existing) {
      return res.status(400).json({ message: "This slug already exists. Please choose another slug." });
    }
    let videoUrl = parsedData.videoUrl || "";
    if (parsedData.videoType) {
      videoUrl = convertToEmbedUrl(videoUrl, parsedData.videoType);
    }
    const [newBlog] = await db.insert(videoBlogs).values({
      ...parsedData,
      slug,
      videoUrl,
      status: parsedData.status || "Draft"
    }).returning();
    res.status(201).json(newBlog);
  } catch (error) {
    console.error("Error creating video blog:", error);
    if (error.name === "ZodError") {
      return res.status(400).json({ message: "Invalid video blog data.", errors: error.errors });
    }
    res.status(500).json({ message: "Failed to create video blog." });
  }
});
router16.put("/admin/video-blogs/:id", requireAdminAccess, async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const parsedData = insertVideoBlogSchema.partial().parse(req.body);
    const [blog] = await db.select().from(videoBlogs).where(eq19(videoBlogs.id, id));
    if (!blog) return res.status(404).json({ message: "Video blog not found." });
    let slug = blog.slug;
    if (parsedData.slug || parsedData.title) {
      slug = slugify2(parsedData.slug || parsedData.title || "");
      const [existing] = await db.select().from(videoBlogs).where(and13(eq19(videoBlogs.slug, slug), ne3(videoBlogs.id, id)));
      if (existing) {
        return res.status(400).json({ message: "This slug already exists. Please choose another slug." });
      }
    }
    let videoUrl = parsedData.videoUrl !== void 0 ? parsedData.videoUrl : blog.videoUrl;
    const videoType = parsedData.videoType || blog.videoType;
    if (videoUrl && videoType) {
      videoUrl = convertToEmbedUrl(videoUrl, videoType);
    }
    const [updatedBlog] = await db.update(videoBlogs).set({
      ...parsedData,
      slug,
      videoUrl,
      updatedAt: /* @__PURE__ */ new Date()
    }).where(eq19(videoBlogs.id, id)).returning();
    res.json(updatedBlog);
  } catch (error) {
    console.error("Error updating video blog:", error);
    if (error.name === "ZodError") {
      return res.status(400).json({ message: "Invalid video blog data.", errors: error.errors });
    }
    res.status(500).json({ message: "Failed to update video blog." });
  }
});
router16.delete("/admin/video-blogs/:id", requireAdminAccess, async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const deleted = await db.delete(videoBlogs).where(eq19(videoBlogs.id, id)).returning();
    if (!deleted.length) return res.status(404).json({ message: "Video blog not found." });
    res.json({ success: true, message: "Video blog deleted successfully." });
  } catch (error) {
    console.error("Error deleting video blog:", error);
    res.status(500).json({ message: "Failed to delete video blog." });
  }
});
router16.get("/video-blogs", async (req, res) => {
  try {
    const search = req.query.search;
    let list = await db.select().from(videoBlogs).where(eq19(videoBlogs.status, "Published")).orderBy(desc8(videoBlogs.createdAt));
    if (search) {
      const searchLower = search.toLowerCase();
      list = list.filter(
        (b) => b.title.toLowerCase().includes(searchLower) || b.shortDescription.toLowerCase().includes(searchLower) || b.content && b.content.toLowerCase().includes(searchLower)
      );
    }
    res.json(list);
  } catch (error) {
    console.error("Error fetching public video blogs:", error);
    res.status(500).json({ message: "Failed to fetch video blogs." });
  }
});
router16.get("/video-blogs/:slug", async (req, res) => {
  try {
    const slug = req.params.slug;
    const [blog] = await db.select().from(videoBlogs).where(and13(eq19(videoBlogs.slug, slug), eq19(videoBlogs.status, "Published")));
    if (!blog) return res.status(404).json({ message: "Video blog not found." });
    const allBlogs = await db.select().from(videoBlogs).where(and13(eq19(videoBlogs.status, "Published"), ne3(videoBlogs.id, blog.id))).limit(3);
    res.json({ blog, related: allBlogs });
  } catch (error) {
    console.error("Error fetching public video blog detail:", error);
    res.status(500).json({ message: "Failed to fetch video blog." });
  }
});
var video_blog_routes_default = router16;

// server/routes/image-gallery.routes.ts
init_db();
init_schema();
import { Router as Router17 } from "express";
import { eq as eq20, desc as desc9, asc as asc4 } from "drizzle-orm";
init_schema();
var router17 = Router17();
router17.get("/admin/image-gallery", requireAdminAccess, async (req, res) => {
  try {
    const list = await db.select().from(imageGallery).orderBy(asc4(imageGallery.sortOrder), desc9(imageGallery.createdAt));
    res.json(list);
  } catch (error) {
    console.error("Error listing gallery images:", error);
    res.status(500).json({ message: "Failed to list gallery images." });
  }
});
router17.get("/admin/image-gallery/:id", requireAdminAccess, async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const [item] = await db.select().from(imageGallery).where(eq20(imageGallery.id, id));
    if (!item) return res.status(404).json({ message: "Image not found." });
    res.json(item);
  } catch (error) {
    console.error("Error getting gallery image:", error);
    res.status(500).json({ message: "Failed to get gallery image." });
  }
});
router17.post("/admin/image-gallery", requireAdminAccess, async (req, res) => {
  try {
    const parsedData = insertImageGallerySchema.parse(req.body);
    const [newItem] = await db.insert(imageGallery).values(parsedData).returning();
    res.status(201).json(newItem);
  } catch (error) {
    console.error("Error creating gallery image:", error);
    if (error.name === "ZodError") {
      return res.status(400).json({ message: "Invalid gallery image data.", errors: error.errors });
    }
    res.status(500).json({ message: "Failed to create gallery image." });
  }
});
router17.put("/admin/image-gallery/:id", requireAdminAccess, async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const parsedData = insertImageGallerySchema.partial().parse(req.body);
    const [updated] = await db.update(imageGallery).set(parsedData).where(eq20(imageGallery.id, id)).returning();
    if (!updated) return res.status(404).json({ message: "Image not found." });
    res.json(updated);
  } catch (error) {
    console.error("Error updating gallery image:", error);
    if (error.name === "ZodError") {
      return res.status(400).json({ message: "Invalid gallery image data.", errors: error.errors });
    }
    res.status(500).json({ message: "Failed to update gallery image." });
  }
});
router17.delete("/admin/image-gallery/:id", requireAdminAccess, async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const deleted = await db.delete(imageGallery).where(eq20(imageGallery.id, id)).returning();
    if (!deleted.length) return res.status(404).json({ message: "Image not found." });
    res.json({ success: true, message: "Gallery image deleted successfully." });
  } catch (error) {
    console.error("Error deleting gallery image:", error);
    res.status(500).json({ message: "Failed to delete gallery image." });
  }
});
router17.get("/image-gallery", async (req, res) => {
  try {
    const list = await db.select().from(imageGallery).where(eq20(imageGallery.status, "Published")).orderBy(asc4(imageGallery.sortOrder), desc9(imageGallery.createdAt));
    res.json(list);
  } catch (error) {
    console.error("Error fetching public gallery images:", error);
    res.status(500).json({ message: "Failed to fetch gallery images." });
  }
});
var image_gallery_routes_default = router17;

// server/routes/video-gallery.routes.ts
init_db();
init_schema();
import { Router as Router18 } from "express";
import { eq as eq21, desc as desc10, asc as asc5 } from "drizzle-orm";
init_schema();
var router18 = Router18();
var convertToEmbedUrl2 = (url, type) => {
  if (!url) return "";
  const typeLower = type.toLowerCase();
  if (typeLower === "youtube") {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) {
      return `https://www.youtube.com/embed/${match[2]}`;
    }
  } else if (typeLower === "vimeo") {
    const regExp = /vimeo\.com\/(?:video\/)?([0-9]+)/;
    const match = url.match(regExp);
    if (match) {
      return `https://player.vimeo.com/video/${match[1]}`;
    }
  }
  return url;
};
router18.get("/admin/video-gallery", requireAdminAccess, async (req, res) => {
  try {
    const list = await db.select().from(videoGallery).orderBy(asc5(videoGallery.sortOrder), desc10(videoGallery.createdAt));
    res.json(list);
  } catch (error) {
    console.error("Error listing gallery videos:", error);
    res.status(500).json({ message: "Failed to list gallery videos." });
  }
});
router18.get("/admin/video-gallery/:id", requireAdminAccess, async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const [item] = await db.select().from(videoGallery).where(eq21(videoGallery.id, id));
    if (!item) return res.status(404).json({ message: "Video not found." });
    res.json(item);
  } catch (error) {
    console.error("Error getting gallery video:", error);
    res.status(500).json({ message: "Failed to get gallery video." });
  }
});
router18.post("/admin/video-gallery", requireAdminAccess, async (req, res) => {
  try {
    const parsedData = insertVideoGallerySchema.parse(req.body);
    let videoUrl = parsedData.videoUrl || "";
    if (parsedData.videoType) {
      videoUrl = convertToEmbedUrl2(videoUrl, parsedData.videoType);
    }
    const [newItem] = await db.insert(videoGallery).values({
      ...parsedData,
      videoUrl
    }).returning();
    res.status(201).json(newItem);
  } catch (error) {
    console.error("Error creating gallery video:", error);
    if (error.name === "ZodError") {
      return res.status(400).json({ message: "Invalid gallery video data.", errors: error.errors });
    }
    res.status(500).json({ message: "Failed to create gallery video." });
  }
});
router18.put("/admin/video-gallery/:id", requireAdminAccess, async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const parsedData = insertVideoGallerySchema.partial().parse(req.body);
    const [item] = await db.select().from(videoGallery).where(eq21(videoGallery.id, id));
    if (!item) return res.status(404).json({ message: "Video not found." });
    let videoUrl = parsedData.videoUrl !== void 0 ? parsedData.videoUrl : item.videoUrl;
    const videoType = parsedData.videoType || item.videoType;
    if (videoUrl && videoType) {
      videoUrl = convertToEmbedUrl2(videoUrl, videoType);
    }
    const [updated] = await db.update(videoGallery).set({
      ...parsedData,
      videoUrl
    }).where(eq21(videoGallery.id, id)).returning();
    res.json(updated);
  } catch (error) {
    console.error("Error updating gallery video:", error);
    if (error.name === "ZodError") {
      return res.status(400).json({ message: "Invalid gallery video data.", errors: error.errors });
    }
    res.status(500).json({ message: "Failed to update gallery video." });
  }
});
router18.delete("/admin/video-gallery/:id", requireAdminAccess, async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const deleted = await db.delete(videoGallery).where(eq21(videoGallery.id, id)).returning();
    if (!deleted.length) return res.status(404).json({ message: "Video not found." });
    res.json({ success: true, message: "Gallery video deleted successfully." });
  } catch (error) {
    console.error("Error deleting gallery video:", error);
    res.status(500).json({ message: "Failed to delete gallery video." });
  }
});
router18.get("/video-gallery", async (req, res) => {
  try {
    const list = await db.select().from(videoGallery).where(eq21(videoGallery.status, "Published")).orderBy(asc5(videoGallery.sortOrder), desc10(videoGallery.createdAt));
    res.json(list);
  } catch (error) {
    console.error("Error fetching public gallery videos:", error);
    res.status(500).json({ message: "Failed to fetch gallery videos." });
  }
});
var video_gallery_routes_default = router18;

// server/routes/media.routes.ts
import { Router as Router19 } from "express";
import path2 from "path";
import fs2 from "fs";
var router19 = Router19();
router19.post("/upload", requireAdminAccess, async (req, res) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ message: "No files were uploaded." });
    }
    const fileKey = req.files.file ? "file" : req.files.image ? "image" : req.files.video ? "video" : Object.keys(req.files)[0];
    const uploadedFile = req.files[fileKey];
    if (!uploadedFile) {
      return res.status(400).json({ message: "No valid file found in request." });
    }
    const ext = path2.extname(uploadedFile.name).toLowerCase();
    const allowedImageExts = [".jpg", ".jpeg", ".png", ".webp"];
    const allowedVideoExts = [".mp4", ".webm", ".mov"];
    const allowedDocExts = [".pdf"];
    const isImage = allowedImageExts.includes(ext);
    const isVideo = allowedVideoExts.includes(ext);
    const isDoc = allowedDocExts.includes(ext);
    if (!isImage && !isVideo && !isDoc) {
      return res.status(400).json({
        message: "Invalid file type. Supported: jpg, jpeg, png, webp, mp4, webm, mov, pdf."
      });
    }
    const sanitizedName = uploadedFile.name.replace(/[^a-zA-Z0-9.-]+/g, "_");
    const fileName = `${Date.now()}_${sanitizedName}`;
    const uploadDir = path2.join(process.cwd(), "public", "uploads");
    const uploadPath = path2.join(uploadDir, fileName);
    if (!fs2.existsSync(uploadDir)) {
      fs2.mkdirSync(uploadDir, { recursive: true });
    }
    await uploadedFile.mv(uploadPath);
    const publicUrl = `/uploads/${fileName}`;
    res.json({
      url: publicUrl,
      type: isImage ? "image" : isVideo ? "video" : "pdf",
      name: uploadedFile.name,
      size: uploadedFile.size
    });
  } catch (error) {
    console.error("Media upload error:", error);
    res.status(500).json({ message: "Failed to upload file." });
  }
});
router19.post("/upload-screenshot", async (req, res) => {
  try {
    const userId = req.session?.userId;
    if (!userId) {
      return res.status(401).json({ message: "Not authenticated" });
    }
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ message: "No file uploaded." });
    }
    const fileKey = req.files.file ? "file" : req.files.screenshot ? "screenshot" : req.files.image ? "image" : Object.keys(req.files)[0];
    const uploadedFile = req.files[fileKey];
    if (!uploadedFile) {
      return res.status(400).json({ message: "No valid file found." });
    }
    const ext = path2.extname(uploadedFile.name).toLowerCase();
    const allowedExts = [".jpg", ".jpeg", ".png", ".webp", ".pdf"];
    if (!allowedExts.includes(ext)) {
      return res.status(400).json({ message: "Invalid file type. Use jpg, png, webp or pdf." });
    }
    const sanitizedName = uploadedFile.name.replace(/[^a-zA-Z0-9.-]+/g, "_");
    const fileName = `screenshot_${Date.now()}_${sanitizedName}`;
    const uploadDir = path2.join(process.cwd(), "public", "uploads");
    const uploadPath = path2.join(uploadDir, fileName);
    if (!fs2.existsSync(uploadDir)) {
      fs2.mkdirSync(uploadDir, { recursive: true });
    }
    await uploadedFile.mv(uploadPath);
    res.json({ url: `/uploads/${fileName}`, name: uploadedFile.name });
  } catch (error) {
    console.error("Screenshot upload error:", error);
    res.status(500).json({ message: "Failed to upload screenshot." });
  }
});
var media_routes_default = router19;

// server/routes/admin-users.routes.ts
import { Router as Router20 } from "express";
import bcryptjs2 from "bcryptjs";
import { nanoid as nanoid2 } from "nanoid";

// server/utils/mail.ts
import fs3 from "fs";
import path3 from "path";
async function sendEmail({ to, subject, body }) {
  console.log(`\u2709\uFE0F [MOCK EMAIL SENT]`);
  console.log(`To: ${to}`);
  console.log(`Subject: ${subject}`);
  console.log(`Body:
${body}`);
  console.log(`-----------------------------------`);
  try {
    const logFilePath = path3.join(process.cwd(), "email_logs.json");
    let logs = [];
    if (fs3.existsSync(logFilePath)) {
      try {
        const fileContent = fs3.readFileSync(logFilePath, "utf-8");
        logs = JSON.parse(fileContent);
      } catch (e) {
        logs = [];
      }
    }
    logs.push({
      to,
      subject,
      body,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    });
    fs3.writeFileSync(logFilePath, JSON.stringify(logs, null, 2), "utf-8");
    console.log(`Saved email log entry to email_logs.json`);
  } catch (error) {
    console.error("Failed to write to email_logs.json:", error);
  }
}

// server/routes/admin-users.routes.ts
import crypto from "crypto";
var router20 = Router20();
router20.use(requireAdminAccess);
router20.get("/", async (req, res) => {
  try {
    const usersList = await storage.getAllUsers();
    const resetRequests = await storage.getPasswordResetRequests();
    const mappedUsers = usersList.map((user) => {
      const pendingRequest = resetRequests.find(
        (req2) => req2.userId === user.id && req2.status === "pending"
      );
      return {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
        address: user.address,
        role: user.role,
        isActive: user.isActive,
        lastLogin: user.lastLogin,
        createdAt: user.createdAt,
        hasPendingReset: !!pendingRequest,
        pendingResetId: pendingRequest?.id || null
      };
    });
    res.json(mappedUsers);
  } catch (error) {
    console.error("Get all users error:", error);
    res.status(500).json({ message: "Failed to fetch users" });
  }
});
router20.post("/:id/block", async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await storage.getUser(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (user.role === "admin") {
      return res.status(400).json({ message: "Cannot block admin accounts" });
    }
    await storage.updateUser(userId, { isActive: false });
    res.json({ message: "User blocked successfully" });
  } catch (error) {
    console.error("Block user error:", error);
    res.status(500).json({ message: "Failed to block user" });
  }
});
router20.post("/:id/unblock", async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await storage.getUser(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    await storage.updateUser(userId, { isActive: true });
    res.json({ message: "User unblocked successfully" });
  } catch (error) {
    console.error("Unblock user error:", error);
    res.status(500).json({ message: "Failed to unblock user" });
  }
});
router20.post("/:id/reset-password", async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await storage.getUser(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const tempPassword = nanoid2(10);
    const salt = await bcryptjs2.genSalt(10);
    const passwordHash = await bcryptjs2.hash(tempPassword, salt);
    await storage.updateUser(userId, { passwordHash });
    const resetRequests = await storage.getPasswordResetRequests();
    const pendingRequest = resetRequests.find(
      (r) => r.userId === userId && r.status === "pending"
    );
    if (pendingRequest) {
      await storage.updatePasswordResetRequestStatus(pendingRequest.id, "resolved", /* @__PURE__ */ new Date());
    }
    const fullName = `${user.firstName || ""} ${user.lastName || ""}`.trim() || user.email;
    await sendEmail({
      to: user.email || "",
      subject: "Your Login Password Has Been Reset",
      body: `Hello ${fullName},

Your login details have been updated by the admin.

Login Email: ${user.email}
Temporary Password: ${tempPassword}

Please login and change your password from your profile section immediately.

Thank you.`
    });
    res.json({
      message: "Temporary password generated and email sent",
      tempPassword
    });
  } catch (error) {
    console.error("Generate temp password error:", error);
    res.status(500).json({ message: "Failed to generate temporary password" });
  }
});
router20.post("/:id/reset-link", async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await storage.getUser(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const token = crypto.randomBytes(32).toString("hex");
    const expiresAt = new Date(Date.now() + 15 * 60 * 1e3);
    await storage.createPasswordResetToken({
      userId,
      tokenHash: token,
      expiresAt,
      used: false
    });
    const resetRequests = await storage.getPasswordResetRequests();
    const pendingRequest = resetRequests.find(
      (r) => r.userId === userId && r.status === "pending"
    );
    if (pendingRequest) {
      await storage.updatePasswordResetRequestStatus(pendingRequest.id, "resolved", /* @__PURE__ */ new Date());
    }
    const protocol = req.secure ? "https" : "http";
    const resetUrl = `${protocol}://${req.get("host")}/auth/reset-password?token=${token}`;
    const fullName = `${user.firstName || ""} ${user.lastName || ""}`.trim() || user.email;
    await sendEmail({
      to: user.email || "",
      subject: "Password Reset Request",
      body: `Hello ${fullName},

You are receiving this because you (or the admin) requested a password reset for your account.

Please click on the following link, or paste this into your browser to complete the process:
${resetUrl}

This link is valid for 15 minutes. If you did not request this, please ignore this email.

Thank you.`
    });
    res.json({ message: "Password reset link sent successfully" });
  } catch (error) {
    console.error("Send reset link error:", error);
    res.status(500).json({ message: "Failed to send reset link" });
  }
});
var admin_users_routes_default = router20;

// server/routes/password-reset.routes.ts
import { Router as Router21 } from "express";
import bcryptjs3 from "bcryptjs";
var router21 = Router21();
router21.post("/forgot-password", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }
    const user = await storage.getUserByEmail(email);
    if (!user) {
      return res.json({
        message: "Your password reset request has been sent to admin. You will receive help soon."
      });
    }
    await storage.createPasswordResetRequest({
      userId: user.id,
      email: user.email || email,
      status: "pending"
    });
    res.json({
      message: "Your password reset request has been sent to admin. You will receive help soon."
    });
  } catch (error) {
    console.error("Forgot password error:", error);
    res.status(500).json({ message: "Failed to submit request" });
  }
});
router21.post("/reset-password", async (req, res) => {
  try {
    const { token, newPassword } = req.body;
    if (!token || !newPassword) {
      return res.status(400).json({ message: "Token and new password are required" });
    }
    if (newPassword.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters" });
    }
    const tokenRecord = await storage.getPasswordResetToken(token);
    if (!tokenRecord) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }
    if (tokenRecord.used) {
      return res.status(400).json({ message: "Token has already been used" });
    }
    const now = /* @__PURE__ */ new Date();
    if (now > tokenRecord.expiresAt) {
      return res.status(400).json({ message: "Token has expired" });
    }
    const salt = await bcryptjs3.genSalt(10);
    const passwordHash = await bcryptjs3.hash(newPassword, salt);
    await storage.updateUser(tokenRecord.userId, { passwordHash });
    await storage.markPasswordResetTokenUsed(tokenRecord.id);
    res.json({ message: "Password has been successfully updated" });
  } catch (error) {
    console.error("Reset password token error:", error);
    res.status(500).json({ message: "Failed to reset password" });
  }
});
router21.get("/admin/password-requests", requireAdminAccess, async (req, res) => {
  try {
    const requests = await storage.getPasswordResetRequests();
    const enrichedRequests = [];
    for (const request of requests) {
      const user = await storage.getUser(request.userId);
      enrichedRequests.push({
        ...request,
        userName: user ? `${user.firstName || ""} ${user.lastName || ""}`.trim() : "Unknown",
        userEmail: user?.email || request.email
      });
    }
    res.json(enrichedRequests);
  } catch (error) {
    console.error("Get password requests error:", error);
    res.status(500).json({ message: "Failed to fetch requests" });
  }
});
var password_reset_routes_default = router21;

// server/routes/chat.routes.ts
import { Router as Router22 } from "express";
import path4 from "path";
import fs4 from "fs";
var router22 = Router22();
router22.get("/thread", async (req, res) => {
  try {
    if (!req.session?.userId) {
      return res.status(401).json({ message: "Not authenticated" });
    }
    const thread = await storage.getOrCreateChatThread(req.session.userId);
    await storage.resetUnreadCount(thread.id, "user");
    res.json(thread);
  } catch (error) {
    console.error("Get thread error:", error);
    res.status(500).json({ message: "Failed to fetch chat thread" });
  }
});
router22.post("/guest-thread", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }
    const user = await storage.getUserByEmail(email);
    if (!user) {
      return res.status(404).json({ message: "Account not found with this email" });
    }
    const thread = await storage.getOrCreateChatThread(user.id);
    await storage.resetUnreadCount(thread.id, "user");
    res.json(thread);
  } catch (error) {
    console.error("Guest thread error:", error);
    res.status(500).json({ message: "Failed to start chat session" });
  }
});
router22.get("/thread/:id/messages", async (req, res) => {
  try {
    const threadId = parseInt(req.params.id);
    if (isNaN(threadId)) {
      return res.status(400).json({ message: "Invalid thread ID" });
    }
    const thread = await storage.getChatThreadById(threadId);
    if (!thread) {
      return res.status(404).json({ message: "Thread not found" });
    }
    const isAdmin = req.session?.isAdminLoggedIn;
    const isOwner = req.session?.userId === thread.userId;
    if (!isAdmin && !isOwner && !req.query.isGuest) {
      return res.status(403).json({ message: "Access denied" });
    }
    if (isAdmin) {
      await storage.resetUnreadCount(threadId, "admin");
    } else {
      await storage.resetUnreadCount(threadId, "user");
    }
    const messages = await storage.getChatMessages(threadId);
    res.json(messages);
  } catch (error) {
    console.error("Get messages error:", error);
    res.status(500).json({ message: "Failed to fetch messages" });
  }
});
router22.post("/upload", async (req, res) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ message: "No files were uploaded." });
    }
    const fileKey = req.files.file ? "file" : req.files.image ? "image" : Object.keys(req.files)[0];
    const uploadedFile = req.files[fileKey];
    if (!uploadedFile) {
      return res.status(400).json({ message: "No valid file found in request." });
    }
    const MAX_SIZE = 500 * 1024;
    if (uploadedFile.size > MAX_SIZE) {
      return res.status(400).json({ message: "File size exceeds the 500KB limit." });
    }
    const ext = path4.extname(uploadedFile.name).toLowerCase();
    const allowedExts = [
      ".jpg",
      ".jpeg",
      ".png",
      ".gif",
      ".webp",
      ".pdf",
      ".doc",
      ".docx",
      ".xls",
      ".xlsx",
      ".txt"
    ];
    if (!allowedExts.includes(ext)) {
      return res.status(400).json({
        message: "Invalid file type. Supported: images, pdf, doc, docx, xls, xlsx, txt."
      });
    }
    const sanitizedName = uploadedFile.name.replace(/[^a-zA-Z0-9.-]+/g, "_");
    const fileName = `chat_${Date.now()}_${sanitizedName}`;
    const uploadDir = path4.join(process.cwd(), "public", "uploads");
    const uploadPath = path4.join(uploadDir, fileName);
    if (!fs4.existsSync(uploadDir)) {
      fs4.mkdirSync(uploadDir, { recursive: true });
    }
    await uploadedFile.mv(uploadPath);
    const publicUrl = `/uploads/${fileName}`;
    res.json({
      url: publicUrl,
      name: uploadedFile.name
    });
  } catch (error) {
    console.error("Chat upload error:", error);
    res.status(500).json({ message: "Failed to upload file." });
  }
});
router22.post("/thread/:id/messages", async (req, res) => {
  try {
    const threadId = parseInt(req.params.id);
    const { message, fileUrl, fileName } = req.body;
    if (isNaN(threadId) || (!message || !message.trim()) && !fileUrl) {
      return res.status(400).json({ message: "Invalid message data" });
    }
    const thread = await storage.getChatThreadById(threadId);
    if (!thread) {
      return res.status(404).json({ message: "Thread not found" });
    }
    const isAdmin = req.session?.isAdminLoggedIn;
    const senderRole = isAdmin ? "admin" : "user";
    const senderId = isAdmin ? null : req.session?.userId || thread.userId;
    const newMessage = await storage.createChatMessage({
      threadId,
      senderId,
      senderRole,
      message: message?.trim() || fileName || "Attachment",
      isRead: false,
      fileUrl: fileUrl || null,
      fileName: fileName || null
    });
    if (isAdmin) {
      await storage.updateChatThreadStatus(threadId, "active");
      await storage.incrementUnreadCount(threadId, "user");
    } else {
      await storage.updateChatThreadStatus(threadId, "pending");
      await storage.incrementUnreadCount(threadId, "admin");
    }
    res.json(newMessage);
  } catch (error) {
    console.error("Post message error:", error);
    res.status(500).json({ message: "Failed to post message" });
  }
});
router22.get("/admin/threads", requireAdminAccess, async (req, res) => {
  try {
    const threads = await storage.getChatThreads();
    res.json(threads);
  } catch (error) {
    console.error("Get admin threads error:", error);
    res.status(500).json({ message: "Failed to fetch threads" });
  }
});
router22.post("/admin/threads/:id/resolve", requireAdminAccess, async (req, res) => {
  try {
    const threadId = parseInt(req.params.id);
    if (isNaN(threadId)) {
      return res.status(400).json({ message: "Invalid thread ID" });
    }
    const updated = await storage.updateChatThreadStatus(threadId, "resolved");
    await storage.createChatMessage({
      threadId,
      senderId: null,
      senderRole: "admin",
      message: "This chat has been marked as resolved by the admin. Feel free to send another message if you need further help.",
      isRead: true
    });
    res.json(updated);
  } catch (error) {
    console.error("Resolve thread error:", error);
    res.status(500).json({ message: "Failed to resolve thread" });
  }
});
var chat_routes_default = router22;

// server/routes/custom-subscriptions.routes.ts
init_db();
init_schema();
import { Router as Router23 } from "express";
import { eq as eq22 } from "drizzle-orm";
var router23 = Router23();
router23.get("/", async (req, res) => {
  try {
    const plans = await db.select().from(customSubscriptionPlans);
    const sortedPlans = plans.sort((a, b) => {
      if (a.isFeatured && !b.isFeatured) return -1;
      if (!a.isFeatured && b.isFeatured) return 1;
      const sortDiff = (a.sortOrder || 0) - (b.sortOrder || 0);
      if (sortDiff !== 0) return sortDiff;
      return b.id - a.id;
    });
    const plansWithProducts = await Promise.all(
      sortedPlans.map(async (plan) => {
        let product = null;
        if (plan.productId) {
          product = await db.query.products.findFirst({
            where: eq22(products.id, plan.productId)
          }) || null;
        }
        return { ...plan, product };
      })
    );
    res.json(plansWithProducts);
  } catch (error) {
    console.error("Error fetching custom subscriptions:", error);
    res.status(500).json({ message: "Failed to fetch custom subscriptions" });
  }
});
router23.get("/:id", async (req, res) => {
  try {
    const planId = parseInt(req.params.id);
    const plan = await db.query.customSubscriptionPlans.findFirst({
      where: eq22(customSubscriptionPlans.id, planId)
    });
    if (!plan) {
      return res.status(404).json({ message: "Subscription plan not found" });
    }
    let product = null;
    if (plan.productId) {
      product = await db.query.products.findFirst({
        where: eq22(products.id, plan.productId)
      }) || null;
    }
    res.json({ ...plan, product });
  } catch (error) {
    console.error("Error fetching subscription plan:", error);
    res.status(500).json({ message: "Failed to fetch subscription plan" });
  }
});
router23.post("/", requireAdminAccess, async (req, res) => {
  try {
    const {
      title,
      productId,
      customProductName,
      image,
      quantity,
      unitType,
      price,
      originalPrice,
      frequency,
      shortDescription,
      detailedDescription,
      benefits,
      deliveryTimeSlot,
      durationOptions,
      status,
      isFeatured,
      sortOrder
    } = req.body;
    if (!title || !quantity || !unitType || !price || !frequency) {
      return res.status(400).json({ message: "Required fields are missing" });
    }
    if (parseFloat(price) < 0) {
      return res.status(400).json({ message: "Price cannot be negative" });
    }
    const newPlan = await db.insert(customSubscriptionPlans).values({
      title,
      productId: productId ? parseInt(productId) : null,
      customProductName: customProductName || null,
      image: image || null,
      quantity,
      unitType,
      price: price.toString(),
      originalPrice: originalPrice ? originalPrice.toString() : null,
      frequency,
      shortDescription: shortDescription || null,
      detailedDescription: detailedDescription || null,
      benefits: benefits || [],
      deliveryTimeSlot: deliveryTimeSlot || null,
      durationOptions: durationOptions || [],
      status: status || "active",
      isFeatured: !!isFeatured,
      sortOrder: sortOrder ? parseInt(sortOrder) : 0
    }).returning();
    res.status(201).json({ message: "Subscription plan created successfully", plan: newPlan[0] });
  } catch (error) {
    console.error("Error creating custom subscription plan:", error);
    res.status(500).json({ message: "Failed to create subscription plan" });
  }
});
router23.put("/:id", requireAdminAccess, async (req, res) => {
  try {
    const planId = parseInt(req.params.id);
    const {
      title,
      productId,
      customProductName,
      image,
      quantity,
      unitType,
      price,
      originalPrice,
      frequency,
      shortDescription,
      detailedDescription,
      benefits,
      deliveryTimeSlot,
      durationOptions,
      status,
      isFeatured,
      sortOrder
    } = req.body;
    if (!title || !quantity || !unitType || !price || !frequency) {
      return res.status(400).json({ message: "Required fields are missing" });
    }
    if (parseFloat(price) < 0) {
      return res.status(400).json({ message: "Price cannot be negative" });
    }
    const updated = await db.update(customSubscriptionPlans).set({
      title,
      productId: productId ? parseInt(productId) : null,
      customProductName: customProductName || null,
      image: image || null,
      quantity,
      unitType,
      price: price.toString(),
      originalPrice: originalPrice ? originalPrice.toString() : null,
      frequency,
      shortDescription: shortDescription || null,
      detailedDescription: detailedDescription || null,
      benefits: benefits || [],
      deliveryTimeSlot: deliveryTimeSlot || null,
      durationOptions: durationOptions || [],
      status: status || "active",
      isFeatured: !!isFeatured,
      sortOrder: sortOrder ? parseInt(sortOrder) : 0,
      updatedAt: /* @__PURE__ */ new Date()
    }).where(eq22(customSubscriptionPlans.id, planId)).returning();
    if (!updated.length) {
      return res.status(404).json({ message: "Subscription plan not found" });
    }
    res.json({ message: "Subscription plan updated successfully", plan: updated[0] });
  } catch (error) {
    console.error("Error updating custom subscription plan:", error);
    res.status(500).json({ message: "Failed to update subscription plan" });
  }
});
router23.patch("/:id/status", requireAdminAccess, async (req, res) => {
  try {
    const planId = parseInt(req.params.id);
    const { status } = req.body;
    if (!status || status !== "active" && status !== "inactive") {
      return res.status(400).json({ message: "Invalid status" });
    }
    const updated = await db.update(customSubscriptionPlans).set({ status, updatedAt: /* @__PURE__ */ new Date() }).where(eq22(customSubscriptionPlans.id, planId)).returning();
    if (!updated.length) {
      return res.status(404).json({ message: "Subscription plan not found" });
    }
    res.json({ message: `Subscription plan marked as ${status}`, plan: updated[0] });
  } catch (error) {
    console.error("Error changing status of subscription plan:", error);
    res.status(500).json({ message: "Failed to update status" });
  }
});
router23.patch("/:id/featured", requireAdminAccess, async (req, res) => {
  try {
    const planId = parseInt(req.params.id);
    const { isFeatured } = req.body;
    const updated = await db.update(customSubscriptionPlans).set({ isFeatured: !!isFeatured, updatedAt: /* @__PURE__ */ new Date() }).where(eq22(customSubscriptionPlans.id, planId)).returning();
    if (!updated.length) {
      return res.status(404).json({ message: "Subscription plan not found" });
    }
    res.json({ message: isFeatured ? "Subscription plan featured" : "Subscription plan unfeatured", plan: updated[0] });
  } catch (error) {
    console.error("Error toggling featured status:", error);
    res.status(500).json({ message: "Failed to update featured status" });
  }
});
router23.delete("/:id", requireAdminAccess, async (req, res) => {
  try {
    const planId = parseInt(req.params.id);
    const deleted = await db.delete(customSubscriptionPlans).where(eq22(customSubscriptionPlans.id, planId)).returning();
    if (!deleted.length) {
      return res.status(404).json({ message: "Subscription plan not found" });
    }
    res.json({ message: "Subscription plan deleted successfully", plan: deleted[0] });
  } catch (error) {
    console.error("Error deleting custom subscription plan:", error);
    res.status(500).json({ message: "Failed to delete subscription plan" });
  }
});
var custom_subscriptions_routes_default = router23;

// server/routes/user-subscriptions.routes.ts
init_db();
init_schema();
import { Router as Router24 } from "express";
import { eq as eq23, desc as desc12 } from "drizzle-orm";
var router24 = Router24();
router24.post("/", isAuthenticated, async (req, res) => {
  try {
    const userId = req.session?.userId || req.user?.id;
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized. Please log in first." });
    }
    const {
      subscriptionPlanId,
      customerName,
      email,
      phone,
      address,
      selectedQuantity,
      selectedFrequency,
      startDate,
      duration,
      totalAmount
    } = req.body;
    if (!customerName || !email || !phone || !address || !selectedQuantity || !selectedFrequency || !startDate || !duration || !totalAmount) {
      return res.status(400).json({ message: "Required enrollment fields are missing" });
    }
    const newEnrollment = await db.insert(userSubscriptions).values({
      userId,
      subscriptionPlanId: subscriptionPlanId ? parseInt(subscriptionPlanId) : null,
      customerName,
      email,
      phone,
      address,
      selectedQuantity,
      selectedFrequency,
      startDate,
      // stored as string date e.g. "YYYY-MM-DD"
      duration,
      totalAmount: totalAmount.toString(),
      paymentStatus: "pending",
      subscriptionStatus: "active"
    }).returning();
    res.status(201).json({
      message: "Subscription successfully registered!",
      subscription: newEnrollment[0]
    });
  } catch (error) {
    console.error("Error creating user subscription:", error);
    res.status(500).json({ message: "Failed to save subscription request" });
  }
});
router24.get("/me", isAuthenticated, async (req, res) => {
  try {
    const userId = req.session?.userId || req.user?.id;
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const enrollments = await db.select().from(userSubscriptions).where(eq23(userSubscriptions.userId, userId)).orderBy(desc12(userSubscriptions.createdAt));
    const populated = await Promise.all(
      enrollments.map(async (enrollment) => {
        let plan = null;
        if (enrollment.subscriptionPlanId) {
          plan = await db.query.customSubscriptionPlans.findFirst({
            where: eq23(customSubscriptionPlans.id, enrollment.subscriptionPlanId)
          }) || null;
        }
        return { ...enrollment, plan };
      })
    );
    res.json(populated);
  } catch (error) {
    console.error("Error fetching user subscriptions:", error);
    res.status(500).json({ message: "Failed to retrieve subscriptions" });
  }
});
router24.get("/", requireAdminAccess, async (req, res) => {
  try {
    const enrollments = await db.select().from(userSubscriptions).orderBy(desc12(userSubscriptions.createdAt));
    const populated = await Promise.all(
      enrollments.map(async (enrollment) => {
        let plan = null;
        if (enrollment.subscriptionPlanId) {
          plan = await db.query.customSubscriptionPlans.findFirst({
            where: eq23(customSubscriptionPlans.id, enrollment.subscriptionPlanId)
          }) || null;
        }
        return { ...enrollment, plan };
      })
    );
    res.json(populated);
  } catch (error) {
    console.error("Error fetching all user subscriptions:", error);
    res.status(500).json({ message: "Failed to fetch subscriptions" });
  }
});
router24.put("/:id/status", requireAdminAccess, async (req, res) => {
  try {
    const enrollmentId = parseInt(req.params.id);
    const { status } = req.body;
    const allowed = ["active", "paused", "cancelled", "completed"];
    if (!status || !allowed.includes(status)) {
      return res.status(400).json({ message: "Invalid status option" });
    }
    const updated = await db.update(userSubscriptions).set({ subscriptionStatus: status, updatedAt: /* @__PURE__ */ new Date() }).where(eq23(userSubscriptions.id, enrollmentId)).returning();
    if (!updated.length) {
      return res.status(404).json({ message: "Subscription not found" });
    }
    res.json({ message: "Status updated successfully", subscription: updated[0] });
  } catch (error) {
    console.error("Error updating subscription status:", error);
    res.status(500).json({ message: "Failed to update subscription status" });
  }
});
router24.put("/:id/payment", requireAdminAccess, async (req, res) => {
  try {
    const enrollmentId = parseInt(req.params.id);
    const { paymentStatus } = req.body;
    const allowed = ["pending", "paid", "failed"];
    if (!paymentStatus || !allowed.includes(paymentStatus)) {
      return res.status(400).json({ message: "Invalid payment status option" });
    }
    const updated = await db.update(userSubscriptions).set({ paymentStatus, updatedAt: /* @__PURE__ */ new Date() }).where(eq23(userSubscriptions.id, enrollmentId)).returning();
    if (!updated.length) {
      return res.status(404).json({ message: "Subscription not found" });
    }
    res.json({ message: "Payment status updated successfully", subscription: updated[0] });
  } catch (error) {
    console.error("Error updating payment status:", error);
    res.status(500).json({ message: "Failed to update payment status" });
  }
});
var user_subscriptions_routes_default = router24;

// server/routes.ts
async function registerRoutes(app2) {
  await setupAuth(app2);
  setupAuthRoutes(app2);
  setupContactSubmissionsRoutes(app2);
  startDeliveryScheduler();
  app2.use("/api/cart", cart_routes_default);
  app2.use("/api/addresses", address_routes_default);
  app2.use("/api/orders", order_routes_default);
  app2.use("/api/admin/users", admin_users_routes_default);
  app2.use("/api/auth", password_reset_routes_default);
  app2.use("/api/chat", chat_routes_default);
  app2.get("/api/admin/orders", requireAdminAccess, async (req, res) => {
    try {
      const { orders: orders2, users: users5, orderItems: orderItems2, products: products4 } = await Promise.resolve().then(() => (init_schema(), schema_exports));
      const { db: db2 } = await Promise.resolve().then(() => (init_db(), db_exports));
      const { eq: eq29, inArray: inArray2 } = await import("drizzle-orm");
      const status = req.query.status;
      let allOrders = await db2.select().from(orders2);
      if (status) {
        allOrders = allOrders.filter((o) => o.status === status);
      }
      const orderIds = allOrders.map((o) => o.id);
      const allItems = orderIds.length ? await db2.select({ item: orderItems2, product: products4 }).from(orderItems2).leftJoin(products4, eq29(orderItems2.productId, products4.id)).where(inArray2(orderItems2.orderId, orderIds)) : [];
      const itemsMap = /* @__PURE__ */ new Map();
      for (const row of allItems) {
        if (!row.item.orderId) continue;
        const current = itemsMap.get(row.item.orderId) || [];
        current.push({
          ...row.item,
          product: row.product
        });
        itemsMap.set(row.item.orderId, current);
      }
      const withDetails = await Promise.all(
        allOrders.map(async (order) => {
          let customer = null;
          if (order.userId) {
            customer = await db2.query.users.findFirst({
              where: eq29(users5.id, order.userId)
            });
          }
          const items = itemsMap.get(order.id) || [];
          return { ...order, customer, items };
        })
      );
      res.json(withDetails);
    } catch (error) {
      console.error("Error fetching orders:", error);
      res.status(500).json({ message: "Failed to fetch orders" });
    }
  });
  app2.post("/api/admin/orders/:id/update-status", requireAdminAccess, async (req, res) => {
    try {
      const { orders: orders2 } = await Promise.resolve().then(() => (init_schema(), schema_exports));
      const { db: db2 } = await Promise.resolve().then(() => (init_db(), db_exports));
      const { eq: eq29 } = await import("drizzle-orm");
      const orderId = parseInt(req.params.id);
      const { status, paymentStatus } = req.body;
      const updated = await storage.updateOrderStatus(orderId, status);
      if (paymentStatus) {
        await storage.updateOrderPayment(orderId, { paymentStatus });
      }
      res.json(updated);
    } catch (error) {
      res.status(500).json({ message: "Failed to update order" });
    }
  });
  app2.delete("/api/admin/orders/:id", requireAdminAccess, async (req, res) => {
    try {
      const { orders: orders2, orderItems: orderItems2 } = await Promise.resolve().then(() => (init_schema(), schema_exports));
      const { db: db2 } = await Promise.resolve().then(() => (init_db(), db_exports));
      const { eq: eq29 } = await import("drizzle-orm");
      const orderId = parseInt(req.params.id);
      await db2.delete(orderItems2).where(eq29(orderItems2.orderId, orderId));
      const deleted = await db2.delete(orders2).where(eq29(orders2.id, orderId)).returning();
      if (!deleted.length) return res.status(404).json({ message: "Order not found" });
      res.json({ success: true, message: "Order deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete order" });
    }
  });
  app2.use("/api/admin/customers", admin_customers_routes_default);
  app2.use("/api/admin/billing", admin_billing_routes_default);
  app2.use("/api/support", support_routes_default);
  app2.use("/api/offers", offers_routes_default);
  app2.use("/api/subscriptions", subscription_routes_default);
  app2.use("/api/admin/subscriptions", admin_subscriptions_routes_default);
  app2.use("/api/custom-subscriptions", custom_subscriptions_routes_default);
  app2.use("/api/user-subscriptions", user_subscriptions_routes_default);
  app2.use("/api/billing", billing_routes_default);
  app2.use("/api/banners", banners_routes_default);
  app2.use("/api/homepage", homepage_routes_default);
  app2.use("/api/cms", cms_routes_default);
  app2.use("/api", blog_routes_default);
  app2.use("/api", video_blog_routes_default);
  app2.use("/api", image_gallery_routes_default);
  app2.use("/api", video_gallery_routes_default);
  app2.use("/api/admin/media", media_routes_default);
  app2.use("/api/media", media_routes_default);
  app2.post("/api/billing/:billId/submit-screenshot", async (req, res) => {
    try {
      const userId = req.session?.userId;
      if (!userId) return res.status(401).json({ message: "Not authenticated" });
      const billId = parseInt(req.params.billId);
      const { screenshotUrl } = req.body;
      if (!screenshotUrl) return res.status(400).json({ message: "screenshotUrl is required" });
      const { bills: bills2 } = await Promise.resolve().then(() => (init_schema(), schema_exports));
      const { eq: eq29 } = await import("drizzle-orm");
      const { db: db2 } = await Promise.resolve().then(() => (init_db(), db_exports));
      const bill = await db2.select().from(bills2).where(eq29(bills2.id, billId));
      if (!bill.length || bill[0].userId !== userId) {
        return res.status(403).json({ message: "Unauthorized" });
      }
      const updated = await db2.update(bills2).set({
        paymentScreenshotUrl: screenshotUrl,
        paymentScreenshotStatus: "pending_review",
        paymentScreenshotUploadedAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date()
      }).where(eq29(bills2.id, billId)).returning();
      res.json({ success: true, bill: updated[0] });
    } catch (error) {
      console.error("Error submitting screenshot:", error);
      res.status(500).json({ message: "Failed to submit screenshot" });
    }
  });
  app2.use("/api", rbac_routes_default);
  app2.get("/api/auth/user", async (req, res) => {
    try {
      if (!req.isAuthenticated() || !req.user?.claims?.sub) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      const userId = req.user.claims.sub;
      const user = await storage.getUser(userId);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Failed to fetch user" });
    }
  });
  app2.get("/api/notifications", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.claims.sub;
      const notifications2 = await storage.getNotificationsByUser(userId);
      res.json(notifications2);
    } catch (error) {
      console.error("Error fetching notifications:", error);
      res.status(500).json({ message: "Failed to fetch notifications" });
    }
  });
  app2.patch("/api/notifications/:id/read", isAuthenticated, async (req, res) => {
    try {
      const notificationId = parseInt(req.params.id);
      const notification = await storage.markNotificationAsRead(notificationId);
      res.json(notification);
    } catch (error) {
      console.error("Error marking notification as read:", error);
      res.status(500).json({ message: "Failed to mark notification as read" });
    }
  });
  app2.get("/api/bills/:billId/pdf", async (req, res) => {
    try {
      const billId = parseInt(req.params.billId);
      const { getBillInvoiceData: getBillInvoiceData2 } = await Promise.resolve().then(() => (init_generateInvoice(), generateInvoice_exports));
      const { generateInvoicePDF: generateInvoicePDF2 } = await Promise.resolve().then(() => (init_generateInvoicePDF(), generateInvoicePDF_exports));
      const invoiceData = await getBillInvoiceData2(billId);
      if (!invoiceData) {
        return res.status(404).json({ message: "Bill not found" });
      }
      const userId = req.session?.userId;
      const isAdmin = req.session?.isAdminLoggedIn;
      const { bills: bills2 } = await Promise.resolve().then(() => (init_schema(), schema_exports));
      const { eq: eq29 } = await import("drizzle-orm");
      const { db: db2 } = await Promise.resolve().then(() => (init_db(), db_exports));
      const billRecord = await db2.select().from(bills2).where(eq29(bills2.id, billId));
      if (!billRecord.length) {
        return res.status(404).json({ message: "Bill not found" });
      }
      if (!isAdmin && billRecord[0].userId !== userId) {
        return res.status(403).json({ message: "Unauthorized to download this invoice" });
      }
      generateInvoicePDF2(invoiceData, res);
    } catch (error) {
      console.error("Error generating invoice PDF:", error);
      res.status(500).json({ message: "Failed to generate invoice PDF" });
    }
  });
  app2.post("/api/billing/:billId/mark-paid", async (req, res) => {
    try {
      const billId = parseInt(req.params.billId);
      const userId = req.session?.userId || req.user?.claims?.sub;
      const { bills: bills2 } = await Promise.resolve().then(() => (init_schema(), schema_exports));
      const { eq: eq29 } = await import("drizzle-orm");
      const { db: db2 } = await Promise.resolve().then(() => (init_db(), db_exports));
      const bill = await db2.select().from(bills2).where(eq29(bills2.id, billId));
      if (!bill.length || bill[0].userId !== userId) {
        return res.status(403).json({ message: "Unauthorized" });
      }
      const updated = await db2.update(bills2).set({
        status: "paid",
        paymentDate: /* @__PURE__ */ new Date(),
        paymentMethod: "cash"
      }).where(eq29(bills2.id, billId)).returning();
      res.json(updated[0]);
    } catch (error) {
      console.error("Error marking bill as paid:", error);
      res.status(500).json({ message: "Failed to mark bill as paid" });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs5 from "fs";
import path6 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path5 from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path5.resolve(import.meta.dirname, "client", "src"),
      "@shared": path5.resolve(import.meta.dirname, "shared"),
      "@assets": path5.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path5.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path5.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid as nanoid3 } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path6.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs5.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid3()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path6.resolve(import.meta.dirname, "public");
  if (!fs5.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path6.resolve(distPath, "index.html"));
  });
}

// server/seed.ts
init_db();
init_schema();
import { eq as eq25 } from "drizzle-orm";
import bcrypt from "bcryptjs";
import { nanoid as nanoid4 } from "nanoid";
async function seedDatabase() {
  try {
    console.log("Seeding database...");
    const adminEmail = "md@divinenaturals.in";
    const existingUsers = await db.select().from(users).where(eq25(users.email, adminEmail));
    if (existingUsers.length > 0) {
      console.log("Database already seeded. Updating CMS content only...");
    } else {
      const hashedPassword = await bcrypt.hash("DivineNaturals@2025", 10);
      const [adminUser] = await db.insert(users).values({
        id: nanoid4(),
        email: adminEmail,
        passwordHash: hashedPassword,
        role: "admin",
        firstName: "Kauldeep",
        lastName: "Rao",
        phone: "1800-DIVINE"
      }).returning();
      const [customerUser] = await db.insert(users).values({
        id: nanoid4(),
        email: "customer@example.com",
        passwordHash: hashedPassword,
        role: "customer",
        firstName: "Test",
        lastName: "Customer",
        phone: "9876543210",
        address: "123 Green Lane, Mumbai"
      }).returning();
      const [partnerUser] = await db.insert(users).values({
        id: nanoid4(),
        email: "delivery@example.com",
        passwordHash: hashedPassword,
        role: "delivery",
        firstName: "Delivery",
        lastName: "Hero"
      }).returning();
      await db.insert(deliveryPartners).values({
        userId: partnerUser.id,
        fullName: "Delivery Hero",
        phone: "9123456789",
        vehicleType: "Bike",
        status: "active"
      });
      console.log("\u2713 Inserted/Updated Base Data (Users)");
    }
    const baseProducts = [
      {
        name: "Cold Pressed Coconut Oil",
        description: "Pure, edible grade cold pressed coconut oil. Multi-purpose oil with a fresh coconut aroma and superior quality.",
        price: "380",
        unit: "500ml",
        stock: 100,
        category: "Oil",
        type: "DAIRY",
        imageUrl: "/products/coconut_oil.png",
        sku: "OIL-COCO-001"
      },
      {
        name: "Cold Pressed Groundnut Oil",
        description: "Pure and aromatic cold pressed groundnut oil. Extracted using traditional wooden ghani methods to retain nutrients and natural flavor.",
        price: "280",
        unit: "1L",
        stock: 150,
        category: "Oil",
        type: "DAIRY",
        imageUrl: "/products/groundnut_oil.png",
        sku: "OIL-GNUT-001"
      },
      {
        name: "Buttermilk",
        description: "Refreshing traditional buttermilk",
        price: "25",
        unit: "500ml",
        stock: 300,
        category: "Beverages",
        type: "DAIRY",
        imageUrl: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800",
        sku: "DAIRY-BMLK-001"
      }
    ];
    for (const p of baseProducts) {
      const [existing] = await db.select().from(products).where(eq25(products.sku, p.sku));
      if (existing) {
        await db.update(products).set(p).where(eq25(products.sku, p.sku));
      } else {
        await db.insert(products).values(p);
      }
    }
    console.log("\u2713 Updated Products from seed data");
    console.log("Refreshing CMS content with premium assets...");
    await db.delete(banners);
    await db.insert(banners).values([
      {
        title: "Pure. Fresh. From Our Farm to Your Home.",
        subtitle: "Experience the authentic taste of raw A2 Gir Cow milk, delivered directly to your doorstep every morning.",
        imageUrl: "/banners/farm_milk_bottles_pastoral_scene.png",
        imageUrlTablet: "/banners/farm_milk_bottles_pastoral_scene.png",
        imageUrlMobile: "/banners/farm_milk_bottles_pastoral_scene.png",
        ctaText: "Start Subscription",
        ctaLink: "/shop",
        displayOrder: 1,
        isActive: true
      },
      {
        title: "Unmatched Delivery. Consistent Quality.",
        subtitle: "At Divine Naturals, we take pride in our 4:00 AM delivery promise. Freshness that doesn't wait.",
        imageUrl: "/banners/fresh_milk_pour_splash_banner.png",
        imageUrlTablet: "/banners/fresh_milk_pour_splash_banner.png",
        imageUrlMobile: "/banners/fresh_milk_pour_splash_banner.png",
        ctaText: "View Products",
        ctaLink: "/shop",
        displayOrder: 2,
        isActive: true
      },
      {
        title: "Traditional Goodness, Modern Safety.",
        subtitle: "We use the traditional Bilona method for Ghee and state-of-the-art testing for every batch of milk.",
        imageUrl: "/banners/premium_dairy_products_showcase.png",
        imageUrlTablet: "/banners/premium_dairy_products_showcase.png",
        imageUrlMobile: "/banners/premium_dairy_products_showcase.png",
        ctaText: "Learn About Us",
        ctaLink: "/about",
        displayOrder: 3,
        isActive: true
      }
    ]);
    console.log("\u2713 Updated 3 Hero Banners");
    await db.delete(ethosCards);
    await db.insert(ethosCards).values([
      {
        title: "Source Transparency",
        description: "Every bottle of milk can be traced back to the specific farm it came from.",
        icon: "Shield",
        displayOrder: 1
      },
      {
        title: "Zero Preservatives",
        description: "Fresh milk with absolutely no additives, milk powder, or preservatives.",
        icon: "Zap",
        displayOrder: 2
      },
      {
        title: "Eco-Friendly Loop",
        description: "We use sterilized glass bottles and sustainable packaging to protect our planet.",
        icon: "Recycle",
        displayOrder: 3
      },
      {
        title: "Smart Subscriptions",
        description: "Pause, resume, and modify your daily dairy needs through our easy-to-use app.",
        icon: "Smartphone",
        displayOrder: 4
      }
    ]);
    console.log("\u2713 Updated 4 Ethos Cards");
    await db.delete(statsCounters);
    await db.insert(statsCounters).values([
      { label: "Happy Households", value: 12e3, suffix: "+", icon: "Users", displayOrder: 1 },
      { label: "Liters of Milk Daily", value: 5500, suffix: "L", icon: "Milk", displayOrder: 2 },
      { label: "Partner Farms", value: 45, suffix: "", icon: "Home", displayOrder: 3 },
      { label: "On-Time Deliveries", value: 99, suffix: ".8%", icon: "Clock", displayOrder: 4 }
    ]);
    console.log("\u2713 Updated 4 Stats Counters");
    await db.delete(faqs);
    await db.insert(faqs).values([
      {
        question: "How do subscriptions work?",
        answer: "You can choose your products, set the quantity and frequency (daily, alternate days, or custom), and we'll deliver them automatically. You can pause or cancel anytime through the app.",
        category: "Delivery",
        order: 1,
        displayOrder: 1
      },
      {
        question: "Is there a minimum delivery amount?",
        answer: "No, we don't believe in forcing our customers. You can subscribe to even a single half-liter packet or bottle of milk.",
        category: "Delivery",
        order: 2,
        displayOrder: 2
      },
      {
        question: "How is the milk tested for quality?",
        answer: "We test across 50+ parameters including milk fat, protein, SNF, and the absence of water, urea, or any preservatives in our ISO-certified labs.",
        category: "Quality",
        order: 3,
        displayOrder: 3
      }
    ]);
    console.log("\u2713 Updated 3 FAQs");
    const [existingAbout] = await db.select().from(aboutUsSettings).limit(1);
    const aboutData = {
      title: "The Divine Naturals Story",
      subtitle: "Returning to Root-Level Purity",
      content: "Founded with a single mission to restore the vanishing purity of farm-fresh milk in our cities, Divine Naturals has grown into a community of conscious consumers and ethical farmers. We leverage technology to bridge the gap between rural farms and urban doorsteps, ensuring that what you drink is as fresh as it was at the farm.",
      imageUrl: "/images/products/milk.png",
      mission: "To deliver the purest dairy products while empowering traditional farming communities through technology and fair commerce.",
      vision: "A world where fresh, organic, and ethically sourced nutrition is accessible to every household daily.",
      values: [
        { title: "Radical Transparency", description: "Trace every drop back to the farm" },
        { title: "Empowering Farmers", description: "Eliminating middlemen and ensuring fair trade" },
        { title: "Environmental Stewardship", description: "Minimizing waste through sustainable packaging" }
      ],
      isActive: true
    };
    if (existingAbout) {
      await db.update(aboutUsSettings).set(aboutData).where(eq25(aboutUsSettings.id, existingAbout.id));
    } else {
      await db.insert(aboutUsSettings).values(aboutData);
    }
    const [existingContact] = await db.select().from(contactSettings).limit(1);
    const contactData = {
      title: "Get in Touch",
      subtitle: "Our customer success team is here for you 24/7.",
      phone: "+91 91234 56789",
      email: "hello@divinenaturals.com",
      address: "Divine Naturals Hub, Sector 44, Gurgaon, Haryana 122003",
      businessHours: "Delivery: 4:00 AM - 7:30 AM | Support: 9:00 AM - 9:00 PM",
      socialLinks: [
        { platform: "facebook", url: "https://facebook.com/divinenaturals" },
        { platform: "instagram", url: "https://instagram.com/divinenaturals" },
        { platform: "whatsapp", url: "https://wa.me/919123456789" }
      ],
      isActive: true
    };
    if (existingContact) {
      await db.update(contactSettings).set(contactData).where(eq25(contactSettings.id, existingContact.id));
    } else {
      await db.insert(contactSettings).values(contactData);
    }
    const [existingNewsletter] = await db.select().from(newsletterSettings).limit(1);
    const newsletterData = {
      title: "Join the Freshness Revolution",
      subtitle: "Get nutrition tips, farm stories, and exclusive offers delivered to your inbox.",
      ctaText: "Subscribe",
      placeholderText: "Enter your email address",
      isActive: true
    };
    if (existingNewsletter) {
      await db.update(newsletterSettings).set(newsletterData).where(eq25(newsletterSettings.id, existingNewsletter.id));
    } else {
      await db.insert(newsletterSettings).values(newsletterData);
    }
    const [existingFooter] = await db.select().from(footerSettings).limit(1);
    const footerData = {
      companyName: "Divine Naturals Dairy Pvt Ltd",
      tagline: "Pure. Fresh. Daily.",
      description: "Dedicated to bringing the authentic taste and nutrition of the farm to the modern table through sustainable and ethical practices.",
      phone: "+91 91234 56789",
      email: "hello@divinenaturals.com",
      address: "Sector 44, Gurgaon, Haryana 122003",
      socialLinks: [
        { platform: "facebook", url: "https://facebook.com/divinenaturals" },
        { platform: "instagram", url: "https://instagram.com/divinenaturals" },
        { platform: "whatsapp", url: "https://wa.me/919123456789" }
      ],
      footerLinks: [
        { title: "Products", links: [{ label: "Milk", url: "/shop" }, { label: "Curd", url: "/shop" }, { label: "Ghee", url: "/shop" }] },
        { title: "Company", links: [{ label: "About Us", url: "/about" }, { label: "Contact", url: "/contact" }, { label: "Privacy", url: "/privacy" }] }
      ],
      copyrightText: "\xA9 2025 Divine Naturals. All rights reserved.",
      isActive: true
    };
    if (existingFooter) {
      await db.update(footerSettings).set(footerData).where(eq25(footerSettings.id, existingFooter.id));
    } else {
      await db.insert(footerSettings).values(footerData);
    }
    console.log("\u2713 Enriched CMS content");
    console.log("\u2705 Database seeding/update completed successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
    throw error;
  }
}

// server/jobs/generateMonthlyBills.ts
init_db();
init_schema();
import { eq as eq26, and as and15, gte as gte7, lte as lte7 } from "drizzle-orm";
async function generateMonthlyBills() {
  console.log("\u{1F550} Starting monthly bill generation...");
  try {
    const now = /* @__PURE__ */ new Date();
    const prevMonth = new Date(now.getFullYear(), now.getMonth() - 1);
    const month = prevMonth.getMonth() + 1;
    const year = prevMonth.getFullYear();
    const allUsers = await db.select().from(users);
    for (const user of allUsers) {
      const existingBill = await db.select().from(bills).where(
        and15(
          eq26(bills.userId, user.id),
          eq26(bills.month, month),
          eq26(bills.year, year)
        )
      );
      if (existingBill.length > 0) {
        console.log(`\u23ED\uFE0F  Bill already exists for user ${user.id} in ${month}/${year}`);
        continue;
      }
      const startDateStr = `${year}-${String(month).padStart(2, "0")}-01`;
      const endDateStr = `${year}-${String(month).padStart(2, "0")}-${new Date(year, month, 0).getDate()}`;
      const subscriptionDeliveries_list = await db.select().from(subscriptionDeliveries).where(
        and15(
          eq26(subscriptionDeliveries.userId, user.id),
          gte7(subscriptionDeliveries.deliveryDate, startDateStr),
          lte7(subscriptionDeliveries.deliveryDate, endDateStr)
        )
      );
      const startDate = new Date(year, month - 1, 1);
      const endDate = new Date(year, month, 0);
      const monthOrders = await db.select().from(orders).where(
        and15(
          eq26(orders.userId, user.id),
          gte7(orders.createdAt, startDate),
          lte7(orders.createdAt, endDate)
        )
      );
      let subscriptionTotal = 0;
      const billItems = [];
      for (const delivery of subscriptionDeliveries_list) {
        const sub = await db.query.milkSubscriptions.findFirst({
          where: eq26(milkSubscriptions.id, delivery.subscriptionId)
        });
        if (sub) {
          const product = await db.query.products.findFirst({
            where: eq26(products.id, sub.productId)
          });
          const total = Number(delivery.quantity) * Number(product?.price || 0);
          subscriptionTotal += total;
          billItems.push({
            date: String(delivery.deliveryDate),
            description: `${product?.name || "Product"} (Subscription)`,
            quantity: delivery.quantity,
            price: Number(product?.price || 0),
            total
          });
        }
      }
      let ordersTotal = 0;
      for (const order of monthOrders) {
        const orderAmount = Number(order.totalAmount || 0);
        ordersTotal += orderAmount;
        billItems.push({
          date: order.createdAt ? new Date(order.createdAt).toISOString().split("T")[0] : (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
          description: `Order #${order.id}`,
          quantity: 1,
          price: orderAmount,
          total: orderAmount
        });
      }
      const previousBill = await db.select().from(bills).where(
        and15(
          eq26(bills.userId, user.id),
          eq26(bills.status, "unpaid")
        )
      );
      const previousPending = previousBill.length > 0 ? Number(previousBill[0].finalAmount || 0) : 0;
      let penalty = 0;
      if (previousBill.length > 0 && previousBill[0].status === "overdue") {
        penalty = 50;
      }
      const finalAmount = subscriptionTotal + ordersTotal + previousPending + penalty;
      const dueDate = /* @__PURE__ */ new Date();
      dueDate.setDate(dueDate.getDate() + 5);
      const dueDateStr = dueDate.toISOString().split("T")[0];
      await db.insert(bills).values({
        userId: user.id,
        month,
        year,
        items: JSON.stringify(billItems),
        subscriptionTotal: subscriptionTotal.toString(),
        ordersTotal: ordersTotal.toString(),
        previousPending: previousPending.toString(),
        penalty: penalty.toString(),
        discount: "0",
        finalAmount: finalAmount.toString(),
        dueDate: dueDateStr,
        status: "unpaid",
        paymentDate: null,
        paymentMethod: null
      });
      console.log(`\u2705 Bill created for user ${user.id} in ${month}/${year} - Amount: \u20B9${finalAmount}`);
    }
    console.log("\u2705 Monthly bill generation completed!");
  } catch (error) {
    console.error("\u274C Error generating monthly bills:", error);
  }
}
async function updateOverdueBills() {
  console.log("\u{1F550} Checking for overdue bills...");
  try {
    const allBills = await db.select().from(bills).where(eq26(bills.status, "unpaid"));
    for (const bill of allBills) {
      const dueDate = new Date(bill.dueDate);
      const today = /* @__PURE__ */ new Date();
      if (today > dueDate) {
        await db.update(bills).set({ status: "overdue" }).where(eq26(bills.id, bill.id));
        console.log(`\u26A0\uFE0F  Bill #${bill.id} marked as OVERDUE`);
      }
    }
    console.log("\u2705 Overdue check completed!");
  } catch (error) {
    console.error("\u274C Error updating overdue bills:", error);
  }
}

// server/routes/delivery.routes.ts
init_db();
init_schema();
import { Router as Router25 } from "express";
import { eq as eq27, and as and16 } from "drizzle-orm";
import bcryptjs4 from "bcryptjs";
var router25 = Router25();
router25.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: "Username and password required" });
    }
    const partner = await db.query.deliveryPartners.findFirst({
      where: eq27(deliveryPartners.username, username)
    });
    if (!partner) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    if (partner.status === "blocked") {
      return res.status(403).json({ message: "Your account has been blocked. Please contact support." });
    }
    if (!partner.isVerified || partner.status !== "active") {
      return res.status(403).json({ message: "Your account is not yet approved. Please wait for admin verification." });
    }
    if (!partner.passwordHash || !bcryptjs4.compareSync(password, partner.passwordHash)) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    req.session.deliveryPartnerId = partner.id;
    res.json({
      id: partner.id,
      name: partner.fullName,
      area: partner.zone,
      username: partner.username,
      phone: partner.phone,
      profileCompleted: !!(partner.aadhaarNumber && partner.panNumber && partner.licenseNumber)
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Login failed" });
  }
});
router25.post("/:partnerId/upload-document", async (req, res) => {
  try {
    const { partnerId } = req.params;
    const { docType, fileUrl } = req.body;
    if (!docType || !fileUrl) {
      return res.status(400).json({ message: "Document type and file URL required" });
    }
    const validDocTypes = ["aadhaar_front", "aadhaar_back", "pan", "license", "address_proof", "profile"];
    if (!validDocTypes.includes(docType)) {
      return res.status(400).json({ message: "Invalid document type" });
    }
    const updateData = {};
    if (docType === "profile") updateData.profileImageUrl = fileUrl;
    else if (docType === "aadhaar_front" || docType === "aadhaar_back") updateData.aadhaarImageUrl = fileUrl;
    else if (docType === "pan") updateData.panImageUrl = fileUrl;
    else if (docType === "license") updateData.licenseImageUrl = fileUrl;
    const updated = await db.update(deliveryPartners).set(updateData).where(eq27(deliveryPartners.id, parseInt(partnerId))).returning();
    res.json({
      message: "Document uploaded successfully",
      document: { type: docType, url: fileUrl }
    });
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ message: "Upload failed" });
  }
});
router25.post("/assign-orders", async (req, res) => {
  try {
    const { partnerId, orderIds, zoneFilter } = req.body;
    if (!partnerId || !orderIds || orderIds.length === 0) {
      return res.status(400).json({ message: "Partner ID and order IDs required" });
    }
    const partner = await db.query.deliveryPartners.findFirst({
      where: eq27(deliveryPartners.id, parseInt(partnerId))
    });
    if (!partner) {
      return res.status(404).json({ message: "Partner not found" });
    }
    if (partner.status === "blocked") {
      return res.status(403).json({ message: "Cannot assign orders to blocked partner" });
    }
    const assignments = await Promise.all(
      orderIds.map(
        (orderId) => db.insert(deliveryAssignments).values({
          orderId,
          partnerId: parseInt(partnerId),
          assignmentDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
          status: "assigned"
        }).returning()
      )
    );
    console.log(`[Notification] ${partner.fullName}, you have ${orderIds.length} new deliveries assigned!`);
    res.json({
      message: `Assigned ${orderIds.length} orders to ${partner.fullName}`,
      assignments: assignments.flat()
    });
  } catch (error) {
    console.error("Assignment error:", error);
    res.status(500).json({ message: "Assignment failed" });
  }
});
router25.get("/earnings/:partnerId", async (req, res) => {
  try {
    const { partnerId } = req.params;
    const { period = "today" } = req.query;
    let dateFilter = null;
    const today = /* @__PURE__ */ new Date();
    if (period === "today") {
      dateFilter = today.toISOString().split("T")[0];
    } else if (period === "week") {
      const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1e3);
      dateFilter = { start: weekAgo, end: today };
    } else if (period === "month") {
      const monthAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1e3);
      dateFilter = { start: monthAgo, end: today };
    }
    let completedDeliveries = await db.query.deliveryAssignments.findMany({
      where: and16(
        eq27(deliveryAssignments.partnerId, parseInt(partnerId)),
        eq27(deliveryAssignments.status, "delivered")
      )
    });
    if (period !== "total" && dateFilter && typeof dateFilter === "object" && dateFilter.start) {
      completedDeliveries = completedDeliveries.filter((d) => {
        const assignDate = new Date(d.assignmentDate);
        return assignDate >= dateFilter.start && assignDate <= dateFilter.end;
      });
    } else if (period === "today") {
      completedDeliveries = completedDeliveries.filter((d) => {
        return d.assignmentDate === dateFilter;
      });
    }
    const perDeliveryRate = 50;
    const codCollected = completedDeliveries.reduce(
      (sum, d) => sum + parseFloat(d.collectedCash?.toString() || "0"),
      0
    );
    const deliveryEarnings = completedDeliveries.length * perDeliveryRate;
    const totalEarnings = deliveryEarnings + codCollected;
    res.json({
      period,
      deliveriesCompleted: completedDeliveries.length,
      perDeliveryRate,
      deliveryEarnings,
      codCollected: parseFloat(codCollected.toFixed(2)),
      totalEarnings: parseFloat(totalEarnings.toFixed(2))
    });
  } catch (error) {
    console.error("Earnings error:", error);
    res.status(500).json({ message: "Failed to fetch earnings" });
  }
});
router25.post("/send-credentials/:partnerId", async (req, res) => {
  try {
    const { partnerId } = req.params;
    const { username, tempPassword, method = "sms" } = req.body;
    const partner = await db.query.deliveryPartners.findFirst({
      where: eq27(deliveryPartners.id, parseInt(partnerId))
    });
    if (!partner) {
      return res.status(404).json({ message: "Partner not found" });
    }
    const smsMessage = `Hello ${partner.fullName}, your Divine Naturals delivery account is ready! \u{1F69A}
Username: ${username}
Temporary Password: ${tempPassword}
Please login and change your password: https://deliverynaturals.app/partner/login
Need help? Call +91-XXXX-XXXX`;
    const emailMessage = `
Dear ${partner.fullName},

Your Divine Naturals Delivery Partner account has been approved! \u{1F389}

\u{1F4F1} Login Credentials:
\u2022 Username: ${username}
\u2022 Temporary Password: ${tempPassword}

\u{1F517} Login Here: https://deliverynaturals.app/partner/login

\u26A0\uFE0F Please change your password on first login for security.

Questions? Contact our support team.

Best regards,
Divine Naturals Team
    `;
    if (method === "sms" && partner.phone) {
      console.log(`[SMS to ${partner.phone}] ${smsMessage}`);
    } else if (method === "email" && partner.email) {
      console.log(`[EMAIL to ${partner.email}] ${emailMessage}`);
    }
    res.json({
      message: "Credentials notification sent",
      sentVia: method,
      contact: method === "sms" ? partner.phone : partner.email
    });
  } catch (error) {
    console.error("Notification error:", error);
    res.status(500).json({ message: "Failed to send notification" });
  }
});
router25.get("/me/:partnerId", async (req, res) => {
  try {
    const { partnerId } = req.params;
    const partner = await db.query.deliveryPartners.findFirst({
      where: eq27(deliveryPartners.id, parseInt(partnerId))
    });
    if (!partner) {
      return res.status(404).json({ message: "Partner not found" });
    }
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    const todayDeliveries = await db.query.deliveryAssignments.findMany({
      where: and16(
        eq27(deliveryAssignments.partnerId, parseInt(partnerId)),
        eq27(deliveryAssignments.assignmentDate, today)
      )
    });
    res.json({
      ...partner,
      todayDeliveries: todayDeliveries.length,
      todayCompleted: todayDeliveries.filter((d) => d.status === "delivered").length
    });
  } catch (error) {
    console.error("Profile error:", error);
    res.status(500).json({ message: "Failed to fetch profile" });
  }
});
router25.get("/today/:partnerId", async (req, res) => {
  try {
    const { partnerId } = req.params;
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    const assignments = await db.query.deliveryAssignments.findMany({
      where: and16(
        eq27(deliveryAssignments.partnerId, parseInt(partnerId)),
        eq27(deliveryAssignments.assignmentDate, today)
      )
    });
    const deliveries = await Promise.all(
      assignments.map(async (a) => {
        let item = null;
        if (a.orderId) {
          item = await db.query.orders.findFirst({ where: eq27(orders.id, a.orderId) });
        } else if (a.subscriptionId) {
          item = await db.query.milkSubscriptions.findFirst({
            where: eq27(milkSubscriptions.id, a.subscriptionId)
          });
        }
        const customer = item && "userId" in item ? await db.query.users.findFirst({
          where: eq27(users.id, item.userId)
        }) : null;
        return {
          ...a,
          item,
          customer
        };
      })
    );
    res.json(deliveries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch deliveries" });
  }
});
router25.post("/:partnerId/submit-profile", async (req, res) => {
  try {
    const { partnerId } = req.params;
    if (!partnerId || partnerId === "null" || isNaN(parseInt(partnerId))) {
      return res.status(400).json({ message: "Invalid partner ID. Please login again." });
    }
    const {
      dob,
      gender,
      alternatePhone,
      address,
      city,
      state,
      pincode,
      aadhaarNumber,
      panNumber,
      licenseNumber,
      licenseValidity,
      vehicleNumber,
      bankAccount,
      bankIfsc,
      bankName,
      bankHolder
    } = req.body;
    if (!aadhaarNumber || !panNumber || !licenseNumber || !bankAccount) {
      return res.status(400).json({ message: "All required fields must be filled" });
    }
    if (pincode && isNaN(parseInt(pincode))) {
      return res.status(400).json({ message: "Pincode must be numeric" });
    }
    const updated = await db.update(deliveryPartners).set({
      dob: dob ? dob : void 0,
      aadhaarNumber,
      panNumber,
      licenseNumber,
      vehicleType: vehicleNumber || void 0,
      address: address ? `${address}, ${city}, ${state} - ${pincode}` : void 0,
      zone: city || void 0,
      status: "pending_verification"
    }).where(eq27(deliveryPartners.id, parseInt(partnerId))).returning();
    if (updated.length === 0) {
      return res.status(404).json({ message: "Partner not found" });
    }
    res.json({
      message: "Profile submitted successfully! Your documents are being verified.",
      partner: updated[0]
    });
  } catch (error) {
    console.error("Profile submission error:", error);
    res.status(500).json({ message: "Failed to submit profile: " + (error.message || "Unknown error") });
  }
});
router25.patch("/start/:assignmentId", async (req, res) => {
  try {
    await db.update(deliveryAssignments).set({ status: "picked_up", timeStarted: /* @__PURE__ */ new Date() }).where(eq27(deliveryAssignments.id, parseInt(req.params.assignmentId)));
    res.json({ message: "Delivery started" });
  } catch (error) {
    res.status(500).json({ message: "Failed to start delivery" });
  }
});
router25.patch("/complete/:assignmentId", async (req, res) => {
  try {
    const { proofPhoto } = req.body;
    await db.update(deliveryAssignments).set({ status: "delivered", timeDelivered: /* @__PURE__ */ new Date(), failedPhoto: proofPhoto }).where(eq27(deliveryAssignments.id, parseInt(req.params.assignmentId)));
    res.json({ message: "Delivery completed" });
  } catch (error) {
    res.status(500).json({ message: "Failed to complete delivery" });
  }
});
router25.patch("/failed/:assignmentId", async (req, res) => {
  try {
    const { reason, photo } = req.body;
    await db.update(deliveryAssignments).set({ status: "failed", failedReason: reason, failedPhoto: photo }).where(eq27(deliveryAssignments.id, parseInt(req.params.assignmentId)));
    res.json({ message: "Delivery marked as failed" });
  } catch (error) {
    res.status(500).json({ message: "Failed to mark delivery as failed" });
  }
});
router25.patch("/collect-cash/:assignmentId", async (req, res) => {
  try {
    const { amount } = req.body;
    await db.update(deliveryAssignments).set({ collectionStatus: "received", collectedCash: amount }).where(eq27(deliveryAssignments.id, parseInt(req.params.assignmentId)));
    res.json({ message: "Cash collected" });
  } catch (error) {
    res.status(500).json({ message: "Failed to collect cash" });
  }
});
var delivery_routes_default = router25;

// server/routes/admin-delivery.routes.ts
init_db();
init_schema();
import { Router as Router26 } from "express";
import { eq as eq28, and as and17 } from "drizzle-orm";
import bcrypt2 from "bcryptjs";
var router26 = Router26();
router26.get("/", async (req, res) => {
  try {
    const { zone, status: statusFilter, verified } = req.query;
    const conditions = [];
    if (zone) conditions.push(eq28(deliveryPartners.zone, zone));
    if (statusFilter) conditions.push(eq28(deliveryPartners.status, statusFilter));
    if (verified === "true") conditions.push(eq28(deliveryPartners.isVerified, true));
    if (verified === "false") conditions.push(eq28(deliveryPartners.isVerified, false));
    let allPartners = [];
    if (conditions.length > 0) {
      allPartners = await db.query.deliveryPartners.findMany({
        where: and17(...conditions)
      });
    } else {
      allPartners = await db.query.deliveryPartners.findMany();
    }
    res.json(allPartners);
  } catch (error) {
    console.error("Error fetching delivery partners:", error?.message || error);
    res.status(500).json({ message: "Failed to fetch delivery partners" });
  }
});
router26.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const partner = await db.query.deliveryPartners.findFirst({
      where: eq28(deliveryPartners.id, parseInt(id))
    });
    if (!partner) {
      return res.status(404).json({ message: "Partner not found" });
    }
    res.json(partner);
  } catch (error) {
    console.error("Error fetching partner:", error?.message || error);
    res.status(500).json({ message: "Failed to fetch partner" });
  }
});
router26.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { zone } = req.body;
    if (!zone) {
      return res.status(400).json({ message: "Zone is required" });
    }
    const updatedPartner = await db.update(deliveryPartners).set({ zone }).where(eq28(deliveryPartners.id, parseInt(id))).returning();
    if (updatedPartner.length === 0) {
      return res.status(404).json({ message: "Partner not found" });
    }
    res.json({ ...updatedPartner[0], message: "Partner updated successfully" });
  } catch (error) {
    console.error("Error updating partner:", error?.message || error);
    res.status(500).json({ message: "Failed to update partner" });
  }
});
router26.post("/:id/generate-password", async (req, res) => {
  try {
    const { id } = req.params;
    const { tempPassword } = req.body;
    if (!tempPassword) {
      return res.status(400).json({ message: "Password required" });
    }
    const partner = await db.query.deliveryPartners.findFirst({
      where: eq28(deliveryPartners.id, parseInt(id))
    });
    if (!partner) {
      return res.status(404).json({ message: "Partner not found" });
    }
    const hashedPassword = await bcrypt2.hash(tempPassword, 10);
    const username = partner.username || `driver_${partner.phone.replace(/\D/g, "").slice(-6)}`;
    const updatedPartner = await db.update(deliveryPartners).set({
      passwordHash: hashedPassword,
      username,
      status: "active",
      // Auto-activate after password is set
      isVerified: true
    }).where(eq28(deliveryPartners.id, parseInt(id))).returning();
    res.json({
      ...updatedPartner[0],
      message: "Password saved successfully",
      tempPassword
      // Return for display, won't be stored again
    });
  } catch (error) {
    console.error("Error generating password:", error?.message || error);
    res.status(500).json({ message: "Failed to generate password" });
  }
});
router26.post("/", async (req, res) => {
  try {
    const { fullName, email, phone, address, zone, vehicleType, licenseNumber, password } = req.body;
    if (!fullName || !phone || !password) {
      return res.status(400).json({ message: "Full name, phone, and password are required" });
    }
    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters" });
    }
    const username = `driver_${phone.replace(/\D/g, "").slice(-6)}`;
    const hashedPassword = await bcrypt2.hash(password, 10);
    const newPartner = await db.insert(deliveryPartners).values({
      fullName,
      email,
      phone,
      address,
      zone,
      vehicleType,
      licenseNumber,
      username,
      passwordHash: hashedPassword,
      initialPassword: password,
      // Store plain password for admin display
      status: "active",
      isVerified: true,
      isAvailable: true
    }).returning();
    res.status(201).json(newPartner[0]);
  } catch (error) {
    console.error("Error creating partner:", error?.message || error);
    res.status(500).json({ message: "Failed to create partner" });
  }
});
router26.patch("/:id/verify", async (req, res) => {
  try {
    const { id } = req.params;
    const { action, username, tempPassword } = req.body;
    if (!action || !["approve", "reject"].includes(action)) {
      return res.status(400).json({ message: "Invalid action" });
    }
    const partner = await db.query.deliveryPartners.findFirst({
      where: eq28(deliveryPartners.id, parseInt(id))
    });
    if (!partner) {
      return res.status(404).json({ message: "Partner not found" });
    }
    if (action === "approve") {
      if (!tempPassword) {
        return res.status(400).json({ message: "Temporary password required" });
      }
      const hashedPassword = await bcrypt2.hash(tempPassword, 10);
      const finalUsername = username || `driver_${partner.phone.replace(/\D/g, "").slice(-6)}`;
      const updatedPartner = await db.update(deliveryPartners).set({
        status: "active",
        isVerified: true,
        username: finalUsername,
        passwordHash: hashedPassword
      }).where(eq28(deliveryPartners.id, parseInt(id))).returning();
      console.log(`[Credentials sent to ${partner.fullName}]`);
      console.log(`Username: ${finalUsername}`);
      console.log(`Temp Password: ${tempPassword}`);
      res.json({ ...updatedPartner[0], message: "Partner approved and credentials sent" });
    } else {
      const updatedPartner = await db.update(deliveryPartners).set({ status: "rejected", isVerified: false }).where(eq28(deliveryPartners.id, parseInt(id))).returning();
      res.json({ ...updatedPartner[0], message: "Partner rejected" });
    }
  } catch (error) {
    console.error("Error verifying partner:", error?.message || error);
    res.status(500).json({ message: "Failed to verify partner" });
  }
});
router26.patch("/:id/block", async (req, res) => {
  try {
    const { id } = req.params;
    const { action, reason } = req.body;
    if (!action || !["block", "unblock"].includes(action)) {
      return res.status(400).json({ message: "Invalid action" });
    }
    const partner = await db.query.deliveryPartners.findFirst({
      where: eq28(deliveryPartners.id, parseInt(id))
    });
    if (!partner) {
      return res.status(404).json({ message: "Partner not found" });
    }
    const newStatus = action === "block" ? "blocked" : "active";
    const updatedPartner = await db.update(deliveryPartners).set({ status: newStatus }).where(eq28(deliveryPartners.id, parseInt(id))).returning();
    res.json({ ...updatedPartner[0], message: `Partner ${action}ed successfully` });
  } catch (error) {
    console.error("Error blocking partner:", error?.message || error);
    res.status(500).json({ message: "Failed to block/unblock partner" });
  }
});
router26.patch("/:id/approve-documents", async (req, res) => {
  try {
    const { id } = req.params;
    const { remarks } = req.body;
    const partner = await db.query.deliveryPartners.findFirst({
      where: eq28(deliveryPartners.id, parseInt(id))
    });
    if (!partner) {
      return res.status(404).json({ message: "Partner not found" });
    }
    const updated = await db.update(deliveryPartners).set({
      isVerified: true,
      status: "active"
    }).where(eq28(deliveryPartners.id, parseInt(id))).returning();
    res.json({
      message: "Partner documents approved successfully",
      partner: updated[0]
    });
  } catch (error) {
    console.error("Error approving documents:", error?.message || error);
    res.status(500).json({ message: "Failed to approve documents" });
  }
});
router26.patch("/:id/reject-documents", async (req, res) => {
  try {
    const { id } = req.params;
    const { remarks } = req.body;
    if (!remarks) {
      return res.status(400).json({ message: "Rejection reason is required" });
    }
    const partner = await db.query.deliveryPartners.findFirst({
      where: eq28(deliveryPartners.id, parseInt(id))
    });
    if (!partner) {
      return res.status(404).json({ message: "Partner not found" });
    }
    const updated = await db.update(deliveryPartners).set({
      isVerified: false,
      status: "pending_verification"
    }).where(eq28(deliveryPartners.id, parseInt(id))).returning();
    res.json({
      message: "Partner documents rejected. They need to resubmit.",
      partner: updated[0]
    });
  } catch (error) {
    console.error("Error rejecting documents:", error?.message || error);
    res.status(500).json({ message: "Failed to reject documents" });
  }
});
router26.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await db.update(deliveryPartners).set({ status: "rejected" }).where(eq28(deliveryPartners.id, parseInt(id))).returning();
    res.json({ message: "Partner deleted", partner: deleted[0] });
  } catch (error) {
    console.error("Error deleting partner:", error?.message || error);
    res.status(500).json({ message: "Failed to delete partner" });
  }
});
var admin_delivery_routes_default = router26;

// server/index.ts
var app = express2();
app.use(express2.json({ limit: "50mb" }));
app.use(express2.urlencoded({ extended: false, limit: "50mb" }));
app.use(fileUpload());
app.use("/banners", express2.static(path7.join(process.cwd(), "public", "banners")));
app.use("/products", express2.static(path7.join(process.cwd(), "public", "products")));
app.use("/icons", express2.static(path7.join(process.cwd(), "public", "icons")));
app.use("/uploads", express2.static(path7.join(process.cwd(), "public", "uploads")));
app.use((req, res, next) => {
  const start = Date.now();
  const path8 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path8.startsWith("/api")) {
      let logLine = `${req.method} ${path8} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  try {
    await seedDatabase();
  } catch (error) {
    log("Error seeding database, continuing anyway...");
  }
  const server = await registerRoutes(app);
  app.use("/api/delivery", delivery_routes_default);
  app.use("/api/admin/delivery-partners", admin_delivery_routes_default);
  cron.schedule("0 0 1 * *", async () => {
    log("\u{1F550} Cron job triggered: Generating monthly bills...");
    await generateMonthlyBills();
  });
  cron.schedule("0 6 * * *", async () => {
    log("\u{1F550} Cron job triggered: Checking for overdue bills...");
    await updateOverdueBills();
  });
  log("\u2705 Cron jobs scheduled: Monthly bills (1st of month) & Overdue check (daily 6 AM)");
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = parseInt(process.env.PORT || "5000", 10);
  server.listen({
    port,
    host: "0.0.0.0"
  }, () => {
    log(`serving on port ${port}`);
  });
})();
