import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Dono de Restaurante",
      text: "Excelente atendimento. Minha câmara fria quebrou num sábado e eles resolveram o problema no mesmo dia. Salvaram meu estoque!",
      rating: 5
    },
    {
      name: "Ana Beatriz",
      role: "Cliente Residencial",
      text: "Instalaram dois aparelhos de ar-condicionado na minha casa. Trabalho super limpo, equipe educada e preço justo. Recomendo muito.",
      rating: 5
    },
    {
      name: "Roberto Almeida",
      role: "Gerente de Loja",
      text: "Fazemos a manutenção preventiva com a J&V há 2 anos. Nunca mais tivemos dor de cabeça com os freezers da nossa loja.",
      rating: 5
    },
    {
      name: "Juliana Mendes",
      role: "Cliente Residencial",
      text: "Meu ar pingava água direto, chamei outra empresa e não resolveram. O técnico da J&V veio e achou o problema na hora.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-[#063573] text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O que dizem nossos clientes</h2>
          <p className="text-blue-200">
            A satisfação de quem confia na J&V Montagem e Manutenção.
          </p>
        </div>

        {/* Horizontal scroll container */}
        <div className="flex overflow-x-auto pb-8 -mx-4 px-4 snap-x hide-scrollbar gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              className="min-w-[300px] md:min-w-[400px] snap-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full bg-white text-foreground border-none shadow-xl">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4 text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star key={j} size={18} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center font-bold text-[#063573]">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}