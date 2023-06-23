'use client'
import { useState, useEffect } from "react"
import Logo from "./Logo"
import Link from "next/link"

export default function Hamburger() {
    const [close, setClosed] = useState<boolean>(true)

    useEffect(() => {
        if (!close) {
            document.body.className = ('overflow-hidden')
        } else {
            document.body.className = (' overflow-auto')
        }
    }, [close]);

    return (
        <>
            <div className="absolute top-0 z-50 right-0 h-auto text-black m-7 flex items-center justify-center hover:cursor-pointer hover:text-gray-400"
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
            {/* modal */}
            <div className={`fixed top-0 md:h-[100dvh] h-[100dvh] w-full bg-gray-700 opacity-0 z-20 transition-all duration-300 ${close ? 'opacity-0' : 'opacity-100'} ${close ? 'pointer-events-none' : 'pointer-events-auto'}`}>
                <main className="flex h-full w-full justify-center items-center">
                    <div className="w-1/2 flex flex-col justify-center items-center">
                        <Logo />
                    </div>
                    <div className="w-1/2 flex flex-col justify-center items-center">
                        <Link href={'/'} onClick={e => setClosed(prev => !prev)}>Home</Link>
                        <Link href={'/about'} onClick={e => setClosed(prev => !prev)}>About Us</Link>
                        <Link href={'/products'} onClick={e => setClosed(prev => !prev)}>Products</Link>
                        <Link href={'/contact'} onClick={e => setClosed(prev => !prev)}>Contact Us</Link>
                    </div>
                </main>
            </div>
        </>
    )
}
