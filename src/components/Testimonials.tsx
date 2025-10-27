import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar4 from "@/assets/avatar-4.jpg";

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

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="text-lg text-muted-foreground">
            Depoimentos reais de quem confia no nosso trabalho
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed min-h-[80px]">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
