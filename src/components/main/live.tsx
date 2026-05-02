'use client';

import Image from "next/image";

export default function Live() {
    return (
        <main className="w-81.5 h-77.25 rounded-lg bg-[#272B30]">
            <div className="flex justify-between items-center p-4 h-[58px]">
                <p className="font-medium text-[20px] text-[#FCFCFC] ">Kun o`yini</p>
                <div className="flex items-center gap-1">
                    <p className="text-[#9DA1A3]">Ko`rish</p>
                    <Image className="rotate-270" src="/svg/chevron.svg" alt="svg" width={20} height={20} />
                </div>
            </div>
            <div className="relative flex flex-col w-[326px] h-[183px] overflow-hidden">
                <Image className="object-cover" src="/image/live_png.png" alt="png" width={326} height={183}/>
                <div className="absolute w-full h-full bg-[#091013]/64"></div>
                <div className="absolute flex justify-between items-center px-4 bottom-[-1] left-0 w-full h-[44px] border-t border-[#FFFFFF33] backdrop-blur-sm bg-black/20">
                    <p>5:30</p>
                    <Image src="/svg/bullet.svg" alt="svg" width={64} height={20}/>
                </div>
            </div>
            <div className="flex mt-3 px-4 justify-between">
                <div className="flex items-center gap-2">
                    <div className="flex justify-center items-center w-[20px] h-[36px] bg-[#82CC27] rounded-[2px]">
                        <Image src="/svg/like-svg.svg" alt="svg" width={11} height={10}/>
                    </div>
                    <h1>Abdusattorov<br/> Nodirbek</h1>
                </div>
                <Image src="/svg/knifes.svg" alt="svg" width={32} height={32}/>
                <div className="flex justify-end items-center w-[123px] gap-2">
                    <h1>magnus<br/> carlsen</h1>
                    <Image src="/svg/dislike_live.svg" alt="svg" width={24} height={40}/>
                </div>
            </div>
        </main>
    )
}