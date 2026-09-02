import { Metadata } from "next";
import Hero from "@/components/sections/sale-agents-detail/Hero";
import SaleAgentsDetail from "@/components/sections/sale-agents-detail/SaleAgentsDetail";
export const metadata: Metadata = {
  title:
    "Sale Agents Detail | HMP - Car Dealer, Rental & Listing",
  description: "HMP - Car Dealer, Rental & Listing",
};
export default function SaleAgentsDetailPage() {
  return (
    <>
      <>
                <Hero />
                <SaleAgentsDetail />
      </>
    </>
  );
}
