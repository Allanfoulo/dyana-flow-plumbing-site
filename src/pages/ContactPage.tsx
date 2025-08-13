import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navigation />
      <div className="pt-16 md:pt-20">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;