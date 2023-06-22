import Image from "next/image"

export default function Hero({ page = "home" }) {

    let image = ""
    switch (page) {
        case "/": {
            image = "homehero"
            break;
        }
        case ("/about"): {
            image = "abouthero"
            break;
        }
        case ("/contact"): {
            image = "contacthero"
            break;
        }
        case ("/products"): {
            image = "producthero"
            break;
        }
        case ("/products/kitchen"): {
            image = "kitchenhero"
            break;
        }
        case ("/products/electronics"): {
            image = "electronicshero"
            break;
        }
        case ("/products/wellness"): {
            image = "wellnesshero"
            break;
        }
        default: {
            image = "homehero"
        }
    }

    return (
        <div className="absolute h-full w-full z-10 overflow-hidden">
            <Image src={`/images/${image}.webp`} placeholder="blur" blurDataURL={`/images/${image}loading.webp`} sizes="100dvw" fill alt="..." style={{ objectFit: "cover", objectPosition: "center" }} />
        </div>
    )
}