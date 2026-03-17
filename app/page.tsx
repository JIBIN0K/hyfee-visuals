import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Presets from "../components/Presets"
import Portfolio from "../components/Portfolio"
import ExclusiveCard from "@/components/ExclusiveCard"
import Contact from "@/components/Contact"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      <Navbar />

      <Hero />

      <ExclusiveCard />

      <Presets />

      <Portfolio />

      <Contact />

      <Footer />

    </main>
  )
}