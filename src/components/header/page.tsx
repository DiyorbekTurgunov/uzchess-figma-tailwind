"use client"
import Logo from "@/components/header/navbar/logo";
import Profile from "@/components/header/rightside/r-side";
import {NavBar} from "@/components/header/pages/Navbar";

export default function Header() {
    return (
        <div className="flex flex-col sm:flex-col md:flex-col md:justify-between md:shrink xl:flex-row items-center mx-6 bg-[#1A1D1F] rounded-xl px-5 py-4 mt-5 gap-3">
            <Logo/>

            <NavBar/>

            <div className="shrink-0">
                <Profile/>
            </div>
        </div>
    )
};
