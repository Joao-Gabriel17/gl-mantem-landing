import { Instagram, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-bg-800 border-t border-line-700 py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">G&L</span>
              </div>
              <span className="font-bold text-lg text-textc-100">G&L Manutenções</span>
            </div>
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
                <a
                  href="https://wa.me/5543984910234"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-500 transition-colors"
                >
                  (43) 98491-0234
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary-500" />
                <a
                  href="https://wa.me/5543991497628"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-500 transition-colors"
                >
                  (43) 99149-7628
                </a>
              </div>
              <p className="text-textc-300">Londrina e região</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-textc-100">Links Úteis</h3>
            <div className="space-y-2 text-sm">
              <a
                href="#"
                className="block text-textc-300 hover:text-primary-500 transition-colors"
              >
                Orçamento sem compromisso
              </a>
              <a
                href="#"
                className="block text-textc-300 hover:text-primary-500 transition-colors"
              >
                Termos de Serviço
              </a>
              <a
                href="#"
                className="block text-textc-300 hover:text-primary-500 transition-colors"
              >
                Política de Privacidade
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
                className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center hover:bg-primary-500/20 transition-colors"
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
