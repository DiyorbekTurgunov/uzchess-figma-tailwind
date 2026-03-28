import Image from "next/image";

export default function ProviderPage () {
    return (
        <main className="flex gap-3">
            <a href="https://instagram.com"><Image src="/svg/instagram.svg" alt="instagram" width={20} height={20}/></a>
            <a href="https://telegram.com"><Image src="/svg/telegram.svg" alt="telegram" width={20} height={20}/></a>
            <a href="https://youtube.com"><Image src="/svg/youtube.svg" alt="youtube" width={20} height={20}/></a>
            <a href="https://twitter.com"><Image src="/svg/twitter.svg" alt="twitter" width={20} height={20}/></a>
            <a href="https://facebook.com"><Image src="/svg/facebook.svg" alt="facebook" width={20} height={20}/></a>
        </main>
    )
}