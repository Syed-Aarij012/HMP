import { Metadata } from "next";
import Hero from "@/components/sections/blog-grid/Hero";
import BlogGrid from "@/components/sections/blog-grid/BlogGrid";
export const metadata: Metadata = {
  title:
    "Blog Grid | HMP - Car Dealer, Rental & Listing",
  description: "HMP - Car Dealer, Rental & Listing",
};
export default function BlogGridPage() {
  return (
    <>
              <Hero />
              <BlogGrid />
    </>
  );
}
