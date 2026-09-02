import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import { Metadata } from "next";
import Hero from "@/components/sections/home02/Hero";
import CarListing from "@/components/sections/home02/CarListing";
import SearchCar from "@/components/sections/home02/SearchCar";
import RecommendedCars from "@/components/sections/home02/RecommendedCars";
import FindCar from "@/components/sections/home02/FindCar";
import PopularListings from "@/components/sections/home02/PopularListings";
import WhyChooseUs from "@/components/sections/home02/WhyChooseUs";
import OurPartners from "@/components/sections/home02/OurPartners";
import AutoLoanCalculator from "@/components/sections/home02/AutoLoanCalculator";
import LatestNews from "@/components/sections/home02/LatestNews";
export const metadata: Metadata = {
  title:
    "Home02 | HMP - Car Dealer, Rental & Listing",
  description: "HMP - Car Dealer, Rental & Listing",
};
export default function Home02Page() {
  return (
    <>
      <Header2 />
      <>
        <Hero />
        <CarListing />
        <SearchCar />
        <RecommendedCars />
        <FindCar />
        <PopularListings />
        <WhyChooseUs />
        <OurPartners />
        <AutoLoanCalculator />
        <LatestNews />
      </>

      <Footer1 />
    </>
  );
}
