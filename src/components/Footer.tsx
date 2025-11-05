import { Instagram, Phone } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import logoImage from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-bg-800 border-t border-line-700 py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Logo e Tagline - Centralizado e Destacado */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <img 
            src={logoImage} 
            alt="G&L Manutenções" 
            className="h-24 md:h-32 lg:h-36 w-auto mb-4 transition-transform duration-300 hover:scale-105" 
          />
          <p className="text-base md:text-lg text-textc-200 font-medium">
            Climatização de confiança em Londrina
          </p>
        </div>

        {/* Grid de Informações */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Contact */}
          <div className="text-center md:text-left space-y-4">
            <h3 className="font-bold text-lg text-textc-100 mb-4">Contato</h3>
            <div className="space-y-3 text-sm text-textc-300">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <WhatsAppLink
                  className="hover:text-primary-500 focus:text-primary-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-800 rounded px-2 py-1 transition-colors font-medium"
                  onClick={() => {
                    trackEvent("click_phone_footer", {
                      event_category: "engagement",
                      event_label: "footer_contact",
                      value: 1,
                    });
                  }}
                >
                  (43) 98491-0234
                </WhatsAppLink>
              </div>
              <div className="pt-2">
                <p className="text-textc-200 font-semibold mb-2">Cidades atendidas:</p>
                <p className="text-textc-300 leading-relaxed">
                  Londrina • Cambé • Ibiporã<br />
                  Rolândia • Arapongas
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left space-y-4">
            <h3 className="font-bold text-lg text-textc-100 mb-4">Navegação</h3>
            <nav className="space-y-2 text-sm">
              <a
                href="#features"
                className="block text-textc-300 hover:text-primary-500 focus:text-primary-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded transition-colors py-2 px-3 md:px-0"
              >
                Nossos Serviços
              </a>
              <a
                href="#how-it-works"
                className="block text-textc-300 hover:text-primary-500 focus:text-primary-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded transition-colors py-2 px-3 md:px-0"
              >
                Como Funciona
              </a>
              <a
                href="#testimonials"
                className="block text-textc-300 hover:text-primary-500 focus:text-primary-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded transition-colors py-2 px-3 md:px-0"
              >
                Depoimentos
              </a>
              <a
                href="#faq"
                className="block text-textc-300 hover:text-primary-500 focus:text-primary-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded transition-colors py-2 px-3 md:px-0"
              >
                Perguntas Frequentes
              </a>
            </nav>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-left space-y-4">
            <h3 className="font-bold text-lg text-textc-100 mb-4">Redes Sociais</h3>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://www.instagram.com/glmanutencoesereparo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center hover:bg-primary-500/20 hover:scale-110 focus:bg-primary-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-800 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary-500" />
              </a>
            </div>
            <p className="text-xs text-textc-400 mt-4">
              Siga-nos para dicas e novidades!
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-line-700 text-center">
          <p className="text-sm text-textc-300">
            G&L Manutenções e Reparos © 2025. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
