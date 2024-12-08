import GoBackBtn from "@/components/gobackbtn";
import Image from "next/image";

export default function Sorry() {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col justify-center py-34">
                <h1 className="text-5xl p-4">Sorry user&#128577;</h1>
                <Image
                    src="/images/underconstruction.png"
                    width={300}
                    height={300}
                    alt="this is pic" />
                    <GoBackBtn/>

            </div>
        </div>
    )
}