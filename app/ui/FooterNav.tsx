import { FacebookIcon, Instagram, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const FooterNav = () => {
  return (
    <div className="py-20">
        <div className="text-white flex justify-center items-center">
            <ul className=" md:flex gap-10">
                <Link href={'/'}>
                    <li className="footer font-medium text-sm cursor-pointer">
                     About Us
                    </li>  
                </Link>
                <Link href={'/'}>
                    <li className="footer font-medium text-sm cursor-pointer">
                     Contact Us
                    </li>  
                </Link>
                <Link href={'/'}>
                    <li className="footer font-medium text-sm cursor-pointer">
                    News and Articles
                    </li>  
                </Link>
                <Link href={'/'}>
                    <li className="footer font-medium text-sm cursor-pointer">
                    Projects 
                    </li>  
                </Link>
                <Link href={'/'}>
                    <li className="footer font-medium text-sm cursor-pointer">
                    Privacy Policy
                    </li>  
                </Link>
                <Link href={'/'}>
                    <li className="footer font-medium text-sm cursor-pointer">
                    Terms and Condition
                    </li>  
                </Link>
                <Link href={'/'}>
                    <li className="footer font-medium text-sm cursor-pointer">
                    Site map
                    </li>  
                </Link>
            </ul>
        </div>
        <div className="flex justify-center items-center pt-10">
            <Image
                src={'/logo.png'}
                width={150}
                height={150}
                alt="Our Company Logo"
            />
        </div>
        <div className="flex justify-center items-center pt-10 gap-5">
           <div className="text-white">Follow us:</div>
           <div><FacebookIcon  className="text-white" size={16}/></div>
           <div><Twitter className="text-white" size={16}/></div>
           <div><Instagram  className="text-white" size={16}/></div>
           <div><Linkedin className="text-white" size={16}/></div>
        </div>
    </div>

    
    
  )
}

export default FooterNav