import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

export default function Stats() {
  const stats = [
    { value: "20+", label: "Anos de Mercado" },
    { value: "10k+", label: "Equipamentos Atendidos" },
    { value: "98%", label: "Índice de Satisfação" },
    { value: "24h", label: "Suporte e Urgências" },
  ];

  const numberRefs = useRef<(HTMLDivElement | null)[]>([]);
  const animatedIndices = useRef<Set<number>>(new Set());

  const animateCount = (index: number, rawValue: string) => {
    if (animatedIndices.current.has(index)) return;
    animatedIndices.current.add(index);

    const el = numberRefs.current[index];
    if (!el) return;

    const match = rawValue.match(/^(\d+)([^\d]*)$/);
    if (!match) {
      el.textContent = rawValue;
      return;
    }

    const target = Number(match[1]);
    const suffix = match[2] ?? "";

    const obj = { val: 0 };

    gsap.to(obj, {
      val: target,
      duration: 2,
      ease: "power3.out",
      onUpdate: () => {
        if (!el) return;
        const current = Math.floor(obj.val);
        el.textContent = `${current}${suffix}`;
      },
      onComplete: () => {
        el.textContent = rawValue;
      },
    });
  };

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
              onViewportEnter={() => animateCount(i, stat.value)}
            >
              <div
                ref={(el) => {
                  numberRefs.current[i] = el;
                }}
                className="text-4xl md:text-5xl lg:text-6xl font-black mb-2 text-[#3BC9D9] tracking-tighter"
              >
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
