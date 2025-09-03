import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import LogoProcessor from "./LogoProcessor";

const Header = () => {
  const [logoUrl, setLogoUrl] = useState<string>('/lovable-uploads/7714c3b9-e349-4290-abe2-d780d6a516a0.png');

  const handleLogoProcessed = (processedUrl: string) => {
    setLogoUrl(processedUrl);
  };

  const navLinks = [
    { href: "#programa", label: "Programa" },
    { href: "#beneficios", label: "Beneficios" },
    { href: "#comunidad", label: "Comunidad" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={logoUrl}
              alt="IA Sin Barreras Logo" 
              className="h-10 w-auto"
            />
            <LogoProcessor onProcessed={handleLogoProcessed} />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                {link.label}
              </a>
            ))}
          </nav>
          
          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <Button className="bg-gradient-primary hover:shadow-hero-glow transition-all duration-300">
              Aplicar Ahora
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-6 pt-10">
                  {navLinks.map((link) => (
                    <a key={link.href} href={link.href} className="text-2xl text-foreground hover:text-primary transition-colors">
                      {link.label}
                    </a>
                  ))}
                  <Button className="bg-gradient-primary hover:shadow-hero-glow transition-all duration-300 mt-6">
                    Aplicar Ahora
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
