'use client';
import Image from "next/image";
import DropdownLanguage from "@/components/courses/filters/filter-language";
import DropdownLevel from "@/components/courses/filters/filter-level";
import DropdownCategories from "@/components/courses/filters/filter-categories";
import {useState} from "react";

export default function CoursesFilters() {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return (
        <main className="flex flex-col gap-6">
            <div className={"w-83.5 h-122.25 bg-[#1A1D1F] rounded-lg border border-[#232627] p-5"}>
                <div className={"flex justify-between mb-4"}>
                    <p className={"font-medium text-[18px] text-[#FCFCFC]"}>Filter</p>
                    <p className={"font-normal text-[16px] text-[#1C92E0]"}>Tozalash</p>
                </div>
                <div className={"flex flex-col w-71.5 h-100.25 gap-6"}>
                    <div className={"flex flex-col h-20.5 gap-4"}>
                        <p className={"font-medium text-[12px] text-white/65"}>DARAJANI TANLANG:</p>
                        <DropdownLevel/>
                    </div>
                    <div className={"flex flex-col h-20.5 gap-4"}>
                        <p className={"font-medium text-[12px] text-white/65"}>KATEGORIYA:</p>
                        <DropdownCategories/>
                    </div>
                    <div className={"flex flex-col h-20.5 gap-4"}>
                        <p className={"font-medium text-[12px] text-white/65"}>DARSLIK TILI:</p>
                        <DropdownLanguage/>
                    </div>
                    <div className={"flex flex-col h-full gap-4"}>
                        <div>
                            <p className={"font-medium text-[12px] text-white/65"}>REYTING:</p>
                        </div>
                        <div className="flex justify-between items-center px-4 h-13.5 bg-[#15181A] rounded-lg border border-[#232627]">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <img
                                    key={star}
                                    src={
                                        star <= (hover || rating)
                                            ? "/svg/star-yellow-filter.svg"
                                            : "/svg/star-black-filter.svg"
                                    }
                                    alt="star"
                                    width={40}
                                    height={40}
                                    className="cursor-pointer transition"
                                    onClick={() => setRating(star)}
                                    onMouseEnter={() => setHover(star)}
                                    onMouseLeave={() => setHover(0)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}