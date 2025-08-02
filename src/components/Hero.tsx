import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import heroBackground from "@/assets/hero-background.jpg";
import heroBackgroundLight from "@/assets/hero-background-light.jpg";
// import dynaFlowLogo from "@/assets/dyana-flow-logo.png";

const Hero = () => {
  const { theme } = useTheme();
  
  // Determine which background to use based on theme
  const getBackgroundImage = () => {
    if (theme === 'light') {
      return heroBackgroundLight;
    } else if (theme === 'dark') {
      return heroBackground;
    } else {
      // System theme - check actual preference
      const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return isDarkMode ? heroBackground : heroBackgroundLight;
    }
  };
  
  // Determine overlay opacity based on theme
  const getOverlayClass = () => {
    if (theme === 'light') {
      return 'absolute inset-0 bg-white/40'; // Lighter overlay for light mode
    } else if (theme === 'dark') {
      return 'absolute inset-0 bg-black/70'; // Darker overlay for dark mode
    } else {
      // System theme
      const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return isDarkMode ? 'absolute inset-0 bg-black/70' : 'absolute inset-0 bg-white/40';
    }
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-500"
        style={{ backgroundImage: `url(${getBackgroundImage()})` }}
      />
      
      {/* Theme-aware overlay for better text readability */}
      <div className={`${getOverlayClass()} transition-all duration-500`} />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-8 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src="/assets/dyana logo.png" 
            alt="Dyana Flow Plumbing Logo" 
            className="h-24 md:h-32 mx-auto mb-6"
          />
        </div>
        
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
          <span className="block">DYANA FLOW</span>
          <span className="block text-primary">PLUMBING</span>
        </h1>
        
        {/* Tagline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
          Dynamic Services
        </p>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-foreground/90 mb-12 max-w-2xl mx-auto leading-relaxed">
          Professional plumbing solutions for homeowners, property managers, and businesses. 
          Fast, reliable, and trustworthy service when you need it most.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-premium"
            asChild
          >
            <a href="tel:0714421210" className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Call Now: 071 442 1210
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold"
            asChild
          >
            <a href="#services">
              View Services
            </a>
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground/30 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;