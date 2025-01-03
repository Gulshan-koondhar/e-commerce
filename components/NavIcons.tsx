"use client";
import { ShoppingCart, Bell, CircleUserRound } from "lucide-react";
import React, { useState } from "react";
import CartModal from "./CartModal";
import Profile from "./Profile";
const NavIcons = () => {
  const [cartActive, setCartActive] = useState(false);
  const [profileActive, setProfileActive] = useState(false);
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
        <h1 className="absolute -top-3 -right-2 ring-1 rounded-full text-center w-5 h-5 text-sm bg-red-400 text-white">
          2
        </h1>
        <ShoppingCart onClick={handleCart} />
        {cartActive ? (
          <div className="absolute top-10 right-4">
            <CartModal />:{" "}
          </div>
        ) : (
          ""
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
