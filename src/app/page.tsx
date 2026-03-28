import Link from "next/link";
import Main from "@/app/main/page";
import Editor from "@/components/news/editor/Editor";
import BookAbout from "@/components/library/pages/book-about";

export default function Home() {
    return (
        <main className="mx-8 pt-6 text-white">
            <Link href="/"><Main/></Link>
            {/*<Editor/>*/}
        </main>
    );
}
