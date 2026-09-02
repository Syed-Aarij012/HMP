import { Metadata } from "next";
import Hero from "@/components/sections/index/Hero";
import Filter from "@/components/sections/index/Filter";
import PopularBrands from "@/components/sections/index/PopularBrands";
import Banner from "@/components/sections/index/Banner";
import NewCars from "@/components/sections/index/NewCars";
import PopularListings from "@/components/sections/index/PopularListings";
import LoanCalculator from "@/components/sections/index/LoanCalculator";
import RecommendedCars from "@/components/sections/index/RecommendedCars";
import FeaturedCar from "@/components/sections/index/FeaturedCar";
import SearchCar from "@/components/sections/index/SearchCar";
import Testimonials from "@/components/sections/index/Testimonials";
import LatestNews from "@/components/sections/index/LatestNews";

import Header1 from "@/components/headers/Header1";
import Footer1 from "@/components/footers/Footer1";
import OurPartners from "@/components/common/OurPartners";
export const metadata: Metadata = {
  title: "Home Page 01 | HMP - Car Dealer, Rental & Listing",
  description: "HMP - Car Dealer, Rental & Listing",
};
export default function IndexPage() {
  return (
    <>
      <Header1 />
      <Hero />
      <Filter />
      <PopularBrands />
      <Banner />
      <NewCars />
      <PopularListings />
      <LoanCalculator />
      <RecommendedCars />
      <FeaturedCar />
      <SearchCar />
      <Testimonials />
      <LatestNews />

      <section className="tf-section3">
        <div className="container">
          <div className="line" />
        </div>
      </section>

      <OurPartners />
      <Footer1 />
    </>
  );
}
