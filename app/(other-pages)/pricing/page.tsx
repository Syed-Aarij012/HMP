import { Metadata } from "next";
import Hero from "@/components/sections/pricing/Hero";
import Pricing from "@/components/sections/pricing/Pricing";
import FrequentlyAskedQuestions from "@/components/sections/pricing/FrequentlyAskedQuestions";
export const metadata: Metadata = {
  title:
    "Pricing | HMP - Car Dealer, Rental & Listing",
  description: "HMP - Car Dealer, Rental & Listing",
};
export default function PricingPage() {
  return (
    <>
      <>
                <Hero />
                <Pricing />
                <FrequentlyAskedQuestions />
      </>
    </>
  );
}
