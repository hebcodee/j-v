import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export default function FAQ() {
  const faqs = [
    {
      question: "Vocês atendem quais regiões?",
      answer: "Atendemos toda a região metropolitana. Entre em contato conosco informando seu CEP para confirmarmos a disponibilidade e taxa de deslocamento."
    },
    {
      question: "Oferecem garantia nos serviços?",
      answer: "Sim! Todos os nossos serviços de instalação e reparo contam com garantia legal de 90 dias, podendo se estender dependendo da peça substituída."
    },
    {
      question: "Quanto custa uma visita técnica?",
      answer: "A taxa de visita técnica varia conforme a região. Porém, se o orçamento for aprovado e o serviço executado, o valor da visita é abatido do valor final."
    },
    {
      question: "Fazem manutenção de todas as marcas?",
      answer: "Sim, nossos técnicos são treinados e atualizados para trabalhar com as principais marcas do mercado (LG, Samsung, Midea, Electrolux, Consul, entre outras)."
    },
    {
      question: "Com que frequência devo fazer manutenção preventiva?",
      answer: "Para uso residencial, recomendamos 1 vez ao ano. Para comércio, escritórios ou locais com muito fluxo de pessoas, a limpeza deve ser feita a cada 3 ou 6 meses."
    }
  ];

  return (
    <section id="faq" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Perguntas Frequentes</h2>
          <p className="text-muted-foreground">Tire suas dúvidas sobre nossos serviços.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full bg-white rounded-2xl p-4 md:p-8 shadow-sm border border-border">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b-0 mb-2 last:mb-0">
                <AccordionTrigger className="hover:no-underline hover:text-[#2C96BF] text-left font-semibold text-lg py-4 data-[state=open]:text-[#063573]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}