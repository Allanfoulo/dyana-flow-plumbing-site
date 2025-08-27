import Navigation from "@/components/Navigation";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navigation />
      <div className="pt-16 md:pt-20">
        <Services />
        <Gallery />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;