import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-400 ">
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-top">
          <div className="flex flex-col gap-3 w-full lg:w-1/4">
            <div className="tracking-wide text-xl mb-12 font-bold">LOGO</div>
            <p className="text-sm">House# C-538, Phase 1 Qasimabad Hyderabad</p>
            <span className="font-semibold">gulshan.koondhar@outlook.com</span>
            <span className="font-semibold">+92 311 3969283</span>
            <div className="flex items-center justify-start gap-4">
              <Facebook />
              <Linkedin />
              <Github />
              <Instagram />
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-around lg:w-1/2">
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold mb-12 text-center">
                Company
              </h1>
              <ul className="flex flex-col gap-3">
                <li>About US</li>
                <li>Careers</li>
                <li>Affilates</li>
                <li>Blog</li>
                <li>Contact US</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold mb-12 text-center">SHOP</h1>
              <ul className="flex flex-col gap-3">
                <li>New Arrivals</li>
                <li>Accessories</li>
                <li>Men</li>
                <li>Women</li>
                <li>All Products</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold mb-12 text-center">HELP</h1>
              <ul className="flex flex-col gap-3">
                <li>Customer Service</li>
                <li>My Account</li>
                <li>Find A Store</li>
                <li>Legal & Privacy</li>
                <li>Gift Card</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-3 w-full lg:w-1/4">
            <h1 className="text-xl font-bold mb-12">Subscribe</h1>
            <p className="text-sm">House# C-538, Phase 1 Qasimabad Hyderabad</p>
            <div className="bg-pink-400 rounded-md flex gap-2">
              <input
                type="text"
                placeholder="Email Address"
                className="p-1 outline-none rounded-tl-md rounded-bl-md w-[85%]"
              />
              <button className="rounded-tr-md rounded-br-md">Join</button>
            </div>
            <h1>Secure Payments</h1>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
