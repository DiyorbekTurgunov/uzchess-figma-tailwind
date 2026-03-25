import Image from "next/image";

export default function Profile () {
    return (
        <div className="flex gap-5 items-center">
            <Image src="/svg/search.svg" alt="profile" width={24} height={24} className="hover:cursor-pointer" />
            <Image src="/svg/Savatcha.svg" alt="savat" width={24} height={24} className="hover:cursor-pointer"/>
            <Image src="/svg/notifications.svg" alt="notification" width={24} height={24} className="hover:cursor-pointer"/>
            <div className="flex w-px h-6 bg-[#3D4549] ml-1 mr-1"></div>
            <div className="flex justify-center items-center gap-2.5 w-33 h-10 rounded-lg bg-[#1C92E0] hover:cursor-pointer">
                <p className=" font-medium text-base text-white">Kirish</p>
                <Image src="/svg/log-in.svg" alt="log" width={20} height={20}/>
            </div>
        </div>
    )
}