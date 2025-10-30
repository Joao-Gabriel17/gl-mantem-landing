import { Card } from "@/components/ui/card";
import { Calendar, MessageCircle, Wrench, CheckCircle } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: MessageCircle,
      step: "1",
      title: "Chamar no WhatsApp",
      description: "Respondemos em até 30 minutos. Conte o que precisa e tire suas dúvidas.",
    },
    {
      icon: Calendar,
      step: "2",
      title: "Agendar visita",
      description: "Você escolhe dia e horário. Chegamos pontualmente (98% no horário combinado).",
    },
    {
      icon: Wrench,
      step: "3",
      title: "Realizar serviço",
      description: "Equipe certificada NR10, ambiente protegido, acabamento impecável. 3-6h por instalação.",
    },
    {
      icon: CheckCircle,
      step: "4",
      title: "Garantia e suporte",
      description: "90 dias de garantia + suporte rápido via WhatsApp. Você respira tranquilo.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-surface-700/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-textc-100 mb-6">
            Como Funciona
          </h2>
          <p className="text-xl text-textc-300">
            Processo simples e transparente do orçamento até o pós-venda
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="relative p-8 bg-surface-700 border-line-700 hover:border-primary-500/30 transition-all duration-300 text-center space-y-4"
              >
                {/* Step Number Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-primary-500 text-white font-bold text-xl flex items-center justify-center shadow-lg">
                  {item.step}
                </div>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-500/10">
                  <Icon className="w-8 h-8 text-primary-500" />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-textc-100">
                    {item.title}
                  </h3>
                  <p className="text-base text-textc-300 leading-relaxed">
                    {item.description}
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
