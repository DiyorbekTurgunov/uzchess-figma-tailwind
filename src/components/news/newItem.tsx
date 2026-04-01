// import { News } from "@/types/news";
import Image from "next/image";
import { NewsData } from "@/components/news/data/newsData";
import Link from "next/link";
// interface Props {
//     news: News
// }
export default function NewsItem() {
    return (
        <article className="self-center grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(3,20.375rem)] gap-6">
            {NewsData.map((item) => (
                <div key={item.id} className="flex flex-col w-81.5 h-62.75 rounded-lg p-3 bg-[#1A1D1F] hover:cursor-pointer hover:scale-105 transition-all duration-150 ease-out active:scale-104">
                    <Image src="/image/image1.svg" alt="svg" width={302} height={113}
                        className="flex shrink-0 w-75.5 h-28.25 rounded-t-sm object-cover object-[0_-10px] overflow-hidden"/>
                    <div className="flex flex-col h-full justify-between">
                        <p className="text-[#F7F9FA66]">{item.date}</p>
                        <Link href="/news-full">
                            <p className="font-medium text-[14px] text-[#F7F9FA] cursor-pointer hover:text-[#1C92E0] transition line-clamp-2">{item.title}</p>
                        </Link>
                        <p className="font-medium text-[14px] text-[#9DA1A3] line-clamp-2">{item.desc}</p>
                    </div>
                </div>
            ))}
        </article>
    )
}
