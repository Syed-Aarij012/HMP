import { Metadata } from "next";
import ChangePassword from "@/components/sections/change-password/ChangePassword";

export const metadata: Metadata = {
  title:
    "Change Password | HMP - Car Dealer, Rental & Listing",
  description: "HMP - Car Dealer, Rental & Listing",
};

export default function ChangePasswordPage() {
  return <ChangePassword />;
}
