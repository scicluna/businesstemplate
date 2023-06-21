import Image from "next/image"

export default function ProductDisplay() {
    return (
        <div className="grid md:grid-cols-3 grid-rows-3 w-full gap-4 p-2">
            <div className="flex justify-start items-end h-72 rounded-lg w-full overflow-hidden">
                <div className="h-72 w-full flex justify-start items-end transition-all hover:scale-[1.25] duration-500 overflow-hidden relative">
                    <Image src={'/images/homekitchen2.webp'} fill alt={'Home and Kitchen'} placeholder="blur" blurDataURL="/images/homekitchen2loading.webp" style={{ objectFit: "fill" }} />
                </div>
                <h3 className="absolute z-20 text-white text-2xl text p-2">Home and Kitchen</h3>
            </div>
            <div className="flex justify-start items-end h-72 rounded-lg w-full overflow-hidden">
                <div className="h-72 w-full flex justify-start items-end transition-all hover:scale-[1.25] duration-500 overflow-hidden relative">
                    <Image src={'/images/wellness.webp'} fill alt={'Health and Wellness'} placeholder="blur" blurDataURL="/images/wellnessloading.webp" style={{ objectFit: "fill" }} />
                </div>
                <h3 className="absolute z-20 text-white text-2xl text p-2">Health and Wellness</h3>
            </div>
            <div className="flex justify-start items-end h-72 rounded-lg w-full overflow-hidden">
                <div className="h-72 w-full flex justify-start items-end transition-all hover:scale-[1.25] duration-500 overflow-hidden relative">
                    <Image src={'/images/electronics.webp'} fill alt={'home and kitchen'} placeholder="blur" blurDataURL="/images/electronicsloading.webp" style={{ objectFit: "fill" }} />
                </div>
                <h3 className="absolute z-20 text-white text-2xl text p-2">Electronics</h3>
            </div>
        </div>
    )
}