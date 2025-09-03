const ValidationSection = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20" />
            <div className="relative bg-card/80 backdrop-blur-sm rounded-3xl p-12 border border-border/50">
              <div className="space-y-6">
                <div className="w-20 h-20 mx-auto bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">IA</span>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground">
                  Respaldado por líderes en innovación
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  IA Sin Barreras es una iniciativa de Burodap, reconocida por el BID Lab y Meta como una de las 10 comunidades más innovadoras de América Latina. Nos une un objetivo común: empoderar a los jóvenes para que no solo entiendan la IA, sino que también la construyan.
                </p>
                
                <div className="flex flex-wrap justify-center gap-8 pt-8">
                  <div className="flex items-center space-x-3 transition-opacity hover:opacity-80 cursor-pointer">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                      <span className="text-xs font-bold text-primary">BID</span>
                    </div>
                    <span className="text-sm text-muted-foreground">BID Lab</span>
                  </div>
                  <div className="flex items-center space-x-3 transition-opacity hover:opacity-80 cursor-pointer">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                      <span className="text-xs font-bold text-primary">M</span>
                    </div>
                    <span className="text-sm text-muted-foreground">Meta</span>
                  </div>
                  <div className="flex items-center space-x-3 transition-opacity hover:opacity-80 cursor-pointer">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                      <span className="text-xs font-bold text-primary">B</span>
                    </div>
                    <span className="text-sm text-muted-foreground">Burodap</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValidationSection;