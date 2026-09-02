import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import { Metadata } from "next";
import Hero from "@/components/sections/home05/Hero";
import Filter from "@/components/sections/home05/Filter";
import PopularListings from "@/components/sections/home05/PopularListings";
import PopularBrands from "@/components/sections/home05/PopularBrands";
import AboutUs from "@/components/sections/home05/AboutUs";
import CarCounter from "@/components/sections/home05/CarCounter";
import Line from "@/components/sections/home05/Line";
import FindCars from "@/components/sections/home05/FindCars";
import RecommendedCars from "@/components/sections/home05/RecommendedCars";
import WhyChooseUs from "@/components/sections/home05/WhyChooseUs";
import MeetOurAgents from "@/components/sections/home05/MeetOurAgents";
import Testimonials from "@/components/sections/home05/Testimonials";
import OurPartners from "@/components/sections/home05/OurPartners";
import Blogs from "@/components/sections/home05/Blogs";
export const metadata: Metadata = {
  title:
    "Home05 | HMP - Car Dealer, Rental & Listing",
  description: "HMP - Car Dealer, Rental & Listing",
};
export default function Home05Page() {
  return (
    <>
      <Header2 />
      <>
                <Hero />
                <Filter />
                <PopularListings />
                <PopularBrands />
                <AboutUs />
                <CarCounter />
                <Line />
                <FindCars />
                <RecommendedCars />
                <WhyChooseUs />
                <MeetOurAgents />
                <Testimonials />
                <OurPartners />
                <Blogs />
      </>

      <Footer1 />
    </>
  );
}
