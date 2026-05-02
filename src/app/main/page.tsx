'use client';

import Live from "@/components/main/live";
import Rating from "@/components/main/reyting";
import Sections from "@/components/main/sections";
import DonatSection from "@/components/main/donat-section";
import Banner from "@/components/main/banner";
import Courses from "@/components/main/courses";
import LibrarySection from "@/components/main/library-section";
import CompGame from "@/components/main/completed-games";
import ChessBanner from "@/components/main/chess-banner";
import News from "@/components/main/news";

export default function Main() {
    return (
        <main className="flex flex-col">
            <div className="flex flex-wrap justify-center gap-6">
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
                    <DonatSection/>
                    <Banner/>
                    <Courses/>
                    <LibrarySection/>
                </div>
            </div>
        </main>
    )
}