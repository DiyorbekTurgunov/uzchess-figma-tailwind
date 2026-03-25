"use client"
import Logo from "@/components/header/navbar/logo";
import Profile from "@/components/header/rightside/r-side";
import {Navbar} from "@/components/header/pages/Navbar";

export default function Header() {
    return (
        <div className="lg:flex  mx-8 lg:justify-between md:inline  items-center  h-19 bg-[#1A1D1F] rounded-2xl px-5">
            <Logo/>
            <Navbar/>
            <Profile/>
        </div>
    )
};