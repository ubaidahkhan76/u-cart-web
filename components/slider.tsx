"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Slider() {
  const slides = [
    "/images/slider1.jpg",
    "/images/slider2.jpg",
    "/images/slider3.jpg",
    "/images/slider4.jpg",
    "/images/slider5.jpg",
    "/images/slider6.jpg",
    "/images/slider7.jpg",
    "/images/slider8.jpg",
    "/images/slider9.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slides every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex">
      <div className="hidden bg-stone-100 lg:block w-[25vw] text-center text-black p-3.9">
        <h2 className="text-2xl p-2 font-bold mb-4">Categories</h2>
        <ul className="space-y-2">
          <li className="hover:font-bold p-1 rounded cursor-pointer"><Link href="/mensFashion">Men&#39;s Fashion</Link></li>
          <li className="hover:font-bold p-1 rounded cursor-pointer"><Link href="/womenFashion">Women&#39;s Fashion</Link></li>
          <li className="hover:font-bold p-1 rounded cursor-pointer"><Link href="/kidsFashion">Kid&#39;s Fashion</Link></li>
          <li className="hover:font-bold p-1 rounded cursor-pointer"><Link href="/electronicAppliances">Electronic Appliances</Link></li>
          <li className="hover:font-bold p-1 rounded cursor-pointer"><Link href="/winterCollection">Winter Collection</Link></li>
          <li className="hover:font-bold p-1 rounded cursor-pointer"><Link href="/mobiles">Mobiles</Link></li>
          <li className="hover:font-bold p-1 rounded cursor-pointer"><Link href="/jewellery">Jewellery</Link></li>
        </ul>
      </div>
      <div className="w-full md:w-3/4 h-full relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <img
                key={index}
                src={slide}
                alt={`Slide ${index + 1}`}
                className="w-full flex-shrink-0"
              />
            ))}
          </div>
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}
