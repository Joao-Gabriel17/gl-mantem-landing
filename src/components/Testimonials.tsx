import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar4 from "@/assets/avatar-4.jpg";
import { AutoCarousel } from "./AutoCarousel";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Antero de Castro Moreira",
      location: "Brasil (Londrina-PR)",
      avatar: avatar1,
      rating: 5,
      text: "Uma ótima empresa de manutenção em componentes hidráulicos com qualidade, prazo e preço justo.",
    },
    {
      name: "Leandro Marcondes",
      location: "Brasil (Londrina-PR)",
      avatar: avatar2,
      rating: 5,
      text: "GL excelentes profissionais serviço de qualidade. Bruno super educado estão de parabéns",
    },
    {
      name: "Osok Brasil",
      location: "Brasil (Londrina-PR)",
      avatar: avatar3,
      rating: 5,
      text: "Profissionais em tudo. Parabéns!",
    },
    {
      name: "Giovanni Toffoletto",
      location: "Brasil (Londrina-PR)",
      avatar: avatar4,
      rating: 5,
      text: "Recomendo o serviço. Bom preço e qualidade",
    },
  ];

  const testimonialCards = testimonials.map((testimonial, index) => (
    <Card
      key={index}
      className="p-8 bg-surface-700 border-line-700 hover:border-primary-500/30 hover:shadow-lg transition-all duration-300 h-full flex flex-col"
    >
      {/* Rating Stars */}
      <div className="flex gap-1 mb-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-primary-500 text-primary-500" />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-lg text-textc-300 mb-8 leading-relaxed flex-grow">
        "{testimonial.text}"
      </p>

      {/* Author Info */}
      <div className="flex items-center gap-4 pt-6 border-t border-line-700">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-14 h-14 rounded-full object-cover ring-2 ring-primary-500/20"
        />
        <div>
          <p className="font-semibold text-textc-100 text-base">
            {testimonial.name}
          </p>
          <p className="text-sm text-textc-300">
            {testimonial.location}
          </p>
        </div>
      </div>
    </Card>
  ));

  return (
    <section id="testimonials" className="py-24 md:py-40 bg-surface-700/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-24 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Depoimentos reais de quem confia no nosso trabalho
          </p>
        </div>

        {/* Testimonials Carousel */}
        <AutoCarousel autoplayDelay={5000}>
          {testimonialCards}
        </AutoCarousel>
      </div>
    </section>
  );
};
