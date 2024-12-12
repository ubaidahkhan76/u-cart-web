import GoBackBtn from "@/components/gobackbtn";
import Image from "next/image";

export default function Discount(){
    return(
        <div>
            <div className="flex justify-center">
            <Image
            src="/images/comingSoon.png"
            alt="soon"
            width={300}
            height={400}  />
            </div>
            <GoBackBtn/>
        </div>
    )
}