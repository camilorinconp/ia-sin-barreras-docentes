import { Button } from "@/components/ui/button";
import { useState } from "react";
import LogoProcessor from "./LogoProcessor";

const Header = () => {
  const [logoUrl, setLogoUrl] = useState<string>('/lovable-uploads/7714c3b9-e349-4290-abe2-d780d6a516a0.png');

  const handleLogoProcessed = (processedUrl: string) => {
    setLogoUrl(processedUrl);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Posición principal UX */}
          <div className="flex items-center space-x-3">
            <img 
              src={logoUrl}
              alt="IA Sin Barreras Logo" 
              className="h-10 w-auto"
            />
            <LogoProcessor onProcessed={handleLogoProcessed} />
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#programa" className="text-muted-foreground hover:text-foreground transition-colors">
              Programa
            </a>
            <a href="#beneficios" className="text-muted-foreground hover:text-foreground transition-colors">
              Beneficios
            </a>
            <a href="#comunidad" className="text-muted-foreground hover:text-foreground transition-colors">
              Comunidad
            </a>
          </nav>
          
          {/* CTA Button */}
          <Button className="bg-gradient-primary hover:shadow-hero-glow transition-all duration-300">
            Aplicar Ahora
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;