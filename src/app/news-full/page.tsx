'use client';

import NewsFull from "@/components/news/newsFull";
import {Breadcrumbs} from "@/components/Breadcrumbs/Breadcrumbs";

export default function NewsFullPage() {
    return (
        <main className="flex flex-col">
            <Breadcrumbs items={[
                {label: "Yangiliklar", link: "/news"},
                {label: "title", link: "/news-full"}
            ]}/>
            <NewsFull/>
        </main>
    )
}