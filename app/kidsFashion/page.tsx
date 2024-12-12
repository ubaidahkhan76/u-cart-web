"use client"
import CartBtn from "@/components/buttoncart";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";

export default function KidsFashion() {
    return (
        <div className="py-4 mb-16">
            <h1 className="line-clamp-2 text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Kids&apos;s Fashion</h1>
            <div className="bg-white mt-4 p-4 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                <div className="menContainer1 py-4 p-3 rounded-xl border-4 bg-gray-100 border-transparent h-full w-full ">
                    <Image
                        src="/images/kids1.jpg"
                        alt="this is men fashion 1 item"
                        width={400}
                        height={300}
                        className="rounded-xl  w-full h-[36vh]" />
                    <h1 className="line-clamp-2 text-xl sm:text-1xl md:text-xl lg:text-1xl xl:text-1xl">Durable school bag for kids with multiple compartments.</h1>
                    <h1 className="py-2 text-xl sm:text-1xl md:text-xl lg:text-1xl xl:text-1xl text-blue-600">Rs:1600</h1>
                    <div className="discount flex gap-2">
                        <h1 className="text-xl sm:text-1xl md:text-xl lg:text-1xl xl:text-1xl text-gray-500 line-through">Rs:2000</h1>
                        <h1 className="text-xl sm:text-1xl md:text-xl lg:text-1xl xl:text-1xl">-20%</h1>
                    </div>
                    <div className="py-4 flex gap-4 justify-center">
                         <CartBtn />
                        <FaRegHeart size={35}  />
                    </div>
                </div>
                <div className="menContainer1 py-4 p-3 rounded-xl border-4 bg-gray-100 border-transparent h-full w-full ">
                    <Image
                        src="/images/men2.jpg"
                        alt="this is men fashion 1 item"
                        width={400}
                        height={300}
                        className="rounded-xl  w-full h-[36vh]" />
                    <h1 className="line-clamp-2 text-xl sm:text-1xl md:text-xl lg:text-1xl xl:text-1xl">Soft cotton T-shirt for comfort and casual style.</h1>
                    <h1 className="py-2 text-xl sm:text-1xl md:text-xl lg:text-1xl xl:text-1xl text-blue-600">Rs:640 <span className="text-orange-600 text-xl sm:text-1xl md:text-xl lg:text-1xl xl:text-1xl">for each piece</span></h1>
                    <div className="discount flex gap-2">
                        <h1 className="text-xl sm:text-1xl md:text-xl lg:text-1xl xl:text-1xl text-gray-500 line-through">Rs:800</h1>
                        <h1 className="text-xl sm:text-1xl md:text-xl lg:text-1xl xl:text-1xl">-20%</h1>
                    </div>
                    <div className="py-4 flex gap-4 justify-center">
                        <CartBtn />
                        <FaRegHeart size={35} />
                    </div>
                </div>
                <div className="menContainer1 py-4 p-3 rounded-xl border-4 bg-gray-100 border-transparent h-full w-full ">
                    <Image
                        src="/images/kids3.jpg"
                        alt="this is men fashion 1 item"
                        width={400}
                        height={300}
                        className="rounded-xl  w-full h-[36vh]" />
                    <h1 className="line-clamp-2 text-xl sm:text-1xl md:text-xl lg:text-1xl xl:text-1xl">Classic slim-fit jeans with stretch for all-day ease.</h1>
                    <h1 className="py-2 text-xl sm:text-1xl md:text-xl lg:text-1xl xl:text-1xl text-blue-600">Rs:1600 <span className="text-orange-600 text-xl sm:text-1xl md:text-xl lg:text-1xl xl:text-1xl">for each piece</span></h1>
                    <div className="discount flex gap-2">
                        <h1 className="text-xl sm:text-1xl md:text-xl lg:text-1xl xl:text-1xl text-gray-500 line-through">Rs:2000</h1>
                        <h1 className="text-xl sm:text-1xl md:text-xl lg:text-1xl xl:text-1xl">-20%</h1>
                    </div>
                    <div className="py-4 flex gap-4 justify-center">
                        <CartBtn />
                        <FaRegHeart size={35} />
                    </div>
                </div>
                <div className="menContainer1 py-4 p-3 rounded-xl border-4 bg-gray-100 border-transparent h-full w-full ">
                    <Image
                        src="/images/kids4.jpg"
                        alt="this is men fashion 1 item"
                        width={400}
                        height={300}
                        className="rounded-xl  w-full h-[36vh]" />
                    <h1 className="line-clamp-2 text-xl sm:text-1xl md:text-xl lg:text-1xl xl:text-1xl">Smartwatch for kids with GPS and fun interactive features.</h1>
                    <h1 className="py-2 text-xl sm:text-1xl md:text-xl lg:text-1xl xl:text-1xl text-blue-600">Rs:1200</h1>
                    <div className="discount flex gap-2">
                        <h1 className="text-xl sm:text-1xl md:text-xl lg:text-1xl xl:text-1xl text-gray-500 line-through">Rs:1600</h1>
                        <h1 className="text-xl sm:text-1xl md:text-xl lg:text-1xl xl:text-1xl">-20%</h1>
                    </div>
                    <div className="py-4 flex gap-4 justify-center">
                        <CartBtn />
                        <FaRegHeart size={35} />
                    </div>
                </div>
                <div className="menContainer1 py-4 p-3 rounded-xl border-4 bg-gray-100 border-transparent h-full w-full ">
                    <Image
                        src="/images/kids5.jpg"
                        alt="this is men fashion 1 item"
                        width={400}
                        height={300}
                        className="rounded-xl  w-full h-[36vh]" />
                    <h1 className="line-clamp-2 text-xl sm:text-1xl md:text-xl lg:text-1xl xl:text-1xl">Warm and cozy jacket for kids perfect for winter.</h1>
                    <h1 className="py-2 text-xl sm:text-1xl md:text-xl lg:text-1xl xl:text-1xl text-blue-600">Rs:1600</h1>
                    <div className="discount flex gap-2">
                        <h1 className="text-xl sm:text-1xl md:text-xl lg:text-1xl xl:text-1xl text-gray-500 line-through">Rs:2000</h1>
                        <h1 className="text-xl sm:text-1xl md:text-xl lg:text-1xl xl:text-1xl">-20%</h1>
                    </div>
                    <div className="py-4 flex gap-4 justify-center">
                        <CartBtn />
                        <FaRegHeart size={35} />
                    </div>
                </div>
                <div className="menContainer1 py-4 p-3 rounded-xl border-4 bg-gray-100 border-transparent h-full w-full ">
                    <Image
                        src="/images/kids6.jpg"
                        alt="this is men fashion 1 item"
                        width={400}
                        height={300}
                        className="rounded-xl  w-full h-[36vh]" />
                    <h1 className="line-clamp-2 text-xl sm:text-1xl md:text-xl lg:text-1xl xl:text-1xl">Stylish shoes with a sleek design for kids.</h1>
                    <h1 className="py-2 text-xl sm:text-1xl md:text-xl lg:text-1xl xl:text-1xl text-blue-600">Rs:960</h1>
                    <div className="discount flex gap-2">
                        <h1 className="text-xl sm:text-1xl md:text-xl lg:text-1xl xl:text-1xl text-gray-500 line-through">Rs:1200</h1>
                        <h1 className="text-xl sm:text-1xl md:text-xl lg:text-1xl xl:text-1xl">-20%</h1>
                    </div>
                    <div className="py-4 flex gap-4 justify-center">
                        <CartBtn />
                        <FaRegHeart size={35} />
                    </div>
                </div>
                <div className="menContainer1 py-4 p-3 rounded-xl border-4 bg-gray-100 border-transparent h-full w-full ">
                    <Image
                        src="/images/kids7.jpg"
                        alt="this is men fashion 1 item"
                        width={400}
                        height={300}
                        className="rounded-xl  w-full h-[36vh]" />
                    <h1 className="line-clamp-2 text-xl sm:text-1xl md:text-xl lg:text-1xl xl:text-1xl">Trendy sunglasses with UV protection and sleek design for kids.</h1>
                    <h1 className="py-2 text-xl sm:text-1xl md:text-xl lg:text-1xl xl:text-1xl text-blue-600">Rs:240</h1>
                    <div className="discount flex gap-2">
                        <h1 className="text-xl sm:text-1xl md:text-xl lg:text-1xl xl:text-1xl text-gray-500 line-through">Rs:300</h1>
                        <h1 className="text-xl sm:text-1xl md:text-xl lg:text-1xl xl:text-1xl">-20%</h1>
                    </div>
                    <div className="py-4 flex gap-4 justify-center">
                        <CartBtn />
                        <FaRegHeart size={35} />
                    </div>
                </div>
                <div className="menContainer1 py-4 p-3 rounded-xl border-4 bg-gray-100 border-transparent h-full w-full ">
                    <Image
                        src="/images/kids8.jpg"
                        alt="this is men fashion 1 item"
                        width={400}
                        height={300}
                        className="rounded-xl  w-full h-[36vh]" />
                    <h1 className="line-clamp-2 text-xl sm:text-1xl md:text-xl lg:text-1xl xl:text-1xl">Comfortable and stylish cap for kids ideal for sunny days.</h1>
                    <h1 className="py-2 text-xl sm:text-1xl md:text-xl lg:text-1xl xl:text-1xl text-blue-600">Rs:360</h1>
                    <div className="discount flex gap-2">
                        <h1 className="text-xl sm:text-1xl md:text-xl lg:text-1xl xl:text-1xl text-gray-500 line-through">Rs:450</h1>
                        <h1 className="text-xl sm:text-1xl md:text-xl lg:text-1xl xl:text-1xl">-20%</h1>
                    </div>
                    <div className="py-4 flex gap-4 justify-center">
                        <CartBtn />
                        <FaRegHeart size={35} />
                    </div>
                </div>
            </div>
        </div>
    )
}