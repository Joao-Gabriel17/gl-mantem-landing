import { Instagram, Phone } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import logoImage from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-bg-800 border-t border-line-700 py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img src={logoImage} alt="G&L Manutenções" className="h-32 w-auto" />
            <p className="text-sm text-textc-300">
              Climatização de confiança em Londrina
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-textc-100">Contato</h3>
            <div className="space-y-2 text-sm text-textc-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary-500" />
                <WhatsAppLink
                  className="hover:text-primary-500 focus:text-primary-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-800 rounded px-1 py-1 -mx-1 inline-block transition-colors"
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
              <p className="text-textc-300 mt-3 font-semibold">Cidades atendidas:</p>
              <p className="text-textc-300 leading-relaxed">
                Londrina • Cambé • Ibiporã<br />
                Rolândia • Arapongas
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-textc-100">Navegação</h3>
            <div className="space-y-2 text-sm">
              <a
                href="#features"
                className="block text-textc-300 hover:text-primary-500 focus:text-primary-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-800 rounded transition-colors py-3 px-2 -mx-2"
              >
                Nossos Serviços
              </a>
              <a
                href="#how-it-works"
                className="block text-textc-300 hover:text-primary-500 focus:text-primary-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-800 rounded transition-colors py-3 px-2 -mx-2"
              >
                Como Funciona
              </a>
              <a
                href="#testimonials"
                className="block text-textc-300 hover:text-primary-500 focus:text-primary-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-800 rounded transition-colors py-3 px-2 -mx-2"
              >
                Depoimentos
              </a>
              <a
                href="#faq"
                className="block text-textc-300 hover:text-primary-500 focus:text-primary-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-800 rounded transition-colors py-3 px-2 -mx-2"
              >
                Perguntas Frequentes
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="font-semibold text-textc-100">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/glmanutencoesereparo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center hover:bg-primary-500/20 focus:bg-primary-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-800 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-line-700 text-center text-sm text-textc-300">
          <p>G&L Manutenções e Reparos © 2025. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
