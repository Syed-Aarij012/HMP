import { Metadata } from "next";
import Hero from "@/components/sections/faq/Hero";
import Faq from "@/components/sections/faq/Faq";
export const metadata: Metadata = {
  title: "Faq | HMP - Car Dealer, Rental & Listing",
  description: "HMP - Car Dealer, Rental & Listing",
};
export default function FaqPage() {
  return (
    <>
              <Hero />
              <Faq />
    </>
  );
}
