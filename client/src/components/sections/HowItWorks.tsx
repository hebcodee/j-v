import { motion } from "framer-motion";
import { MessageSquare, Search, Wrench } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      title: "1. Contato e Orçamento",
      description: "Você entra em contato e nos explica sua necessidade. Agendamos uma visita rápida.",
      icon: MessageSquare,
    },
    {
      title: "2. Diagnóstico Preciso",
      description: "Nosso técnico avalia o equipamento no local e passa o diagnóstico transparente.",
      icon: Search,
    },
    {
      title: "3. Execução do Serviço",
      description: "Realizamos o reparo ou instalação com peças de qualidade e garantia do serviço.",
      icon: Wrench,
    }
  ];

  return (
    <section id="como-funciona" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Funciona</h2>
          <p className="text-lg text-muted-foreground">
            Nosso processo é simples, rápido e sem burocracia para você não perder tempo.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-blue-100 -translate-y-1/2 z-0"></div>

          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-sm border border-border relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
              >
                <div className="h-20 w-20 rounded-full bg-[#063573] text-white flex items-center justify-center mb-6 shadow-lg shadow-[#063573]/20 ring-8 ring-white">
                  <step.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}