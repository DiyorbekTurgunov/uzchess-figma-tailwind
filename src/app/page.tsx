import Main from "@/app/main/page";
import {Breadcrumbs} from "@/components/Breadcrumbs/Breadcrumbs";

export default function Home() {
    return (
        <main className="flex flex-col text-white">
            <Breadcrumbs/>
            <Main/>
        </main>
    );
}
