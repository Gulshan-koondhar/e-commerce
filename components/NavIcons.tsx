"use client";
import { ShoppingCart, Bell, CircleUserRound } from "lucide-react";
import React, { useState } from "react";
import CartModal from "./CartModal";
import Profile from "./Profile";
import { useShoppingCart } from "use-shopping-cart";
const NavIcons = () => {
  const [cartActive, setCartActive] = useState(false);
  const [profileActive, setProfileActive] = useState(false);
  const { cartCount } = useShoppingCart();
  const handleCart = () => {
    setCartActive(!cartActive);
    if (profileActive) {
      setProfileActive(!profileActive);
    }
  };
  const handleProfile = () => {
    setProfileActive(!profileActive);
    if (cartActive) {
      setCartActive(!cartActive);
    }
  };
  return (
    <div className="flex flex-row-reverse gap-4">
      <div className="relative">
        <ShoppingCart onClick={handleCart} />
        <div className="absolute -top-2 -right-2 text-white bg-red-500 w-5 h-5 text-center rounded-full">
          {cartCount}
        </div>
        {cartActive && (
          <div className="absolute top-10 right-4">
            <CartModal />
          </div>
        )}
      </div>
      <Bell />

      <div className="relative">
        <CircleUserRound onClick={handleProfile} />
        {profileActive ? (
          <div className="absolute top-10 right-0">
            <Profile />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default NavIcons;
