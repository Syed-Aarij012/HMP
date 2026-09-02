"use client";
import Login from "./Login";
import Register from "./Register";
import ForgotPass from "./ForgotPass";
import ContactDealer from "./ContactDealer";
import Compare from "./Compare";

export default function AllModals() {
  return (
    <>
      <Login />
      <Register />
      <ForgotPass />
      <ContactDealer />
      <Compare />
    </>
  );
}
