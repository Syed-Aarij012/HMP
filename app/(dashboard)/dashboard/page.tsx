import { Metadata } from "next";
import Dashboard from "@/components/sections/dashboard/Dashboard";
export const metadata: Metadata = {
  title:
    "Dashboard | HMP - Car Dealer, Rental & Listing",
  description: "HMP - Car Dealer, Rental & Listing",
};
export default function DashboardPage() {
  return (
            <Dashboard />
  );
}
