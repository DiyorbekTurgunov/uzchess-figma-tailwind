import LibrarySection from "@/components/library/library-section";
import CoursesSearch from "@/components/courses/coursesSearch";
import Banner from "@/components/main/banner";
import LibBanner from "@/components/library/lib_banner";
import LibraryFilters from "@/components/library/library-filter";
import LibraryItem from "@/components/library/libraryItem";
import {Breadcrumbs} from "@/components/Breadcrumbs/Breadcrumbs";

export default function LibraryPage () {
    return (
        <main className="flex flex-col">
            <Breadcrumbs items={[{label: 'Kutubxona', link: '/library'}]}/>
            <div className="flex flex-col">
                <div className="flex justify-center px-8 gap-6">
                    <div className={"flex flex-col gap-6 "}>
                        <LibrarySection/>
                        <LibraryFilters/>
                    </div>
                    <div className={"flex flex-col gap-6 items-center"}>
                        <CoursesSearch/>
                        <LibraryItem/>
                        <div className={"flex justify-center items-center w-36 h-10 bg-[#F7F9FA1A] border border-[#F7F9FA4D] rounded-lg hover:cursor-pointer"}>Kop`roq</div>
                    </div>
                    <div className={"flex flex-col gap-6"}>
                        <Banner/>
                        <LibBanner/>
                    </div>
                </div>
            </div>
        </main>
    )
}