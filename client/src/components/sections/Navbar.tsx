import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Menu, X, Youtube } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="top-0 left-0 right-0 z-50">
      {/* Faixa superior com botão de contato (fica em cima da navbar) */}
      <div className="border-border relative hidden min-h-11 items-center border-b bg-white lg:flex">
        <div className="bg-primary absolute -left-5 h-full w-1/2 -skew-x-[20deg] xl:w-2/5"></div>
        <div className="relative container">
          <div className="grid w-full items-center gap-2 text-xs lg:text-sm pl-[3%] lg:grid-cols-2 xl:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
            <div className="flex items-center gap-1 text-white">
              Quer fazer seu orçamento para serviços?
              <a
                href="/contact"
                className="flex items-center gap-1 transition hover:opacity-80 hover:[&_svg]:translate-x-0.5"
              >
                <span>Contate-Nos</span>
              </a>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1">
                  <span className="size-4 shrink-0 rounded-full bg-primary" />
                  <span>Funcionamento: 07:00 AM - 18:00 PM</span>
                </span>
              </div>
              <div className="bg-border h-11 w-px -skew-x-12"></div>
              <div className="flex items-center gap-3">
                Visite-nos:
                <div className="flex items-center gap-3.5">
                  <a
                    href="https://www.instagram.com/thousandtws.tech/"
                    className="transition hover:opacity-80"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Instagram />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/thousand-tws/"
                    className="transition hover:opacity-80"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Linkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-border/50 py-3 fixed top-0 left-0 right-0"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2">
              <img
                src={"/logo.png"}
                alt="J&V Montagem e Manutenção"
                className="h-12 md:h-12 object-contain"
              />
            </a>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6 text-sm font-medium text-foreground/80">
              <a
                href="#solucoes"
                className="hover:text-blue-vibrant hover:underline transition-colors"
              >
                Soluções
              </a>
              <a
                href="#beneficios"
                className="hover:text-blue-vibrant hover:underline transition-colors"
              >
                Benefícios
              </a>
              <a
                href="#como-funciona"
                className="hover:text-blue-vibrant hover:underline transition-colors"
              >
                Como Funciona
              </a>
              <a
                href="#faq"
                className="hover:text-blue-vibrant hover:underline transition-colors"
              >
                FAQ
              </a>
            </div>
            <Button className="bg-[#063573] hover:bg-[#0F528C] text-white rounded-full px-6">
              <a
                href="https://api.whatsapp.com/send?phone=5583999853630&text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20servi%C3%A7os%20de%20montagem%20e%20manuten%C3%A7%C3%A3o.%20Poderiam%20me%20passar%20mais%20informa%C3%A7%C3%B5es%3F"
                target="_blank"
                rel="noreferrer"
              >
                Solicitar Orçamento
              </a>
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg p-4 flex flex-col gap-4">
            <a
              href="#solucoes"
              className="p-2 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Soluções
            </a>
            <a
              href="#beneficios"
              className="p-2 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Benefícios
            </a>
            <a
              href="#como-funciona"
              className="p-2 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Como Funciona
            </a>
            <a
              href="#faq"
              className="p-2 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <Button className="bg-[#063573] w-full rounded-full mt-2">
              Solicitar Orçamento
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}
