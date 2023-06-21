'use client'
import { useState, useEffect } from "react"
import Logo from "./Logo"

export default function Hamburger() {
    const [close, setClosed] = useState<boolean>(true)

    useEffect(() => {
        if (!close) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [close]);

    return (
        <>
            <div className="fixed top-0 z-50 right-0 h-auto text-black m-7 flex items-center justify-center hover:cursor-pointer hover:text-gray-400"
                onClick={e => setClosed(prev => !prev)}>
                <>
                    {close
                        ?
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </div>
                        :
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>

                    }
                </>
            </div>
            <div className={`fixed h-screen w-screen bg-gray-700 opacity-0 z-20 transition-all duration-100 ${close ? 'opacity-0' : 'opacity-100'} ${close ? 'pointer-events-none' : 'pointer-events-auto'}`}>
                <MenuContent />
            </div>
        </>
    )
}

export function MenuContent() {
    return (
        <main className="flex h-screen justify-center items-center">
            <div className="h-full w-1/2 flex flex-col justify-center items-center">
                <Logo />
            </div>
            <div className="h-full w-1/2 flex flex-col justify-center items-center">
                <h1>Home</h1>
                <h1>About Us</h1>
                <h1>Products</h1>
                <h1>Contact Us</h1>
            </div>
        </main>
    )
}