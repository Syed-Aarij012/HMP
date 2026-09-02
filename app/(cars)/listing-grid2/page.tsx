import { Metadata } from "next";
import Hero from "@/components/sections/listing-grid2/Hero";
import ListingGrid2 from "@/components/sections/listing-grid2/ListingGrid2";
import OurPartners from "@/components/sections/listing-grid2/OurPartners";
export const metadata: Metadata = {
  title:
    "Listing Grid2 | HMP - Car Dealer, Rental & Listing",
  description: "HMP - Car Dealer, Rental & Listing",
};
export default function ListingGrid2Page() {
  return (
    <>
      <>
                <Hero />
                <ListingGrid2 />
                <OurPartners />
      </>
    </>
  );
}
