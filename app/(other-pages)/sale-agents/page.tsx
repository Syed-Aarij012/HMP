import { Metadata } from "next";
import Hero from "@/components/sections/sale-agents/Hero";
import AboutTeam from "@/components/sections/sale-agents/AboutTeam";
import SaleAgents from "@/components/sections/sale-agents/SaleAgents";
export const metadata: Metadata = {
  title:
    "Sale Agents | HMP - Car Dealer, Rental & Listing",
  description: "HMP - Car Dealer, Rental & Listing",
};
export default function SaleAgentsPage() {
  return (
    <>
      <>
                <Hero />
                <AboutTeam />
                <SaleAgents />
      </>
    </>
  );
}
