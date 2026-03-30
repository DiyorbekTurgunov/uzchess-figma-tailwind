'use client';
import Image from "next/image";
import Link from "next/link";

export default function BooksSelection() {
    return (
        <main>
            <Link href="/book-about">
                <div className={"flex w-full items-center h-25 gap-2.5 border-b border-[#1F272A] px-4 hover:bg-[#13181C]"}>
                    <div className={"flex shrink-0 overflow-hidden w-13.5 h-20 bg-[#1A1D1F] rounded-lg"}>
                        <Image src={"/image/horse_lib.png"} alt={"img"} width={54} height={80}/>
                    </div>
                    <div className={"flex flex-col h-18 justify-between"}>
                        <p className={"font-bold text-[14px] text-[#FCFCFC] leading-snug"}>Zurixdagi shaxmat musobaqasi</p>
                        <p className={"font-normal text-[13px] text-[#F0F0F0B8]"}>A.Nimzowitsch</p>
                    </div>
                </div>
            </Link>
        </main>
    )
}