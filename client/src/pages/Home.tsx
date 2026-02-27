import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import Features from "@/components/sections/Features";
import Solution from "@/components/sections/Solution";
import Stats from "@/components/sections/Stats";
import Benefits from "@/components/sections/Benefits";
import HowItWorks from "@/components/sections/HowItWorks";
import Integrations from "@/components/sections/Integrations";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTV from "@/components/sections/CTV";
import Footer from "@/components/sections/Footer";
import WhatsappFloatingButton from "../components/ui/whatsapp";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <Solution />
        <Stats />
        <Benefits />
        <HowItWorks />
        <Integrations />
        <Testimonials />
        <FAQ />
        <CTV />
        <WhatsappFloatingButton />
      </main>
      <Footer />
    </div>
  );
}
