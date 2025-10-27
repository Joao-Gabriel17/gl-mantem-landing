import { Card } from "@/components/ui/card";
import { Sparkles, Wind, Wrench } from "lucide-react";
import cleanAirImage from "@/assets/clean-air-health.jpg";
import professionalInstallImage from "@/assets/professional-install.jpg";
import maintenanceImage from "@/assets/maintenance-service.jpg";

export const Features = () => {
  const mainFeature = {
    title: "Serviço Completo de Climatização",
    description:
      "Instalação, higienização e manutenção com acabamento impecável e padrão profissional. Mais conforto, ar limpo e menor consumo de energia.",
  };

  const secondaryFeatures = [
    {
      icon: Wind,
      title: "Ar Limpo e Saudável",
      description:
        "Remove ácaros, fungos e bactérias, elimina mau cheiro e melhora a qualidade do ar. Gera eficiência e economia na conta.",
      image: cleanAirImage,
    },
    {
      icon: Sparkles,
      title: "Instalação Profissional",
      description:
        "Nível, dreno oculto e isolamento térmico corretos para alto desempenho e estética limpa. Segurança elétrica e fixação reforçada.",
      image: professionalInstallImage,
    },
    {
      icon: Wrench,
      title: "Manutenção Preventiva",
      description:
        "Evita falhas e aumenta a vida útil do equipamento, no verão e no inverno. Agendamento flexível e pontualidade garantida.",
      image: maintenanceImage,
    },
  ];

  return (
    <section id="features" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground">
            Soluções completas em climatização com qualidade e garantia
          </p>
        </div>

        {/* Main Feature Card */}
        <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-card/50 border-border mb-8 hover:shadow-elevated transition-all duration-300 animate-fade-in">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              {mainFeature.title}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {mainFeature.description}
            </p>
          </div>
        </Card>

        {/* Secondary Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {secondaryFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group overflow-hidden bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-elevated animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Feature Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>

                {/* Feature Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
