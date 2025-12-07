import { XCircle, CheckCircle, ArrowRight } from "lucide-react";

const BenefitsSection = () => {
  const before = [
    "Hours spent deciphering unfamiliar code",
    "Outdated or missing documentation",
    "Constant context switching to trace dependencies",
    "Onboarding new devs takes weeks",
    "Fear of touching legacy systems",
  ];

  const after = [
    "Instant understanding with natural language queries",
    "Auto-generated, always up-to-date docs",
    "Visual architecture maps at your fingertips",
    "New team members productive in days",
    "Confident refactoring with full visibility",
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-muted/20" />
      
      <div className="container relative z-10 px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            The <span className="text-gradient">Transformation</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From developer frustration to 10x productivity.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 relative">
            {/* Arrow (desktop) */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center shadow-lg shadow-primary/30">
                <ArrowRight className="w-6 h-6 text-primary" />
              </div>
            </div>

            {/* Before Column */}
            <div className="glass-card rounded-2xl p-8 border border-destructive/20">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-destructive/20 flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-destructive" />
                </div>
                <span className="text-destructive">Before</span>
              </h3>
              <ul className="space-y-4">
                {before.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <XCircle className="w-5 h-5 text-destructive/60 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Arrow */}
            <div className="flex md:hidden justify-center -my-3">
              <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center rotate-90">
                <ArrowRight className="w-5 h-5 text-primary" />
              </div>
            </div>

            {/* After Column */}
            <div className="glass-card rounded-2xl p-8 border border-accent/20 relative overflow-hidden">
              {/* Subtle glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
              
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-3 relative">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-accent" />
                </div>
                <span className="text-accent">After</span>
              </h3>
              <ul className="space-y-4 relative">
                {after.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-foreground">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
