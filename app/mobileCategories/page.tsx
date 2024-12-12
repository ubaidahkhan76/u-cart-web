import Link from "next/link";

export default function MobileCategories(){
    return(
        <div className="py-6 mb-16"> 
            <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Categories</h1>
           <div className="p-2 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3  py-16 text-center text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-3xl">
            <h1 className="border-2 bg-gray-600 hover:text-orange-600 hover:font-bold text-white p-2 border-gray-500 h-full w-full cursor-pointer"><Link href="/mensFashion">Men&apos;s Fashion</Link></h1>
            <h1 className="border-2 bg-gray-600 hover:text-orange-600 hover:font-bold text-white p-2 border-gray-500 h-full w-full cursor-pointer"><Link href="/womenFashion">Womens&apos;s Fashion</Link></h1>
            <h1 className="border-2 bg-gray-600 hover:text-orange-600 hover:font-bold text-white p-2 border-gray-500 h-full w-full cursor-pointer"><Link href="/kidsFashion">Kid&apos;s Fashion</Link></h1>
            <h1 className="border-2 bg-gray-600 hover:text-orange-600 hover:font-bold text-white p-2 border-gray-500 h-full w-full cursor-pointer"><Link href="/electronicAppliances">Electronic Appliances</Link></h1>
            <h1 className="border-2 bg-gray-600 hover:text-orange-600 hover:font-bold text-white p-2 border-gray-500 h-full w-full cursor-pointer"><Link href="/winterCollection">Winter Collection</Link></h1>
            <h1 className="border-2 bg-gray-600 hover:text-orange-600 hover:font-bold text-white p-2 border-gray-500 h-full w-full cursor-pointer"><Link href="/mobiles">Mobiles</Link></h1>
            <h1 className="border-2 bg-gray-600 hover:text-orange-600 hover:font-bold text-white p-2 border-gray-500 h-full w-full cursor-pointer"><Link href="/jewellery">Jewellery</Link></h1>
           </div>
        </div>
    )
}