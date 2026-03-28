"use client";

import Image from "next/image";
import { useState } from "react";

export default function DropdownCategories() {
    const [open, setOpen] = useState(false);
    const [rotated, setRotated] = useState(false);
    const [language, setLanguage] = useState("Barchasi");
    const languages = ["Qoidalar", "Strategiya", "Himoyalanish", "Hujum qilish", "Barchasi"];

    const handleSelect = (lang: string) => {
        setLanguage(lang);
        setOpen(false);
        setRotated(false);
    };
    return (
        <div className="flex relative justify-center items-center w-71.5 h-13.5 bg-[#15181A] rounded-lg border border-[#232627]">
            <button
                onClick={() => {
                    setOpen(!open);
                    setRotated(!rotated);
                }}
                className="w-full justify-between px-5 text-white flex gap-1 items-center rounded hover:cursor-pointer"
            >
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
                <div
                    className="flex flex-col z-10 absolute top-10 left-0 w-full bg-[#1A1D1F] border border-[#232B2F] rounded shadow-[16px]">
                    {languages.map((lang) => (
                        <div
                            key={lang}
                            className="flex z-30 h-9 pl-4 items-center text-white hover:bg-gray-800 cursor-pointer"
                            onClick={() => handleSelect(lang)}
                        >
                            {lang}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}