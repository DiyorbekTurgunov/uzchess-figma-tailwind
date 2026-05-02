"use client";

import Image from "next/image"
import UrlPages from "@/components/footer/url/urlPages";
import ProviderPage from "@/components/footer/providers/providersPage";
import Link from "next/link";

export default function Footer () {
    return (
        <div className="mt-13.5 h-52 flex w-full flex-col justify-between items-center bg-[#1A1D1F]">
            <Image src="/svg/uzchess_footer.svg" alt="chevron" width={117} height={40}/>
            <UrlPages/>
            <ProviderPage/>
            <div className="flex w-full items-center justify-between  pl-8 pr-3.75 h-12.5 border-t border-[#6F767E] ">
                <p className="text-[#EFEFEF] font-normal text-base ">© UzChess. All rights reserved.</p>
                <div className={"w-28"}>
                    <Image src="/svg/fly_hourse.svg" alt="chevron" width={33} height={18}/>
                </div>
                <Link href="/rules-use">
                    <p className="text-[#EFEFEF] font-normal text-base hover:cursor-pointer  hover:text-[#1C92E0] active:scale-98">Foydalanish qoidalari</p>
                </Link>
            </div>
        </div>
    )
}