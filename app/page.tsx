import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandStatement from "@/components/BrandStatement";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Atmosphere from "@/components/Atmosphere";
import OrbitSection from "@/components/OrbitSection";
import Reviews from "@/components/Reviews";
import HoustonSection from "@/components/HoustonSection";
import Location from "@/components/Location";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BrandStatement />
        <div className="wrap">
          <div className="divider" />
        </div>
        <About />
        <Menu />
        <Atmosphere />
        <OrbitSection />
        <Reviews />
        <HoustonSection />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
