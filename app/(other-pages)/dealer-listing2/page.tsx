import { Metadata } from "next";
import Hero from "@/components/sections/dealer-listing2/Hero";
import DealershipsByBrands from "@/components/sections/dealer-listing2/DealershipsByBrands";
import FindCarDealerships from "@/components/sections/dealer-listing2/FindCarDealerships";
export const metadata: Metadata = {
  title:
    "Dealer Listing2 | HMP - Car Dealer, Rental & Listing",
  description: "HMP - Car Dealer, Rental & Listing",
};
export default function DealerListing2Page() {
  return (
    <>
              <Hero />
              <DealershipsByBrands />
              <FindCarDealerships />
    </>
  );
}
