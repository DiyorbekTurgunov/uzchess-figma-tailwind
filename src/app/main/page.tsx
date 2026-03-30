'use client';

import Live from "@/components/main/live";
import Rating from "@/components/main/reyting";
import Sections from "@/components/main/sections";
import Donat from "@/components/main/donat";
import Banner from "@/components/main/banner";
import Courses from "@/components/main/courses";
import Library from "@/components/main/library";
import CompGame from "@/components/main/completed-games";
import ChessBanner from "@/components/main/chess-banner";
import News from "@/components/main/news";
import {Breadcrumbs} from "@/components/Breadcrumbs/Breadcrumbs";

export default function Main() {
    return (
        <main className="flex flex-col">
            <Breadcrumbs/>
            <div className="flex justify-center gap-6">
                <div className="flex flex-col gap-6">
                    <Live/>
                    <Rating/>
                </div>
                <div className="flex flex-col gap-6">
                    <Sections/>
                    <CompGame/>
                    <ChessBanner/>
                    <News/>
                </div>
                <div className="flex flex-col gap-6">
                    <Donat/>
                    <Banner/>
                    <Courses/>
                    <Library/>
                </div>
            </div>
        </main>
    )
}