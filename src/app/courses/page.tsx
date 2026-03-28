'use client';

import Filters from "@/components/courses/filters";
import CoursesItems from "@/components/courses/coursesItems";
import CoursesSearch from "@/components/courses/coursesSearch";
import Banner from "@/components/main/banner";
import Donat from "@/components/main/donat";

export default function CoursesPage () {
    return(
        <main className={"flex gap-6 mt-6 px-8"}>
            <div className={"flex flex-col"}>
                <Filters/>
            </div>

            <div className={"flex flex-col items-center gap-6"}>
                <CoursesSearch/>
                <CoursesItems/>
                <CoursesItems/>
                <CoursesItems/>
                <CoursesItems/>
                <div className={"flex justify-center items-center w-32.75 h-10 bg-[#202020] rounded-lg hover:cursor-pointer"}>Ko‘proq</div>
            </div>

            <div className={"flex flex-col gap-6"}>
                <Banner/>
                <Donat/>
            </div>
        </main>
    )
}