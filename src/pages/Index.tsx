import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import InfoSection from "@/components/InfoSection";
import ValidationSection from "@/components/ValidationSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <div id="beneficios">
        <BenefitsSection />
      </div>
      <div id="programa">
        <InfoSection />
      </div>
      <div id="comunidad">
        <ValidationSection />
      </div>
    </main>
  );
};

export default Index;
