import IndexPage from "./(homes)/home01/page";
import { Metadata } from "next";
// metadata
export const metadata: Metadata = {
  title: "Home | HMP - Car Dealer, Rental & Listing",
  description: "HMP - Car Dealer, Rental & Listing",
};
export default function Home() {
  return (
    <>
      <IndexPage />
    </>
  );
}
