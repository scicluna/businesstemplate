import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faTwitter, faFacebook, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons"
import Logo from "./Logo"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="flex flex-col gap-2 items-center h-96 min-h-[20%] relative bg-slate-800 text-slate-100 text-sm">
            <div className="flex h-full w-full">
                <div className="m-8">
                    <Logo />
                </div>
                <div className="flex flex-col w-4/5 md:gap-0 gap-4">
                    <div className="grid md:grid-cols-3 md:grid-rows-2 grid-cols-1 h-16 m-10">
                        <Link href={'/about'}>About Us</Link>
                        <Link href={'/products/wellness'}>Wellness and Health</Link>
                        <Link href={'/products/electronics'}>Electronics</Link>
                        <Link href={'/products/kitchen'}>Home and Kitchen</Link>
                        <Link href={'/news'}>News & Events</Link>
                        <Link href={'/contact'}>Contact Us</Link>
                    </div>
                    <div className="flex gap-1 m-8">
                        <div className="md:w-8 md:h-8 h-6 w-6">
                            <Link href={'https://twitter.com/'}>
                                <FontAwesomeIcon icon={faTwitter} />
                            </Link>
                        </div>
                        <div className="md:w-8 md:h-8 h-6 w-6">
                            <Link href={'https://facebook.com/'}>
                                <FontAwesomeIcon icon={faFacebook} />
                            </Link>
                        </div>
                        <div className="md:w-8 md:h-8 h-6 w-6">
                            <Link href={'https://youtube.com/'}>
                                <FontAwesomeIcon icon={faYoutube} />
                            </Link>
                        </div>
                        <div className="md:w-8 md:h-8 h-6 w-6">
                            <Link href={'https://instagram.com/'}>
                                <FontAwesomeIcon icon={faInstagram} />
                            </Link>
                        </div>
                        <div className="md:w-8 md:h-8 h-6 w-6">
                            <Link href={'https://github.com/scicluna/'}>
                                <FontAwesomeIcon icon={faGithub} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-700 h-24 flex md:flex-row flex-col text-xs justify-around items-center">
                <p>@genericCorp Inc. 2023.All rights reserved.</p>
                <div className="flex gap-1 break-words">
                    <Link href={'/legal'}>Legal notice</Link>|
                    <Link href={'/privacy'}>Privacy policy</Link>|
                    <Link href={'/cookie'}>Cookie Policy</Link>|
                    <Link href={'/cookie'}>Change Cookie Settings</Link>
                </div>
            </div>
        </footer >
    )
}