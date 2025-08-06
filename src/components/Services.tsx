import { Card, CardContent } from "@/components/ui/card";
import geyserInstallation from "@/assets/geyser-installation.jpg";
import blockedDrains from "@/assets/blocked-drains.jpg";
import burstPipes from "@/assets/burst-pipes.jpg";
import leakingTaps from "@/assets/leaking-taps.jpg";
import waterFiltration from "@/assets/water-filtration.jpg";
import generalPlumbing from "@/assets/general-plumbing.jpg";

const services = [
  {
    title: "Geyser Installation",
    image: geyserInstallation,
    description: "Professional geyser installation and replacement services with warranty coverage."
  },
  {
    title: "Blocked Drains",
    image: blockedDrains,
    description: "Fast and effective drain cleaning and unblocking for all types of blockages."
  },
  {
    title: "Burst Pipes",
    image: burstPipes,
    description: "Emergency burst pipe repairs and replacements to prevent water damage."
  },
  {
    title: "Leaking Taps",
    image: leakingTaps,
    description: "Quick tap repairs and replacements to stop annoying drips and water waste."
  },
  {
    title: "Water Filtration System Installation",
    image: waterFiltration,
    description: "Clean, safe drinking water with professional filtration system installation."
  },
  {
    title: "General Plumbing",
    image: generalPlumbing,
    description: "Complete plumbing maintenance, repairs, and installation services."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Professional plumbing services delivered with precision, reliability, and excellence. 
            We handle everything from emergency repairs to complete installations.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            return (
              <Card 
                key={index} 
                className="bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group overflow-hidden"
              >
                <CardContent className="p-0">
                  {/* Service Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Service Content */}
                  <div className="p-6 text-center">
                    {/* Service Title */}
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    {/* Service Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-foreground mb-4">
            Need a service not listed above?
          </p>
          <a 
            href="tel:0714421210" 
            className="text-primary hover:text-primary/80 font-semibold text-xl transition-colors duration-300"
          >
            Call us at 071 442 1210
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;