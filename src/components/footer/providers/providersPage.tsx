import Image from "next/image";

export default function ProviderPage () {
    return (
        <main className="flex gap-3">
            <Image src="/svg/instagram.svg" alt="instagram" width={20} height={20}/>
            <Image src="/svg/telegram.svg" alt="telegram" width={20} height={20}/>
            <Image src="/svg/youtube.svg" alt="youtube" width={20} height={20}/>
            <Image src="/svg/twitter.svg" alt="twitter" width={20} height={20}/>
            <Image src="/svg/facebook.svg" alt="facebook" width={20} height={20}/>
        </main>
    )
}