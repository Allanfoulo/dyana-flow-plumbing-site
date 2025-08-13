import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navigation />
      <div className="pt-16 md:pt-20">
        <About />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;