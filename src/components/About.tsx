import { Card, CardContent } from "@/components/ui/card";
import { Music2, Radio, Users, MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About Anticyclone
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Born from the storm of electronic beats and driven by an unstoppable creative force, 
            Anticyclone represents the evolution of modern EDM, blending house rhythms with 
            dance pop sensibilities and techno precision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <img
              src="/lovable-uploads/a600363c-0bc6-42e6-abd7-9bf013bd81e9.png"
              alt="Anticyclone performing"
              className="rounded-lg shadow-glow w-full h-96 object-cover"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              The Sound Revolution
            </h3>
            <p className="text-foreground/80 text-lg leading-relaxed">
              Anticyclone's signature sound emerged from the underground club scenes, 
              fusing powerful basslines with melodic progressions that captivate audiences 
              worldwide. Each track is crafted to create an immersive sonic experience 
              that transcends traditional genre boundaries.
            </p>
            <p className="text-foreground/80 text-lg leading-relaxed">
              With breakthrough single "Pendulum" gaining international recognition 
              through British compilation record label LW, Anticyclone has established 
              a unique position in the global electronic music landscape.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <Card className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
            <CardContent className="p-6 text-center">
              <Music2 className="h-12 w-12 text-neon-purple mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2">Genre Fusion</h4>
              <p className="text-foreground/70 text-sm">
                Blending EDM, house, dance pop, and techno into a unique sonic signature
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
            <CardContent className="p-6 text-center">
              <Radio className="h-12 w-12 text-neon-blue mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2">Label Recognition</h4>
              <p className="text-foreground/70 text-sm">
                Featured on British compilation record label LW with hit single "Pendulum"
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 text-neon-pink mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2">Live Energy</h4>
              <p className="text-foreground/70 text-sm">
                Explosive live performances that create unforgettable experiences
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
            <CardContent className="p-6 text-center">
              <MapPin className="h-12 w-12 text-electric-cyan mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2">Global Reach</h4>
              <p className="text-foreground/70 text-sm">
                From CSMU college stages to international festivals
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;