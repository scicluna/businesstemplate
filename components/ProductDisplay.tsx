import Image from "next/image"
import Link from "next/link"

export default function ProductDisplay() {
    return (
        <div className="grid md:grid-cols-3 md:grid-rows-1 grid-rows-3 w-full gap-4 p-2">
            <Product item={'Kitchen'} />
            <Product item={'Wellness'} />
            <Product item={'Electronics'} />
        </div>
    )
}

export function Product({ item }: { item: string }) {
    return (
        <Link href={`/products/${item.toLocaleLowerCase()}`} scroll>
            <div className="flex justify-start items-end h-72 rounded-lg w-full overflow-hidden">
                <div className="h-72 w-full flex justify-start items-end transition-all hover:scale-[1.25] hover:cursor-pointer duration-500 overflow-hidden relative">
                    <Image src={`/images/${item}.webp`} fill alt={item} placeholder="blur" blurDataURL={`/images/${item}loading.webp`} style={{ objectFit: "fill" }} />
                </div>
                <h3 className="absolute z-20 text-white text-2xl text p-2">{item}</h3>
            </div>
        </Link>
    )
}