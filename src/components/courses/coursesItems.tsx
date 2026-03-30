'use client';

import Image from "next/image";
import {useState} from "react";

export default function CoursesItems() {
    const [heart, setHeart] = useState(false);

    return (
        <main className={"flex flex-col w-full hover:cursor-pointer"}>
            <div className={"flex w-169 h-47.25 gap-5 bg-[#1A1D1F] rounded-lg p-6 "}>
                <div className={"flex w-66.25 h-35.25 rounded-md bg-[#13181C] border border-white/15 overflow-hidden"}>
                    <Image className={""} src={"/image/mulder.png"} alt={"img"} width={190} height={146} />
                    <div className={"absolute flex justify-center items-center mt-2 ml-2 w-13.25 h-7.25 bg-[#0B141899] rounded-md border border-white/30 backdrop-blur-sm"}>
                        <Image src={"svg/star_yellow.svg"} alt={"star"} width={16} height={16}/>
                        <p className={"font-medium text-[14px] text-[#F7F9FA]"}>5.0</p>
                    </div>
                    <div className={"absolute flex justify-center items-center mt-27.5 ml-3 w-8 h-5.5 bg-[#1A1D1F] rounded-sm border border-[#696969] font-sans font-medium text-[12px] text-[#FDFAD9]"}>O‘z</div>
                </div>
                <div className={"flex w-full flex-col justify-between"}>
                    <div>
                        <p className={"font-bold text-[20px] text-[#F7F9FA]"}>Shaxmat donalari bilan tanishuv</p>
                        <p className={"font-sans font-normal text-[14px] text-[#F7F9FA99]"}>Robert Fisher</p>
                    </div>
                    <div>
                        <p className={"font-sans font-normal text-[12px] text-[#F7F9FAA3] line-through decoration-red-600"}>205 000.00 uzs</p>
                        <p className={"font-bold text-[16px] text-[#82CC27]"}>96 000.00 uzs</p>
                    </div>
                    <div className={"flex w-full justify-between"}>
                        <div className={"flex items-center"}>
                            <Image className={"mr-1"} src="/svg/shaxmatdona.svg" alt="piyoda" width={24} height={24}/>
                            <p className={"font-normal text-[14px] text-[#F7F9FA99]"}>Boshlang‘ich</p>
                            <div className={"w-px h-5 bg-[#3D4549] mx-3"}></div>
                            <Image className={"mr-1"} src="/svg/student.svg" alt="student" width={24} height={24}/>
                            <p className={"font-normal text-[14px] text-[#F7F9FA99]"}>5 ta bo‘lim</p>
                            <div className={"w-px h-5 bg-[#3D4549] mx-3"}></div>
                            <Image className={"mr-1"} src="/svg/grid.svg" alt="grid" width={24} height={24}/>
                            <p className={"font-normal text-[14px] text-[#F7F9FA99]"}>Strategiya</p>
                        </div>
                        <Image onClick={() => setHeart(!heart)} className={"hover:cursor-pointer"} src={heart ? "/svg/red-heart.svg" : "/svg/heart-outline.svg"} alt={"svg"} width={24} height={24}/>
                    </div>
                </div>
            </div>
        </main>
    )
}