import { Star, Shield, Zap, Clock, CheckCircle } from "lucide-react";

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

  return (
    <section className="py-12 md:py-16 bg-card/50 border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {credentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{item.title}</p>
                  <p className="text-sm font-semibold text-foreground mt-1">{item.value}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
