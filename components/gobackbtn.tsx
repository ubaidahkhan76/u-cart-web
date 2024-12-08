import Link from "next/link";

export default function GoBackBtn(){
    return(
        <div className="py-4">
            <Link href="/"><button className=" border-2 bg-gray-600 hover:bg-orange-600 text-white w-full h-[8vh] rounded-xl">Go Back</button></Link>
        </div>
    )
}            