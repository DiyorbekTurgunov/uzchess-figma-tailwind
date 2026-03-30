'use client';

import Image from "next/image";

export default function Banner() {
    return (
        <main className="flex w-81.5 h-48 rounded-lg bg-[#0B4789] border border-[#1F272A] ">
            <Image className={"absolute ml-62 rounded-lg"} src={"/svg/Vector.svg"} alt={"svg"} width={76} height={76}/>
            <div className="flex flex-col justify-between p-4">
                <div className="flex">
                    <Image src={"/svg/Frame.svg"} alt={"grid"} width={76} height={24}/>
                </div>
                <div className={"font-bold text-[20px] text-[White] leading-tight"}>
                    Aynan siz uchun qanday
                    imtiyozlar borligini
                    bilib oling</div>
                <div className={"flex justify-center items-center  w-37.25 h-10 bg-[#1C92E0] rounded-lg gap-2.5 hover:cursor-pointer transition-transform duration-150 active:scale-97"}>
                    Batafsil
                    <Image src={"/svg/batafsil.svg"} alt={"svg"} width={20} height={20}/>
                </div>
            </div>
        </main>
    )
}