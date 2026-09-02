import { Metadata } from "next";
import Dashboard from "@/components/sections/my-listing/Dashboard";
export const metadata: Metadata = {
  title:
    "My Listing | HMP - Car Dealer, Rental & Listing",
  description: "HMP - Car Dealer, Rental & Listing",
};
export default function MyListingPage() {
  return (
    <>
              <Dashboard />
    </>
  );
}
