'use client';
import Image from "next/image";

export default function Sections() {
    return (
        <main className="flex gap-6">
            <div className="flex justify-center items-center gap-5 w-81.5 h-27 rounded-xl bg-[#1A1D1F] hover:bg-[#13181C] transition duration-150 hover:cursor-pointer">
                <Image src="/svg/Vector_student.svg" alt="Student" width={44} height={27}/>
                <p className="font-bold text-xl text-[#EFEFEF]">Kurslar</p>
            </div>
            <div className="flex justify-center items-center gap-5 w-81.5 h-27 rounded-xl bg-[#1A1D1F] hover:bg-[#13181C] hover:cursor-pointer">
                <Image src="/svg/Vector_lib.svg" alt="library" width={44} height={27}/>
                <p className="font-bold text-xl text-[#EFEFEF]">Kutubxona</p>
            </div>
        </main>
    )
}