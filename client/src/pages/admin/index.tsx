import { useLocation } from "wouter";
import AdminDashboard from "./dashboard";
import OrdersAdmin from "./orders";
import SubscriptionsAdmin from "./subscriptions";
import CategoriesAdmin from "./categories";
import ProductsAdmin from "./products";
import CustomersAdmin from "./customers";
import CustomerDetailPage from "./customer-detail";
import AdminBillingPage from "./billing";
import AdminBillingDetailPage from "./billing-detail";
import DeliveryPartnersPage from "./delivery-partners";
import AdminBannersPage from "./banners";
import HomepageCMS from "./homepage-cms";
import CMSManagementPage from "./cms-management";
import BrandSettings from "./brand-settings";
import AdminBlogsPage from "./blogs";
import AdminVideoBlogsPage from "./video-blogs";
import AdminImageGalleryPage from "./image-gallery";
import AdminVideoGalleryPage from "./video-gallery";
import VendorsPage from "./vendors";
import StockHistoryPage from "./stock-history";

export default function AdminPage() {
  const [location] = useLocation();

  if (location === "/admin" || location === "/admin/dashboard") {
    return <AdminDashboard />;
  } else if (location === "/admin/orders") {
    return <OrdersAdmin />;
  } else if (location === "/admin/subscriptions") {
    return <SubscriptionsAdmin />;
  } else if (location === "/admin/categories") {
    return <CategoriesAdmin />;
  } else if (location === "/admin/products" || location === "/admin/inventory") {
    return <ProductsAdmin />;
  } else if (location === "/admin/customers") {
    return <CustomersAdmin />;
  } else if (location?.startsWith("/admin/customers/")) {
    return <CustomerDetailPage />;
  } else if (location === "/admin/billing") {
    return <AdminBillingPage />;
  } else if (location?.startsWith("/admin/billing/")) {
    return <AdminBillingDetailPage />;
  } else if (location === "/admin/delivery" || location === "/admin/delivery-partners") {
    return <DeliveryPartnersPage />;
  } else if (location === "/admin/vendors") {
    return <VendorsPage />;
  } else if (location === "/admin/stock-history") {
    return <StockHistoryPage />;
  } else if (location === "/admin/banners") {
    return <AdminBannersPage />;
  } else if (location === "/admin/homepage") {
    return <HomepageCMS />;
  } else if (location?.startsWith("/admin/cms")) {
    return <CMSManagementPage />;
  } else if (location === "/admin/brand") {
    return <BrandSettings />;
  } else if (location === "/admin/blogs") {
    return <AdminBlogsPage />;
  } else if (location === "/admin/video-blogs") {
    return <AdminVideoBlogsPage />;
  } else if (location === "/admin/image-gallery") {
    return <AdminImageGalleryPage />;
  } else if (location === "/admin/video-gallery") {
    return <AdminVideoGalleryPage />;
  }

  return <AdminDashboard />;
}

