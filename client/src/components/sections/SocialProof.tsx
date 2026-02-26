import { motion } from "framer-motion";
import { Users, Clock, ShieldCheck, ThumbsUp } from "lucide-react";

export default function SocialProof() {
  const proofs = [
    { icon: Users, text: "+1000 clientes atendidos" },
    { icon: Clock, text: "10 anos de experiência" },
    { icon: ThumbsUp, text: "Atendimento Rápido" },
    { icon: ShieldCheck, text: "Equipe Qualificada" }
  ];

  return (
    <section className="py-10 border-y border-border/50 bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
          Aprovado por quem exige o melhor
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {proofs.map((proof, i) => (
            <motion.div 
              key={i}
              className="flex flex-col items-center justify-center gap-3 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-[#0F528C]">
                <proof.icon size={24} />
              </div>
              <span className="font-medium text-gray-700 text-sm md:text-base">
                {proof.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}