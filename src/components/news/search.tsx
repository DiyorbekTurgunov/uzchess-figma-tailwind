'use client';

import Image from 'next/image';
import {useState} from "react";

export default function Search() {
    const [search, setSearch] = useState("");

    const highlightText = (text: string, value: string) => {
        if (value == "") return text;

        const regex = new RegExp(`(${value})`, "gi");

        return text.split(regex).map((part, i) =>
            part.toLowerCase() === value.toLowerCase()
                ? <mark key={i}>{part}</mark>
                : part
        );
    };

    return (
        <main className="flex w-full justify-between">
            <p className='font-bold text-[32px] text-[#F7F9FA]'>Yangiliklar</p>
            <div className="flex items-center w-81.5 h-13 bg-[#15181A] border border-[#232627] rounded-lg px-4 gap-2 ">
                <Image src="/svg/search.svg" alt="search" width={24} height={24}/>
                <input
                    type="text"
                    placeholder="Izlash"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className=" p-2 outline-none w-full h-7 font-medium"
                />
            </div>
        </main>
    )
}