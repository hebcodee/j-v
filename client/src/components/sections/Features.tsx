import { motion } from "framer-motion";
import { ThermometerSnowflake, Wrench, ShieldCheck, Clock } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Instalação Especializada",
      description: "Montagem técnica seguindo os mais altos padrões e manuais dos fabricantes.",
      icon: ThermometerSnowflake,
      color: "bg-blue-50 text-[#0F528C]"
    },
    {
      title: "Manutenção Preventiva",
      description: "Evite falhas repentinas e aumente a vida útil dos seus equipamentos.",
      icon: ShieldCheck,
      color: "bg-cyan-50 text-[#2C96BF]"
    },
    {
      title: "Reparo Rápido",
      description: "Diagnóstico preciso e conserto ágil para não deixar você na mão.",
      icon: Wrench,
      color: "bg-indigo-50 text-[#063573]"
    },
    {
      title: "Atendimento Ágil",
      description: "Prazos cumpridos à risca com agendamento flexível para sua comodidade.",
      icon: Clock,
      color: "bg-sky-50 text-[#3BC9D9]"
    }
  ];

  return (
    <section id="solucoes" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossas Principais Soluções</h2>
          <p className="text-lg text-muted-foreground">
            Oferecemos um portfólio completo para garantir que a temperatura do seu ambiente ou negócio esteja sempre ideal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className={`h-14 w-14 rounded-xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}