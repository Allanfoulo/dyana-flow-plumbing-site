import Navigation from "@/components/Navigation";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navigation />
      <div className="pt-16 md:pt-20">
        <Services />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;