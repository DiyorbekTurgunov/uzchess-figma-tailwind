import Image from "next/image";

export default function Donat() {
    return(
        <main className="flex justify-center items-center w-81.5 h-20.5 rounded-lg bg-[#1A1D1F] gap-3">
            <Image src="/svg/Icon_charity.svg" alt="Charity" width={42} height={42}/>
            <div className="flex flex-col">
                <div className="flex items-center">
                    <p className="font-normal text-base">Loyiha rivojiga xissa</p>
                    <div className="flex justify-center items-center w-10.25 h-4 bg-[#1C92E0] rounded-sm font-normal font-xs">soon</div>
                </div>
                <p className="font-sans font-normal text-[14px] text-[#6F767E]">Shaxmat rivojiga hissa qo‘shing</p>
            </div>
        </main>
    )
}