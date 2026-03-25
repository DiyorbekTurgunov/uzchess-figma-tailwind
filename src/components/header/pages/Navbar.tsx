"use client";
import {usePathname} from "next/navigation";
import {NavItem} from "@/components/header/pages/navItem";

const destinations = [
    {title: 'Asosiy', url: '/'},
    {title: 'Yangiliklar', url: '/news'},
    {title: 'Kurslar', url: '/courses'},
    {title: 'Kutubxona', url: '/library'},
    {title: 'Boglanish', url: '/contact'},
]

export const Navbar = () => {
    const pathname = usePathname();
    return (
        <nav>
            <ul className={"flex flex-row gap-7 text-[#F7F9FA]"}>
                {destinations.map((dest) => {
                    const isActive = pathname === dest.url;
                    return <NavItem key={dest.url} isActive={isActive} {...dest}/>
                })}
            </ul>
        </nav>
    );
};