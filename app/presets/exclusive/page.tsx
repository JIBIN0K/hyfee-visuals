"use client";

import Image from "next/image";
import BeforeAfter from "@/components/BeforeAfter";
import Container from "@/components/common/Container";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";

export default function ExclusivePreset() {
  return (
    <main className="bg-black text-white">
      {/* Hero */}
      <section className="py-24">
        <Container>
          <div className="grid items-center gap-20 lg:grid-cols-2">
            {/* Left Content */}
            <div>
              <Badge>🔥 BEST SELLER</Badge>

              <h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl">
                HYFEE Exclusive
                <br />
                Preset Pack
              </h1>

              <p className="mt-6 text-lg leading-8 text-gray-300">
                Five professionally crafted Lightroom Mobile presets designed
                for cinematic colour grading, beautiful skin tones, soft
                contrast and premium outdoor photography.
              </p>

              <div className="mt-10">
                <p className="uppercase tracking-[0.35em] text-gray-500">
                  Launch Price
                </p>

                <h2 className="mt-3 text-6xl font-bold text-purple-500">
                  ₹249
                </h2>
              </div>

              <div className="mt-10 grid gap-5 sm:grid-cols-2 text-gray-300">
                <div>✔ 5 Premium Lightroom Presets</div>
                <div>✔ Lightroom Mobile Compatible</div>
                <div>✔ Portrait Optimized</div>
                <div>✔ Outdoor & Nature Ready</div>
                <div>✔ One Click Installation</div>
                <div>✔ Instant Digital Delivery</div>
              </div>

              <Button
                href="https://wa.me/918943557986?text=Hi%20I%20want%20to%20buy%20the%20HYFEE%20Exclusive%20Preset%20Pack"
                className="mt-10"
              >
                Buy via WhatsApp
              </Button>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <Image
                src="/premium.jpg"
                alt="HYFEE Exclusive Preset Pack"
                width={700}
                height={950}
                priority
                className="w-full max-w-md rounded-3xl border border-white/10 shadow-2xl shadow-purple-500/20"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Before & After */}
      <section className="border-t border-white/10 py-24">
        <Container>
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-14 text-center text-4xl font-bold">
              Before & After
            </h2>

            <BeforeAfter />
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="border-t border-white/10 py-24">
        <Container>
          <div className="mx-auto max-w-5xl">
            <Badge className="mx-auto">WHAT'S INCLUDED</Badge>

            <h2 className="mt-6 text-center text-4xl font-bold">
              Everything You Need
            </h2>

            <div className="mt-14 grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                ✔ 5 Cinematic Lightroom Mobile Presets
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                ✔ Perfect for Portrait Photography
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                ✔ Outdoor & Nature Optimized
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                ✔ Works with Lightroom Mobile
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                ✔ One Click Preset Import
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                ✔ Instant Digital Delivery
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 py-24">
        <Container>
          <div className="mx-auto max-w-4xl rounded-3xl border border-purple-500/20 bg-gradient-to-br from-[#171717] via-[#121212] to-[#090909] p-14 text-center">
            <Badge>READY TO EDIT?</Badge>

            <h2 className="mt-6 text-5xl font-bold">
              Start Creating
              <br />
              Cinematic Photos
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
              Download the HYFEE Exclusive Preset Pack and transform your photos
              instantly using professionally crafted Lightroom Mobile presets.
            </p>

            <Button
              href="https://wa.me/918943557986?text=Hi%20I%20want%20to%20buy%20the%20HYFEE%20Exclusive%20Preset%20Pack"
              className="mt-10"
            >
              Buy for ₹249
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
