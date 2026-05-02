'use client';

import {useState} from "react";
import Image from "next/image";
import {contactData} from "@/components/contact/data/contactData";

export function CallCenter() {

    const [phone, setPhone] = useState("");
    const [open, setOpen] = useState(false);

    return (
        <div className="flex flex-col w-[1024px] h-[457px] p-6 gap-5 rounded-xl bg-[#1A1D1F] border border-[#1F272A]">
            <p className="font-bold text-[28px] text-[#F7F9FA]">Bog‘lanish</p>
            <div className="flex">
                <div className="flex flex-col p-5">
                    <div className="flex gap-5">
                        <div className="flex flex-col gap-2">
                            <p className="font-weight text-[15px] text-[#9DA1A3]">Siz bilan bog‘lanish</p>
                            <input
                                maxLength={32}
                                type="text"
                                placeholder="Ism familiyangizni kiriting"
                                className="w-[296px] h-[44px] px-4 rounded-xl bg-[#13181C] border border-[#36393B] outline-none capitalize"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="font-weight text-[15px] text-[#9DA1A3]">Telefon raqamingiz</p>
                            <div
                                className="flex w-[296px] h-[44px] rounded-xl bg-[#13181C] border border-[#36393B] overflow-hidden">
                                <div className="flex justify-center items-center w-[66px] h-[44px] bg-[#1A1D1F]">+998
                                </div>
                                <input type="phone" value={phone}
                                       onChange={(e) => {
                                           const v = e.target.value.replace(/\D/g, "").slice(0, 9);
                                           const part1 = v.slice(0, 2);
                                           const part2 = v.slice(2, 5);
                                           const part3 = v.slice(5, 7);
                                           const part4 = v.slice(7, 9);

                                           setPhone([part1, part2, part3, part4].filter(Boolean).join(" "));
                                       }}
                                       className="outline-none p-2 text-[16px]" placeholder="00 000 00 00"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 mt-[19px] mb-[24px]">
                        <p className="font-weight text-[14px] text-[#F7F9FA]">Shikoyat</p>
                        <textarea placeholder="Matnni yozing..."
                                  className="w-[612px] h-[128px] p-4 bg-[#13181C] rounded-lg border border-[#454F54] outline-none font-weight text-[14px] text-[#F7F9FA]"/>
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" className="w-5 h-5 cursor-pointer mr-3"/>
                        <p className="font-normal text-[16px] text-[#F7F9FA]">Foydalanish <span
                            className="text-[#1C92E0]">shartlari</span> va <span
                            className="text-[#1C92E0]">qoidalarini</span> <br/> qabul qilaman</p>
                        <button onClick={() => setOpen(!open)}
                                className="flex justify-center items-center w-[180px] h-[44px] bg-[#1C92E0]/90 rounded-xl text-[18px] ml-[153px] cursor-pointer active:bg-[#1C92E0]">Yuborish
                        </button>
                        <div className={`fixed inset-0 z-50 flex items-center justify-center
                             ${open ? "pointer-events-auto" : "pointer-events-none"}`}>

                            <div className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ease-out
                                ${open ? "opacity-100" : "opacity-0"}`}/>

                            <div className={`flex gap-3 relative z-10 transition-all duration-300 ease-out
                                ${open
                                ? "translate-y-0 opacity-100"
                                : "translate-y-full opacity-0"
                            }`}>

                                <div
                                    className="flex flex-col items-center w-[440px] h-[283px] bg-[#1A1D1F] rounded-xl border border-[#1F272A]">

                                    <div className="flex flex-col justify-center h-[120px] overflow-hidden">
                                        <Image src="/svg/checkmark-circle-sharp.svg" alt="svg" width={150}
                                               height={150}/>
                                    </div>
                                    <p className="font-bold text-[24px] text-[#F7F9FA]">Muvaffaqiyatli yuborildi</p>
                                    <p className="font-normal text-[16px] text-[#9DA1A3] mb-9">Shikoyatingiz
                                        muvoffaqiyatli yuborildi</p>
                                    <button
                                        className="w-[392px] h-[44px] bg-[#1C92E0]/90 active:bg-[#1C92E0] transition-all duration-75 ease-out rounded-lg cursor-pointer">
                                        Kursni ko‘rish
                                    </button>
                                </div>
                                <button className="w-10 h-10 bg-[#1A1D1F] rounded-lg text-[28px] cursor-pointer"
                                        onClick={() => setOpen(false)}>x
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    {contactData.map((item) => (
                        <div key={item.id} className="flex items-start p-3 h-[72px] gap-3 ">
                            <Image src={item.image} alt="svg" width={28} height={28}/>
                            <div className="flex flex-col">
                                <p className="font-weight text-[14px] text-[#9DA1A3]">{item.desc}</p>
                                <p className="font-weight text-[16px] text-[#F7F9FA]">{item.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}