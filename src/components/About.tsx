import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Clock, Shield } from "lucide-react";

const features = [
  {
    icon: CheckCircle,
    title: "Professional Excellence",
    description: "Certified technicians with years of experience"
  },
  {
    icon: Clock,
    title: "Fast Response",
    description: "Quick response times for all your plumbing needs"
  },
  {
    icon: Shield,
    title: "Reliable Service",
    description: "Trustworthy solutions you can depend on"
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description: "All work comes with our satisfaction guarantee"
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="text-primary">Dyana Flow</span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Your Trusted Plumbing Partner
            </h3>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                At Dyana Flow Plumbing, we pride ourselves on delivering <strong className="text-foreground">dynamic services</strong> 
                that exceed expectations. Our mission is to provide homeowners, property managers, and businesses 
                with reliable, professional plumbing solutions.
              </p>
              
              <p>
                With years of experience in the industry, we understand that plumbing issues can't wait. 
                That's why we're committed to <strong className="text-foreground">fast response times</strong>, 
                quality workmanship, and honest pricing.
              </p>
              
              <p>
                From emergency repairs to complete installations, we approach every job with the same level 
                of <strong className="text-foreground">professionalism and attention to detail</strong> that has made us 
                a trusted name in plumbing services.
              </p>
            </div>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              
              return (
                <Card key={index} className="bg-background border-border">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    
                    <h4 className="font-semibold text-foreground mb-2">
                      {feature.title}
                    </h4>
                    
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;