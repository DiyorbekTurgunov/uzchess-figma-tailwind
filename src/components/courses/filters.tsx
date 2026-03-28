'use client';
import Image from "next/image";


export default function Filters() {
    return (
        <main className="flex flex-col gap-6">
            <div className={"flex justify-center gap-3 items-center -81.5 h-25 bg-[#1A1D1F] rounded-lg border border-[#232627]"}>
                <Image src={"svg/Vector_student.svg"} alt={"student"} width={44} height={44}/>
                <p className={"font-bold text-[32px] text-[#F7F9FA]"}>Kurslar</p>
            </div>
            <div className={"w-83.5 h-122.25 bg-[#1A1D1F] rounded-lg border border-[#232627]"}>

            </div>
        </main>
    )
}