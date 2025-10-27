import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Clock, Phone } from "lucide-react";
import whatsappMockup from "@/assets/whatsapp-mockup.jpg";

export const FinalCTA = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-card/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-6xl mx-auto bg-card/80 backdrop-blur-sm border-border shadow-elevated overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 p-8 md:p-12">
            {/* Left Column - Content */}
            <div className="space-y-8 flex flex-col justify-center">
              <div className="space-y-4 animate-fade-in-up">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Respire ar limpo hoje
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Instalação e higienização com pontualidade e acabamento impecável
                </p>
              </div>

              {/* CTAs */}
              <div className="space-y-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
                <Button
                  variant="hero"
                  size="xl"
                  onClick={() => window.open("https://wa.me/5543984910234", "_blank")}
                  className="w-full justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Chamar no WhatsApp (43) 98491-0234
                </Button>
                <Button
                  variant="hero-outline"
                  size="xl"
                  onClick={() => window.open("https://wa.me/5543984910234", "_blank")}
                  className="w-full justify-center"
                >
                  Agendar visita / orçamento
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="space-y-3 pt-4 animate-fade-in" style={{ animationDelay: "400ms" }}>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Atendimento em Londrina e região</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Orçamento sem compromisso</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Equipe treinada</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-semibold text-foreground">
                    Chegamos no horário combinado
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - Mockup */}
            <div className="flex items-center justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "300ms" }}>
              <div className="relative max-w-sm w-full">
                <img
                  src={whatsappMockup}
                  alt="WhatsApp Business G&L Manutenções"
                  className="w-full h-auto rounded-2xl shadow-elevated"
                />
                <div className="absolute -z-10 inset-0 bg-primary/20 rounded-2xl blur-2xl scale-110 animate-glow" />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
