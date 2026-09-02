import { Metadata } from "next";
import ListingGridMap from "@/components/sections/listing-grid-map/ListingGridMap";
export const metadata: Metadata = {
  title:
    "Listing Grid Map | HMP - Car Dealer, Rental & Listing",
  description: "HMP - Car Dealer, Rental & Listing",
};
export default function ListingGridMapPage() {
  return (
    <>
      <ListingGridMap />
    </>
  );
}
