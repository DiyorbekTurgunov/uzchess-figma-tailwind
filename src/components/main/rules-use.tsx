'use client';

import DonatSection from "@/components/main/donat-section";
import Banner from "@/components/main/banner";
import Image from "next/image";

export default function RulesUse() {
    return (
        <main className="flex justify-center gap-6">
            <div className="flex flex-col w-256.5 h-222.5 bg-[#1A1D1F] border border-[#1F272A] rounded-xl p-5 ">
                <div className="flex flex-col font-bold text-[#F7F9FA]">
                    <p className="text-[28px]">Foydalanish qoidalari</p>
                    <p className="text-[24px]">Qoidalar nima haqida</p>
                </div>
                <div className="flex flex-col w-226.5 gap-3 text-[18px] text-[#C2C4C5]">
                    <p className="font-bold text-white/85">Bugun Hindistonda shaxmat bo‘yicha olimpiadada to‘qqizinchi tur o‘yinlari bo‘lib o‘tdi. Tanlov 10 avgustga qadar davom etadi.
                    </p>
                    <p className="font-normal">TOSHKENT, 7 avgust – <span className="text-[#1C92E0] cursor-pointer">#sputnik</span>. 44-Jahon shaxmat olimpiadasida O‘zbekiston erkaklar terma jamoasi Armanistonlik raqiblarini mag‘lub etdi. Bu haqda O‘zbekiston Sportni rivojlantirish vazirligi matbuot xizmati xabar berdi.
                    </p>
                    <p className="font-normal">Ikki davlat jamoalari o‘rtasidagi bahs 3:1 hisobida O‘zbekiston foydasiga hal bo‘ldi. Shu tariqa, hech qachon mag‘lubiyatga uchramagan respublika terma jamoasi 188 ta jamoadan iborat turnir jadvalida birinchi o‘rinni egalladi. Umumiy hisobda sportchilar 16 ochko jamg‘ardi. Turnirda ikkinchi o‘rinni Hindiston, uchinchi o‘rinni Armaniston terma jamoasi egalladi. Shu bilan birga, O‘zbekiston ayollar terma jamoasi o‘yinda isroillik raqiblariga imkoniyatni boy berdi.
                    </p>
                    <p className="font-normal">Bungacha o‘zbekistonlik badmintonchilar “Osiyo bolalari” xalqaro sport o‘yinlarida turli nomdagi to‘rtta medalni qo‘lga kiritgan edi.</p>
                </div>
                <ul className="w-226.5 font-normal text-[18px] text-[#C2C4C5] pl-5">
                    <li>Bugun Hindistonda shaxmat bo‘yicha olimpiadada to‘qqizinchi tur o‘yinlari bo‘lib o‘tdi. Tanlov 10 avgustga qadar davom etadi.
                    </li>
                    <li>TOSHKENT, 7 avgust – <a href="https://sputnik.com" className="text-blue-500 hover:underline">#sputnik</a>. 44-Jahon shaxmat olimpiadasida O‘zbekiston erkaklar terma jamoasi Armanistonlik raqiblarini mag‘lub etdi. Bu haqda O‘zbekiston Sportni rivojlantirish vazirligi matbuot xizmati xabar berdi.
                    </li>
                    <li>Ikki davlat jamoalari o‘rtasidagi bahs 3:1 hisobida O‘zbekiston foydasiga hal bo‘ldi. Shu tariqa, hech qachon mag‘lubiyatga uchramagan respublika terma jamoasi 188 ta jamoadan iborat turnir jadvalida birinchi o‘rinni egalladi. Umumiy hisobda sportchilar 16 ochko jamg‘ardi. Turnirda ikkinchi o‘rinni Hindiston, uchinchi o‘rinni Armaniston terma jamoasi egalladi. Shu bilan birga, O‘zbekiston ayollar terma jamoasi o‘yinda isroillik raqiblariga imkoniyatni boy berdi.
                    </li>
                    <li>Bungacha o‘zbekistonlik badmintonchilar <a href="https://olamsport.com" className="underline">“Osiyo bolalari”</a> xalqaro sport o‘yinlarida turli nomdagi to‘rtta medalni qo‘lga kiritgan edi.</li>
                </ul>
                <div className="flex flex-col justify-end w-227.25 h-15.25 border-t border-[#F7F9FA1A] mt-5">
                    <div className="flex justify-between h-10">
                        <div className="flex items-center gap-4">
                            <a href="https://twitter.com"><Image src={"/svg/twitter2.svg"} alt={"svg"} width={24} height={24}/></a>
                            <a href="https://facebook.com"><Image src={"/svg/facebook2.svg"} alt={"svg"} width={24} height={24}/></a>
                            <a href="https://telegram.com"><Image src={"/svg/telegram2.svg"} alt={"svg"} width={24} height={24}/></a>
                            <a href="https://link.com"><Image src={"/svg/link2.svg"} alt={"svg"} width={24} height={24}/></a>
                        </div>
                        <div className="flex items-center gap-5.75">
                            <div className="flex gap-3">
                                <Image src={"/svg/view.svg"} alt={"svg"} width={24} height={24}/>
                                <p>5 132</p>
                            </div>
                            <div className="flex justify-center items-center gap-2.5 w-48.5 h-10 bg-[#F7F9FA1A] rounded-lg">
                                <p>Поделиться</p>
                                <Image src={"/svg/share.svg"} alt={"svg"} width={20} height={20}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-6">
                <DonatSection/>
                <Banner/>
            </div>
        </main>
    )
}