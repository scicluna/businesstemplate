import Image from "next/image"

export default function Hero() {
    return (
        <div className="absolute h-full w-full z-10 overflow-hidden">
            <Image src="/images/hero2.webp" placeholder="blur" blurDataURL="/images/hero2loading.webp" sizes="100dvw" fill alt="..." style={{ objectFit: "cover", objectPosition: "center" }} />
        </div>
    )
}