import Link from "next/link";

interface Props {
    title: string;
    url: string;
    isActive: boolean;
}

export const NavItem = ({title, url, isActive}: Props) => {
    return(
        <li className={"relative py-2"}>
            <Link href={url}>
                {title}
                {isActive && <div className="absolute h-0.5 bg-[#1C92E0] w-full "></div>}
            </Link>
        </li>
    )
}
