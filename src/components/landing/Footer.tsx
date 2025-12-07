import { Brain, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-muted/30 to-background" />
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Brain className="w-5 h-5 text-primary" />
              </div>
              <span className="font-bold text-lg">Codebase Navigator AI</span>
            </div>

            {/* Links */}
            <div className="flex items-center gap-6">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="text-sm">GitHub</span>
              </a>
              <a 
                href="mailto:hello@codebasenavigator.ai"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm">Contact</span>
              </a>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-8 pt-6 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Codebase Navigator AI. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-foreground transition-colors">Docs</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
