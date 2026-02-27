import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

const tabs = [
  { id: "instalacao", label: "Instalação" },
  { id: "manutencao", label: "Manutenção Preventiva" },
  { id: "reparo", label: "Reparos" },
];

const tabContent = {
  instalacao: {
    title: "Instalação sem dor de cabeça",
    description:
      "Nossa equipe cuida de toda a infraestrutura necessária para a instalação do seu equipamento, garantindo que ele funcione na capacidade máxima desde o primeiro dia, sem furos desnecessários ou sujeira.",
    features: [
      "Avaliação do ambiente",
      "Dimensionamento de carga térmica",
      "Infraestrutura completa",
      "Testes de performance",
    ],
  },
  manutencao: {
    title: "Previna antes de quebrar",
    description:
      "A manutenção preventiva regular aumenta em até 40% a vida útil do seu aparelho, reduz o consumo de energia e previne problemas respiratórios causados por filtros sujos.",
    features: [
      "Limpeza profunda e higienização",
      "Verificação de gás",
      "Ajuste de componentes",
      "Troca de filtros",
    ],
  },
  reparo: {
    title: "Conserto rápido e eficaz",
    description:
      "Seu aparelho parou? Nós resolvemos. Diagnóstico preciso utilizando as melhores ferramentas do mercado para identificar e substituir a peça exata que está com defeito.",
    features: [
      "Atendimento de urgência",
      "Peças originais",
      "Garantia de serviço",
      "Técnicos certificados",
    ],
  },
};

const tabImages: Record<(typeof tabs)[number]["id"], string> = {
  instalacao: "/imagem-1.jpeg",
  manutencao: "/imagem-2.jpeg",
  reparo: "/imagem-3.jpeg",
};

export default function Solution() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
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
    <section className="py-20 md:py-32 bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold mb-4">
            Como resolvemos seu problema
          </h2>
          <p className="text-lg text-muted-foreground">
            Acompanhe a qualidade e o detalhismo do nosso trabalho em cada
            etapa.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-wrap gap-2 mb-8 bg-white p-2 rounded-2xl shadow-sm border border-border/50">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-3 px-4 rounded-xl text-sm font-semibold transition-all ${
                    activeTab === tab.id
                      ? "bg-[#063573] text-white shadow-md"
                      : "text-muted-foreground hover:bg-gray-100"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="min-h-[250px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {tabContent[activeTab as keyof typeof tabContent].title}
                  </h3>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    {
                      tabContent[activeTab as keyof typeof tabContent]
                        .description
                    }
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {tabContent[
                      activeTab as keyof typeof tabContent
                    ].features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-[#2C96BF] flex-shrink-0">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span className="font-medium text-gray-700">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              key={activeTab}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#063573]/80 via-transparent to-transparent z-10" />
              <img
                src={tabImages[activeTab as (typeof tabs)[number]["id"]]}
                alt="Manutenção de equipamentos"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-60 p-6 z-20">
                <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-4 flex items-center gap-4 text-white">
                  <div className="h-12 w-12 rounded-full bg-[#3BC9D9] flex items-center justify-center font-bold text-md">
                    100%
                  </div>
                  <div>
                    <p className="font-bold">Garantia de Qualidade</p>
                    <p className="text-sm text-white/80">
                      Equipe técnica certificada
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
