import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import { Metadata } from "next";
import Hero from "@/components/sections/home04/Hero";
import FilterCar from "@/components/sections/home04/FilterCar";
import SearchByBrand from "@/components/sections/home04/SearchByBrand";
import Banner from "@/components/sections/home04/Banner";
import NewCars from "@/components/sections/home04/NewCars";
import CarCounter from "@/components/sections/home04/CarCounter";
import TrendingCars from "@/components/sections/home04/TrendingCars";
import FindCars from "@/components/sections/home04/FindCars";
import UsedCars from "@/components/sections/home04/UsedCars";
import NearbyUsedCars from "@/components/sections/home04/NearbyUsedCars";
import Testimonials from "@/components/sections/home04/Testimonials";
import Blogs from "@/components/sections/home04/Blogs";
import OurPartners from "@/components/sections/home04/OurPartners";
export const metadata: Metadata = {
  title:
    "Home04 | HMP - Car Dealer, Rental & Listing",
  description: "HMP - Car Dealer, Rental & Listing",
};
export default function Home04Page() {
  return (
    <>
      {" "}
      <Header2 />
      <>
        <Hero />
        <FilterCar />
        <SearchByBrand />
        <Banner />
        <NewCars />
        <CarCounter />

        <section className="tf-section3">
          <div className="container">
            <div className="line" />
          </div>
        </section>

        <TrendingCars />
        <FindCars />
        <UsedCars />
        <NearbyUsedCars />
        <Testimonials />
        <Blogs />
        <OurPartners />
      </>
      <Footer1 />
    </>
  );
}
