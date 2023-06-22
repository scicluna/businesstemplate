import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faTwitter, faFacebook, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons"
import Logo from "./Logo"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="flex flex-col gap-2 shadow-md tems-center shadow-red-200 h-96 min-h-[20%] relative bg-red-800 text-red-200 text-sm">
            <div className="flex h-full w-full">
                <div className="m-8">
                    <Logo />
                </div>
                <div className="flex flex-col w-4/5">
                    <div className="grid grid-cols-3 grid-rows-2 h-16 m-10">
                        <Link href={'/about'}>About Us</Link>
                        <Link href={'/products/wellness'}>Wellness and Health</Link>
                        <Link href={'/products/electronics'}>Electronics</Link>
                        <Link href={'/products/kitchen'}>Home and Kitchen</Link>
                        <Link href={'/news'}>News & Events</Link>
                        <Link href={'/contact'}>Contact Us</Link>
                    </div>
                    <div className="flex gap-1 m-8">
                        <div className="w-8 h-8">
                            <Link href={'https://twitter.com/'}>
                                <FontAwesomeIcon icon={faTwitter} />
                            </Link>
                        </div>
                        <div className="w-8 h-8">
                            <Link href={'https://facebook.com/'}>
                                <FontAwesomeIcon icon={faFacebook} />
                            </Link>
                        </div>
                        <div className="w-8 h-8">
                            <Link href={'https://youtube.com/'}>
                                <FontAwesomeIcon icon={faYoutube} />
                            </Link>
                        </div>
                        <div className="w-8 h-8">
                            <Link href={'https://instagram.com/'}>
                                <FontAwesomeIcon icon={faInstagram} />
                            </Link>
                        </div>
                        <div className="w-8 h-8">
                            <Link href={'https://github.com/scicluna/'}>
                                <FontAwesomeIcon icon={faGithub} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-700 h-24 flex text-xs justify-around items-center">
                <p>@genericCorp Inc. 2023.All rights reserved.</p>
                <div className="flex gap-1">
                    <Link href={'/legal'}>Legal notice</Link>|
                    <Link href={'/privacy'}>Privacy policy</Link>|
                    <Link href={'/cookie'}>Cookie Policy</Link>|
                    <Link href={'/cookie'}>Change Cookie Settings</Link>
                </div>
            </div>
        </footer >
    )
}