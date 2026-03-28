import LibrarySection from "@/components/library/library-section";
import CoursesSearch from "@/components/courses/coursesSearch";
import Banner from "@/components/main/banner";
import LibBanner from "@/components/library/lib_banner";
import LibraryFilters from "@/components/library/library-filter";
import LibraryItem from "@/components/library/libraryItem";
import BookAbout from "@/components/library/pages/book-about";

export default function LibraryPage () {
    return (
        <main className="flex justify-center px-8 mt-6 gap-6">
            <div className={"flex flex-col gap-6 "}>
                <LibrarySection/>
                <LibraryFilters/>
            </div>
            <div className={"flex flex-col gap-6 items-center gap-6"}>
                <CoursesSearch/>
                <LibraryItem/>
                <LibraryItem/>
                <LibraryItem/>
                <LibraryItem/>
                <LibraryItem/>
                <div className={"flex justify-center items-center w-36 h-10 bg-[#F7F9FA1A] border border-[#F7F9FA4D] rounded-lg"}>Kop`roq</div>
                {/*<BookAbout/>*/}
            </div>
            <div className={"flex flex-col gap-6"}>
                <Banner/>
                <LibBanner/>
            </div>
        </main>
    )
}