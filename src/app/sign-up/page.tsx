'use client';

import SignUpModal from "@/components/header/rightside/SignUpModal";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
    const router = useRouter();

    return (
        <>
            <SignUpModal onClose={() => router.back()} />
        </>
    );
}
