import { motion } from "framer-motion";
import { Wind, Snowflake, ThermometerSnowflake, Store } from "lucide-react";

export default function Integrations() {
  const equipments = [
    { icon: Wind, name: "Ar-Condicionado Split" },
    { icon: ThermometerSnowflake, name: "Ar-Condicionado de Janela" },
    { icon: Snowflake, name: "Geladeiras e Freezers" },
    { icon: Store, name: "Refrigeração Comercial" },
    { icon: Wind, name: "Ar-Condicionado Split" },
    { icon: ThermometerSnowflake, name: "Ar-Condicionado de Janela" },
    { icon: Snowflake, name: "Geladeiras e Freezers" },
    { icon: Store, name: "Refrigeração Comercial" },
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Equipamentos que Atendemos
          </h2>
          <p className="text-muted-foreground">
            Especialistas nas principais marcas e modelos do mercado de
            refrigeração.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {equipments.map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center gap-4 bg-gray-50 px-8 py-6 rounded-2xl border border-border hover:border-[#3BC9D9] transition-colors min-w-[200px]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-[#2C96BF]">
                <item.icon size={48} strokeWidth={1.5} />
              </div>
              <span className="font-medium text-gray-800">{item.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
