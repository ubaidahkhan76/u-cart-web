"use client";
import { RiAccountBoxFill } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import React, { useState } from "react";
import Slider from "./slider";
import Link from "next/link"; 

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Categories", href: "/mobileCategories" },
    { name: "Discount", href: "/discount" },
    { name: "Wishlist", href: "/whislist" },
    { name: "Cart", href: "/mobiles" },
  ];

  return (
    <div>
      <div className="navBar fixed top-0 left-0 w-full shadow-md z-10 flex justify-between items-center bg-gray-800 text-white py-4 px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl font-bold cursor-pointer">
          <Link href="/">U-Cart</Link>
        </h1>
        <input
          className="hidden lg:block border border-gray-300 rounded-2xl w-[40vw] p-2 focus:border-blue-500 focus:outline-none text-gray-900"
          placeholder="Search here anything you want!"
          type="search"
          name="search"
          id="search"
        />
        <div className="hidden lg:flex items-center gap-10">
          <RiAccountBoxFill className="cursor-pointer" size={30} />
          <Link href="/whislist"><FaRegHeart className="cursor-pointer" size={30} /></Link>
          <Link href="/cart"><MdOutlineShoppingCart className="cursor-pointer" size={30} /></Link>
        </div>
        <div className="lg:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <AiOutlineClose color="white" size={30} />
          ) : (
            <AiOutlineMenu color="white" size={30} />
          )}
        </div>
      </div>
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:hidden absolute top-[4.5rem] left-0 w-full bg-gray-800 text-white py-4 z-10`}
      >
        <ul className="flex flex-col items-center gap-4 text-xl">
          {menuItems.map((item, index) => (
            <li key={index} onClick={toggleMenu}>
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="">
        <h1 className="p-3 sm:p-3 md:p-4 lg:p-4 xl:p-4 hover:text-white text-center bg-green-500 mt-[12vh] sm:mt-[10vh] md:mt-[12vh] lg:mt-[12vh] xl:mt-[10vh]  font-bold cursor-pointer">
          THE UP-TO-20%-OFF ON WINTER SEASON
        </h1>
      </div>
      <Slider />
    </div>
  );
}
