'use client';
import Image from "next/image";
import Banner from "@/components/main/banner";
import LibrarySection from "@/components/main/library-section";
import {useState} from "react";

export default function BookAbout() {
    const [active, setActive] = useState(false);

    return (
        <main className="flex justify-center gap-6">
            <div className="w-256.5 h-133.75 bg-[#1A1D1F] rounded-xl p-8">
                <div className={"flex flex-col gap-6"}>
                    <div className={"flex gap-5"}>
                        <div className={"flex justify-center items-center overflow-hidden w-48.75 h-68 bg-[#13181C] rounded-lg border border-[#F7F9FA14]"}>
                            <Image className={"blur-md"} src={"/image/horse_lib.png"} alt={"img"} width={175} height={235}/>
                            <Image className={"absolute"} src={"/image/horse_lib.png"} alt={"img"} width={115} height={175}/>
                        </div>
                        <div className={"flex flex-col justify-between"}>
                            <p className={"font-bold text-[28px] text-[#F7F9FA] leading-snug"}>
                                Shaxmatdagi qobiliyatlaringizga qayta <br/> baxo bering</p>
                            <div className={"flex items-center gap-3"}>
                                <Image src={"svg/dollar.svg"} alt={"svg"} width={28} height={28}/>
                                <p className={"font-bold text-[20px] text-[#F7F9FA]"}>55 000.00 uzs</p>
                                <p className={"font-normal text-[14px] text-[#F7F9FA]  line-through decoration-red-600"}>160 000.00 uzs</p>
                            </div>
                            <div className={"flex w-187 h-15.5 "}>
                                <div className={"flex flex-col justify-center w-46.75 h-15.5 border border-[#2C2F31] p-3"}>
                                    <div className={"flex"}>
                                        <Image src={"/svg/shaxmatdona.svg"} alt={"svg"} width={16} height={16}/>
                                        <p className={"font-normal text-[14px] text-[#9DA1A3]"}>Daraja</p>
                                    </div>
                                    <p className={"font-medium text-[14px] text-[#F7F9FA]"}>Boshlangich</p>
                                </div>
                                <div className={"flex flex-col justify-center w-46.75 h-15.5 border border-[#2C2F31] p-3"}>
                                    <div className={"flex"}>
                                        <Image src={"/svg/shaxmatdona.svg"} alt={"svg"} width={16} height={16}/>
                                        <p className={"font-normal text-[14px] text-[#9DA1A3]"}>Muallif</p>
                                    </div>
                                    <p className={"font-medium text-[14px] text-[#F7F9FA]"}>Jeremy Silman</p>
                                </div>
                                <div className={"flex flex-col justify-center w-46.75 h-15.5 border border-[#2C2F31] p-3"}>
                                    <div className={"flex"}>
                                        <Image src={"/svg/shaxmatdona.svg"} alt={"svg"} width={16} height={16}/>
                                        <p className={"font-normal text-[14px] text-[#9DA1A3]"}>Sahifa soni</p>
                                    </div>
                                    <p className={"font-medium text-[14px] text-[#F7F9FA]"}>231</p>
                                </div>
                                <div className={"flex flex-col justify-center w-46.75 h-15.5 border border-[#2C2F31] p-3"}>
                                    <div className={"flex"}>
                                        <Image src={"/svg/shaxmatdona.svg"} alt={"svg"} width={16} height={16}/>
                                        <p className={"font-normal text-[14px] text-[#9DA1A3]"}>Chop etilgan sana</p>
                                    </div>
                                    <p className={"font-medium text-[14px] text-[#F7F9FA]"}>2002</p>
                                </div>
                            </div>
                            <div className={"flex gap-4"}>
                                <div onClick={() => setActive(!active)} className={`flex justify-center items-center w-59.5 h-12.5 bg-[#1C92E0] rounded-lg gap-2.5 hover:cursor-pointer  active:scale-99
                                    ${active ? "bg-[#FFFFFF1A]" : "bg-[#1C92E0]"}`}>
                                    <Image
                                        src={active ? "/svg/cart_add.svg" : "/svg/Savatcha.svg"}
                                        alt="icon"
                                        width={24}
                                        height={24}
                                    />
                                    <p className={"font-medim text-[20px] text-[#F7F9FA]"}>{active ? "Savatchada" : "Savatchaga"}</p>
                                </div>
                                <div className={"flex justify-center items-center w-12.5 h-12.5 bg-[#F7F9FA1A] rounded-lg border border-[#F7F9FA4D] hover:cursor-pointer active:scale-98"}>
                                    <Image src={"/svg/heart-outline.svg"} alt={"svg"} width={24} height={24}/>
                                </div>
                                <div className={"flex justify-center items-center w-12.5 h-12.5 bg-[#F7F9FA1A] rounded-lg border border-[#F7F9FA4D] hover:cursor-pointer active:scale-98"}>
                                    <Image src={"/svg/share.svg"} alt={"svg"} width={24} height={24}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"flex flex-col gap-3"}>
                        <p className={"font-bold text-[24px] text-[#F7F9FA]"}>Kitob haqida</p>
                        <p className={"font-normal text-[16px] text-[#C2C4C5] leading-snug"}>Shaxmatni qanday qayta baholash kerak, uzoq vaqtdan beri zamonaviy
                            klassika hisoblangan. Ushbu 4-nashr Silmanning nomutanosiblik haqidagi
                            innovatsion kontseptsiyasini butunlay yangi darajaga olib chiqadi. 1400
                            dan 2100 gacha bo`lgan reyting oralig`idagi o`yinchilar va shaxmat
                            bo`yicha tayyor o`quv dasturini qidirayotgan o`qituvchilar uchun mo`ljallangan
                            muallif o`quvchini nomutanosiblik asoslari orqali olib boradigan, barcha
                            nomutanosibliklarning har bir tafsiloti o`zlashtirilishini ta`minlaydigan
                            aqlni kengaytiruvchi sayohatni baham ko`radi. va shaxmat o`yinchisini/sevuvchisini
                            har doim xohlagan, lekin erisha olishiga ishonmagan narsasi bilan qoldiradi: usta
                            darajasidagi pozitsion poydevor.</p>
                    </div>
                </div>
            </div>
            <div className={"flex flex-col gap-6"}>
                <Banner/>
                <LibrarySection/>
            </div>
        </main>
    )
}