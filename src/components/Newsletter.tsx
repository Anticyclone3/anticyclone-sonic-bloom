import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Simulate newsletter subscription
    setIsSubscribed(true);
    toast.success("Welcome to the Anticyclone family! Check your inbox for exclusive content.");
    setEmail("");
    
    // Reset after 3 seconds for demo purposes
    setTimeout(() => {
      setIsSubscribed(false);
    }, 3000);
  };

  return (
    <section id="newsletter" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-gradient-card border-primary/30 shadow-glow overflow-hidden">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left Side - Newsletter Info */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <Mail className="h-8 w-8 text-neon-blue" />
                  <h3 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    Join the Storm
                  </h3>
                </div>
                
                <p className="text-foreground/80 text-lg mb-6 leading-relaxed">
                  Get exclusive access to new releases, behind-the-scenes content, 
                  early ticket sales, and special remixes delivered straight to your inbox.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-foreground/70">
                    <CheckCircle className="h-5 w-5 text-neon-blue" />
                    <span>New track releases first</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground/70">
                    <CheckCircle className="h-5 w-5 text-neon-blue" />
                    <span>Exclusive remixes & live sets</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground/70">
                    <CheckCircle className="h-5 w-5 text-neon-blue" />
                    <span>Early access to show tickets</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground/70">
                    <CheckCircle className="h-5 w-5 text-neon-blue" />
                    <span>Behind-the-scenes studio content</span>
                  </div>
                </div>

                {!isSubscribed ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-background/50 border-primary/30 focus:border-primary text-foreground"
                    />
                    <Button type="submit" variant="neon" className="w-full group">
                      <Send className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                      Subscribe to Newsletter
                    </Button>
                  </form>
                ) : (
                  <div className="text-center py-4">
                    <CheckCircle className="h-16 w-16 text-neon-blue mx-auto mb-4 animate-pulse-neon" />
                    <p className="text-xl font-semibold text-neon-blue">
                      Welcome to the family!
                    </p>
                    <p className="text-foreground/70">
                      Check your inbox for a welcome message
                    </p>
                  </div>
                )}

                <p className="text-xs text-foreground/50 mt-4">
                  By subscribing, you agree to receive promotional emails. 
                  You can unsubscribe at any time.
                </p>
              </div>

              {/* Right Side - Visual */}
              <div className="relative min-h-96 md:min-h-full">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(135deg, rgba(139, 69, 255, 0.3), rgba(59, 130, 246, 0.3)), url('/lovable-uploads/820f11f7-03db-45cc-a494-85e174d4d73a.png')`
                  }}
                />
                
                {/* Animated elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary/20 rounded-full blur-xl animate-float mx-auto mb-4" />
                    <div className="w-16 h-16 bg-accent/20 rounded-full blur-xl animate-float mx-auto" style={{ animationDelay: '1s' }} />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;