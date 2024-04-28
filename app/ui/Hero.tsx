import SearchForm from "./SearchForm"


const Hero = () => {
    return (
      <div className="building-bg flex w-full min-h-[45vh]  items-center justify-center">
          <div className="flex max-w-4xl flex-col mt-56">
              <div className="space-y-4">
                  <h1 className="cta text-center text-2xl text- md:text-3xl lg:text-5xl tracking-wider font-semibold">
                    Find Your Perfect New Home
                  </h1>
                  <p className=" text-center text-gray-600 tracking-widest text-lg">
                    Helping 110 million Buyer & Seller find their perfect fit in Philippines.
                  </p>
              </div>
              <SearchForm />
          </div>
      </div>
    )
  }
  
  export default Hero