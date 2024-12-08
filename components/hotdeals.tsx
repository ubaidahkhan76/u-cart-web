"use client";
import React from "react";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import CartBtn from "./buttoncart";


export default function HotDeals() {

    return (
        <div>
            <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:texr-7xl">Hot Deals</h1>
            <div className="image  p-4 gap-4 py-24 grid grid-cols-1          sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 cursor-pointer">
                <div className="container1 bg-gray-100 p-3 rounded-xl border-8 border-transparent h-[500px] w-full ">
                    <Image
                        src="/images/hotdeal1.jpg"
                        alt="deal1"
                        height={300}
                        width={400}
                        className="rounded-xl w-full h-[36vh]" />
                    <h1 className="text-2xl sm:text-2xl md:text-xl lg:text-2xl xl:text-2xl  p-1">AirPods_Pro i12 & i7s Wireless Earbuds Bluetooth 5.0</h1>
                    <h1 className="text-blue-600 p-1 text-2xl">Rs:800</h1>
                    <div className="dicount flex gap-2">
                        <h1 className="p-1 text-gray-500 text-2xl line-through">Rs:1000</h1>
                        <h1 className="p-1 text-2xl">-20%</h1>
                    </div>
                    <div className=" favourite flex justify-center gap-4 ">
                        <CartBtn />
                        <FaRegHeart size={35} />
                    </div>
                </div>
                <div className="container1 bg-gray-100 p-3 rounded-xl border-8 border-transparent h-[500px] sm:h-[500px] md:h-[500px] lg:h-[500px] xl:h-[500px] w-full ">
                    <Image
                        src="/images/hotdeal2.jpg"
                        alt="deal1"
                        height={300}
                        width={400}
                        className="rounded-xl w-full h-[36vh]" />
                    <h1 className="text-2xl sm:text-2xl md:text-xl lg:text-2xl xl:text-2xl p-1">Stylish Sneakers Lightweight Durable Sports Shoes.</h1>
                    <h1 className="text-blue-600 p-1 text-2xl">Rs:4000</h1>
                    <div className="dicount flex gap-2">
                        <h1 className="p-1 text-gray-500 text-2xl line-through">Rs:5000</h1>
                        <h1 className="p-1 text-2xl">-20%</h1>
                    </div>
                    <div className=" favourite flex justify-center gap-4 ">
                        <CartBtn />
                        <FaRegHeart size={35} />
                    </div>
                </div>
                <div className="container1 bg-gray-100 p-3 rounded-xl border-8 border-transparent h-[500px] w-full ">
                    <Image
                        src="/images/hotdeal3.jpg"
                        alt="deal1"
                        height={300}
                        width={400}
                        className="rounded-xl w-full h-[36vh]" />
                    <h1 className="text-2xl sm:text-2xl md:text-xl lg:text-2xl xl:text-2xl p-1">6-Color Casual Cotton T-Shirts Pack. Comfortable Fit</h1>
                    <h1 className="text-blue-600 p-1 text-2xl">Rs:560 <span className="text-orange-600 text-xl">for each piece</span></h1>
                    <div className="dicount flex gap-2">
                        <h1 className="p-1 text-gray-500 text-2xl line-through">Rs:700</h1>
                        <h1 className="p-1 text-2xl">-20%</h1>
                    </div>
                    <div className=" favourite flex justify-center gap-4 ">
                        <CartBtn />
                        <FaRegHeart size={35} />
                    </div>
                </div>
                <div className="container1 bg-gray-100 p-3 rounded-xl border-8 border-transparent h-[500px] w-full ">
                    <Image
                        src="/images/hotdeal4.jpg"
                        alt="deal1"
                        height={300}
                        width={400}
                        className="rounded-xl w-full h-[36vh]" />
                    <h1 className="text-2xl sm:text-2xl md:text-xl lg:text-2xl xl:text-2xl p-1">Silver Necklace S12. Stylish Design Adjustable Chain.</h1>
                    <h1 className="text-blue-600 p-1 text-2xl">Rs:960</h1>
                    <div className="dicount flex gap-2">
                        <h1 className="p-1 text-gray-500 text-2xl line-through">Rs:1200</h1>
                        <h1 className="p-1 text-2xl">-20%</h1>
                    </div>
                    <div className=" favourite flex justify-center gap-4 ">
                        <CartBtn />
                        <FaRegHeart size={35} />
                    </div>
                </div>
                <div className="container1 bg-gray-100 p-3 rounded-xl border-8 border-transparent h-[500px] w-full ">
                    <Image
                        src="/images/hotdeal5.jpg"
                        alt="deal1"
                        height={300}
                        width={400}
                        className="rounded-xl w-full h-[36vh]" />
                    <h1 className="text-2xl sm:text-2xl md:text-xl lg:text-2xl xl:text-2xl p-1">LuxGold Earrings Elegant Design Secure Back Closure.</h1>
                    <h1 className="text-blue-600 p-1 text-2xl">Rs:19200</h1>
                    <div className="dicount flex gap-2">
                        <h1 className="p-1 text-gray-500 text-2xl line-through">Rs:24000</h1>
                        <h1 className="p-1 text-2xl">-20%</h1>
                    </div>
                    <div className=" favourite flex justify-center gap-4 ">
                        <CartBtn />
                        <FaRegHeart size={35} />
                    </div>
                </div>
                <div className="container1 bg-gray-100 p-3 rounded-xl border-8 border-transparent h-[500px] w-full ">
                    <Image
                        src="/images/hotdeal6.jpg"
                        alt="deal1"
                        height={300}
                        width={400}
                        className="rounded-xl w-full h-[36vh]" />
                    <h1 className="text-2xl sm:text-2xl md:text-xl lg:text-2xl xl:text-2xl p-1">Silver Ring Classic Design Polished Finish for All.</h1>
                    <h1 className="text-blue-600 p-1 text-2xl">Rs:440</h1>
                    <div className="dicount flex gap-2">
                        <h1 className="p-1 text-gray-500 text-2xl line-through">Rs:550</h1>
                        <h1 className="p-1 text-2xl">-20%</h1>
                    </div>
                    <div className=" favourite flex justify-center gap-4 ">
                        <CartBtn />
                        <FaRegHeart size={35} />
                    </div>
                </div>
                <div className="container1 bg-gray-100 p-3 rounded-xl border-8 border-transparent h-[500px] w-full ">
                    <Image
                        src="/images/hotdeal7.jpg"
                        alt="deal1"
                        height={300}
                        width={400}
                        className="rounded-xl w-full h-[36vh]" />
                    <h1 className="text-2xl p-1">School Bag B-20 Multiple Compartments for Students</h1>
                    <h1 className="text-blue-600 p-1 text-2xl">Rs:2400</h1>
                    <div className="dicount flex gap-2">
                        <h1 className="p-1 text-gray-500 text-2xl line-through">Rs:3000</h1>
                        <h1 className="p-1 text-2xl">-20%</h1>
                    </div>
                    <div className=" favourite flex justify-center gap-4 ">
                        <CartBtn />
                        <FaRegHeart size={35} />
                    </div>
                </div>
                <div className="container1 bg-gray-100 p-3 rounded-xl border-8 border-transparent h-[500px] w-full ">
                    <Image
                        src="/images/hotdeal8.jpg"
                        alt="deal1"
                        height={300}
                        width={400}
                        className="rounded-xl w-full h-[36vh]" />
                    <h1 className="text-2xl p-1">Lipstick Long-Lasting Color Smooth Finish 3 Shades</h1>
                    <h1 className="text-blue-600 p-1 text-2xl">Rs:288 <span className="text-xl text-orange-600">for each piece</span></h1>
                    <div className="dicount flex gap-2">
                        <h1 className="p-1 text-gray-500 text-2xl line-through">Rs:360</h1>
                        <h1 className="p-1 text-2xl">-20%</h1>
                    </div>
                    <div className=" favourite flex justify-center gap-4 ">
                        <CartBtn />
                        <FaRegHeart size={35} />
                    </div>
                </div>
            </div>
        </div>
    )
}