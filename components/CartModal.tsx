"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useShoppingCart } from "use-shopping-cart";
import Image from "next/image";

const CartModal = () => {
  const { cartCount, cartDetails, removeItem, totalPrice } = useShoppingCart();

  return (
    <Sheet defaultOpen>
      <SheetContent className="sm:max-w-lg w-[90vw]">
        <SheetHeader>
          <SheetTitle>Shopping Cart {cartCount} items</SheetTitle>
        </SheetHeader>
        <div className="h-full flex flex-col justify-between">
          <div className="mt-8 flex-1 overflow-y-auto">
            <ul className="-my-6 divide-y divide-gray-200">
              {cartCount === 0 ? (
                <h1 className="py-6">You don&apos;t have any Items</h1>
              ) : (
                <>
                  {Object.values(cartDetails ?? {}).map((entry) => {
                    console.log(entry); // Debugging: Check the structure of each entry
                    return (
                      <li key={entry?.id} className="flex py-6">
                        <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <Image
                            src={entry?.image as string}
                            alt={entry?.name}
                            width={100}
                            height={100}
                            className="object-contain w-full h-full"
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900 gap-3">
                              <h3>{entry?.name || "No Title Available"}</h3>
                              <p>{entry?.price * entry?.quantity}</p>
                            </div>
                          </div>
                          <div className="flex justify-between mt-6">
                            <p>QTY: {entry.quantity}</p>
                            <button onClick={() => removeItem(entry.id)}>
                              Remove
                            </button>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </>
              )}
            </ul>
          </div>
          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between font-medium text-gray-900 text-base">
              <p>Subtotal</p>
              <p>${totalPrice?.toFixed(0)}</p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartModal;
