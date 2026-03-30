'use client';

import Image from "next/image";
import BooksSelection from "@/components/library/books-selection";

export default function LibrarySection() {
    return (
        <main className="flex flex-col w-81.5 h-117.5 bg-[#1A1D1F] rounded-lg py-4 gap-5">
            <div className={"flex justify-between px-4"}>
                <p className={"font-medium text-[18px] text-[#FCFCFC]"}>Top kitoblar</p>
                <div className={"flex items-center hover:cursor-pointer"}>
                    <p className={"font-normal text-[16px] text-[#9DA1A3]"}>Barchasi</p>
                    <Image className={"rotate-270"} src={"/svg/chevron.svg"} alt={"svg"} width={20} height={20}/>
                </div>
            </div>
            <div className={"flex flex-col w-full h-105.75 hover:cursor-pointer"}>
                <BooksSelection/>
                <BooksSelection/>
                <BooksSelection/>
                <BooksSelection/>
            </div>
        </main>
    )
}