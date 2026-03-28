import { usePathname } from "next/navigation"
import { NavItem } from "./navItem"

const destination = [
    {title: "Asosiy", url: "/"},
    {title: "Yangiliklar", url: "/news"},
    {title: "Kurslar", url: "/courses"},
    {title: "Kutubxona", url: "/library"},
    {title: "Bog'lanish", url: "/contact-us"},
]

export const NavBar = () => {
    const pathname = usePathname();
    return(
        <nav>
            <ul className={"flex flex-row gap-4 sm:gap-10 "}>
                {destination.map((dest) => {
                    const isActive = pathname === dest.url;
                    return <NavItem key={dest.url} isActive = {isActive} {...dest}/>
                })}
            </ul>
        </nav>

    )
}
