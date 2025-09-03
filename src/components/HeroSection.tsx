import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ai-education.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-secondary">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-accent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(262_83%_58%_/_0.1),transparent_70%)]" />
      
      {/* Hero Image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="AI Education Future" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight">
            El futuro de la educación está aquí: Conviértete en un líder en IA
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Únete a la comunidad IA Sin Barreras y capacita a tus docentes para liderar la próxima generación de innovación en tu colegio.
          </p>
          
          <div className="pt-8">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-gradient-primary hover:shadow-hero-glow transition-all duration-300 border-0"
            >
              ¡Asegura la beca para tu institución!
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-pulse delay-1000" />
    </section>
  );
};

export default HeroSection;