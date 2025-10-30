import { Card } from "@/components/ui/card";
import { Sparkles, Wind, Wrench } from "lucide-react";
import cleanAirImage from "@/assets/clean-air-health.jpg";
import professionalInstallImage from "@/assets/professional-install.jpg";
import maintenanceImage from "@/assets/maintenance-service.jpg";
import { AutoCarousel } from "./AutoCarousel";

export const Features = () => {
  const mainFeature = {
    title: "Serviço Completo de Climatização",
    description:
      "Instalação, higienização e manutenção com acabamento impecável e padrão profissional. Mais conforto, ar limpo e menor consumo de energia.",
  };

  const secondaryFeatures = [
    {
      icon: Sparkles,
      title: "Instalação sem gambiarra",
      description:
        "• Dreno oculto e nível perfeito para máximo desempenho\n• Isolamento térmico correto - economia de até 30% na conta\n• Fixação reforçada e segurança elétrica garantida",
      image: professionalInstallImage,
    },
    {
      icon: Wind,
      title: "Higienização que você sente a diferença",
      description:
        "• Elimina ácaros, fungos e mau cheiro - respire melhor\n• Reduz consumo de energia e aumenta vida útil do aparelho\n• Produtos profissionais, ambiente protegido durante o serviço",
      image: cleanAirImage,
    },
    {
      icon: Wrench,
      title: "Manutenção que evita surpresas",
      description:
        "• Previne falhas no verão e no inverno\n• Aumenta vida útil do seu equipamento em até 50%\n• Agendamento flexível - atendemos no seu horário",
      image: maintenanceImage,
    },
  ];

  const featureCards = secondaryFeatures.map((feature, index) => {
    const Icon = feature.icon;
    return (
      <Card
        key={index}
        className="group overflow-hidden bg-surface-700 border-line-700 hover:border-primary-500/30 transition-all duration-300 hover:shadow-elevated h-full"
      >
        {/* Feature Image */}
        <div className="relative h-56 md:h-64 overflow-hidden">
          <img
            src={feature.image}
            alt={`${feature.title} - Serviço profissional de climatização G&L Manutenções Londrina`}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
          
          {/* Icon Badge */}
          <div className="absolute top-6 right-6 w-14 h-14 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
            <Icon className="w-7 h-7 text-primary-foreground" />
          </div>
        </div>

        {/* Feature Content */}
        <div className="p-8 space-y-4">
          <h3 className="text-2xl font-bold text-textc-100">
            {feature.title}
          </h3>
          <div className="text-lg text-textc-300 leading-relaxed whitespace-pre-line">
            {feature.description}
          </div>
        </div>
      </Card>
    );
  });

  return (
    <section id="features" className="py-24 md:py-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-24 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-textc-100 mb-8">
            Nossos Serviços
          </h2>
          <p className="text-xl md:text-2xl text-textc-300">
            Soluções completas em climatização com qualidade e garantia
          </p>
        </div>

        {/* Main Feature Card */}
        <Card className="p-10 md:p-16 bg-gradient-to-br from-surface-700 to-surface-700/50 border-line-700 mb-12 md:mb-16 hover:shadow-elevated transition-all duration-300 animate-fade-in">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-textc-100">
              {mainFeature.title}
            </h3>
            <p className="text-xl md:text-2xl text-textc-300 leading-relaxed">
              {mainFeature.description}
            </p>
          </div>
        </Card>

        {/* Secondary Feature Cards Carousel */}
        <AutoCarousel autoplayDelay={4000}>
          {featureCards}
        </AutoCarousel>
      </div>
    </section>
  );
};
