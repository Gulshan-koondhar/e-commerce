"use client";
import React, { ReactNode } from "react";
import { CartProvider as USCProvider } from "use-shopping-cart";
const CartProvider = ({ children }: { children: ReactNode }) => {
  return (
    <USCProvider
      mode="payment"
      cartMode="client-only"
      stripe=""
      successUrl=""
      cancelUrl=""
      currency="USD"
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </USCProvider>
  );
};

export default CartProvider;
