"use client"

import { Button } from "@/components/ui/button"
import { Menu, Plus, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react";

const Navbar = () => {

    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const [header, setHeader] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    const scrollHeader = () => {
        if (window.scrollY >= 20) {
            setHeader(true)
        } else {
            setHeader(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHeader)
        return () => {
            window.addEventListener('scroll', scrollHeader)
        }
    }, [])

    return (
        <div className={`flex justify-between px-10 fixed top-0 w-full z-10 ${header ? 'bg-white py-3' : 'py-5'} transition duration-2000 ease-in-out`}>
            <div className="flex gap-12 items-center">
                <Image
                    className={`${header ? 'mr-2 h-[20px] w-[100px]' : 'mr-2 h-[23px] w-[110px]'} transition duration-2000 ease-in-out`}
                    src={'/logo.png'}
                    width={150}
                    height={150}
                    alt="Our Company Logo"
                />
                <ul className="hidden md:flex gap-10 text-xs tracking-wider">

                    <li className="hover:text-primary font-medium  cursor-pointer">
                        <Link href={'/'}>RENT</Link>
                    </li>
                    <li className="hover:text-primary font-medium  cursor-pointer">
                        <Link href={'/'}>BUY</Link>
                    </li>
                    <li className="hover:text-primary font-medium  cursor-pointer">
                        <Link href={'/'}>NEW PROJECTS</Link>
                    </li>
                    <li className="hover:text-primary font-medium  cursor-pointer">
                        <Link href={'/'}>EXPLORE</Link>
                    </li>
                    <li className="hover:text-primary font-medium  cursor-pointer">
                        <Link href={'/'}>COMMERCIAL</Link>
                    </li>

                </ul>
            </div>
            <div className="hidden md:flex gap-5 items-center text-xs tracking-wider">
                <Button className="flex gap-2 housal-button">
                    <Plus className="h-5 w-5" />POST YOUR PROPERTY
                </Button>
                <Image className="rounded-full bottom-2 border-gray-200" src="/noavatar.png" alt="" width={30} height={30} />
                <Link href={'/'} >
                    <span className="hover:text-primary font-medium  cursor-pointer">SIGN IN</span>
                </Link>
            </div>
            <div className="flex-col justify-end text-white md:flex lg:hidden">
                <button onClick={toggleNavbar}>
                    {mobileDrawerOpen ? <X /> : <Menu />}
                </button>
            </div>

        </div>
    )
}

export default Navbar