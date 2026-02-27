import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappFloatingButton() {
  const [isHovered, setIsHovered] = useState(false);

  // Mensagem que aparecerá preenchida no WhatsApp
  const message = encodeURIComponent("Olá! Gostaria de falar com a equipe.");

  return (
    <div className="fixed right-5 bottom-5 z-50">
      {/* Efeito de pulsar com cor do WhatsApp */}
      <div className="pointer-events-none absolute right-0 bottom-0 h-16 w-16">
        <span
          className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
          style={{ backgroundColor: "#25D366" }}
        ></span>
      </div>

      {/* Tooltip */}
      {isHovered && (
        <div className="animate-fade-in absolute right-20 bottom-4 flex w-max max-w-[220px] items-center gap-2 rounded-full bg-white px-3 py-1.5 text-sm whitespace-nowrap text-gray-800 shadow-lg">
          <span>Fale com nossa equipe!</span>
        </div>
      )}

      {/* Botão principal WhatsApp */}

      <a
        href="https://api.whatsapp.com/send?phone=5583999853630&text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20servi%C3%A7os%20de%20montagem%20e%20manuten%C3%A7%C3%A3o.%20Poderiam%20me%20passar%20mais%20informa%C3%A7%C3%B5es%3F"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="animate-slow-pulse relative flex h-16 w-16 items-center justify-center rounded-full text-white shadow-xl transition-transform hover:scale-105"
        style={{ backgroundColor: "#25D366" }}
        aria-label="Fale com nossa equipe no WhatsApp"
      >
        <FaWhatsapp className="h-10 w-10" />
      </a>
    </div>
  );
}
