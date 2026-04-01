'use client';
import Image from 'next/image';

export default function ChessBanner() {
    return (
        <main className="w-169 h-22 bg-[#0B4789] rounded-lg ">
            <div className="w-full h-22 overflow-hidden bg-[#0B4789] relative rounded-lg">
                <div className="absolute top-0 animate-slide-left bg-green-500 w-40 h-22 flex items-center justify-center text-white font-bold">
                    <Image src={"/image/mem_iq.jpg"} alt={"image"} width={160} height={88}/>
                </div>
            </div>
        </main>
    )
}