'use client';

import Live from "@/components/main/live";
import Rating from "@/components/main/reyting";
import Sections from "@/components/main/sections";

export default function Main() {
    return (
        <main className="flex gap-6">
            <div className="flex flex-col gap-6">
                <Live/>
                <Rating/>
            </div>
            <div className="flex flex-col">
                <Sections/>
            </div>

        </main>
    )
}