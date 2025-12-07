import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Upload, Search, GitBranch, MessageSquare } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const Demo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Back Link */}
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Interactive <span className="text-gradient">Demo</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience the power of Codebase Navigator AI. Choose a sample repository or upload your own.
              </p>
            </div>

            {/* Demo Options */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card variant="feature" className="p-6 cursor-pointer group">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Upload className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Upload Repository</h3>
                  <p className="text-muted-foreground text-sm">
                    Connect your GitHub repo or upload a zip file to analyze your own codebase.
                  </p>
                  <Button variant="outline" className="mt-2">
                    Connect GitHub
                  </Button>
                </div>
              </Card>

              <Card variant="feature" className="p-6 cursor-pointer group">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <GitBranch className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold">Try Sample Repos</h3>
                  <p className="text-muted-foreground text-sm">
                    Explore pre-loaded open-source projects like React, Express, or Django.
                  </p>
                  <Button variant="secondary" className="mt-2">
                    Browse Samples
                  </Button>
                </div>
              </Card>
            </div>

            {/* Demo Interface Preview */}
            <Card variant="glow" className="overflow-hidden">
              <div className="p-6 border-b border-border/50">
                <h3 className="font-semibold flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  Ask About Your Codebase
                </h3>
              </div>
              
              <div className="p-6 bg-muted/30">
                {/* Sample Questions */}
                <div className="space-y-3 mb-6">
                  <p className="text-sm text-muted-foreground">Try these sample questions:</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "How does authentication work?",
                      "Show me the database schema",
                      "What are the main API endpoints?",
                      "Generate documentation for utils/",
                    ].map((q, i) => (
                      <button 
                        key={i}
                        className="px-3 py-1.5 rounded-full bg-muted border border-border/50 text-sm text-muted-foreground hover:bg-primary/10 hover:border-primary/30 hover:text-foreground transition-colors"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input */}
                <div className="flex gap-3">
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input 
                      type="text"
                      placeholder="Ask anything about your codebase..."
                      className="w-full h-12 pl-12 pr-4 rounded-xl bg-background border border-border focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <Button variant="hero">
                    Ask
                  </Button>
                </div>
              </div>
            </Card>

            {/* Coming Soon Note */}
            <p className="text-center text-sm text-muted-foreground mt-8">
              Full demo experience coming soon. Sign up for early access.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Demo;
