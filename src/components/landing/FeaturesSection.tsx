import { Card, CardContent } from "@/components/ui/card";
import { Code2, GitBranch, FileText, MessageSquare } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Deep Code Understanding",
    description: "AST-aware RAG that truly understands your code structure, functions, classes, and their relationships — not just text matching.",
    color: "primary",
  },
  {
    icon: GitBranch,
    title: "Dependency & Architecture Mapping",
    description: "Automatically visualizes your entire codebase architecture, dependencies, and data flow in intuitive, interactive graphs.",
    color: "secondary",
  },
  {
    icon: FileText,
    title: "Auto-Generated Documentation",
    description: "Creates comprehensive, accurate documentation for any codebase — from function signatures to high-level architecture overviews.",
    color: "accent",
  },
  {
    icon: MessageSquare,
    title: "Natural-Language Querying",
    description: "Ask questions in plain English and get precise, citation-rich answers powered by GPT-4, Claude, or Llama models.",
    color: "primary",
  },
];

const colorClasses = {
  primary: {
    icon: "text-primary",
    glow: "shadow-primary/20",
    border: "group-hover:border-primary/30",
    bg: "bg-primary/10",
  },
  secondary: {
    icon: "text-secondary",
    glow: "shadow-secondary/20",
    border: "group-hover:border-secondary/30",
    bg: "bg-secondary/10",
  },
  accent: {
    icon: "text-accent",
    glow: "shadow-accent/20",
    border: "group-hover:border-accent/30",
    bg: "bg-accent/10",
  },
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container relative z-10 px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Powered by <span className="text-gradient">Intelligent RAG</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Four breakthrough capabilities that transform how you understand and navigate code.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const colors = colorClasses[feature.color as keyof typeof colorClasses];
            return (
              <Card 
                key={index} 
                variant="feature"
                className={`group ${colors.border}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col gap-4">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                      <feature.icon className={`w-7 h-7 ${colors.icon}`} />
                    </div>
                    
                    {/* Content */}
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
