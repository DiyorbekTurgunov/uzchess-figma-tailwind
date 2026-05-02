import BookAbout from "@/components/library/pages/book-about";
import {Breadcrumbs} from "@/components/Breadcrumbs/Breadcrumbs";

export default function BooksPage() {
    return (
        <main>
            <Breadcrumbs items={[
                {label: "Kutubxona", link: "/library"},
                {label: "library shaxmat", link: "/book-about"}
            ]}/>

            <BookAbout/>
        </main>
    )
}