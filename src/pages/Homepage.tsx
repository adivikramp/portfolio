import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import HeroSection from "@/sections/HeroSection";

const Homepage = () => {
  return (
    <Loading>
      <Navbar />
      <HeroSection />
    </Loading>
  );
};

export default Homepage;
