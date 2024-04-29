import Image from "next/image";
import { Button } from "@/components/ui/button";

const Cta = () => {
  return (
    <div className="text-center p-4 md:p-8 lg:p-12">
      <div className="mb-10">
        <p className="text-gray-600 tracking-widest text-md mb-3 md:mb-5">
          ALL PROPERTY NEEDS - ONE PORTAL
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-wider ">
          Find Better Places to Live, <br />Work and Wonder...
        </h2>
      </div>
      <div className="flex flex-col items-center md:flex-row md:justify-center align-text-top box-check">
        <div className="mb-8 md:mr-8 md:mb-0">
          <Image
            className="rounded-2xl"
            src={'/cta-image.png'}
            width={679}
            height={462}
            alt="Call to Action Image"
          />
        </div>
        <div className="text-left  flex flex-col justify-start">
          <p className="text-gray-600 tracking-widest text-md mb-3">
            BUY A HOME
          </p>
          <h2 className="text-gray-600 tracking-widest text-2xl mb-3">
            Find, Buy & Own Your <br />Dream Home
          </h2>
          <p className="text-gray-600 tracking-widest text-sm mb-3">
            Explore from Apartments, land, builder floors,<br />
            villas and more
          </p>
          <Button type="submit" className="housal-button">Explore Buying</Button>
        </div>
      </div>
    </div>
  );
}

export default Cta;