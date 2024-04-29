import Navbar from "./Navbar"
import Hero from "./Hero";
import Explore from "./Explore";

const Header = () => {
  return (
    <div flex>
        <Navbar />
        <Hero />
        <Explore />
    </div>
    
  )
}

export default Header