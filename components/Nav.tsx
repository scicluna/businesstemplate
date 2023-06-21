import Hero from "./Hero"
import Hamburger from "./Hamburger"
import Logo from "./Logo"

export default function NavBar() {
    return (
        <nav className="shadow-md shadow-gray-400 bg-gray-700 flex justify-between items-end md:h-[100dvh] h-[50dvh] w-full relative font-extrabold text-lg ">
            <div className="absolute top-0 left-0 z-20 h-auto m-7">
                <Logo />
            </div>
            <Hero />
            <Hamburger />
        </nav>
    )
}