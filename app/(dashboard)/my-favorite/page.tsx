import { Metadata } from "next";
import Dashboard from "@/components/sections/my-favorite/Dashboard";
export const metadata: Metadata = {
  title:
    "My Favorite | HMP - Car Dealer, Rental & Listing",
  description: "HMP - Car Dealer, Rental & Listing",
};
export default function MyFavoritePage() {
  return (
    <>
              <Dashboard />
    </>
  );
}
