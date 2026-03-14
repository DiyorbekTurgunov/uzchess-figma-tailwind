import Image from "next/image"

export default function Logo () {
    return (
        <div className="flex items-center gap-5">
            <Image src="/uzchess.svg" alt="logo" width={104} height={40} className={"mb-2"}/>
            <div className={" w-px h-6 bg-[#3D4549]"}></div>
            {/*<div className={"flex gap-2"}>*/}
            {/*    <p className={"font-sans font-normal text-15px text-[#FFFFFF]"}>O‘zbekcha</p>*/}
            {/*    <Image src="/chevron.svg" alt="scrol" width={24} height={24} />*/}
            {/*</div>*/}

        </div>
    )
}