import { Clock, Wrench, Heart, MessageCircle } from "lucide-react";

export const WhyChoose = () => {
  const pillars = [
    {
      icon: Clock,
      title: "Pontualidade e horário flexível",
      description:
        "Chegamos no horário combinado e atendemos no seu melhor horário, sem travar sua rotina.",
    },
    {
      icon: Wrench,
      title: "Instalação profissional, sem gambiarra",
      description:
        "Nível, dreno oculto e isolamento correto garantem desempenho, estética e economia.",
    },
    {
      icon: Heart,
      title: "Saúde e eficiência",
      description:
        "Higienização que elimina ácaros/fungos, melhora a qualidade do ar e reduz o consumo de energia.",
    },
    {
      icon: MessageCircle,
      title: "Atendimento humanizado com garantia",
      description:
        "Suporte rápido no WhatsApp, equipe treinada e serviço com garantia e pós-venda.",
    },
  ];

  return (
    <section id="why-choose" className="py-20 md:py-32 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Por Que Escolher a G&L?
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprometimento com excelência em cada detalhe do serviço
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="group text-center space-y-4 p-6 rounded-2xl bg-card/50 border border-border hover:border-primary/30 hover:bg-card transition-all duration-300 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
