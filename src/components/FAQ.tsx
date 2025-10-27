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
    <section id="faq" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Tire suas dúvidas sobre nossos serviços
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="animate-fade-in">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 hover:border-primary/30 transition-colors duration-300"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
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
