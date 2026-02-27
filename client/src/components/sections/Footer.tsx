import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
// import logo from "@assets/logo_(2)_1772068633650.png";

export default function Footer() {
  return (
    <footer className="bg-[#063573] pt-16 pb-8 border-t border-white/10 text-blue-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="space-y-6">
            <h3 className="text-white font-bold text-lg w-60 h-20">
              Montagem profissional para o seu negócio
            </h3>
            <p className="text-sm leading-relaxed">
              Especialistas em montagem, instalação e manutenção de equipamentos
              de refrigeração residencial e comercial.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#3BC9D9] hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#3BC9D9] hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Links Col */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="#solucoes"
                  className="hover:text-white transition-colors"
                >
                  Nossas Soluções
                </a>
              </li>
              <li>
                <a
                  href="#beneficios"
                  className="hover:text-white transition-colors"
                >
                  Benefícios
                </a>
              </li>
              <li>
                <a
                  href="#como-funciona"
                  className="hover:text-white transition-colors"
                >
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Dúvidas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Services Col */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Serviços</h4>
            <ul className="space-y-4 text-sm">
              <li>Instalação de Ar-Condicionado</li>
              <li>Manutenção Preventiva</li>
              <li>Reparo de Geladeiras</li>
              <li>Refrigeração Comercial</li>
              <li>Limpeza e Higienização</li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contato</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="text-[#3BC9D9] shrink-0" size={20} />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-[#3BC9D9] shrink-0" size={20} />
                <span>jv.montagemmanutencao@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-[#3BC9D9] shrink-0" size={20} />
                <span>
                  Via Expressa Mauri S.Barufi, 30 - Vila Santo Antonio, Jandira
                  - SP, 06626-170
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-start text-sm text-blue-200/60 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>
            © {new Date().getFullYear()} J&V Montagem e Manutenção. Todos os
            direitos reservados.
            <br />
            <p className="mt-1">
              Desenvolvido por{" "}
              <a
                href="https://www.thousandtws.com/"
                className="transition hover:opacity-80 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Thousand Web Services
              </a>
            </p>
          </p>
        </div>
      </div>
    </footer>
  );
}
