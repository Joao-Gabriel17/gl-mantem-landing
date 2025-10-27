import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "De quanto em quanto tempo devo higienizar o ar-condicionado?",
      answer:
        "Residencial: a cada 6 meses (ou antes, se houver alergias/pets). Comercial/intenso: 3–4 meses. Limpeza de filtros pode ser mensal.",
    },
    {
      question: "Quanto tempo leva a instalação ou a higienização?",
      answer:
        "Instalação: em média 3–6h por aparelho (varia por BTUs/infra). Higienização: 60–90min por aparelho, com proteção do ambiente.",
    },
    {
      question: "Vocês atendem quais regiões e qual o prazo?",
      answer:
        "Londrina e região. Agendamento rápido e pontualidade no horário combinado. Janelas de atendimento flexíveis conforme sua disponibilidade.",
    },
    {
      question: "Existe garantia e quais as formas de pagamento?",
      answer:
        "Garantia sobre o serviço executado e respeito à garantia do fabricante. Formas de pagamento definidas no orçamento (ex.: PIX/cartão).",
    },
  ];

  return (
    <section id="faq" className="py-24 md:py-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-20 md:mb-24 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-textc-100 mb-8">
            Perguntas Frequentes
          </h2>
          <p className="text-xl md:text-2xl text-textc-300">
            Tire suas dúvidas sobre nossos serviços
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="animate-fade-in">
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-surface-700 border border-line-700 rounded-xl px-8 hover:border-primary-500/30 transition-colors duration-300"
              >
                <AccordionTrigger className="text-left hover:no-underline py-8">
                  <span className="text-xl font-semibold text-textc-100 pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-lg text-textc-300 pb-8 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
