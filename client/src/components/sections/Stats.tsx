import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { value: "10+", label: "Anos de Mercado" },
    { value: "5k+", label: "Equipamentos Atendidos" },
    { value: "98%", label: "Índice de Satisfação" },
    { value: "24h", label: "Suporte e Urgências" },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#063573] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-black mb-2 text-[#3BC9D9] tracking-tighter">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-medium text-blue-100 uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}