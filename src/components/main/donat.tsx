import Image from "next/image";

export default function Donat() {
    return(
        <main className="flex items-center w-81.5 h-20.5 rounded-2 bg-[#1A1D1F]">
            <Image src="/svg/Icon_charity.svg" alt="Charity" width={42} height={42}/>
            <div className="flex flex-col">
                <div className="flex">
                    <p>Loyiha rivojiga xissa</p>
                    <p className="bg-[#1C92E0] rounded-4">soon</p>
                </div>

            </div>
        </main>
    )
}