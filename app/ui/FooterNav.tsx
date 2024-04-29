import { Facebook, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const FooterNav = () => {
  return (
    <div >
        <div className="text-white flex justify-center items-center">
            <ul className=" md:flex gap-10">
                <Link href={'/'}>
                    <li className="hover:text-primary font-medium text-sm cursor-pointer">
                     About Us
                    </li>  
                </Link>
                <li className="hover:text-primary font-medium text-sm cursor-pointer">
                    Contact Us 
                </li>
                <li className="hover:text-primary font-medium text-sm cursor-pointer">
                    News and Articles
                </li>
                <li className="hover:text-primary font-medium text-sm cursor-pointer">
                    Projects 
                </li>
                <li className="hover:text-primary font-medium text-sm cursor-pointer">
                    Privacy Policy
                </li>
                <li className="hover:text-primary font-medium text-sm cursor-pointer">
                    Terms and Condition
                </li>
                <li className="hover:text-primary font-medium text-sm cursor-pointer">
                    Site map
                </li>
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
        <div className="flex justify-center items-center pt-10">
           <div className="text-white">Follow us:</div>
           <div><Twitter color="text-white"/></div>
           <div><Facebook color="text-white"/></div>
        </div>
    </div>

    
    
  )
}

export default FooterNav