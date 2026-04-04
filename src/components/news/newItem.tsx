'use client';

import Image from "next/image";
import { NewsData } from "@/components/news/data/newsData";
import Link from "next/link";
import { useEffect, useState } from "react";

const escapeRegExp = (text: string) => {
    return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};

const highlightText = (text: string, value: string) => {
    if (!value) return text;

    const safeValue = escapeRegExp(value);
    const regex = new RegExp(`(${safeValue})`, "gi");

    return text.split(regex).map((part, i) =>
        part.toLowerCase() === value.toLowerCase()
            ? <mark key={i} className="bg-yellow-300 px-1 rounded">{part}</mark>
            : part
    );
};

export default function NewsItem() {
    const [search, setSearch] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(search);
        }, 300);

        return () => clearTimeout(timer);
    }, [search]);

    const filteredData = NewsData.filter(item =>
        item.title.toLowerCase().includes(debouncedSearch.toLowerCase())
    );

    return (
        <div>
            <div className="flex w-full justify-between">
                <p className='font-bold text-[32px] text-[#F7F9FA]'>Yangiliklar</p>

                <div className="flex items-center w-81.5 h-13 bg-[#15181A] border border-[#232627] rounded-lg px-4 gap-2">
                    <Image src="/svg/search.svg" alt="search" width={24} height={24} />

                    <input
                        type="text"
                        placeholder="Izlash"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="p-2 outline-none w-full h-7 font-medium"
                    />
                </div>
            </div>

            {search !== debouncedSearch && (
                <p className="font-bold text-[25] text-white mt-2 ml-115">Qidirilmoqda...</p>
            )}

            {filteredData.length === 0 && debouncedSearch && (
                <div className="flex flex-col items-center font-bold text-[28px] text-[#F7F9FA] mt-10">
                <Image src="/svg/notfound.svg" alt="svg" width={305} height={203} />
                Hech qanday ma’lumot topilmadi</div>
            )}

            <article className="self-center grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(3,20.375rem)] gap-6 mt-4">
                {filteredData.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col w-81.5 h-62.75 rounded-lg p-3 bg-[#1A1D1F] hover:cursor-pointer hover:scale-105 transition-all duration-150 ease-out active:scale-104"
                    >
                        <Image
                            src="/image/image1.svg"
                            alt="svg"
                            width={302}
                            height={113}
                            className="flex shrink-0 w-75.5 h-28.25 rounded-t-sm object-cover object-[0_-10px]"
                        />

                        <div className="flex flex-col h-full justify-between">
                            <p className="text-[#F7F9FA66]">{item.date}</p>

                            <Link href="/news-full">
                                <p className="font-medium text-[14px] text-[#F7F9FA] cursor-pointer hover:text-[#1C92E0] transition line-clamp-2">
                                    {highlightText(item.title, debouncedSearch)}
                                </p>
                            </Link>

                            <p className="font-medium text-[14px] text-[#9DA1A3] line-clamp-2">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </article>
        </div>
    );
}