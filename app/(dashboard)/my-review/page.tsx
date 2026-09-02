import { Metadata } from "next";
import Dashboard from "@/components/sections/my-review/Dashboard";
export const metadata: Metadata = {
  title:
    "My Review | HMP - Car Dealer, Rental & Listing",
  description: "HMP - Car Dealer, Rental & Listing",
};
export default function MyReviewPage() {
  return (
    <>
              <Dashboard />
    </>
  );
}
