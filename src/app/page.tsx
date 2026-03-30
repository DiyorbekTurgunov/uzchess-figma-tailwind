import Link from "next/link";
import Main from "@/app/main/page";
// import Editor from "@/components/news/editor/Editor";
import {Breadcrumbs} from "@/components/Breadcrumbs/Breadcrumbs";

export default function Home() {
    return (
        <main className="flex flex-col mx-8 pt-6 text-white">
            <Breadcrumbs/>
            {/*<Editor/>*/}
        </main>
    );
}
