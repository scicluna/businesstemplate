import Image from "next/image"

export default function Logo() {
    return (
        <div className="absolute top-0 left-0 z-20 h-52 w-96 text-white mt-4 mx-0">
            <Image src={'/images/logo2.webp'} blurDataURL={'/images/logoload.webp'} alt={"logo"} fill></Image>
        </div>
    )
}