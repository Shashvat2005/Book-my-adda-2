import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import NavigationBar from "@/components/NavigationBar";
import TrippySection from "@/components/TrippySection";
import HotDeals from "@/components/HotDeals";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <NavigationBar />
      <TrippySection />
      <HotDeals />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Index;
