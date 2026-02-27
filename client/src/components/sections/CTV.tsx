import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";

export default function CTV() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-[#0F528C] to-[#2C96BF] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#063573]/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg border border-white/20 p-8 md:p-16 rounded-3xl shadow-2xl"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Pronto para garantir o clima perfeito?
          </h2>
          <p className="text-lg md:text-xl text-blue-50 mb-10 max-w-2xl mx-auto">
            Fale com nossos especialistas agora mesmo e agende uma visita
            técnica. Atendimento rápido, preço justo e serviço garantido.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="w-full sm:w-auto h-16 px-8 text-lg bg-green-500 hover:bg-green-600 text-white rounded-full shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] hover:-translate-y-1"
            >
              <Phone className="mr-2 h-6 w-6" />
              <a
                href="https://api.whatsapp.com/send?phone=5583999853630&text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20servi%C3%A7os%20de%20montagem%20e%20manuten%C3%A7%C3%A3o.%20Poderiam%20me%20passar%20mais%20informa%C3%A7%C3%B5es%3F"
                target="_blank"
                rel="noreferrer"
              >
                Chamar no WhatsApp
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto h-16 px-8 text-lg border-2 border-white text-white hover:bg-white/10 hover:text-white rounded-full transition-colors"
            >
              <Calendar className="mr-2 h-5 w-5" />
              <a
                href="https://api.whatsapp.com/send?phone=5583999853630&text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20servi%C3%A7os%20de%20montagem%20e%20manuten%C3%A7%C3%A3o.%20Poderiam%20me%20passar%20mais%20informa%C3%A7%C3%B5es%3F"
                target="_blank"
                rel="noreferrer"
              >
                Agendar Visita
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
