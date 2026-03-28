'use client';

import Image from "next/image";

export default function CoursesSearch() {
    return (
        <main>
            <div className="flex items-center w-169 h-13 bg-[#15181A] border border-[#232627] rounded-lg px-4 gap-2 ">
                <Image src="/svg/search.svg" alt="search" width={24} height={24}/>
                <input type="text" placeholder={"Izlash"}
                       className="border border-none outline-none w-full h-7 font-medium"/>
            </div>
        </main>
    )
}