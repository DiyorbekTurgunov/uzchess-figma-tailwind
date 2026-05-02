

import Banner from "@/components/main/banner";
import LibrarySection from "@/components/main/library-section";
import NewsItem from "@/components/news/newItem";
import {Breadcrumbs} from "@/components/Breadcrumbs/Breadcrumbs";
import {getNews} from "@/components/lib/api/news";
import {News} from "@/components/types/news";

export default async function NewsPage () {
    const news = await getNews();

    return(
        <main className="flex flex-col">
            <Breadcrumbs items={[{label: 'Yangiliklar', link: '/news'}]}/>
            <div className="flex justify-center gap-8 px-8 ">
                <div className="flex flex-col items-center gap-6">
                    <div className="self-center grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(3,20.375rem)] gap-6">
                        {/*<NewsItem/>*/}
                        {news.map((newsItem: News) => <NewsItem key={newsItem.id} news={newsItem}/>)}
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