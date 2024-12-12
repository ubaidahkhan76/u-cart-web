"use client"
import CartBtn from "@/components/buttoncart";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";

export default function MensFashion() {
    return (
        <div className="py-4 mb-16">
            <h1 className="line-clamp-2 text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Men&apos;s Fashion</h1>
            <div className="bg-white mt-4 p-4 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                <div className="menContainer1 py-4 p-3 rounded-xl border-4 bg-gray-100 border-transparent h-full w-full ">
                    <Image
                        src="/images/men1.jpg"
                        alt="this is men fashion 1 item"
                        width={400}
                        height={300}
                        className="rounded-xl  w-full h-[36vh]" />
                    <h1 className="line-clamp-2 text-xl sm:text-1xl md:text-xl lg:text-1xl xl:text-1xl">Orange knit cap for comfort and casual style.</h1>
                    <h1 className="py-2 text-xl sm:text-1xl md:text-xl lg:text-1xl xl:text-1xl text-blue-600">Rs:240</h1>
                    <div className="discount flex gap-2">
                        <h1 className="text-xl sm:text-1xl md:text-xl lg:text-1xl xl:text-1xl text-gray-500 line-through">Rs:300</h1>
                        <h1 className="text-xl sm:text-1xl md:text-xl lg:text-1xl xl:text-1xl">-20%</h1>
                    </div>
                    <div className="py-4 flex gap-4 justify-center">
                         <CartBtn />
                        <FaRegHeart size={35}  />
                    </div>
                </div>
                <div className="menContainer1 py-4 p-3 rounded-xl border-4 bg-gray-100 border-transparent h-full w-full ">
                    <Image
                        src="/images/kids2.jpg"
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
                        src="/images/men3.jpg"
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
                        src="/images/men4.jpg"
                        alt="this is men fashion 1 item"
                        width={400}
                        height={300}
                        className="rounded-xl  w-full h-[36vh]" />
                    <h1 className="line-clamp-2 text-xl sm:text-1xl md:text-xl lg:text-1xl xl:text-1xl">Elegant wristwatch with leather strap and quartz dial.</h1>
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
                        src="/images/men5.jpg"
                        alt="this is men fashion 1 item"
                        width={400}
                        height={300}
                        className="rounded-xl  w-full h-[36vh]" />
                    <h1 className="line-clamp-2 text-xl sm:text-1xl md:text-xl lg:text-1xl xl:text-1xl">Premium leather jacket with a sleek and modern fit.</h1>
                    <h1 className="py-2 text-xl sm:text-1xl md:text-xl lg:text-1xl xl:text-1xl text-blue-600">Rs:6400</h1>
                    <div className="discount flex gap-2">
                        <h1 className="text-xl sm:text-1xl md:text-xl lg:text-1xl xl:text-1xl text-gray-500 line-through">Rs:8000</h1>
                        <h1 className="text-xl sm:text-1xl md:text-xl lg:text-1xl xl:text-1xl">-20%</h1>
                    </div>
                    <div className="py-4 flex gap-4 justify-center">
                        <CartBtn />
                        <FaRegHeart size={35} />
                    </div>
                </div>
                <div className="menContainer1 py-4 p-3 rounded-xl border-4 bg-gray-100 border-transparent h-full w-full ">
                    <Image
                        src="/images/men6.jpg"
                        alt="this is men fashion 1 item"
                        width={400}
                        height={300}
                        className="rounded-xl  w-full h-[36vh]" />
                    <h1 className="line-clamp-2 text-xl sm:text-1xl md:text-xl lg:text-1xl xl:text-1xl">Stylish shoes with a sleek design for everyday wear.</h1>
                    <h1 className="py-2 text-xl sm:text-1xl md:text-xl lg:text-1xl xl:text-1xl text-blue-600">Rs:2000</h1>
                    <div className="discount flex gap-2">
                        <h1 className="text-xl sm:text-1xl md:text-xl lg:text-1xl xl:text-1xl text-gray-500 line-through">Rs:2500</h1>
                        <h1 className="text-xl sm:text-1xl md:text-xl lg:text-1xl xl:text-1xl">-20%</h1>
                    </div>
                    <div className="py-4 flex gap-4 justify-center">
                        <CartBtn />
                        <FaRegHeart size={35} />
                    </div>
                </div>
                <div className="menContainer1 py-4 p-3 rounded-xl border-4 bg-gray-100 border-transparent h-full w-full ">
                    <Image
                        src="/images/men7.jpg"
                        alt="this is men fashion 1 item"
                        width={400}
                        height={300}
                        className="rounded-xl  w-full h-[36vh]" />
                    <h1 className="line-clamp-2 text-xl sm:text-1xl md:text-xl lg:text-1xl xl:text-1xl">Trendy sunglasses with UV protection and sleek design.</h1>
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
                        src="/images/men8.jpg"
                        alt="this is men fashion 1 item"
                        width={400}
                        height={300}
                        className="rounded-xl  w-full h-[36vh]" />
                    <h1 className="line-clamp-2 text-xl sm:text-1xl md:text-xl lg:text-1xl xl:text-1xl">Complete cosmetic set for men with grooming essentials.</h1>
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
            </div>
        </div>
    )
}