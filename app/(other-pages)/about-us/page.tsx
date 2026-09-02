import { Metadata } from "next";
import Hero from "@/components/sections/about-us/Hero";
import AboutUs from "@/components/sections/about-us/AboutUs";
import Reputable from "@/components/sections/about-us/Reputable";
import WhyChooseUs from "@/components/sections/about-us/WhyChooseUs";
import MeetOurAgents from "@/components/sections/about-us/MeetOurAgents";
import Testimonials from "@/components/sections/about-us/Testimonials";
import OurPartners from "@/components/sections/about-us/OurPartners";
export const metadata: Metadata = {
  title:
    "About Us | HMP - Car Dealer, Rental & Listing",
  description: "HMP - Car Dealer, Rental & Listing",
};
export default function AboutUsPage() {
  return (
    <>
              <Hero />
              <AboutUs />
              <Reputable />
              <WhyChooseUs />
              <MeetOurAgents />
              <Testimonials />
              <OurPartners />
    </>
  );
}
