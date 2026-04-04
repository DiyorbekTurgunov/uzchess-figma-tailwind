'use client';

import Image from "next/image";
import { useState } from "react";
import { CourseData } from "@/components/courses/data/courseData";

export default function CoursesItems() {

    const [courses, setCourses] = useState(CourseData);

    const toggleLike = (id: number) => {
        setCourses((prev) =>
            prev.map((item) => item.id === id ? { ...item, isLike: !item.isLike } : item )
        )};

    return (
        <main className="flex flex-col gap-5">
            {courses.map((item) => (
                <div key={item.id} className="flex flex-col w-full hover:cursor-pointer">
                    <div className="flex w-169 h-47.25 gap-5 bg-[#1A1D1F] rounded-lg p-6">
                        <div className="relative flex w-66.25 h-35.25 rounded-md bg-[#13181C] border border-white/15 overflow-hidden">
                            <Image src={item.image} alt="img" width={190} height={146} />
                            <div className="absolute flex justify-center items-center mt-2 ml-2 w-13.25 h-7.25 bg-[#0B141899] rounded-md border border-white/30 backdrop-blur-sm">
                                <Image src="/svg/star_yellow.svg" alt="star" width={16} height={16}/>
                                <p className="font-medium text-[14px] text-[#F7F9FA]">5.0</p>
                            </div>
                            <div className="absolute flex justify-center items-center mt-27.5 ml-3 w-8 h-5.5 bg-[#1A1D1F] rounded-sm border border-[#696969] font-sans font-medium text-[12px] text-[#FDFAD9]">
                                {item.lang}
                            </div>
                        </div>
                        <div className="flex w-full flex-col justify-between">
                            <div>
                                <p className="font-bold text-[20px] text-[#F7F9FA]">{item.title}</p>
                                <p className="font-sans text-[14px] text-[#F7F9FA99]">{item.author}</p>
                            </div>
                            <div>
                                <p className="text-[12px] text-[#F7F9FAA3] line-through decoration-red-600">
                                    {item.oldPrice}
                                </p>
                                <p className="font-bold text-[16px] text-[#82CC27]">
                                    {item.newPrice}
                                </p>
                            </div>
                            <div className="flex w-full justify-between">
                                <div className="flex items-center">
                                    <Image className="mr-1" src={item.svg1} alt="piyoda" width={24} height={24}/>
                                    <p className="text-[14px] text-[#F7F9FA99]">{item.desc1}</p>
                                    <div className="w-px h-5 bg-[#3D4549] mx-3"></div>
                                    <Image className="mr-1" src={item.svg2} alt="student" width={24} height={24}/>
                                    <p className="text-[14px] text-[#F7F9FA99]">{item.desc2}</p>
                                    <div className="w-px h-5 bg-[#3D4549] mx-3"></div>
                                    <Image className="mr-1" src={item.svg3} alt="grid" width={24} height={24}/>
                                    <p className="text-[14px] text-[#F7F9FA99]">{item.desc3}</p>
                                </div>
                                <Image
                                    onClick={() => toggleLike(item.id)}
                                    className="hover:cursor-pointer"
                                    src={
                                        item.isLike
                                            ? "/svg/red-heart.svg"
                                            : "/svg/heart-outline.svg"
                                    }
                                    alt="like"
                                    width={24}
                                    height={24}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </main>
    );
}