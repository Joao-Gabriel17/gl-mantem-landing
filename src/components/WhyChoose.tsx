import { Clock, Wrench, Heart, MessageCircle } from "lucide-react";
import { AutoCarousel } from "./AutoCarousel";

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

  const pillarCards = pillars.map((pillar, index) => {
    const Icon = pillar.icon;
    return (
      <div
        key={index}
        className="group text-center space-y-6 p-8 md:p-10 rounded-2xl bg-card/50 border border-border hover:border-primary/30 hover:bg-card transition-all duration-300 hover:shadow-lg h-full"
      >
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
          <Icon className="w-10 h-10 text-primary" />
        </div>

        {/* Content */}
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-foreground">
            {pillar.title}
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {pillar.description}
          </p>
        </div>
      </div>
    );
  });

  return (
    <section id="why-choose" className="py-24 md:py-40 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-24 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8">
            Por Que Escolher a G&L?
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Comprometimento com excelência em cada detalhe do serviço
          </p>
        </div>

        {/* Pillars Carousel */}
        <AutoCarousel autoplayDelay={4500}>
          {pillarCards}
        </AutoCarousel>
      </div>
    </section>
  );
};
