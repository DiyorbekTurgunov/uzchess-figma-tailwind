'use client';

import Image from "next/image";
import Link from "next/link";
import { News } from "@/components/types/news";

interface Props {
    news: News;
}

export default function NewsItem({ news }: Props) {
    return (
        <div className="flex flex-col w-81.5 h-62.75 rounded-lg p-3 bg-[#1A1D1F] hover:cursor-pointer hover:scale-105 transition-all duration-150 ease-out active:scale-104">
            <Image
                src={news.image}
                alt={news.title}
                width={302}
                height={113}
                className="flex shrink-0 w-75.5 h-28.25 rounded-t-sm object-cover"
            />
            <div className="flex flex-col h-full justify-between">
                <p className="text-[#F7F9FA66]">{news.date}</p>
                <Link href="/news-full">
                    <p className="font-medium text-[14px] text-[#F7F9FA] cursor-pointer hover:text-[#1C92E0] transition line-clamp-2">
                        {news.title}
                    </p>
                </Link>
                <p className="font-medium text-[14px] text-[#9DA1A3] line-clamp-2">
                    {news.content}
                </p>
            </div>
        </div>
    );
}
