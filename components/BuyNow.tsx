"use client";
import React from "react";
import { useShoppingCart } from "use-shopping-cart";
export interface productCart {
  title: string;
  price: number;
  image: string;
  currency: string;
  id: number;
}
const BuyNow = ({ image, title, price, currency, id }: productCart) => {
  const { addItem } = useShoppingCart();
  const product = {
    name: title,
    image: image,
    price: price,
    id: id,
    sku: "sjkahdjka",
    currency: currency,
  };
  return (
    <button
      className="bg-green-700 w-max px-4 py-2 rounded-md"
      onClick={() => addItem(product)}
    >
      Buy Now
    </button>
  );
};

export default BuyNow;
