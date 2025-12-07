import { Button } from "@/components/ui/button";
import { Brain, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="AI Neural Network" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-hero-gradient" />
      </div>

      {/* Animated Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-accent/15 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "3s" }} />

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6 py-24">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 animate-fade-in">
            <Brain className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Next-Gen Code Intelligence</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Understand Any Codebase{" "}
            <span className="text-gradient">in Seconds</span>
            {" "}— Not Months.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            AI that explains, maps, and documents your entire repository — using next-gen RAG intelligence. 
            Stop wasting hours deciphering legacy code.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button asChild variant="hero" size="lg">
              <a href="https://codebasenavigator.vercel.app/" target="_blank" rel="noopener noreferrer">
                Try the Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button asChild variant="hero-outline" size="lg">
              <a href="#features">
                Explore Features
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>10,000+ repos analyzed</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>GPT-4 & Claude powered</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span>AST-aware retrieval</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
