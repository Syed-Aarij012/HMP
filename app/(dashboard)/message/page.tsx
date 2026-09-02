import { Metadata } from "next";
import Message from "@/components/sections/message/Message";
export const metadata: Metadata = {
  title:
    "Message | HMP - Car Dealer, Rental & Listing",
  description: "HMP - Car Dealer, Rental & Listing",
};
export default function MessagePage() {
  return (
    <>
              <Message />
    </>
  );
}
