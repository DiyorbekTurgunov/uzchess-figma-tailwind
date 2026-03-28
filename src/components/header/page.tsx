"use client"
import Logo from "@/components/header/navbar/logo";
import Profile from "@/components/header/rightside/r-side";
import {NavBar} from "@/components/header/pages/Navbar";

export default function Header() {
    return (
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mx-8 bg-[#1A1D1F] rounded-2xl px-5 py-4">
            <Logo/>
            <NavBar/>
            <Profile/>
        </div>
    )
};
