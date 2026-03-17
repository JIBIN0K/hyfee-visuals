import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Presets from "../components/Presets"
import Portfolio from "../components/Portfolio"
import BeforeAfter from "@/components/BeforeAfter"
import ExclusiveCard from "@/components/ExclusiveCard"

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      <Navbar />

      <Hero />

      <ExclusiveCard />
      
      <Presets />

      <BeforeAfter />

      <Portfolio />

    </main>
  )
}