"use client";
import React, { ReactNode } from "react";
import { CartProvider as USCProvider } from "use-shopping-cart";
const CartProvider = ({ children }: { children: ReactNode }) => {
  return (
    <USCProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      successUrl="localhost:3000/success"
      cancelUrl="localhost:3000/cancel"
      currency="USD"
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </USCProvider>
  );
};

export default CartProvider;
