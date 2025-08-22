import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay";
  
  const WaterSystemSolutions = () => {
    const images = [
      "/watersystems/filtration system .jpg",
      "/watersystems/flters.jpg",
      "/watersystems/fltration wall.jpg",
      "/watersystems/green tanks .jpg",
      "/watersystems/plumbing.jpg",
      "/watersystems/systems.jpg",
      "/watersystems/tanks.jpg",
      "/watersystems/tanks1.jpg",
    ];
  
    return (
      <section id="water-solutions" className="py-20 px-4 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Water System <span className="text-primary">Solutions</span>
            </h2>
          </div>
          <div className="flex flex-col items-center gap-12">
            <div className="w-full">
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                We provide comprehensive water solutions that ensure your home has clean, safe water and reliable storage for uninterrupted supply. Our expert team specializes in premium water storage (jojo tanks ) installations that guarantee you never run out of water, with durable UV-resistant tanks in various sizes for residential and commercial properties. We also install advanced multi-stage water filtration systems that remove up to 99.9% of harmful contaminants, chlorine, and impurities, transforming your tap water into clean, great-tasting drinking water. Additionally, our state-of-the-art UV water purification systems eliminate 99.99% of bacteria, viruses, and harmful microorganisms without chemicals, providing instant, environmentally-friendly purification. From professional installation to comprehensive warranties and ongoing maintenance, we deliver complete water management solutions that protect your family's health and give you peace of mind during water shortages.
              </p>
            </div>
            <div className="w-full">
            <Carousel
                plugins={[Autoplay({ delay: 2000, stopOnInteraction: false })]}
                opts={{
                  align: "start",
                  loop: true,
                }}
              >
                <CarouselContent>
                  {images.map((image, index) => (
                    <CarouselItem key={index}>
                      <img 
                        src={image} 
                        alt={`Water System Image ${index + 1}`}
                        className="w-full h-auto rounded-lg shadow-lg"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default WaterSystemSolutions;