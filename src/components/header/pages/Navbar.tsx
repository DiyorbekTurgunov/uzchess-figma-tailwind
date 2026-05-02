import { usePathname } from "next/navigation"
import { NavItem } from "./navItem"

const destination = [
    {title: "Asosiy", url: "/"},
    {title: "Yangiliklar", url: "/news"},
    {title: "Kurslar", url: "/courses"},
    {title: "Kutubxona", url: "/library"},
    {title: "Bog'lanish", url: "/contact"},

]

export const NavBar = () => {
    const pathname = usePathname();
    return(
        <nav>
            <ul className={"flex shrink flex-row gap-4 md:gap-6 xl:gap-10"}>
                {destination.map((dest) => {
                    const isActive = pathname === dest.url;
                    return <NavItem key={dest.url} isActive = {isActive} {...dest}/>
                })}
            </ul>
        </nav>
    )
}
