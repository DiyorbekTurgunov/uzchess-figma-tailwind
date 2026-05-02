'use client';

import RulesUse from "@/components/main/rules-use";
import {Breadcrumbs} from "@/components/Breadcrumbs/Breadcrumbs";

export default function RulesUsePage() {
    return (
        <main className="flex flex-col">
            <Breadcrumbs items={[{label: 'Foydalanish qoidalari', link: '/rules-use'}]}/>
            <RulesUse/>
        </main>
    )
}