import Home03Page from "./(homes)/home03/page";
import { Metadata } from "next";
// metadata
export const metadata: Metadata = {
  title: "Home | HMP - Car Dealer, Rental & Listing",
  description: "HMP - Car Dealer, Rental & Listing",
};
export default function Home() {
  return (
    <>
      <Home03Page />
    </>
  );
}
