import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Menu, 
  X, 
  Sun, 
  Moon,
  Monitor
} from "lucide-react";
import { useTheme } from "@/components/theme-provider";
// import dynaFlowLogo from "@/assets/dyana-flow-logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navItems = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="h-4 w-4" />;
      case 'dark':
        return <Moon className="h-4 w-4" />;
      default:
        return <Monitor className="h-4 w-4" />;
    }
  };

  const cycleTheme = () => {
    const themes: ('light' | 'dark' | 'system')[] = ['light', 'dark', 'system'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/assets/dyana logo.png" 
              alt="Dyana Flow Logo" 
              className="h-8 md:h-10 w-auto"
            />
            <div className="hidden sm:block">
              <span className="text-lg md:text-xl font-bold text-foreground">
                DYANA FLOW
              </span>
              <span className="text-lg md:text-xl font-bold text-primary ml-1">
                PLUMBING
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={cycleTheme}
              className="border-border hover:border-primary/50"
            >
              {getThemeIcon()}
            </Button>

            {/* Call Button */}
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              asChild
            >
              <a href="tel:0714421210" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="hidden lg:inline">071 442 1210</span>
                <span className="lg:hidden">Call</span>
              </a>
            </Button>
          </div>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center space-x-2">
            {/* Theme Toggle Mobile */}
            <Button
              variant="outline"
              size="sm"
              onClick={cycleTheme}
              className="border-border hover:border-primary/50 p-2"
            >
              {getThemeIcon()}
            </Button>

            {/* Mobile Call Button */}
            <Button 
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground p-2"
              asChild
            >
              <a href="tel:0714421210">
                <Phone className="h-4 w-4" />
              </a>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="border-border hover:border-primary/50 p-2"
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Call Link */}
              <a 
                href="tel:0714421210"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 text-primary font-semibold py-2"
              >
                <Phone className="h-4 w-4" />
                071 442 1210
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;