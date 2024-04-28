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

const Properties = () => {
  return (
    <div>
     <div className="mb-10">
             <h2 className="text-center text-2xl md:text-3xl lg:text-4xl tracking-wider">
                Explore Rentals in <strong>Manila, Ph</strong>
             </h2>
    </div>
    <div className="flex flex-wrap gap-5 items-center justify-center">

    <Carousel className="mx-auto max-w-[1024px]">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/3 lg:basis-1/4 ">
            <div className="p-2">
                <Card className="w-full max-w-[350px] mx-auto">
                    <Image className="mb-1 rounded-t-md object-cover transform scale-100" src={'/propimage-1.png'} alt="Property Image" width={299} height={235}/>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
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