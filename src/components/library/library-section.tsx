'use client';

import Image from "next/image";

export default function LibrarySection() {
    return (
        <main className="w-81.5">
            <div className={"flex justify-center gap-3 items-center -81.5 h-25 bg-[#1A1D1F] rounded-lg border border-[#232627]"}>
                <Image src={"svg/Vector_lib.svg"} alt={"student"} width={44} height={44}/>
                <p className={"font-bold text-[32px] text-[#F7F9FA]"}>Kutubxona</p>
            </div>
        </main>
    )
}