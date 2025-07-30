import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Feedback = () => {
  const testimonials = [
    {
      id: 1,
      name: "Michael Rodriguez",
      location: "Los Angeles, CA",
      image: "/lovable-uploads/e202d161-6d24-4b04-b770-3fdbd7e36fc8.png",
      quote: "Anticyclone's live performance was absolutely mind-blowing! The energy was infectious and the crowd couldn't stop dancing. His unique blend of EDM and house music created an atmosphere I'll never forget.",
      rating: 5
    },
    {
      id: 2,
      name: "Sarah Thompson",
      location: "Miami, FL",
      image: "/lovable-uploads/bcd45b78-9641-4997-b900-48f6f4d1138c.png",
      quote: "I've been following Anticyclone since 'Pendulum' dropped and seeing him live was a dream come true. His style is so fresh and innovative - he really knows how to read the crowd and keep everyone moving!",
      rating: 5
    },
    {
      id: 3,
      name: "Jessica Martinez",
      location: "New York, NY", 
      image: "/lovable-uploads/ad6362ef-d80b-47b8-a7f7-0024e434eb2b.png",
      quote: "Anticyclone's music has this incredible ability to transport you to another world. His concerts are pure magic - the production, the sound quality, everything is top-notch. Can't wait for his next tour!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Fan Feedback
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            What fans are saying about Anticyclone's electrifying performances, 
            innovative music style, and unforgettable live concert experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-primary/20"
                  />
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">{testimonial.name}</h3>
                    <p className="text-foreground/60 text-sm">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-neon-purple fill-current" />
                  ))}
                </div>

                <div className="relative">
                  <Quote className="h-8 w-8 text-primary/30 absolute -top-2 -left-2" />
                  <p className="text-foreground/80 italic leading-relaxed pl-6">
                    "{testimonial.quote}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-card border border-primary/20 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Join the Experience</h3>
            <p className="text-foreground/80 mb-6">
              Be part of the Anticyclone community and experience the future of electronic music live!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center text-foreground/70">
                <Star className="h-5 w-5 text-neon-purple mr-2" />
                <span>500+ Live Shows</span>
              </div>
              <div className="flex items-center text-foreground/70">
                <Star className="h-5 w-5 text-neon-blue mr-2" />
                <span>100k+ Fans Worldwide</span>
              </div>
              <div className="flex items-center text-foreground/70">
                <Star className="h-5 w-5 text-neon-pink mr-2" />
                <span>International Recognition</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;