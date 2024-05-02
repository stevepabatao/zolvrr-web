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
import { Suspense } from "react"


const Properties2 = () => {
  return (
    <div className=" min-w-screen">
      <div className="mb-10">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl tracking-wider">
          Explore Rentals in <strong>Manila, Ph</strong>
        </h2>
      </div>
      <div className="container flex flex-wrap items-center justify-center">

        {Array.from({ length: 4 }).map((_, index) => (
          <Suspense fallback={<Loading />}>
            <div key={index} className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <Card className="max-w-[300px] mx-auto shadow-2xl">
                <div className="relative">
                  <Image className="mb-1 rounded-t-md object-cover transform scale-100" src={'/propimage-1.png'} alt="Property Image" width={299} height={235} />

                  <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-500 opacity-10"></div>

                  <div className="absolute inset-0 flex items-start justify-start">
                    <div className="text-gray-100 text-xs  m-2 border-1 bg-red-600 font-bold p-1 rounded-md">
                      NEW
                    </div>
                  </div>

                  <div className="absolute inset-0 flex items-end justify-end">
                    <div className="text-gray-200 text-sm font-semibold m-5 border-1 bg-blue-900 p-1 rounded-md">
                      P20,000,000
                    </div>
                  </div>

                </div>
                <CardContent>

                  <div className="flex w-full text-xs tracking-wider mt-2 mb-2">
                    <MapPin className="mr-2 text-green-500" /> <span className=" text-left">Makati near Rockwell, Makati Makati, Metro Manila, PH 1209</span>
                  </div>

                  <div className="flex flex-wrap text-xs tracking-wider mt-4">
                    <div className="flex basis-1/2 ">
                      <div className="basis-1/4 "><Bed className="mr-2 text-green-500" size={16} /> </div>
                      <div className="basis-3/4 text-left">2BD</div>
                    </div>
                    <div className="flex basis-1/2 ">
                      <div className="basis-1/4 "><Bath className="mr-2 text-green-500" size={16} /> </div>
                      <div className="basis-3/4 text-left">3BA</div>
                    </div>
                    <div className="flex basis-1/2 mt-2">
                      <div className="basis-1/4 "><Car className="mr-2 text-green-500" size={16} /> </div>
                      <div className="basis-3/4 text-left">1PA</div>
                    </div>
                    <div className="flex basis-1/2 mt-2">
                      <div className="basis-1/4 "><Ruler className="mr-2 text-green-500" size={16} /></div>
                      <div className="basis-3/4 text-left">300 sqm</div>
                    </div>
                  </div>

                </CardContent>
                <Separator />
                <CardFooter className=" m-0 p-0 flex flex-wrap align-middle justify-center">
                  <p className="flex flex-wrap align-middle justify-center text-sm tracking-wider m-2 mr-4">
                    <Image className="rounded-full border-2 mr-4 " src="/noavatar.png" alt="" width={25} height={25} />
                    <span>[Agent Name/Agency]</span>
                  </p>
                </CardFooter>
              </Card>
            </div>
          </Suspense>
        ))}
      </div>
    </div>
  )
}

const Loading = () => {
  return <h2> Loading</h2>
}

export default Properties2