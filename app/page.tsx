import Navbar from "@/components/landing/Navbar";

import Hero from "@/components/landing/hero/Hero";
import Services from "@/components/landing/services/Services";
import FeaturedPreset from "@/components/landing/presets/FeaturedPreset";
import Portfolio from "@/components/landing/portfolio/Portfolio";
import PromptLibrary from "@/components/landing/prompts/PromptLibrary";
import CTA from "@/components/landing/cta/CTA";
import Contact from "@/components/landing/contact/Contact";
import Footer from "@/components/landing/footer/Footer";

import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="bg-black text-white">

      <Navbar />

      <Hero />

      <Services />

      <FeaturedPreset />

      <Portfolio />

      <PromptLibrary />

      <CTA />

      <Contact />

      <Footer />

      <WhatsAppButton />

    </main>
  );
}