"use client"

import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react";

const Navbar = () => {

    const [header, setHeader] = useState(false);

    const scrollHeader = () => {
        if(window.scrollY >= 20) {
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
    <div className={ header ? "bg-[white] flex justify-between py-3 px-10 fixed top-0 w-full z-10" : "py-5 transition ease-in-out transition-duration: 2000ms flex justify-between p-6 px-10 fixed top-0 w-full z-10"}>
        <div className="flex gap-12 items-center">        
            <Image
                className={ header ? "mr-2 h-[20px] w-[100px]" : "mr-2 h-[23px] w-[110px]" }
                src={'/logo.png'}
                width={150}
                height={150}
                alt="Our Company Logo"
            />
            <ul className="hidden md:flex gap-10">
                <Link href={'/'}>
                    <li className="hover:text-primary font-medium text-sm cursor-pointer">
                        RENT
                    </li>  
                </Link>
                <li className="hover:text-primary font-medium text-sm cursor-pointer">
                    BUY
                </li>
                <li className="hover:text-primary font-medium text-sm cursor-pointer">
                    NEW PROJECTS
                </li>
                <li className="hover:text-primary font-medium text-sm cursor-pointer">
                    EXPLORE
                </li>
                <li className="hover:text-primary font-medium text-sm cursor-pointer">
                    COMMERCIAL
                </li>
            </ul>
        </div>
        <div className="hidden md:flex gap-2 items-center">
            <Button className="flex gap-2 housal-button">
                <Plus  className="h-5 w-5"/>POST YOUR PROPERTY 
            </Button>
            <Image className="rounded-full" src="/noavatar.png" alt="" width={30} height={30}/>
            <Link href={'/'} >
                <span className="hover:text-primary font-medium text-sm cursor-pointer">SIGN IN</span>
            </Link>
        </div>
    </div>
  )
}

export default Navbar