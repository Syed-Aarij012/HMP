import { Metadata } from "next";
import ListingListMap from "@/components/sections/listing-list-map/ListingListMap";
export const metadata: Metadata = {
  title:
    "Listing List Map | HMP - Car Dealer, Rental & Listing",
  description: "HMP - Car Dealer, Rental & Listing",
};
export default function ListingListMapPage() {
  return (
    <>
              <ListingListMap />
    </>
  );
}
