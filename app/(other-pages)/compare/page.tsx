import { Metadata } from "next";
import { Suspense } from "react";
import Hero from "@/components/sections/compare/Hero";
import Compare from "@/components/sections/compare/Compare";
export const metadata: Metadata = {
  title:
    "Compare | HMP - Car Dealer, Rental & Listing",
  description: "HMP - Car Dealer, Rental & Listing",
};
export default function ComparePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={null}>
        <Compare />
      </Suspense>
    </>
  );
}
