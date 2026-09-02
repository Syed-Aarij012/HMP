import { Metadata } from "next";
import Hero from "@/components/sections/listing-grid/Hero";
import ListingGridContent from "@/components/sections/listing-grid/ListingGridContent";
import OurPartners from "@/components/sections/listing-grid/OurPartners";
export const metadata: Metadata = {
  title:
    "Listing Grid | HMP - Car Dealer, Rental & Listing",
  description: "HMP - Car Dealer, Rental & Listing",
};
export default function ListingGridPage() {
  return (
    <>
      <Hero />
      <ListingGridContent />
      <OurPartners />
    </>
  );
}
