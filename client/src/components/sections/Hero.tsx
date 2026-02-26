import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import serviceImg from "@/assets/images/service-1.jpg";

const words = ["Montagem", "Manutenção", "Instalação", "Reparo"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden relative">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-[#3BC9D9]/20 rounded-full blur-3xl opacity-50 -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[500px] h-[500px] bg-[#063573]/10 rounded-full blur-3xl opacity-50 -z-10" />

      <div className="container mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-[#0F528C] mb-6">
              <span className="flex h-2 w-2 rounded-full bg-[#2C96BF] mr-2"></span>
              Especialistas em Refrigeração
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight mb-6">
              Excelência em{" "}
              <span className="block h-[1.2em] relative overflow-hidden text-[#063573]">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={index}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    {words[index]}
                  </motion.span>
                </AnimatePresence>
              </span>
              de equipamentos de refrigeração
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Garantimos a eficiência, durabilidade e o máximo desempenho para seus aparelhos. 
              Atendimento técnico especializado para residências e comércios.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-[#063573] hover:bg-[#0F528C] text-white rounded-full h-14 px-8 text-lg shadow-lg shadow-[#063573]/20 transition-transform hover:-translate-y-1">
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-lg border-2 border-[#0F528C] text-[#0F528C] hover:bg-[#0F528C]/5 transition-colors">
                Nossos Serviços
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="flex-1 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 aspect-[4/3] group">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#063573]/40 to-transparent z-10 opacity-60"></div>
            <img 
              src={serviceImg} 
              alt="Serviço de refrigeração" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Floating Badge */}
            <motion.div 
              className="absolute bottom-6 left-6 z-20 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50 flex items-center gap-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xl">
                ✓
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">Serviço Garantido</p>
                <p className="text-xs text-gray-500">Qualidade comprovada</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}