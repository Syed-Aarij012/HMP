import { Metadata } from "next";
import Hero from "@/components/sections/dealer-detail/Hero";
import DealerDetail from "@/components/sections/dealer-detail/DealerDetail";
export const metadata: Metadata = {
  title:
    "Dealer Detail | HMP - Car Dealer, Rental & Listing",
  description: "HMP - Car Dealer, Rental & Listing",
};
export default function DealerDetailPage() {
  return (
    <>
              <Hero />
              <DealerDetail />
    </>
  );
}
