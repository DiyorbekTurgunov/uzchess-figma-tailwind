
import {Breadcrumbs} from "@/components/Breadcrumbs/Breadcrumbs";
import Banner from "@/components/main/banner";
import LibBanner from "@/components/library/lib_banner";
import {CallCenter} from "@/components/contact/call-center";
import {ContactMap} from "@/components/contact/contact-map";

export default function ContactPage () {
    return (
        <main className="flex flex-col">
            <Breadcrumbs items={[{label: "Bog'lanish", link: "/contact"}]}/>
            <div className="flex gap-[34px] justify-center">
                <div className="flex flex-col gap-6">
                    <CallCenter/>
                    <ContactMap/>
                </div>
                <div className="flex flex-col gap-6">
                    <Banner/>
                    <LibBanner/>
                </div>
            </div>
        </main>
    )
}