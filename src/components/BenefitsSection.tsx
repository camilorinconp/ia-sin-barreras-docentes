import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Rocket } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: GraduationCap,
      title: "Formación de líderes",
      description: "Empodera a 3 docentes de tu institución con un curso intensivo en Fundamentos de IA."
    },
    {
      icon: Award,
      title: "Certificación y respaldo",
      description: "Los docentes obtendrán una certificación oficial que valida su conocimiento."
    },
    {
      icon: Rocket,
      title: "Prioridad para el futuro",
      description: "Asegura la participación de tu colegio en los semilleros de IA del próximo año escolar."
    }
  ];

  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-card-glow transition-all duration-300 group"
            >
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;