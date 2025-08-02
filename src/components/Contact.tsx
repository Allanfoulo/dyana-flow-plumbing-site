import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Globe, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "071 442 1210",
    href: "tel:0714421210",
    description: "Call us anytime for immediate assistance"
  },
  {
    icon: Mail,
    title: "Email",
    value: "dynaflow30@gmail.com",
    href: "mailto:dynaflow30@gmail.com",
    description: "Send us your questions and requests"
  },
  {
    icon: Globe,
    title: "Website",
    value: "www.dynaflowplumbing.co.za",
    href: "https://www.dynaflowplumbing.co.za",
    description: "Visit our website for more information"
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to solve your plumbing problems? Contact us today for fast, reliable service. 
            We're here to help with all your plumbing needs.
          </p>
        </div>
        
        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((contact, index) => {
            const IconComponent = contact.icon;
            
            return (
              <Card 
                key={index} 
                className="bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group"
              >
                <CardContent className="p-8 text-center">
                  {/* Contact Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  
                  {/* Contact Title */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {contact.title}
                  </h3>
                  
                  {/* Contact Value */}
                  <a 
                    href={contact.href}
                    className="text-primary hover:text-primary/80 font-semibold text-lg mb-3 block transition-colors duration-300"
                  >
                    {contact.value}
                  </a>
                  
                  {/* Contact Description */}
                  <p className="text-muted-foreground text-sm">
                    {contact.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Emergency Call to Action */}
        <div className="text-center">
          <Card className="bg-primary/5 border-primary/20 inline-block">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <div className="p-3 bg-primary/20 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-foreground">
                    Emergency Plumbing?
                  </h3>
                  <p className="text-muted-foreground">
                    We're here to help 24/7
                  </p>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-premium"
                asChild
              >
                <a href="tel:0714421210">
                  Call Emergency Line: 071 442 1210
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
        
        {/* Service Area */}
        <div className="text-center mt-12">
          <div className="flex items-center justify-center mb-2">
            <MapPin className="h-5 w-5 text-primary mr-2" />
            <span className="text-foreground font-medium">Service Area</span>
          </div>
          <p className="text-muted-foreground">
            Proudly serving the local community and surrounding areas
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;