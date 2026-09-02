import type { DashboardListingStatus } from "@/types/cars";

export type { DashboardCar, DashboardListingStatus } from "@/types/cars";

export {
  DASHBOARD_LISTINGS_TOTAL_COUNT,
  FAVORITE_LISTINGS_TOTAL_COUNT,
  dashboardPageListingCars,
  favoriteCars,
  formatCarPrice,
  myListingCars,
} from "@/data/cars";

export const DASHBOARD_LISTING_STATUS_META: Record<
  DashboardListingStatus,
  { label: string; className: string }
> = {
  approved: { label: "Approved", className: "status-publish" },
  pending: { label: "Pending", className: "status-pending" },
  sold: { label: "Sold", className: "status-sold" },
};

export function formatDashboardListingPrice(price: number) {
  return `$${price.toLocaleString("en-US")}`;
}
