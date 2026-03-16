import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Presets from "../components/Presets"
import Portfolio from "../components/Portfolio"
import BeforeAfter from "@/components/BeforeAfter"

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      <Navbar />

      <Hero />

      <Presets />
      
      <BeforeAfter />

      <Portfolio />

    </main>
  )
}