import Link from "next/link";

export default function Footer() {
    return (
        <div className="parrent text-center bg-gray-800 text-white">
            <div className="pl-2 text-white">
                <h1 className=" text-2xl font-bold sm:text-3xl md:text-4xl lg:text5xl xl:text-6xl py-4"><Link href="/">U-Cart</Link></h1>
                <h1 className="text-lg sm:text-xl md:text-1xl lg:text-2xl xl:text-3xl py-1 sm:py-1 md:py-2 lg:py-2 xl:py-2">Cart anything which you want cause this is U-Cart</h1>
            </div>
            <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row">
            <div className="text-center w-full sm:w-full md:w-full lg:w-1/4 xl:w-1/4 py-12">
                <h1 className="p-4 text-2xl">HELP & INFORMATION</h1>
                <ul className="p-1 text-lg hover:font-bold">
                    <Link href="/">Help</Link>
                </ul>
                <ul className="p-1 text-lg hover:font-bold">
                    <Link href="/">Track orders</Link>
                </ul>
                <ul className="p-1 text-lg hover:font-bold">
                    <Link href="/">Delivery & returns</Link>
                </ul>
            </div>
            <div className="text-center w-full sm:w-full md:w-full lg:w-2/4 xl:w-2/4 py-12">
                <h1 className="p-4 text-2xl">ABOUT U-CART</h1>
                <ul className="p-1 text-lg hover:font-bold">
                    <Link href="/">About Us</Link>
                </ul>
                <ul className="p-1 text-lg hover:font-bold">
                    <Link href="/">Career at U-Cart</Link>
                </ul>
                <ul className="p-1 text-lg hover:font-bold">
                    <Link href="/">Corporate responsibility</Link>
                </ul>
                <ul className="p-1 text-lg hover:font-bold">
                    <Link href="/">Investers</Link>
                </ul>
            </div>
            <div className="text-center hidden sm:block w-full sm:w-full md:w-full lg:w-1/4 xl:w-1/4 py-12">
                <h1 className="p-4 text-2xl">MORE FROM U-CART</h1>
                <ul className="p-1 text-lg hover:font-bold">
                    <Link href="/">Mobile and U-Cart apps</Link>
                </ul>
                <ul className="p-1 text-lg hover:font-bold">
                    <Link href="/">U-Cart marketplace</Link>
                </ul>
                <ul className="p-1 text-lg hover:font-bold">
                    <Link href="/">Gift vouchers</Link>
                </ul>
                <ul className="p-1 text-lg hover:font-bold">
                    <Link href="/">Discovers the U-Cart credit card</Link>
                </ul>
            </div>
            </div>
            <div className="bg-gray-700 text-center text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl">
                <h1>© 2024 <Link href="/">U-Cart</Link>. All rights reserved.</h1>
            </div>

        </div>
    )
}