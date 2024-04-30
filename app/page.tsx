
import Header from "./ui/Header";
import LinkCarousel from "./ui/LinkCarousel";
import Cta from "./ui/Cta";
import ExploreBox from "./ui/ExploreBox";
import Footer from "./ui/Footer";


export default function Home() {
  return (
    <div className="main-bg min-h-screen min-w-full">
      <Header />
      <LinkCarousel />
      <Cta />
      <ExploreBox />
      <Footer />

    </div>
  );
}

