import { Metadata } from "next";
import Hero from "@/components/sections/blog/Hero";
import BlogList from "@/components/sections/blog/BlogList";
export const metadata: Metadata = {
  title: "Blog | HMP - Car Dealer, Rental & Listing",
  description: "HMP - Car Dealer, Rental & Listing",
};
export default function BlogPage() {
  return (
    <>
              <Hero />
              <BlogList />
    </>
  );
}
