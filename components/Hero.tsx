import Image from "next/image"

export default function Hero() {
    return (
        <div className="absolute h-full w-screen z-10 overflow-hidden">
            <Image src="/images/hero.webp" placeholder="blur" blurDataURL="/images/heroload.webp" sizes="100dvw" fill alt="..." style={{ objectFit: "cover", objectPosition: "center" }} />
        </div>
    )
}