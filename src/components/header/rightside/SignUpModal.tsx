'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

interface Props {
    onClose?: () => void;
}

export default function SignUpModal({ onClose }: Props) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const t = requestAnimationFrame(() => setVisible(true));
        return () => cancelAnimationFrame(t);
    }, []);

    async function handleSignIn() {
        const response2 = await axios.post("http://localhost:3000/auth/sign-in", {})
    }
    const [tab, setTab] = useState<'phone' | 'email'>('phone');
    const [value, setValue] = useState("");
    
    return (
        <div
            className={`flex flex-col gap-[52px] fixed inset-0 z-50 flex items-center justify-center transition-all duration-700 ease-in-out
                ${visible ? "bg-[#0C0E0F]/70" : "bg-[#0C0E0F]/0"}`}
            onClick={onClose}
        >
            <Image src={"/svg/uzchess_footer.svg"} alt={"svg"} width={169} height={42}
                className={`transition-all duration-700 ease-in-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}`}
            />
            <div className="flex gap-3 items-start">
                <div
                    className={`relative flex rounded-2xl overflow-hidden w-[910px] transition-all duration-700 ease-in-out
                        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex flex-col gap-5 bg-[#1A1D1F] w-[467px] p-8">
                        <p className="font-bold text-[24px] text-white">Royxatdan otish</p>
                        <div className="flex bg-[#13181C] rounded-lg p-1 gap-1">
                            <button
                                onClick={() => setTab('phone')}
                                className={`flex-1 h-9 rounded-md text-sm font-medium transition cursor-pointer ${tab === 'phone' ? 'bg-[#2C2F31] text-white' : 'text-white/50'}`}
                            >
                                Telefon raqam orqali
                            </button>
                            <button
                                onClick={() => setTab('email')}
                                className={`flex-1 h-9 rounded-md text-sm font-medium transition cursor-pointer ${tab === 'email' ? 'bg-[#2C2F31] text-white' : 'text-white/50'}`}
                            >
                                E-mail orqali
                            </button>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm text-white/70">Ism-sharifingiz</label>
                                <input
                                    type="text"
                                    maxLength={32}
                                    placeholder="Ism-sharifingizni kiriting"
                                    className="w-full h-12 bg-[#13181C] border border-[#2C2F31] rounded-lg px-4 outline-none text-white placeholder:text-white/30 text-[16px] capitalize"
                                />
                            </div>

                            {tab === 'phone' ? (
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-sm text-white/70">Telefon raqam</label>
                                    <div className="flex items-center w-full h-12 bg-[#13181C] border border-[#2C2F31] rounded-lg px-4 gap-2">
                                        <span className="text-white text-[16px]">+998</span>
                                        <div className="w-px h-5 bg-[#2C2F31]"></div>
                                        <input
                                            type="phone"
                                            value={value}
                                            onChange={(e) => {
                                                const  v = e.target.value.replace(/\D/g, "").slice(0, 9);
                                                const  part1 = v.slice(0, 2);
                                                const  part2 = v.slice(2, 5);
                                                const  part3 = v.slice(5, 7);
                                                const  part4 = v.slice(7, 9);

                                                setValue([part1, part2, part3, part4].filter(Boolean).join(" "));
                                            }}
                                            className="outline-none p-2 text-[16px]"
                                            placeholder="00 000 00 00"
                                        />
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-sm text-white/70">E-mail</label>
                                    <input
                                        type="email"
                                        placeholder="example@mail.com"
                                        className="w-full h-12 bg-[#13181C] border border-[#2C2F31] rounded-lg px-4 outline-none text-white placeholder:text-white/30 text-sm"
                                    />
                                </div>
                            )}
                        </div>
                        <p className="text-sm text-white/60 leading-snug">
                            Royxatdan otish tugmasini bosgach foydalanish{' '}
                            <Link onClick={onClose} href="/rules-use"><span className="text-[#1C92E0] cursor-pointer">shartlari va qoidalarini</span></Link> {' '}
                            qabul qilaman
                        </p>
                        <div className="flex justify-center items-center w-full h-12 bg-[#1C92E0] rounded-lg cursor-pointer hover:bg-[#1a84cc] transition">
                            <p className="font-medium text-base text-white">Royxatdan otish</p>
                        </div>
                        <div className="flex items-center justify-center gap-3">
                            <div className="flex-1 h-px bg-[#2C2F31]"></div>
                            <p className="text-white/50 text-sm">yoki</p>
                            <div className="flex-1 h-px bg-[#2C2F31]"></div>
                        </div>
                        <div className="flex justify-center items-center w-full h-12 bg-[#2C2F31] rounded-lg cursor-pointer hover:bg-[#3a3d40] transition">
                            <p className="font-medium text-base text-white">Kirish</p>
                        </div>
                    </div>
                    <div className="bg-[#1A1D1F]">
                        <Image
                            src="/image/auth-image.png"
                            alt="banner"
                            width={443}
                            height={597}
                        />
                    </div>
                </div>
                <button
                    onClick={onClose}
                    className="w-10 h-10 bg-[#1A1D1F] rounded-xl text-white/60 text-xl cursor-pointer"
                >
                    X
                </button>
            </div>
        </div>
    );
}
