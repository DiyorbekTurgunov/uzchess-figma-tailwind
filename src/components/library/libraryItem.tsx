'use client';


import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {LibraryData} from "@/components/library/data/library-data";

export default function LibraryItem() {
    const [library, setLibrary] = useState(LibraryData);
    const libraryCart = (id: number) => {
        setLibrary((prev) =>
            prev.map((item) => item.id === id ? { ...item, isCart: !item.isCart } : item )
        )};

    const libraryLike = (id: number) => {
        setLibrary((prev) =>
            prev.map((item) => item.id === id ? { ...item, isLike: !item.isLike } : item )
        )};

    return (
        <div className="flex flex-col gap-5">
            {library.map((item) => (
            <div key={item.id} className="flex w-169 h-54.25 bg-[#1A1D1F] rounded-xl p-5 gap-4">
                <div className="flex overflow-hidden w-33 h-44.25 bg-[#13181C] rounded-sm border border-white/20">
                    <Image src={item.image} alt={"img"} width={132} height={177}/>
                    <div className={"absolute flex justify-center items-center gap-1 w-13.25 h-7.25 bg-[#0B141899] rounded-md border border-white/40 mt-1.25 ml-2 backdrop-blur-sm"}>
                        <Image src={"/svg/star_yellow.svg"} alt={"svg"} width={16} height={16}/>
                        <p className={"font-medium text-[14px] text-[#F7F9FA]"}>3.5</p>
                    </div>
                    <div className={"absolute flex justify-center items-center mt-36.5 ml-3 w-8 h-5.5 bg-[#1A1D1F] rounded-sm border border-[#696969]"}>
                        <p className={"font-medium text-[11px] text-[#FDFAD9]"}>{item.lang}</p>
                    </div>
                </div>
                <div className={"flex flex-col justify-between w-122"}>
                    <div className={"flex flex-col h-26.75 justify-between"}>
                        <Link href="/book-about">
                            <p className={"font-bold text-[18px] text-[#FFFFFF]"}>{item.title}</p>
                        </Link>
                        <div>
                            <p className={"font-normal text-[11px] text-white/50 line-through decoration-red-600"}>{item.oldPrice}</p>
                            <p className={"font-sans font-bold text-[15px] text-[#82CC27]"}>{item.newPrice}</p>
                        </div>
                        <div className={"flex items-center"}>
                            <Image className={"mr-1"} src={item.svg1} alt={"svg"} width={24} height={24}/>
                            <p className={"font-sans font-normal text-[14px] text-white/60"}>{item.desc1}</p>
                            <div className={"w-px h-5 bg-[#3D4549] mx-3"}></div>
                            <Image className={"mr-1"} src={item.svg2} alt={"svg"} width={24} height={24}/>
                            <p className={"font-sans font-normal text-[14px] text-white/60"}>{item.desc2}</p>
                            <div className={"w-px h-5 bg-[#3D4549] mx-3"}></div>
                            <Image className={"mr-1"} src={item.svg3} alt={"svg"} width={24} height={24}/>
                            <p className={"font-sans font-normal text-[14px] text-white/60"}>{item.author}</p>
                        </div>
                    </div>
                    <div className={"flex justify-between items-center"}>
                        <div onClick={() => libraryCart(item.id)}
                            className={`flex justify-center items-center w-49.5 h-10 rounded-lg gap-2.5 cursor-pointer transition ${item.isCart ? "bg-[#FFFFFF1A]" : "bg-[#1C92E0]"}`}>
                            <Image src={item.isCart ? "/svg/cart_add.svg" : "/svg/Savatcha.svg"} alt="icon" width={20} height={20}/>
                            <p className="font-medium text-[16px] text-white"> {item.isCart ? "Savatchada" : "Savatchaga"} </p>
                        </div>
                        <Image onClick={() => libraryLike(item.id)} className="hover:cursor-pointer" src={ item.isLike ? "/svg/red-heart.svg" : "/svg/heart-outline.svg"} alt="like" width={24} height={24}/>
                    </div>
                </div>
            </div>
            ))}
        </div>
    )
}