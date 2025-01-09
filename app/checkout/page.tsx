"use client";
import React, { ChangeEvent, useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import { useRouter } from "next/navigation";
import Image from "next/image";
interface BillingInfo {
  name: string;
  email: string;
  address: string;
  city: string;
  zip: string;
}
const CheckoutPage = () => {
  const { cartCount, cartDetails, totalPrice } = useShoppingCart();
  const router = useRouter();

  const [billingInfo, setBillingInfo] = useState<BillingInfo>({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBillingInfo({ ...billingInfo, [name]: value });
  };

  const handlePlaceOrder = () => {
    router.push(`/success`);
  };

  if (cartCount === 0) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Your cart is empty.</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Billing Information Form */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Billing Information</h2>
          <form>
            {["name", "email", "address", "city", "zip"].map((field) => (
              <div key={field} className="mb-4">
                <label
                  htmlFor={field}
                  className="block text-sm font-medium text-gray-700"
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  id={field}
                  value={billingInfo[field as keyof BillingInfo]}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  placeholder={`Enter your ${field}`}
                />
              </div>
            ))}
          </form>
        </div>

        {/* Order Summary */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <ul className="divide-y divide-gray-200">
            {Object.values(cartDetails ?? {}).map((item) => (
              <li key={item.id} className="flex py-4">
                <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <Image
                    src={item.image as string}
                    alt={item.title || "No Image"}
                    width={64}
                    height={64}
                  />
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-base font-medium">{item.name}</h3>
                  <p className="text-gray-500">Quantity: {item.quantity}</p>
                </div>
                <p className="text-gray-900 font-medium">{item.price}</p>
              </li>
            ))}
          </ul>
          <div className="border-t pt-4 mt-4 flex justify-between items-center">
            <h3 className="text-lg font-semibold">
              Total: {totalPrice?.toFixed(1)}
            </h3>
          </div>
        </div>
      </div>
      <button
        onClick={handlePlaceOrder}
        className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
      >
        Place Order
      </button>
    </div>
  );
};

export default CheckoutPage;
