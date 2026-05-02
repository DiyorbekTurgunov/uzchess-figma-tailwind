"use client";

import Image from "next/image"
import {useState} from "react";

export default function Logo () {
    const [open, setOpen] = useState(false);
    const [rotated, setRotated] = useState(false);
    const [language, setLanguage] = useState("O‘zbekcha");

    const languages = ["O‘zbekcha", "English", "Русский"];

    const handleSelect = (lang: string) => {
        setLanguage(lang);
        setOpen(false);
        setRotated(false);
    };
    return (
        <div className="flex shrink-0 items-center gap-5">
            <Image src="/svg/uzchess.svg" alt="logo" width={104} height={40} className={"mb-2"}/>
            <div className="flex shrink-0 w-px h-6 bg-[#3D4549]"></div>
            <div className="relative w-30 bg-[#1A1D1F] rounded-lg">
                <button
                    onClick={() => {
                        setOpen(!open);
                        setRotated(!rotated);
                    }}
                    className="w-full text-white flex gap-1 items-center rounded hover:cursor-pointer">
                    {language}
                    <span className="inline-block transition-transform duration-300 transform">
                      <Image
                          src="/svg/chevron.svg"
                          alt="chevron"
                          width={24}
                          height={24}
                          className={`${open ? "rotate-180" : "rotate-0"}`}
                      />
                    </span>
                </button>

                {open && (
                    <div className="flex flex-col z-10 absolute top-8 left-0 w-full bg-[#1A1D1F] border border-[#232B2F] rounded shadow-[16px]">
                        {languages.map((lang) => (
                            <div
                                key={lang}
                                className="flex z-30 h-11 pl-4 items-center text-white hover:bg-gray-800 cursor-pointer"
                                onClick={() => handleSelect(lang)}
                            >
                                {lang}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}