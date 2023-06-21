'use client'
import Hero from "./Hero"
import Hamburger from "./Hamburger"
import Logo from "./Logo"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export default function NavBar() {
    const path = usePathname()
    const [page, setPage] = useState<string | undefined>("")
    const [size, setSize] = useState<string | undefined>("normal")

    useEffect(() => {
        setPage(path)
        switch (path) {
            case "/": {
                setSize("normal")
                break;
            }
            default: {
                setSize("small")
            }
        }
    }, [path])

    return (
        <nav className={`shadow-md shadow-gray-400 bg-gray-700 flex justify-between items-end ${size == "normal" ? 'md:h-[100dvh] h-[50dvh]' : 'h-[50dvh]'}  w-full relative font-extrabold text-lg`}>
            {/* location of logo */}
            <div className="absolute top-0 left-0 z-20 h-auto m-7">
                <Logo />
            </div>

            {/* Hero always defaults in taking up the whole navbar */}
            <Hero page={page} />

            {/* Hamburger currently fixed in top-right */}
            <Hamburger />
        </nav>
    )
}