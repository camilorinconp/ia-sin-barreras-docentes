const InfoSection = () => {
  return (
    <section className="py-24 bg-gradient-accent relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Un programa diseñado para el impacto real
          </h2>
          
          <div className="prose prose-lg prose-invert mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Este programa intensivo está diseñado para que los docentes co-creen un semillero de investigación en IA desde cero. Conocerán las metodologías y herramientas para guiar a los estudiantes en el diseño y creación de proyectos con impacto social, usando tecnologías accesibles y amigables.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Esta capacitación de 8 a 10 semanas es la base para asegurar la participación de tu colegio en nuestra comunidad de hasta 100 instituciones pioneras.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 pt-12">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">8-10</div>
              <div className="text-sm text-muted-foreground">Semanas de capacitación</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">100</div>
              <div className="text-sm text-muted-foreground">Instituciones pioneras</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">3</div>
              <div className="text-sm text-muted-foreground">Docentes por institución</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;