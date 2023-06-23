import Image from "next/image"
import homehero from '../public/images/homehero.webp'
import abouthero from '../public/images/abouthero.webp'
import contacthero from '../public/images/contacthero.webp'
import producthero from '../public/images/producthero.webp'
import kitchenhero from '../public/images/kitchenhero.webp'
import electronicshero from '../public/images/electronicshero.webp'
import wellnesshero from '../public/images/wellnesshero.webp'
import homeheroloading from '../public/images/homeheroloading.webp'
import aboutheroloading from '../public/images/aboutheroloading.webp'
import contactheroloading from '../public/images/contactheroloading.webp'
import productheroloading from '../public/images/productheroloading.webp'
import kitchenheroloading from '../public/images/kitchenheroloading.webp'
import electronicsheroloading from '../public/images/electronicsheroloading.webp'
import wellnessheroloading from '../public/images/wellnessheroloading.webp'

export default function Hero({ page = "home" }) {

    let image;
    let loading;
    switch (page) {
        case "/": {
            image = homehero
            loading = homeheroloading
            break;
        }
        case ("/about"): {
            image = abouthero
            loading = aboutheroloading
            break;
        }
        case ("/contact"): {
            image = contacthero
            loading = contactheroloading
            break;
        }
        case ("/products"): {
            image = producthero
            loading = productheroloading
            break;
        }
        case ("/products/kitchen"): {
            image = kitchenhero
            loading = kitchenheroloading
            break;
        }
        case ("/products/electronics"): {
            image = electronicshero
            loading = electronicsheroloading
            break;
        }
        case ("/products/wellness"): {
            image = wellnesshero
            loading = wellnessheroloading
            break;
        }
        default: {
            image = homehero
            loading = homeheroloading
        }
    }

    return (
        <div className="absolute h-full w-full z-10 overflow-hidden">
            <Image src={image.src} fill alt="..." loading="eager" style={{ objectFit: "cover", objectPosition: "center" }} />
        </div>
    )
}