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
                {isActive && <div className="absolute bottom-b border-2 bg-blue w-full h-0.5 "></div>}
            </Link>
        </li>
    )
}
