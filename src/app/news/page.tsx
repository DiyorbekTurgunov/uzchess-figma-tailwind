import Link from "next/link";

export default function NewsPage () {
    return(
        <main>
            <Link href="/news"><h1 className="text-white">News</h1></Link>
        </main>
    )
}