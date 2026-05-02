import Link from "next/link";

interface Props {
    title: string;
    url: string;
    isActive: boolean;
}

export const NavItem = ({title, url, isActive}: Props) => {
    return(
        <li className={"relative py-2"}>
            <Link href={url} className="hover:text-[#1C92E0] transition-colors duration-200">
                {title}
                {isActive && <div className="absolute h-0.5 bg-[#1C92E0] w-full "></div>}
            </Link>
        </li>
    )
}
