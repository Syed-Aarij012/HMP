import { Metadata } from "next";
import Hero from "@/components/sections/contact/Hero";
import Contact from "@/components/sections/contact/Contact";
import OurPartners from "@/components/sections/contact/OurPartners";
import Map from "@/components/sections/contact/Map";
import FrequentlyAskedQuestions from "@/components/sections/contact/FrequentlyAskedQuestions";
export const metadata: Metadata = {
  title:
    "Contact | HMP - Car Dealer, Rental & Listing",
  description: "HMP - Car Dealer, Rental & Listing",
};
export default function ContactPage() {
  return (
    <>
              <Hero />
              <Contact />
              <OurPartners />
              <Map />
              <FrequentlyAskedQuestions />
    </>
  );
}
