'use client';

import Filters from "@/components/courses/filter/course-filters";
import CoursesItems from "@/components/courses/coursesItems";
import CoursesSearch from "@/components/courses/coursesSearch";
import Banner from "@/components/main/banner";
import DonatSection from "@/components/main/donat-section";
import CourseSection from "@/components/courses/courseSection";
import {Breadcrumbs} from "@/components/Breadcrumbs/Breadcrumbs";

export default function CoursesPage () {
    return(
        <main className="flex flex-col">
            <Breadcrumbs items={[{label: 'Kurslar', link: '/courses'}]}/>
            <div className={"flex justify-center gap-6 px-8"}>
                <div className={"flex flex-col gap-6"}>
                    <CourseSection/>
                    <Filters/>
                </div>

                <div className={"flex flex-col items-center gap-6"}>
                    <CoursesSearch/>
                    <CoursesItems/>
                    <CoursesItems/>
                    <CoursesItems/>
                    <CoursesItems/>
                    <div className={"flex justify-center items-center w-36 h-10 bg-[#F7F9FA1A] border border-[#F7F9FA4D] rounded-lg hover:cursor-pointer"}>Kop`roq</div>
                </div>

                <div className={"flex flex-col gap-6"}>
                    <Banner/>
                    <DonatSection/>
                </div>
            </div>
        </main>
    )
}