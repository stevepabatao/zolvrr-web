import Image from "next/image";

const ExploreBox = () => {
  return (
    <div className="container mt-20 mb-20">
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl tracking-wider mb-20">
        Explore with <strong>Zolvrr</strong>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4 max-h-[350px]">
        <div className="col-span-1 relative">
          <Image
            src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1.jpg"
            alt="Image 1"
            className="w-full h-full object-cover rounded-lg"
            width={259}
            height={235}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-500 to-green-500 opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold">
            Neighborhoods
          </div>
        </div>
        <div className="col-span-1 grid grid-rows-2 gap-4">
          <div className="relative">
            <Image
              src="https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1.jpg"
              alt="Image 2"
              className="w-full h-52 object-cover rounded-lg"
              width={259}
              height={115}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-yellow-500 to-green-500 opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold">
              Developers
            </div>
          </div>
          <div className="relative">
            <Image
              src="https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Image 3"
              className="w-full h-52 object-cover rounded-lg"
              width={259}
              height={115}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-yellow-500 to-green-500 opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold">
              Projects
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreBox;
