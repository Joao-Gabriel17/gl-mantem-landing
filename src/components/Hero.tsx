import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Shield } from "lucide-react";
import heroImage from "@/assets/hero-ac-installation.jpg";
import { trackEvent } from "@/lib/analytics";
import { WhatsAppLink } from "@/components/WhatsAppLink";

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
              Certificação NR10 • +350 clientes em Londrina
            </Badge>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] text-textc-100">
              Ar-condicionado instalado com{" "}
              <span className="text-primary-500">pontualidade</span> e{" "}
              <span className="text-accent-amber-400">acabamento impecável</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl text-textc-300 leading-relaxed max-w-2xl">
              Equipe certificada em Londrina e região. Higienização profissional que elimina ácaros, reduz consumo de energia e melhora sua saúde. Orçamento em até 2 horas.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <Button variant="hero" size="xl" className="w-full sm:w-auto" asChild>
                <WhatsAppLink
                  onClick={() => {
                    trackEvent("click_whatsapp_hero", {
                      event_category: "conversion",
                      event_label: "hero_primary_cta",
                      value: 1,
                    });
                  }}
                >
                  Pedir orçamento no WhatsApp
                </WhatsAppLink>
              </Button>
              <Button
                variant="hero-outline"
                size="xl"
                onClick={() => {
                  const featuresSection = document.getElementById('features');
                  if (featuresSection) {
                    featuresSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="w-full sm:w-auto"
              >
                Ver nossos serviços
              </Button>
            </div>

            {/* Trust line */}
            <div className="space-y-3 pt-6">
              <div className="flex flex-wrap items-center gap-4 text-base text-textc-300">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary-500" />
                  <span>Atendemos hoje em Londrina, Cambé, Ibiporã, Rolândia e região</span>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-base text-textc-300">
                <span>✓ Orçamento sem compromisso</span>
                <div className="h-4 w-px bg-border hidden sm:block" />
                <span>✓ Garantia de 90 dias</span>
                <div className="h-4 w-px bg-border hidden sm:block" />
                <a 
                  href="https://www.google.com/search?q=G%26L+Manuten%C3%A7%C3%B5es" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-500 hover:text-primary-600 transition-colors font-semibold"
                  onClick={() => {
                    trackEvent("view_reviews", {
                      event_category: "social_proof",
                      event_label: "google_reviews_link",
                      value: 1,
                    });
                  }}
                >
                  4,9★ - Ver 32 avaliações no Google
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={heroImage}
                alt="Instalação profissional de ar-condicionado residencial em Londrina - G&L Manutenções"
                loading="eager"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
