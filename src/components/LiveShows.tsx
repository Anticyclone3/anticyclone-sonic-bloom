import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Ticket } from "lucide-react";

const LiveShows = () => {
  const shows = [
    {
      venue: "CSMU College Main Auditorium",
      location: "India",
      date: "December 15, 2024",
      time: "8:00 PM",
      status: "upcoming",
      capacity: "2,000",
      type: "College Festival",
    },
    {
      venue: "Electric Dreams Festival",
      location: "Mumbai, India", 
      date: "January 20, 2025",
      time: "10:00 PM",
      status: "upcoming",
      capacity: "5,000",
      type: "Music Festival",
    },
    {
      venue: "CSMU College Fresher's Night",
      location: "India",
      date: "September 10, 2024",
      time: "9:00 PM", 
      status: "completed",
      capacity: "1,500",
      type: "College Event",
    },
    {
      venue: "Underground Sessions",
      location: "Delhi, India",
      date: "August 5, 2024", 
      time: "11:00 PM",
      status: "completed",
      capacity: "800",
      type: "Club Night",
    },
  ];

  const upcomingShows = shows.filter(show => show.status === "upcoming");
  const pastShows = shows.filter(show => show.status === "completed");

  return (
    <section id="shows" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Live Shows & Performances
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Experience the energy of Anticyclone live - from intimate college venues 
            to massive festival stages across India.
          </p>
        </div>

        {/* Upcoming Shows */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-foreground flex items-center gap-3">
            <Calendar className="h-8 w-8 text-neon-blue" />
            Upcoming Shows
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingShows.map((show, index) => (
              <Card key={index} className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-1">{show.venue}</h4>
                      <div className="flex items-center gap-2 text-foreground/70">
                        <MapPin className="h-4 w-4" />
                        <span>{show.location}</span>
                      </div>
                    </div>
                    <span className="bg-neon-blue/20 text-neon-blue px-3 py-1 rounded-full text-sm font-medium">
                      {show.type}
                    </span>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-foreground/80">
                      <Calendar className="h-4 w-4" />
                      <span>{show.date} • {show.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground/80">
                      <Users className="h-4 w-4" />
                      <span>Capacity: {show.capacity}</span>
                    </div>
                  </div>

                  <Button variant="neon" className="w-full group">
                    <Ticket className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    Get Tickets
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Past Shows */}
        <div>
          <h3 className="text-3xl font-bold mb-8 text-foreground flex items-center gap-3">
            <Users className="h-8 w-8 text-neon-purple" />
            Past Performances
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {pastShows.map((show, index) => (
              <Card key={index} className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 opacity-80">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-1">{show.venue}</h4>
                      <div className="flex items-center gap-2 text-foreground/70">
                        <MapPin className="h-4 w-4" />
                        <span>{show.location}</span>
                      </div>
                    </div>
                    <span className="bg-secondary/50 text-foreground/60 px-3 py-1 rounded-full text-sm">
                      {show.type}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-foreground/80">
                      <Calendar className="h-4 w-4" />
                      <span>{show.date} • {show.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground/80">
                      <Users className="h-4 w-4" />
                      <span>Capacity: {show.capacity}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="xl">
            <Calendar className="mr-2 h-5 w-5" />
            Book Anticyclone for Your Event
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LiveShows;