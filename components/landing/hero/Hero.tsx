"use client";

import Image from "next/image";

import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import Glow from "@/components/common/Glow";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-black pt-24 lg:pt-28">
      <Glow />

      {/* Background */}

      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="Hero Background"
          fill
          priority
          className="object-cover opacity-20"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-black" />
      </div>

      <Container className="relative z-10">
        <div className="flex min-h-[calc(100vh-96px)] items-center py-12 lg:py-20">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-16 xl:grid-cols-2">
            {/* LEFT */}

            <div className="mx-auto max-w-3xl text-center xl:mx-0 xl:max-w-none xl:text-left">
              <span className="inline-flex rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2 text-sm font-medium tracking-wide text-purple-300">
                ✨ PREMIUM CINEMATIC VISUALS
              </span>

              <p className="mt-6 text-sm uppercase tracking-[0.35em] text-zinc-500">
                Kerala • Photographer • Creator
              </p>

              <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Create
                <br />
                <span className="bg-gradient-to-r from-white via-zinc-200 to-purple-300 bg-clip-text text-transparent">
                  Cinematic
                </span>
                <br />
                Visual Stories
              </h1>

              <p className="mx-auto mt-8 max-w-2xl text-center text-lg leading-8 text-zinc-400 lg:mx-0 lg:max-w-xl lg:text-left">
                Professional photography, Lightroom presets and AI prompts
                crafted for creators who demand premium visuals that stand out
                across every platform.
              </p>

              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                <Button href="https://wa.me/918943557986">
                  📸 Book a Shoot
                </Button>

                <Button href="/prompts" variant="secondary">
                  Explore AI Prompts
                </Button>
              </div>

              {/* Stats */}

              <div className="mt-16 grid grid-cols-3 gap-5">
                {[
                  ["2.2M+", "Views"],
                  ["230+", "Downloads"],
                  ["12K+", "Community"],
                ].map(([number, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur"
                  >
                    <h3 className="text-3xl font-bold text-white">{number}</h3>

                    <p className="mt-2 text-sm text-zinc-500">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}

            <div className="relative">
              <div className="absolute -inset-8 rounded-full bg-purple-600/20 blur-3xl" />

              <div className="relative overflow-hidden rounded-[36px] border border-white/10 shadow-2xl">
                <Image
                  src="/hero.jpg"
                  alt="HYFEE Visuals"
                  width={900}
                  height={1200}
                  priority
                  className="h-auto w-full object-cover"
                />

                <div className="absolute bottom-6 left-6 rounded-2xl border border-white/10 bg-black/60 px-5 py-4 backdrop-blur">
                  <p className="text-2xl font-bold text-white">2.2M+</p>

                  <p className="text-sm text-zinc-400">Instagram Views</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
