import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { CartProvider } from "use-shopping-cart";
import { CartStatus } from "../components/CartStatus";
const stripePromise = loadStripe(
  "pk_test_51IFmaEEKbjR9lGIBPgyCVzUgtqE5CmDfl85dn8CzauY9GfbqwMfSpvORr9MxmDEP5PmWSuQoa6qR99czaRvwESh500huXBL1AJ"
);

export default function Home() {
  return (
    <CartProvider
      mode='client-only'
      stripe={stripePromise}
      successUrl='http://localhost:8888/payment-success'
      cancelUrl='http://localhost:8888/'
      currency='USD'
    >
      <CartStatus />
    </CartProvider>
  );
}
