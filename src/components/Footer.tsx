import { Phone, Mail, Globe, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              DYNA FLOW <span className="text-primary">PLUMBING</span>
            </h3>
            <p className="text-muted-foreground mb-4">
              Dynamic Services
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Professional plumbing solutions for homeowners, property managers, and businesses. 
              Your trusted partner for all plumbing needs.
            </p>
          </div>
          
          {/* Quick Contact */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Quick Contact
            </h4>
            <div className="space-y-3">
              <a 
                href="https://wa.me/27714421210"
                className="flex items-center justify-center md:justify-start text-primary hover:text-primary/80 transition-colors duration-300"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp: 071 442 1210
              </a>
              <a 
                href="mailto:info@dynaflowplumbing.co.za"
                className="flex items-center justify-center md:justify-start text-primary hover:text-primary/80 transition-colors duration-300"
              >
                <Mail className="h-4 w-4 mr-2" />
                info@dynaflowplumbing.co.za
              </a>
              <a 
                href="https://www.dynaflowplumbing.co.za"
                className="flex items-center justify-center md:justify-start text-primary hover:text-primary/80 transition-colors duration-300"
              >
                <Globe className="h-4 w-4 mr-2" />
                www.dynaflowplumbing.co.za
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Our Services
            </h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>Geyser Installation</li>
              <li>Blocked Drains</li>
              <li>Burst Pipes</li>
              <li>Leaking Taps</li>
              <li>Water Filtration Systems</li>
              <li>Water storage (jojo tanks)</li>
              <li>General Plumbing</li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Dyna Flow Plumbing. All rights reserved. | Professional plumbing services you can trust.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;