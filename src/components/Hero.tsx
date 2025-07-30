import { Button } from "@/components/ui/button";
import { Play, Music } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(34, 34, 47, 0.7), rgba(34, 34, 47, 0.8)), url('/lovable-uploads/820f11f7-03db-45cc-a494-85e174d4d73a.png')`
        }}
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-neon-purple/20 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-neon-blue/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-neon-pink/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Artist Image */}
        <div className="mb-8">
          <img
            src="/lovable-uploads/b795b2d8-8207-4cff-b46b-f174a0fb3fb6.png"
            alt="Anticyclone"
            className="w-48 h-48 mx-auto rounded-full object-cover border-4 border-primary shadow-neon animate-glow"
          />
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-pulse-neon">
          ANTICYCLONE
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/80 mb-4 font-medium">
          EDM • HOUSE • DANCE POP • TECHNO
        </p>
        
        <p className="text-lg text-foreground/60 mb-8 max-w-2xl mx-auto">
          Experience the sonic storm with chart-topping hits like "Pendulum" 
          and electrifying live performances across India.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="neon" size="xl" className="group">
            <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Listen to Pendulum
          </Button>
          <Button variant="hero" size="xl" className="group">
            <Music className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            View Live Shows
          </Button>
        </div>

        <div className="mt-12 flex justify-center space-x-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-neon-blue">50K+</div>
            <div className="text-sm text-foreground/60">Monthly Listeners</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-neon-purple">25+</div>
            <div className="text-sm text-foreground/60">Live Shows</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-neon-pink">5+</div>
            <div className="text-sm text-foreground/60">Releases</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;