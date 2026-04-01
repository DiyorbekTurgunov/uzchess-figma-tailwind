'use client';

import Banner from "@/components/main/banner";
import LibrarySection from "@/components/main/library-section";
import Search from "@/components/news/search";
import NewsItem from "@/components/news/newItem";
import {Breadcrumbs} from "@/components/Breadcrumbs/Breadcrumbs";

export default function NewsPage () {
    return(
        <main className="flex flex-col">
            <Breadcrumbs items={[{label: 'Yangiliklar', link: '/news'}]}/>
            <div className="flex justify-center gap-8 px-8 ">
                <div className="flex flex-col items-center gap-6">
                    <Search/>
                    <div>
                        <NewsItem/>
                    </div>
                    <div className={"flex justify-center items-center w-36 h-10 bg-[#F7F9FA1A] border border-[#F7F9FA4D] rounded-lg hover:cursor-pointer"}>Kop`roq</div>
                </div>
                <div className="flex flex-col gap-6">
                    <Banner/>
                    <LibrarySection/>
                </div>
            </div>
        </main>
    )
}