import Link from "next/link";
import Main from "@/app/main/page";
import {Breadcrumbs} from "@/components/Breadcrumbs/Breadcrumbs";

export default function Home() {
    return (
        <main className="flex flex-col mx-8 text-white">
            <Breadcrumbs/>
            <Link href="/"><Main/></Link>
        </main>
    );
}
