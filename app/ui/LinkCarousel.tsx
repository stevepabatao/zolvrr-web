import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  import Image from "next/image"
  import { Button } from "@/components/ui/button";

const LinkCarousel = () => {
  return (
    <div className="text-center p-20">
        <div className="mb-10">
            <h2 className="text-center text-2xl md:text-3xl lg:text-4xl tracking-wider mx-10">
                See How <strong>Zolvrr</strong> Can Help.
            </h2>
        </div>
        <div className="mb-10 min-w-screen"> 
            <div>
                <div className="flex flex-wrap gap-10 justify-center">

                    <div className="flex flex-col items-center">
                        <Image className="mb-1 rounded-xl" src="https://images.pexels.com/photos/3935333/pexels-photo-3935333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                             alt="Property Image" width={259} height={235}/>
                        <div className="border border-none shadow-2xl rounded-lg mt-[-40px] w-[235px] bg-white p-5 flex flex-col items-center justify-center">
                            <h3>For Rent</h3>
                            <p className="text-xs mb-5">With an advanced Custom Keyword Search and 35+ Filter categories, Housal creates a seamless online Home Search Experience.</p> 
                            <Button type="submit" className=" housal-button text-lg">For Rent</Button>               
                        </div>                
                    </div>


                    <div className="flex flex-col items-center">
                        <Image className="mb-1 rounded-xl" src="https://images.pexels.com/photos/39853/woman-girl-freedom-happy-39853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                               alt="Property Image" width={259} height={235}/>
                        <div className="border border-none shadow-2xl rounded-lg mt-[-40px] w-[235px] bg-white p-5 flex flex-col items-center justify-center">
                            <h3>For Rent</h3>
                            <p className="text-xs mb-5">With an advanced Custom Keyword Search and 35+ Filter categories, Housal creates a seamless online Home Search Experience.</p> 
                            <Button type="submit" className=" housal-button">For Rent</Button>               
                        </div>                
                    </div>


                    <div className="flex flex-col items-center">
                        <Image className="mb-1 rounded-xl object-cover" src="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                            alt="Property Image" width={259} height={235}/>
                        <div className="border border-none shadow-2xl rounded-lg mt-[-40px] w-[235px] bg-white p-5 flex flex-col items-center justify-center">
                            <h3>For Rent</h3>
                            <p className="text-xs mb-5">With an advanced Custom Keyword Search and 35+ Filter categories, Housal creates a seamless online Home Search Experience.</p> 
                            <Button type="submit" className=" housal-button">For Rent</Button>               
                        </div>                
                    </div>


                    <div className="flex flex-col items-center">
                        <Image className="mb-1 rounded-xl object-cover" src="https://images.pexels.com/photos/4458349/pexels-photo-4458349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                            alt="Property Image" width={259} height={235}/>
                        <div className="border border-none shadow-2xl rounded-lg mt-[-40px] w-[235px] bg-white p-5 flex flex-col items-center justify-center">
                            <h3>For Rent</h3>
                            <p className="text-xs mb-5">With an advanced Custom Keyword Search and 35+ Filter categories, Housal creates a seamless online Home Search Experience.</p> 
                            <Button type="submit" className=" housal-button">For Rent</Button>               
                        </div>                
                    </div>

                </div>
            </div>     
        </div>
 
    </div>
  )
}

export default LinkCarousel