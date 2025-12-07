import ragPipeline from "@/assets/rag-pipeline.png";

const HowItWorksSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-muted/20" />
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            How Codebase Navigator AI <span className="text-gradient">Thinks</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our multi-stage retrieval pipeline ensures precise, citation-rich answers every time.
          </p>
        </div>

        {/* Diagram Container */}
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-border/50 glass-card p-2">
            {/* Glowing border effect */}
            <div className="absolute inset-0 rounded-2xl border-gradient pointer-events-none" />
            
            {/* Image */}
            <img 
              src={ragPipeline} 
              alt="RAG Pipeline: Retriever to Ranker to Context Builder to LLM to Final Answer" 
              className="w-full h-auto rounded-xl"
            />
          </div>

          {/* Explanation */}
          <div className="mt-12 max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground leading-relaxed text-lg">
              Our multi-stage retrieval pipeline <span className="text-primary font-medium">ranks</span>, 
              <span className="text-secondary font-medium"> scores</span>, and 
              <span className="text-accent font-medium"> synthesizes</span> code snippets before passing them to 
              advanced LLMs — ensuring precise, citation-rich answers every time.
            </p>
          </div>

          {/* Pipeline Steps */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12">
            {[
              { step: "1", title: "Retriever", desc: "Vector search across codebase" },
              { step: "2", title: "Ranker", desc: "Re-rank by relevance" },
              { step: "3", title: "Context Builder", desc: "Assemble optimal context" },
              { step: "4", title: "LLM", desc: "Generate intelligent response" },
              { step: "5", title: "Final Answer", desc: "Citation-rich output" },
            ].map((item, index) => (
              <div 
                key={index} 
                className="glass-card rounded-xl p-4 text-center border border-border/30 hover:border-primary/30 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-primary/20 text-primary font-bold text-sm flex items-center justify-center mx-auto mb-2">
                  {item.step}
                </div>
                <h4 className="font-semibold text-foreground text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
