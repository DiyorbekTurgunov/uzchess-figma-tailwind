'use client';

import Banner from "@/components/main/banner";
import Library from "@/components/main/library";
import Search from "@/components/news/search";
import NewsItem from "@/components/news/newItem";
import {Breadcrumbs} from "@/components/Breadcrumbs/Breadcrumbs";

export default function NewsPage () {
    return(
        <main className="flex flex-col">
            <Breadcrumbs items={[{label: 'Yangiliklar', link: '/news'}]}/>
            <div className="flex justify-center gap-6 px-8 ">
                <div className="flex flex-col">
                    <Search/>
                    <div className="self-center grid justify-center mt-7 grid-cols-1
                    md:grid-cols-2 lg:grid-cols-[repeat(3,20.375rem)] gap-6">
                        <NewsItem/>
                        <NewsItem/>
                        <NewsItem/>
                        <NewsItem/>
                        <NewsItem/>
                        <NewsItem/>
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <Banner/>
                    <Library/>
                </div>
            </div>
        </main>
    )
}