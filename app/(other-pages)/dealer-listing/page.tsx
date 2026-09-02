import { Metadata } from "next";
import Hero from "@/components/sections/dealer-listing/Hero";
import DealerListing from "@/components/sections/dealer-listing/DealerListing";
export const metadata: Metadata = {
  title:
    "Dealer Listing | HMP - Car Dealer, Rental & Listing",
  description: "HMP - Car Dealer, Rental & Listing",
};
export default function DealerListingPage() {
  return (
    <>
              <Hero />
              <DealerListing />
    </>
  );
}
