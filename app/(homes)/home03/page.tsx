import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import { Metadata } from "next";
import Hero from "@/components/sections/home03/Hero";
import CarFilter from "@/components/sections/home03/CarFilter";
import FindCar from "@/components/sections/home04/FindCars";
import RecommendedCars from "@/components/sections/home03/RecommendedCars";
import Reputable from "@/components/sections/home03/Reputable";
import CarCounter from "@/components/sections/home03/CarCounter";
import WhyChooseUs from "@/components/sections/home03/WhyChooseUs";
import Banner from "@/components/sections/home03/Banner";
import RecentlyViewedCars from "@/components/sections/home04/TrendingCars";
import SearchByBrand from "@/components/sections/home02/SearchCar";
import Testimonials from "@/components/sections/home03/Testimonials";
import LatestNews from "@/components/sections/home03/LatestNews";
import OurPartners from "@/components/sections/home03/OurPartners";
export const metadata: Metadata = {
  title:
    "Home03 | HMP - Car Dealer, Rental & Listing",
  description: "HMP - Car Dealer, Rental & Listing",
};
export default function Home03Page() {
  return (
    <>
      {" "}
      <Header2 />
      <>
        <Hero />
        <CarFilter />
        <FindCar />
        <RecommendedCars />
        <Reputable />
        <CarCounter />

        <section className="tf-section3">
          <div className="container">
            <div className="line" />
          </div>
        </section>

        <WhyChooseUs />
        <Banner />
        <RecentlyViewedCars />
        <SearchByBrand />
        <Testimonials />
        <LatestNews />
        <OurPartners />
      </>
      <Footer1 />
    </>
  );
}
