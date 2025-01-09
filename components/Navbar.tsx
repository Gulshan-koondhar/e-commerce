"use client";
import { Menu, Search, ShoppingBasket, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const handleMenu = () => {
    setIsActive(!isActive);
  };
  return (
    <header>
      <div className="max-w-screen-xl mx-auto p-4 h-20">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between sm:w-1/3 lg:w-1/2">
            <div className="sm:flex gap-2">
              <div className="hidden sm:flex gap-2 lg:w-1/3">
                <ShoppingBasket />
              </div>
              <h1 className="tracking-wide text-xl flex">LOGO</h1>
            </div>
            <div className="hidden lg:flex lg:w-2/3">
              <nav className="flex justify-evenly w-full">
                <Link href="/">Home</Link>
                <Link href="/product">Shop</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
              </nav>
            </div>
          </div>
          <div className="justify-between items-center sm:w-2/3 lg:w-1/2 gap-3 hidden sm:flex">
            <div className="w-2/3">
              <SearchBar className="flex items-center bg-gray-400 p-2 pr-0 rounded-md" />
            </div>
            <div className="w-1/3">
              <NavIcons />
            </div>
          </div>

          <div className="sm:hidden flex gap-2">
            <Search onClick={() => setSearchActive(!searchActive)} />
            {searchActive && (
              <div className="absolute top-12 left-0 w-full z-10">
                <SearchBar className="flex items-center bg-gray-400 p-2 pr-0 rounded-md mx-4" />
              </div>
            )}
            <div
              onClick={handleMenu}
              className="cursor-pointer relative sm:hidden"
            >
              {isActive ? <X /> : <Menu />}
            </div>
          </div>

          {isActive ? (
            <nav className="flex flex-col absolute top-20 items-center gap-6 justify-center left-0 w-full h-screen bg-black text-white z-10">
              <Link href="/">Home</Link>
              <Link href="/product">Shop</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          ) : (
            ""
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
