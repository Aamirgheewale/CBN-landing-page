import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Sparkles } from "lucide-react";

const DemoSection = () => {
  return (
    <section className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Interactive Demo</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold">
                See It In <span className="text-gradient">Action</span>
              </h2>
              
              <p className="text-lg text-muted-foreground">
                Experience the power of Codebase Navigator AI firsthand. Upload a repository or explore 
                our sample codebases to see how quickly you can understand any codebase.
              </p>

              <ul className="space-y-3">
                {[
                  "Ask natural language questions about any code",
                  "Get instant architecture visualizations",
                  "Generate documentation on-the-fly",
                  "Explore dependency graphs interactively",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>

              <Button asChild variant="hero" size="lg">
                <Link to="/demo">
                  <Play className="w-5 h-5 mr-2" />
                  Launch Demo
                </Link>
              </Button>
            </div>

            {/* Demo Preview Card */}
            <Card variant="glow" className="aspect-video relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
              
              {/* Mock Terminal/Interface */}
              <div className="absolute inset-4 rounded-lg bg-background/80 border border-border/50 overflow-hidden">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-muted/50">
                  <div className="w-3 h-3 rounded-full bg-destructive/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-accent/70" />
                  <span className="ml-3 text-xs text-muted-foreground font-mono">codebase-navigator</span>
                </div>
                
                {/* Terminal Content */}
                <div className="p-4 font-mono text-sm space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-primary">$</span>
                    <span className="text-muted-foreground">ask "How does authentication work?"</span>
                  </div>
                  <div className="text-accent animate-pulse">Analyzing codebase...</div>
                  <div className="mt-4 p-3 rounded bg-muted/30 border border-border/30">
                    <p className="text-foreground/80 text-xs leading-relaxed">
                      The authentication system uses JWT tokens with refresh token rotation. 
                      The main flow is in <span className="text-primary">src/auth/handler.ts</span>...
                    </p>
                  </div>
                </div>
              </div>

              {/* Play Button Overlay */}
              <Link 
                to="/demo"
                className="absolute inset-0 flex items-center justify-center bg-background/20 opacity-0 hover:opacity-100 transition-opacity group"
              >
                <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center shadow-lg shadow-primary/50 group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" />
                </div>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
