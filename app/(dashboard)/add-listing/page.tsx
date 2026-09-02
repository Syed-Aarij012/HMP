import { Metadata } from "next";
import AddListing from "@/components/sections/add-listing/AddListing";
export const metadata: Metadata = {
  title:
    "Add Listing | HMP - Car Dealer, Rental & Listing",
  description: "HMP - Car Dealer, Rental & Listing",
};
export default function AddListingPage() {
  return <AddListing />;
}
