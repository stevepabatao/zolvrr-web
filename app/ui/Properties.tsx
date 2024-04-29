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
import { Bath, Bed, Car, MapPin, Ruler } from "lucide-react"
import { Separator } from "@/components/ui/separator"


const Properties = () => {
  return (
    <div>
      <div className="mb-10">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl tracking-wider">
          Explore Rentals in <strong>Manila, Ph</strong>
        </h2>
      </div>
      <div className="flex flex-wrap items-center justify-center">

        <Carousel className="mx-1 max-w-[1200px] ">
          <CarouselContent className="-ml-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="basis-3.5 md:basis-1/8 lg:basis-1/4 ">
                <div className="p-2">
                    <Card className="w-full max-w-[350px] mx-auto">
                        <Image className="mb-1 rounded-t-md object-cover transform scale-100" src={'/propimage-1.png'} alt="Property Image" width={299} height={235}/>
                        <CardContent>
                            <div className="flex w-full text-xs tracking-wider mt-2 mb-2">
                              <MapPin className="mr-2"/> <span className=" text-left">Makati near Rockwell, Makati Makati, Metro Manila, PH 1209</span> 
                            </div>
                            
                            <div className="flex flex-wrap text-xs tracking-wider mt-4">
                                <div className="flex basis-1/2 ">
                                  <div className="basis-1/2 "><Bed className="mr-2" size={16}/> </div> 
                                  <div className="basis-1/2 text-left">2BD</div>
                                </div>
                                <div className="flex basis-1/2 ">
                                  <div className="basis-1/2 "><Bath className="mr-2" size={16}/> </div> 
                                  <div className="basis-1/2 text-left">3BA</div>
                                </div>
                                <div className="flex basis-1/2 ">
                                  <div className="basis-1/2 "><Car className="mr-2" size={16}/> </div> 
                                  <div className="basis-1/2 text-left">1PA</div>
                                </div>
                                <div className="flex basis-1/2 ">
                                  <div className="basis-1/2 "><Ruler className="mr-2" size={16}/></div> 
                                  <div className="basis-1/2 text-left">300 sqm</div>
                                </div>
                            </div>
                        </CardContent>
                        <Separator />
                        <CardFooter>
                            <p className="flex flex-wrap align-middle justify-center text-sm tracking-wider mt-2">
                              <Image className="rounded-full border-2 mr-4 " src="/noavatar.png" alt="" width={25} height={25}/>
                              <span>[Agent Name/Agency]</span>
                            </p>
                        </CardFooter>
                    </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        
      </div>
    </div>
  )
}

export default Properties