import SearchForm2 from "./SearchForm2"

const Hero = () => {
    return (
      <div className="building-bg flex w-full min-h-[45vh] items-center justify-center">
        <div className="flex flex-col max-w-4xl w-full px-4 sm:px-6 md:px-8 lg:px-10 mt-32 md:mt-40 lg:mt-56">
            <div className="space-y-4">
                <h1 className="cta text-center text-2xl sm:text-3xl lg:text-5xl tracking-wider font-semibold">
                    Find, Buy, or Sell: Your Ideal Property Awaits at Zolvrr
                </h1>
                <p className="text-center text-gray-600 tracking-widest text-lg">
                    Your Full Service Real Estate Brokerage for Buying, Selling, Renting and Investing Properties in Philippines
                </p>
            </div>
            <SearchForm2 />
        </div>
      </div>
    )
  }
  
  export default Hero