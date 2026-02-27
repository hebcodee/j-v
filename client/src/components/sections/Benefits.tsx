import { motion } from "framer-motion";
import { PiggyBank, Wind, Zap, Thermometer } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Benefits() {
  const benefits = [
    {
      title: "Economia de Energia",
      description:
        "Aparelhos com manutenção em dia consomem até 30% menos energia elétrica no fim do mês.",
      icon: PiggyBank,
    },
    {
      title: "Conforto Total",
      description:
        "Mantenha o ambiente sempre na temperatura ideal, sem ruídos estranhos ou pingos de água.",
      icon: Wind,
    },
    {
      title: "Durabilidade",
      description:
        "Proteja seu investimento prolongando a vida útil do seu ar-condicionado e equipamentos.",
      icon: Thermometer,
    },
    {
      title: "Rapidez e Eficiência",
      description:
        "Chegamos no horário marcado e realizamos o serviço de forma limpa e muito rápida.",
      icon: Zap,
    },
  ];

  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        observer.disconnect();

        const originalText = el.textContent || "";
        el.textContent = "";

        const chars: HTMLSpanElement[] = [];

        originalText.split("").forEach((char) => {
          const span = document.createElement("span");
          span.textContent = char === " " ? "\u00A0" : char;
          el.appendChild(span);
          chars.push(span);
        });

        gsap.from(chars, {
          x: 150,
          opacity: 0,
          duration: 0.7,
          ease: "power4",
          stagger: 0.04,
        });
      },
      {
        threshold: 0.4,
      },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="beneficios" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold mb-4">
            Por que escolher a J&V?
          </h2>
          <p className="text-lg text-muted-foreground">
            Entregamos mais do que serviços, entregamos benefícios reais para o
            seu dia a dia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-6 p-6 rounded-2xl bg-gray-50 border border-border/50 hover:bg-blue-50 transition-colors duration-300"
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="h-16 w-16 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0 text-[#0F528C]">
                <benefit.icon size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
