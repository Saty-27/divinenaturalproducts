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
import { z } from "zod";
import { relations } from "drizzle-orm";

// Session storage table - mandatory for Replit Auth
export const sessions = pgTable(
  "sessions",
  {
    sid: varchar("sid").primaryKey(),
    sess: jsonb("sess").notNull(),
    expire: timestamp("expire").notNull(),
  },
  (table) => [index("IDX_session_expire").on(table.expire)],
);

// User storage table - mandatory for Replit Auth
export const users = pgTable("users", {
  id: varchar("id").primaryKey().notNull(),
  email: varchar("email").unique(),
  passwordHash: varchar("password_hash"), // For simple email/password auth
  firstName: varchar("first_name"),
  lastName: varchar("last_name"),
  profileImageUrl: varchar("profile_image_url"),
  phone: varchar("phone"),
  address: text("address"),
  gender: varchar("gender"), // male, female, other
  dob: date("dob"), // date of birth for STAGE 1
  role: varchar("role").notNull().default("customer"), // customer, admin, vendor, delivery, marketing_staff
  isActive: boolean("is_active").default(true),
  walletBalance: decimal("wallet_balance", { precision: 10, scale: 2 }).default("0"),
  lastLogin: timestamp("last_login"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Product categories
export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: varchar("name").notNull().unique(),
  description: text("description"),
  icon: varchar("icon"), // emoji or icon name - kept for compatibility, can store image URLs too
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

// Enhanced products with vendor-specific availability
export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: varchar("name").notNull(),
  sku: varchar("sku").unique(),
  description: text("description"),
  category: varchar("category").notNull(), // References categories.name
  type: varchar("type").notNull(), // MILK, DAIRY
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  unit: varchar("unit").notNull(), // L, kg, g, piece
  stock: integer("stock").default(0),
  expiryDate: date("expiry_date"),
  imageUrl: varchar("image_url"),
  isActive: boolean("is_active").default(true),
  isNew: boolean("is_new").default(false), // Flag for "Newly Launched" section
  isFeatured: boolean("is_featured").default(false), // Flag for featured products
  launchedAt: timestamp("launched_at"), // When product was launched (for sorting new products)
  redirectUrl: varchar("redirect_url"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Enhanced vendors with hierarchy and KPI fields
export const vendors = pgTable("vendors", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id").references(() => users.id),
  businessName: varchar("business_name").notNull(),
  licenseNumber: varchar("license_number"),
  locationName: varchar("location_name").notNull(), // Borivali, Santa Cruz, Andheri etc.
  vendorType: varchar("vendor_type").notNull().default("SUB_VENDOR"), // HEAD_VENDOR, VENDOR, SUB_VENDOR
  headVendorId: integer("head_vendor_id"), // self-reference, will add constraint later
  parentVendorId: integer("parent_vendor_id"), // self-reference, will add constraint later
  dailyCapacity: integer("daily_capacity"), // in liters
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
  createdAt: timestamp("created_at").defaultNow(),
});

export const deliveryPartners = pgTable("delivery_partners", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id").references(() => users.id),
  fullName: varchar("full_name").notNull(),
  email: varchar("email"),
  phone: varchar("phone").notNull().unique(),
  username: varchar("username").unique(),
  passwordHash: varchar("password_hash"),
  initialPassword: varchar("initial_password"), // Plain password for display only (admin use)
  aadhaarNumber: varchar("aadhaar_number"),
  panNumber: varchar("pan_number"),
  dob: date("dob"),
  vehicleType: varchar("vehicle_type"),
  licenseNumber: varchar("license_number"),
  address: text("address"),
  zone: varchar("zone"),
  status: varchar("status").default("active"), // active, blocked, suspended, pending_verification
  isVerified: boolean("is_verified").default(false),
  isAvailable: boolean("is_available").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

// Delivery Assignments for tracking order/subscription deliveries
export const deliveryAssignments = pgTable("delivery_assignments", {
  id: serial("id").primaryKey(),
  orderId: integer("order_id").references(() => orders.id),
  subscriptionId: integer("subscription_id").references(() => milkSubscriptions.id),
  partnerId: integer("partner_id").references(() => deliveryPartners.id),
  assignmentDate: date("assignment_date"),
  status: varchar("status").default("pending"), // pending, out_for_delivery, delivered, failed
  codAmount: decimal("cod_amount", { precision: 10, scale: 2 }).default("0"),
  collectionStatus: varchar("collection_status").default("pending"), // pending, received, not_received
  collectedCash: decimal("collected_cash", { precision: 10, scale: 2 }).default("0"),
  failedReason: varchar("failed_reason"),
  failedPhoto: text("failed_photo"),
  timeStarted: timestamp("time_started"),
  timeDelivered: timestamp("time_delivered"),
  customerInstructions: text("customer_instructions"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Driver entity for vendor staff
export const drivers = pgTable("drivers", {
  id: serial("id").primaryKey(),
  name: varchar("name").notNull(),
  age: integer("age").notNull(),
  phone: varchar("phone").notNull(),
  aadharUrl: varchar("aadhar_url"), // optional KYC document
  panUrl: varchar("pan_url"), // optional KYC document
  vendorId: integer("vendor_id").references(() => vendors.id).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// Admin hierarchy with role-based permissions and location scoping
export const admins = pgTable("admins", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id").references(() => users.id).notNull(),
  name: varchar("name").notNull(),
  phone: varchar("phone").notNull(),
  role: varchar("role").notNull(), // SUPER, HEAD, SUB
  locationScope: jsonb("location_scope"), // array of location strings
  permissions: jsonb("permissions").notNull(), // permission flags object
  createdByUserId: varchar("created_by_user_id").references(() => users.id),
  createdAt: timestamp("created_at").defaultNow(),
});

// Delegation logs for order reassignment audit trail
export const delegationLogs = pgTable("delegation_logs", {
  id: serial("id").primaryKey(),
  fromVendorId: integer("from_vendor_id").references(() => vendors.id).notNull(),
  toVendorId: integer("to_vendor_id").references(() => vendors.id).notNull(),
  orderIds: jsonb("order_ids").notNull(), // array of order IDs
  delegatedByAdminId: integer("delegated_by_admin_id").references(() => admins.id).notNull(),
  reason: text("reason").notNull(),
  timestamp: timestamp("timestamp").defaultNow(),
});

// Enhanced orders with delegation support
export const orders = pgTable("orders", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id").references(() => users.id),
  vendorId: integer("vendor_id").references(() => vendors.id),
  deliveryPartnerId: integer("delivery_partner_id").references(() => deliveryPartners.id),
  totalAmount: decimal("total_amount", { precision: 10, scale: 2 }).notNull(),
  liters: integer("liters").default(0), // total milk liters in order
  status: varchar("status").notNull().default("PLACED"), // PLACED, PREPARING, OUT, DELIVERED, FAILED
  deliverySlot: varchar("delivery_slot"), // morning, evening etc.
  deliveryDate: date("delivery_date").notNull(),
  deliveryTime: varchar("delivery_time"),
  deliveryAddress: text("delivery_address").notNull(),
  paymentStatus: varchar("payment_status").default("pending"), // pending, paid, failed
  paymentMethod: varchar("payment_method").default("cash_on_delivery"), // cash_on_delivery, online, wallet, upi
  paymentDate: timestamp("payment_date"), // when payment was received
  delegationLogId: integer("delegation_log_id").references(() => delegationLogs.id),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const orderItems = pgTable("order_items", {
  id: serial("id").primaryKey(),
  orderId: integer("order_id").references(() => orders.id),
  productId: integer("product_id").references(() => products.id),
  quantity: integer("quantity").notNull(),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  totalPrice: decimal("total_price", { precision: 10, scale: 2 }).notNull(),
});

// Milk Subscriptions
export const milkSubscriptions = pgTable("milk_subscriptions", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id").references(() => users.id),
  productId: integer("product_id").references(() => products.id),
  quantity: integer("quantity").notNull(),
  frequency: varchar("frequency").notNull(), // daily, weekly, alternate
  deliveryTime: varchar("delivery_time"),
  startDate: date("start_date"),
  endDate: date("end_date"),
  pricePerL: decimal("price_per_l", { precision: 10, scale: 2 }),
  status: varchar("status").notNull().default("ACTIVE"), // ACTIVE, PAUSED, CANCELLED
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Subscription Delivery Tracking
export const subscriptionDeliveries = pgTable("subscription_deliveries", {
  id: serial("id").primaryKey(),
  subscriptionId: integer("subscription_id").references(() => milkSubscriptions.id),
  userId: varchar("user_id").references(() => users.id),
  deliveryDate: date("delivery_date"),
  quantity: integer("quantity"),
  status: varchar("status").default("pending"), // pending, delivered, missed, cancelled
  confirmedByUser: boolean("confirmed_by_user").default(false),
  confirmedAt: timestamp("confirmed_at"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Cart for users
export const cart = pgTable("cart", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id").references(() => users.id).unique(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const cartItems = pgTable("cart_items", {
  id: serial("id").primaryKey(),
  cartId: integer("cart_id").references(() => cart.id),
  productId: integer("product_id").references(() => products.id),
  quantity: integer("quantity"),
  price: decimal("price", { precision: 10, scale: 2 }),
  addedAt: timestamp("added_at").defaultNow(),
});

// Addresses for users
export const addresses = pgTable("addresses", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id").references(() => users.id),
  type: varchar("type").notNull(), // home, work, other
  address: text("address").notNull(),
  landmark: varchar("landmark"),
  city: varchar("city"),
  state: varchar("state"),
  pincode: varchar("pincode"),
  phone: varchar("phone"),
  isDefault: boolean("is_default").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

// Support Tickets
export const supportTickets = pgTable("support_tickets", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id").references(() => users.id),
  subject: varchar("subject").notNull(),
  description: text("description").notNull(),
  status: varchar("status").default("open"), // open, in_progress, resolved, closed
  priority: varchar("priority").default("normal"), // low, normal, high
  category: varchar("category"), // billing, delivery, product, general
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const ticketMessages = pgTable("ticket_messages", {
  id: serial("id").primaryKey(),
  ticketId: integer("ticket_id").references(() => supportTickets.id),
  userId: varchar("user_id").references(() => users.id),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// Admin-only customer CRM notes
export const adminCustomerNotes = pgTable("admin_customer_notes", {
  id: serial("id").primaryKey(),
  customerId: varchar("customer_id").references(() => users.id).notNull(),
  noteText: text("note_text").notNull(),
  addedByAdminId: varchar("added_by_admin_id").references(() => users.id),
  addedByAdminName: varchar("added_by_admin_name"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Customer timeline events recorded by the admin CRM system
export const customerActivityLogs = pgTable("customer_activity_logs", {
  id: serial("id").primaryKey(),
  customerId: varchar("customer_id").references(() => users.id).notNull(),
  type: varchar("type").notNull(),
  title: varchar("title").notNull(),
  description: text("description"),
  metadata: jsonb("metadata"),
  actorId: varchar("actor_id").references(() => users.id),
  actorName: varchar("actor_name"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Product Vendors (many-to-many)
export const productVendors = pgTable("product_vendors", {
  id: serial("id").primaryKey(),
  productId: integer("product_id").references(() => products.id),
  vendorId: integer("vendor_id").references(() => vendors.id),
  createdAt: timestamp("created_at").defaultNow(),
});

// Notifications
export const notifications = pgTable("notifications", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id").references(() => users.id),
  type: varchar("type").notNull(), // order, subscription, billing, etc
  title: varchar("title").notNull(),
  message: text("message").notNull(),
  isRead: boolean("is_read").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

// ✅ NEW: BILLING TABLE - Complete billing system
export const bills = pgTable("bills", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id").references(() => users.id).notNull(),
  month: integer("month").notNull(), // 1-12
  year: integer("year").notNull(), // 2025
  items: jsonb("items").notNull(), // Array of billing items
  subscriptionTotal: decimal("subscription_total", { precision: 10, scale: 2 }).default("0"),
  ordersTotal: decimal("orders_total", { precision: 10, scale: 2 }).default("0"),
  previousPending: decimal("previous_pending", { precision: 10, scale: 2 }).default("0"),
  penalty: decimal("penalty", { precision: 10, scale: 2 }).default("0"),
  discount: decimal("discount", { precision: 10, scale: 2 }).default("0"),
  finalAmount: decimal("final_amount", { precision: 10, scale: 2 }).notNull(),
  dueDate: date("due_date").notNull(),
  status: varchar("status").notNull().default("unpaid"), // unpaid, paid, overdue
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
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Relations
export const subscriptionsRelations = relations(milkSubscriptions, ({ many, one }) => ({
  deliveries: many(subscriptionDeliveries),
  user: one(users, {
    fields: [milkSubscriptions.userId],
    references: [users.id],
  }),
  product: one(products, {
    fields: [milkSubscriptions.productId],
    references: [products.id],
  }),
}));

export const subscriptionDeliveriesRelations = relations(subscriptionDeliveries, ({ one }) => ({
  subscription: one(milkSubscriptions, {
    fields: [subscriptionDeliveries.subscriptionId],
    references: [milkSubscriptions.id],
  }),
  user: one(users, {
    fields: [subscriptionDeliveries.userId],
    references: [users.id],
  }),
}));

export const ordersRelations = relations(orders, ({ many, one }) => ({
  items: many(orderItems),
  user: one(users, {
    fields: [orders.userId],
    references: [users.id],
  }),
}));

export const orderItemsRelations = relations(orderItems, ({ one }) => ({
  order: one(orders, {
    fields: [orderItems.orderId],
    references: [orders.id],
  }),
  product: one(products, {
    fields: [orderItems.productId],
    references: [products.id],
  }),
}));

export const vendorsRelations = relations(vendors, ({ many, one }) => ({
  orders: many(orders),
  productVendors: many(productVendors),
  subscriptions: many(milkSubscriptions),
}));

export const deliveryPartnersRelations = relations(deliveryPartners, ({ one }) => ({
  user: one(users, {
    fields: [deliveryPartners.userId],
    references: [users.id],
  }),
}));

export const driversRelations = relations(drivers, ({ one }) => ({
  vendor: one(vendors, {
    fields: [drivers.vendorId],
    references: [vendors.id],
  }),
}));

export const adminsRelations = relations(admins, ({ one }) => ({
  user: one(users, {
    fields: [admins.userId],
    references: [users.id],
  }),
}));

export const cartRelations = relations(cart, ({ many }) => ({
  items: many(cartItems),
}));

export const cartItemsRelations = relations(cartItems, ({ one }) => ({
  cart: one(cart, {
    fields: [cartItems.cartId],
    references: [cart.id],
  }),
  product: one(products, {
    fields: [cartItems.productId],
    references: [products.id],
  }),
}));

export const addressesRelations = relations(addresses, ({ one }) => ({
  user: one(users, {
    fields: [addresses.userId],
    references: [users.id],
  }),
}));

export const productVendorsRelations = relations(productVendors, ({ one }) => ({
  product: one(products, {
    fields: [productVendors.productId],
    references: [products.id],
  }),
  vendor: one(vendors, {
    fields: [productVendors.vendorId],
    references: [vendors.id],
  }),
}));

export const billsRelations = relations(bills, ({ one }) => ({
  user: one(users, {
    fields: [bills.userId],
    references: [users.id],
  }),
}));

// Homepage Banners - Admin managed hero carousel
export const banners = pgTable("banners", {
  id: serial("id").primaryKey(),
  title: varchar("title"),
  subtitle: text("subtitle"),
  imageUrl: varchar("image_url"), // Desktop image (default/fallback)
  imageUrlTablet: varchar("image_url_tablet"), // Tablet image (768px-1024px)
  imageUrlMobile: varchar("image_url_mobile"), // Mobile image (<768px)
  ctaText: varchar("cta_text"), // "Shop Now", "Order Today", etc.
  ctaLink: varchar("cta_link"), // Link to navigate on CTA click
  badgeText: varchar("badge_text"), // "25% OFF", "New", "Best Seller"
  displayOrder: integer("display_order").default(0),
  isActive: boolean("is_active").default(true),
  showOverlay: boolean("show_overlay").default(false),
  startDate: timestamp("start_date"),
  endDate: timestamp("end_date"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Homepage Sections - Admin managed content blocks
export const homepageSections = pgTable("homepage_sections", {
  id: serial("id").primaryKey(),
  sectionType: varchar("section_type").notNull(), // hero_stats, ethos, deals, new_launches, stats, faq, newsletter
  title: varchar("title"),
  subtitle: text("subtitle"),
  content: jsonb("content"), // Flexible JSON for section-specific data
  displayOrder: integer("display_order").default(0),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// ========== HOMEPAGE CMS TABLES ==========

// Ethos Cards - "Our Ethos" section with icon cards
export const ethosCards = pgTable("ethos_cards", {
  id: serial("id").primaryKey(),
  title: varchar("title").notNull(),
  description: text("description").notNull(),
  icon: varchar("icon").notNull(), // Icon name like "Leaf", "Heart", "Users", "Recycle"
  displayOrder: integer("display_order").default(0),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Product Deals - "Deals of the Month" section
export const productDeals = pgTable("product_deals", {
  id: serial("id").primaryKey(),
  productId: integer("product_id").references(() => products.id).notNull(),
  dealType: varchar("deal_type").notNull().default("PERCENT"), // PERCENT or FIXED
  dealValue: decimal("deal_value", { precision: 10, scale: 2 }).notNull(), // e.g., 25 for 25% or 50 for ₹50 off
  badgeText: varchar("badge_text"), // "25% OFF", "New", etc.
  priority: integer("priority").default(0),
  startsAt: timestamp("starts_at"),
  endsAt: timestamp("ends_at"),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Stats Counters - Achievement numbers section
export const statsCounters = pgTable("stats_counters", {
  id: serial("id").primaryKey(),
  label: varchar("label").notNull(), // "Happy Customers", "Products", etc.
  value: integer("value").notNull(), // The number
  suffix: varchar("suffix"), // "+", "K", etc.
  icon: varchar("icon"), // Icon name
  displayOrder: integer("display_order").default(0),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// FAQs - Frequently Asked Questions
export const faqs = pgTable("faqs", {
  id: serial("id").primaryKey(),
  category: varchar("category").notNull().default("General"),
  question: varchar("question").notNull(),
  answer: text("answer").notNull(),
  order: integer("order").default(0),
  displayOrder: integer("display_order").default(0),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Newsletter Settings - Singleton table for newsletter section
export const newsletterSettings = pgTable("newsletter_settings", {
  id: serial("id").primaryKey(),
  title: varchar("title").notNull().default("Join Our Newsletter"),
  subtitle: text("subtitle"),
  ctaText: varchar("cta_text").default("Subscribe"),
  placeholderText: varchar("placeholder_text").default("Enter your email address"),
  isActive: boolean("is_active").default(true),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Footer Settings - Singleton table for footer content
export const footerSettings = pgTable("footer_settings", {
  id: serial("id").primaryKey(),
  companyName: varchar("company_name").default("Divine Naturals"),
  tagline: varchar("tagline").default("Pure. Fresh. Daily."),
  description: text("description"),
  phone: varchar("phone"),
  email: varchar("email"),
  address: text("address"),
  socialLinks: jsonb("social_links"), // { facebook: "url", instagram: "url", twitter: "url" }
  footerLinks: jsonb("footer_links"), // { shop: [...], account: [...], company: [...] }
  copyrightText: varchar("copyright_text"),
  isActive: boolean("is_active").default(true),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// About Us Settings
export const aboutUsSettings = pgTable("about_us_settings", {
  id: serial("id").primaryKey(),
  // Section 1: Hero
  heroTitle: varchar("hero_title").default("Our Story"),
  heroSubtitle: text("hero_subtitle"),
  heroImageUrl: varchar("hero_image_url"),
  heroCtaText: varchar("hero_cta_text"),
  heroCtaLink: varchar("hero_cta_link"),
  // Section 2: Story
  storyHeading: varchar("story_heading"),
  storyDescription: text("story_description"), // Rich text
  storyImageUrl: varchar("story_image_url"),
  // Section 3: Values
  valuesTitle: varchar("values_title").default("Our Core Values"),
  values: jsonb("values"), // Array of { icon, title, description }
  // Section 4: Process
  processTitle: varchar("process_title").default("How It Works"),
  processSteps: jsonb("process_steps"), // Array of { icon, title, description }
  // Section 5: CTA
  ctaHeading: varchar("cta_heading"),
  ctaSubheading: text("cta_subheading"),
  ctaButtonText: varchar("cta_button_text"),
  ctaButtonLink: varchar("cta_button_link"),
  isActive: boolean("is_active").default(true),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Contact Settings
export const contactSettings = pgTable("contact_settings", {
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
  mapEmbedUrl: text("map_embed_url"), // Use text for long iframe links
  isActive: boolean("is_active").default(true),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Terms of Service Settings
export const termsOfServiceSettings = pgTable("terms_of_service_settings", {
  id: serial("id").primaryKey(),
  title: varchar("title").default("Terms of Service"),
  lastUpdated: timestamp("last_updated").defaultNow(),
  content: text("content"),
  sections: jsonb("sections"), // Array of { title, content }
  isActive: boolean("is_active").default(true),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Privacy Policy Settings
export const privacyPolicySettings = pgTable("privacy_policy_settings", {
  id: serial("id").primaryKey(),
  title: varchar("title").default("Privacy Policy"),
  lastUpdated: timestamp("last_updated").defaultNow(),
  content: text("content"),
  sections: jsonb("sections"), // Array of { title, content }
  isActive: boolean("is_active").default(true),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Site Settings - Singleton table for global branding
export const siteSettings = pgTable("site_settings", {
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
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Contact Form Submissions
export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: varchar("name").notNull(),
  email: varchar("email").notNull(),
  phone: varchar("phone"),
  message: text("message").notNull(),
  status: varchar("status").default("new"), // new, read, replied
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Schema validations for API requests
export const insertAddressSchema = createInsertSchema(addresses);
export const insertOrderSchema = createInsertSchema(orders);
export const insertSubscriptionSchema = createInsertSchema(milkSubscriptions);
export const insertMilkSubscriptionSchema = createInsertSchema(milkSubscriptions);
export const insertSupportTicketSchema = createInsertSchema(supportTickets);
export const insertTicketMessageSchema = createInsertSchema(ticketMessages);
export const insertAdminCustomerNoteSchema = createInsertSchema(adminCustomerNotes);
export const insertCustomerActivityLogSchema = createInsertSchema(customerActivityLogs);
export const insertProductSchema = createInsertSchema(products);
export const insertBannerSchema = createInsertSchema(banners);
export const insertHomepageSectionSchema = createInsertSchema(homepageSections);
export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions);
export const insertSiteSettingsSchema = createInsertSchema(siteSettings);

// Offers & Coupons tables
export const offers = pgTable("offers", {
  id: serial("id").primaryKey(),
  title: varchar("title").notNull(),
  description: text("description"),
  code: varchar("code").unique(),
  discount: varchar("discount"),
  minOrder: integer("min_order"),
  type: varchar("type"), // 'percentage', 'amount'
  category: varchar("category"),
  isActive: boolean("is_active").default(true),
  validFrom: date("valid_from").notNull(),
  validTo: date("valid_to").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const coupons = pgTable("coupons", {
  id: serial("id").primaryKey(),
  code: varchar("code").unique().notNull(),
  discountType: varchar("discount_type").notNull(), // 'percentage', 'amount'
  discountValue: decimal("discount_value", { precision: 10, scale: 2 }).notNull(),
  maxDiscount: decimal("max_discount", { precision: 10, scale: 2 }),
  minOrderValue: decimal("min_order_value", { precision: 10, scale: 2 }),
  usageLimit: integer("usage_limit"),
  usageCount: integer("usage_count").default(0),
  isActive: boolean("is_active").default(true),
  validFrom: date("valid_from").notNull(),
  validTo: date("valid_to").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// TypeScript type exports for Storage and Repositories
export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;
export type UpsertUser = Partial<User> & { id: string };
export type Category = typeof categories.$inferSelect;
export type InsertCategory = typeof categories.$inferInsert;
export type Product = typeof products.$inferSelect;
export type InsertProduct = typeof products.$inferInsert;
export type Order = typeof orders.$inferSelect;
export type InsertOrder = typeof orders.$inferInsert;
export type OrderItem = typeof orderItems.$inferSelect;
export type InsertOrderItem = typeof orderItems.$inferInsert;
export type MilkSubscription = typeof milkSubscriptions.$inferSelect;
export type InsertMilkSubscription = typeof milkSubscriptions.$inferInsert;
export type Vendor = typeof vendors.$inferSelect;
export type InsertVendor = typeof vendors.$inferInsert;
export type DeliveryPartner = typeof deliveryPartners.$inferSelect;
export type InsertDeliveryPartner = typeof deliveryPartners.$inferInsert;
export type Notification = typeof notifications.$inferSelect;
export type InsertNotification = typeof notifications.$inferInsert;
export type CartItem = typeof cartItems.$inferSelect;
export type Driver = typeof drivers.$inferSelect;
export type InsertDriver = typeof drivers.$inferInsert;
export type Address = typeof addresses.$inferSelect;
export type InsertAddress = typeof addresses.$inferInsert;
export type SupportTicket = typeof supportTickets.$inferSelect;
export type InsertSupportTicket = typeof supportTickets.$inferInsert;
export type TicketMessage = typeof ticketMessages.$inferSelect;
export type InsertTicketMessage = typeof ticketMessages.$inferInsert;
export type Faq = typeof faqs.$inferSelect;
export type InsertFaq = typeof faqs.$inferInsert;
export type Offer = typeof offers.$inferSelect;
export type InsertOffer = typeof offers.$inferInsert;
export type Coupon = typeof coupons.$inferSelect;
export type InsertCoupon = typeof coupons.$inferInsert;

// Dynamic Content Tables
export const blogs = pgTable("blogs", {
  id: serial("id").primaryKey(),
  title: varchar("title").notNull(),
  slug: varchar("slug").unique().notNull(),
  shortDescription: text("short_description").notNull(),
  content: text("content").notNull(),
  featuredImage: varchar("featured_image"),
  keywords: text("keywords"),
  metaTitle: varchar("meta_title"),
  metaDescription: text("meta_description"),
  status: varchar("status").notNull().default("Draft"), // Draft, Published, Unpublished
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const videoBlogs = pgTable("video_blogs", {
  id: serial("id").primaryKey(),
  title: varchar("title").notNull(),
  slug: varchar("slug").unique().notNull(),
  shortDescription: text("short_description").notNull(),
  content: text("content"),
  videoType: varchar("video_type").notNull(), // YouTube, Vimeo, Local Upload, External URL
  videoUrl: varchar("video_url"),
  uploadedVideo: varchar("uploaded_video"),
  thumbnailImage: varchar("thumbnail_image"),
  keywords: text("keywords"),
  metaTitle: varchar("meta_title"),
  metaDescription: text("meta_description"),
  status: varchar("status").notNull().default("Draft"), // Draft, Published, Unpublished
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const imageGallery = pgTable("image_gallery", {
  id: serial("id").primaryKey(),
  title: varchar("title").notNull(),
  image: varchar("image").notNull(),
  altText: varchar("alt_text"),
  category: varchar("category").notNull().default("General"),
  sortOrder: integer("sort_order").default(0),
  status: varchar("status").notNull().default("Published"), // Draft, Published, Unpublished
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const videoGallery = pgTable("video_gallery", {
  id: serial("id").primaryKey(),
  title: varchar("title").notNull(),
  videoType: varchar("video_type").notNull(), // YouTube, Vimeo, Local Upload, External URL
  videoUrl: varchar("video_url"),
  uploadedVideo: varchar("uploaded_video"),
  thumbnailImage: varchar("thumbnail_image"),
  category: varchar("category").notNull().default("General"),
  sortOrder: integer("sort_order").default(0),
  status: varchar("status").notNull().default("Published"), // Draft, Published, Unpublished
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Dynamic Content Schemas & Types
export const insertBlogSchema = createInsertSchema(blogs);
export const insertVideoBlogSchema = createInsertSchema(videoBlogs);
export const insertImageGallerySchema = createInsertSchema(imageGallery);
export const insertVideoGallerySchema = createInsertSchema(videoGallery);

export type Blog = typeof blogs.$inferSelect;
export type InsertBlog = typeof blogs.$inferInsert;
export type VideoBlog = typeof videoBlogs.$inferSelect;
export type InsertVideoBlog = typeof videoBlogs.$inferInsert;
export type ImageGallery = typeof imageGallery.$inferSelect;
export type InsertImageGallery = typeof imageGallery.$inferInsert;
export type VideoGallery = typeof videoGallery.$inferSelect;
export type InsertVideoGallery = typeof videoGallery.$inferInsert;

// Auth & Chat Support Tables
export const passwordResetRequests = pgTable("password_reset_requests", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id").notNull(),
  email: varchar("email").notNull(),
  status: varchar("status").notNull().default("pending"), // pending, resolved
  createdAt: timestamp("created_at").defaultNow().notNull(),
  resolvedAt: timestamp("resolved_at"),
});

export const passwordResetTokens = pgTable("password_reset_tokens", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id").notNull(),
  tokenHash: varchar("token_hash").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  used: boolean("used").notNull().default(false),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const chatThreads = pgTable("chat_threads", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id").notNull(),
  status: varchar("status").notNull().default("pending"), // pending, active, resolved
  lastMessage: text("last_message"),
  unreadForAdmin: integer("unread_for_admin").notNull().default(0),
  unreadForUser: integer("unread_for_user").notNull().default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const chatMessages = pgTable("chat_messages", {
  id: serial("id").primaryKey(),
  threadId: integer("thread_id").notNull(),
  senderId: varchar("sender_id"), // Can be null if sent by system
  senderRole: varchar("sender_role").notNull(), // user, admin
  message: text("message").notNull(),
  isRead: boolean("is_read").notNull().default(false),
  fileUrl: text("file_url"),
  fileName: text("file_name"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Zod schemas
export const insertPasswordResetRequestSchema = createInsertSchema(passwordResetRequests);
export const insertPasswordResetTokenSchema = createInsertSchema(passwordResetTokens);
export const insertChatThreadSchema = createInsertSchema(chatThreads);
export const insertChatMessageSchema = createInsertSchema(chatMessages);

// Types
export type PasswordResetRequest = typeof passwordResetRequests.$inferSelect;
export type InsertPasswordResetRequest = typeof passwordResetRequests.$inferInsert;
export type PasswordResetToken = typeof passwordResetTokens.$inferSelect;
export type InsertPasswordResetToken = typeof passwordResetTokens.$inferInsert;
export type ChatThread = typeof chatThreads.$inferSelect;
export type InsertChatThread = typeof chatThreads.$inferInsert;
export type ChatMessage = typeof chatMessages.$inferSelect;
export type InsertChatMessage = typeof chatMessages.$inferInsert;


