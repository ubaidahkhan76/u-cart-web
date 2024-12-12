import Image from "next/image"
export default function OurBrands(){
    return(
        <div>
            <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">The biggest labels</h1>
            <div className="image p-2 gap-4 py-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 cursor-pointer">
            <Image className="w-full h-[36vh]"
            src="/images/brand1.jpg"
            alt="pic"
            width={400}
            height={500}/>
            <Image className="w-full h-[36vh]"
            src="/images/brand2.jpg"
            alt="pic"
            width={400}
            height={700}/>
            <Image className="w-full h-[36vh]"
            src="/images/brand3.jpg"
            alt="pic"
            width={400}
            height={500}/>
            <Image className="w-full h-[36vh]"
            src="/images/brand4.jpg"
            alt="pic"
            width={400}
            height={500}/>
            <Image className="w-full h-[36vh]"
            src="/images/brand5.jpg"
            alt="pic"
            width={400}
            height={500}/>
            <Image className="w-full h-[36vh]"
            src="/images/brand6.jpg"
            alt="pic"
            width={400}
            height={500}/>
            <Image className="w-full h-[36vh]"
            src="/images/brand7.jpg"
            alt="pic"
            width={400}
            height={500}/>
            <Image className="w-full h-[36vh]"
            src="/images/brand8.jpg"
            alt="pic"
            width={400}
            height={500}/>
            </div>
        </div>
    )
}