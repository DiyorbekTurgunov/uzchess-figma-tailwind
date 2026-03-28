'use client';

import Image from 'next/image';

export default function Search() {
    return (
        <main className="flex w-full justify-between">
            <p className='font-bold text-[32px] text-[#F7F9FA]'>Yangiliklar</p>
            <div className="flex items-center w-81.5 h-13 bg-[#15181A] border border-[#232627] rounded-lg px-4 gap-2 ">
                <Image src="/svg/search.svg" alt="search" width={24} height={24}/>
                <input type="text" placeholder="Izlash" className="border border-none outline-none w-full h-7 font-medium"/>
            </div>
        </main>
    )
}