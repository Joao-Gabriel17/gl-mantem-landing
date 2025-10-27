import { Star, Shield, Zap, Clock, CheckCircle } from "lucide-react";
import { AutoCarousel } from "./AutoCarousel";

export const CredibilityBar = () => {
  const credentials = [
    {
      icon: Star,
      title: "Avaliações Google",
      value: "Nota 4,9 / 32 reviews",
    },
    {
      icon: Shield,
      title: "Garantia de serviço",
      value: "90 dias de garantia",
    },
    {
      icon: Zap,
      title: "NR10",
      value: "Equipe treinada",
    },
    {
      icon: Clock,
      title: "Pontualidade",
      value: "Comprovada",
    },
    {
      icon: CheckCircle,
      title: "WhatsApp Business",
      value: "Atendimento ágil",
    },
  ];

  const credentialItems = credentials.map((item, index) => {
    const Icon = item.icon;
    return (
      <div
        key={index}
        className="flex flex-col items-center text-center space-y-3 p-6 animate-fade-in"
      >
        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
          <Icon className="w-7 h-7 text-primary" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground mb-1">{item.title}</p>
          <p className="text-base font-semibold text-foreground">{item.value}</p>
        </div>
      </div>
    );
  });

  return (
    <section className="py-16 md:py-20 bg-surface-700/50 border-y border-line-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <AutoCarousel autoplayDelay={3500}>
          {credentialItems}
        </AutoCarousel>
      </div>
    </section>
  );
};
