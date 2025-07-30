import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink, Music as MusicIcon, Award } from "lucide-react";

const Music = () => {
  const tracks = [
    {
      title: "Pendulum",
      description: "The breakthrough hit that put Anticyclone on the global map",
      label: "LW Records (UK)",
      genre: "Progressive House",
      featured: true,
    },
    {
      title: "Neon Nights",
      description: "An electrifying journey through pulsating rhythms",
      label: "Independent",
      genre: "Techno",
      featured: false,
    },
    {
      title: "Digital Storm",
      description: "High-energy dance pop anthem for the festival circuit",
      label: "Independent", 
      genre: "Dance Pop",
      featured: false,
    },
    {
      title: "Frequency Rising",
      description: "Deep house vibes with ethereal vocal elements",
      label: "Independent",
      genre: "Deep House",
      featured: false,
    },
  ];

  return (
    <section id="music" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Music & Releases
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Explore the sonic universe of Anticyclone through chart-topping singles 
            and underground classics that define the future of electronic music.
          </p>
        </div>

        <div className="grid gap-8">
          {tracks.map((track, index) => (
            <Card 
              key={track.title}
              className={`bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow ${
                track.featured ? 'ring-2 ring-primary/50' : ''
              }`}
            >
              <CardContent className="p-8">
                <div className="grid md:grid-cols-4 gap-6 items-center">
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold text-foreground">{track.title}</h3>
                      {track.featured && (
                        <div className="flex items-center gap-1 bg-primary/20 px-2 py-1 rounded-full">
                          <Award className="h-4 w-4 text-primary" />
                          <span className="text-xs font-medium text-primary">HIT SINGLE</span>
                        </div>
                      )}
                    </div>
                    <p className="text-foreground/70 mb-3">{track.description}</p>
                    <div className="flex flex-wrap gap-2 text-sm">
                      <span className="bg-primary/20 text-primary px-2 py-1 rounded-full">
                        {track.genre}
                      </span>
                      <span className="bg-accent/20 text-accent px-2 py-1 rounded-full">
                        {track.label}
                      </span>
                    </div>
                  </div>
                  
                  <div className="md:col-span-1">
                    <div className="bg-primary/10 rounded-lg p-6 text-center">
                      <MusicIcon className="h-12 w-12 text-primary mx-auto mb-2" />
                      <div className="text-sm text-foreground/60">Available on</div>
                      <div className="font-semibold text-primary">Spotify</div>
                    </div>
                  </div>

                  <div className="md:col-span-1 flex flex-col gap-2">
                    <Button variant="neon" className="w-full group">
                      <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                      Play Now
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full group"
                      onClick={() => window.open('https://open.spotify.com/track/7eNEXLr2ogr5gwlcKgWm3i?si=1cd4feed75e4433b', '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                      Open in Spotify
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="xl">
            <ExternalLink className="mr-2 h-5 w-5" />
            Listen on Spotify
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Music;