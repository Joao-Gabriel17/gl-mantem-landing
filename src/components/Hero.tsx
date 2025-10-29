import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Shield } from "lucide-react";
import heroImage from "@/assets/hero-ac-installation.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 md:pt-32 pb-20 md:pb-32 overflow-hidden bg-bg-900">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 -z-10" style={{background: "linear-gradient(135deg, rgba(255, 122, 0, 0.06) 0%, rgba(229, 110, 0, 0) 60%)"}} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Content */}
          <div className="space-y-10 lg:space-y-12 animate-fade-in-up">
            {/* Achievement Badge */}
            <Badge variant="outline" className="inline-flex items-center gap-2 px-5 py-2.5 text-sm border-primary-500/30 bg-primary-500/10">
              <Shield className="w-4 h-4 text-primary-500" />
              Climatização de confiança em Londrina
            </Badge>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-textc-100">
              Instalação e higienização de ar-condicionado com{" "}
              <span className="text-primary-500">pontualidade</span> e{" "}
              <span className="text-accent-amber-400">acabamento impecável</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl text-textc-300 leading-relaxed max-w-2xl">
              Serviço profissional com garantia, equipe treinada e atendimento humanizado. 
              Respirar ar limpo e economizar energia nunca foi tão fácil.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <Button
                variant="hero"
                size="xl"
                onClick={() => window.open("https://wa.me/5543984910234", "_blank")}
                className="w-full sm:w-auto"
              >
                Chamar no WhatsApp
              </Button>
              <Button
                variant="hero-outline"
                size="xl"
                onClick={() => window.open("https://wa.me/5543984910234", "_blank")}
                className="w-full sm:w-auto"
              >
                Agendar visita/Orçamento
              </Button>
            </div>

            {/* Social Metrics */}
            <div className="flex flex-wrap items-center gap-6 pt-6 text-base text-textc-300">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary-500" />
                <span>Atendimento rápido em Londrina e região</span>
              </div>
              <div className="h-4 w-px bg-border hidden sm:block" />
              <span>Orçamento sem compromisso</span>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={heroImage}
                alt="Técnico profissional instalando ar-condicionado com precisão"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            
            {/* Floating decoration */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 rounded-full blur-3xl animate-float" />
          </div>
        </div>
      </div>
    </section>
  );
};
