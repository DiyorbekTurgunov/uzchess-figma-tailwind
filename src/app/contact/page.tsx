import BookAbout from "@/components/library/pages/book-about";
import {Breadcrumbs} from "@/components/Breadcrumbs/Breadcrumbs";

export default function ContactPage () {
    return (
        <main>
            <Breadcrumbs items={[{label: "Bog'lanish", link: "/contact"}]}/>
            <BookAbout/>
        </main>
    )
}