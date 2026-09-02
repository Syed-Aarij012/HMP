import { Metadata } from "next";
import Hero from "@/components/sections/listing-list/Hero";
import ListingList from "@/components/sections/listing-list/ListingList";
import OurPartners from "@/components/sections/listing-list/OurPartners";
export const metadata: Metadata = {
  title:
    "Listing List | HMP - Car Dealer, Rental & Listing",
  description: "HMP - Car Dealer, Rental & Listing",
};
export default function ListingListPage() {
  return (
    <>
      <>
                <Hero />
                <ListingList />
                <OurPartners />
      </>
    </>
  );
}
