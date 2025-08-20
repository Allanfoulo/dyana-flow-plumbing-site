import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WaterSystemSolutions from "@/components/WaterSystemSolutions";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navigation />
      <Hero />
      <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="text-primary">Our</span> Services
          </h2>
        </div>
      <WaterSystemSolutions />
      <Footer />
    </div>
  );
};

export default Index;
