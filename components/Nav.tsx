import Hero from "./Hero"
import Hamburger from "./Hamburger"
import Logo from "./Logo"

export default function NavBar() {
    return (
        <nav className="shadow-md shadow-red-200 flex justify-between items-end h-[100dvh] relative font-extrabold text-lg w-full">
            <Logo />
            <Hero />
            <Hamburger />
        </nav>
    )
}