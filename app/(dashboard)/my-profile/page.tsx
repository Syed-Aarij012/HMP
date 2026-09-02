import { Metadata } from "next";
import Dashboard from "@/components/sections/my-profile/Dashboard";
export const metadata: Metadata = {
  title:
    "My Profile | HMP - Car Dealer, Rental & Listing",
  description: "HMP - Car Dealer, Rental & Listing",
};
export default function MyProfilePage() {
  return (
    <>
              <Dashboard />
    </>
  );
}
