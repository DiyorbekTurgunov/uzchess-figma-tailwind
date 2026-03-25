import Link from "next/link";

type props = {
    isActive: boolean;
    title: string;
    url: string;
}

export const NavItem = ({title, url, isActive}: props ) => {

    return (
        <li className={"relative py-2"}>
            <Link href={url}>
                {title}
                {isActive && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-(--blue)"></div>}
            </Link>
        </li>
    );
};