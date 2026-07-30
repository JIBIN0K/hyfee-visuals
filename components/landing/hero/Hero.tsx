"use client";

import Image from "next/image";
import Link from "next/link";

import Container from "@/components/common/Container";

const CARDS = [
  { src: "/photo1.jpg", rotate: -20, y: 44 },
  { src: "/photo2.jpg", rotate: -13, y: 20 },
  { src: "/portrait.jpg", rotate: -6, y: 6 },
  { src: "/hero.jpg", rotate: 0, y: 0 },
  { src: "/cinematic.jpg", rotate: 6, y: 6 },
  { src: "/moody.jpg", rotate: 13, y: 20 },
  { src: "/photo5.jpg", rotate: 20, y: 44 },
];

function ArrowIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-black pt-32 lg:pt-40">

      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero.jpg"
          alt="Hero Background"
          fill
          priority
          className="object-cover opacity-[0.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/85 to-black" />
      </div>

      {/* Prominent green glow - center top */}
      <div className="pointer-events-none absolute inset-0 -z-[5]">
        <div className="absolute left-1/2 -top-72 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-green-600/30 blur-[140px]" />
        <div className="absolute left-1/2 -top-64 h-[400px] w-[1200px] -translate-x-1/2 rounded-full bg-emerald-500/20 blur-[150px]" />
      </div>

      <Container className="relative z-10">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] py-1.5 pl-1.5 pr-5 backdrop-blur">
            <span className="rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white">
              New
            </span>
            <span className="text-sm text-zinc-300">
              Capturing Life, One Frame at a Time
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{ fontFamily: "var(--font-fraunces)" }}
            className="mt-8 text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Photography That
            <br />
            <span
              style={{
                backgroundImage:
                  "linear-gradient(120deg, #86efac 0%, #4ade80 30%, #22c55e 60%, #15803d 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
              className="italic"
            >
              Speaks Emotion
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
            Welcome to HYFEE Visuals where light, emotion, and creativity merge
            to create stunning visuals. Explore our portfolio and discover how.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Link
              href="/presets/exclusive"
              className="group inline-flex items-center gap-3 rounded-full bg-black py-2 pl-6 pr-2 font-semibold text-white ring-1 ring-white/15 transition hover:bg-zinc-900"
            >
              View Presets
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-green-600 text-white transition group-hover:bg-green-700">
                <ArrowIcon />
              </span>
            </Link>

            <Link
              href="https://wa.me/918943557986"
              className="group inline-flex items-center gap-3 rounded-full bg-white py-2 pl-6 pr-2 font-semibold transition hover:bg-zinc-200"
              style={{ color: "#000000" }}
            >
              Book a Session
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-green-600 text-white transition group-hover:bg-green-700">
                <ArrowIcon />
              </span>
            </Link>
          </div>
        </div>

        {/* Fanned card row */}
        <div className="relative mt-20 flex items-end justify-center pb-16">
          <div className="flex items-end justify-center gap-2 sm:gap-3">
            {CARDS.map((card, i) => (
              <div
                key={i}
                style={{
                  transform: `rotate(${card.rotate}deg) translateY(${card.y}px)`,
                }}
                className="relative h-40 w-24 shrink-0 overflow-hidden rounded-2xl border border-white/10 shadow-2xl sm:h-52 sm:w-32 lg:h-64 lg:w-40"
              >
                <Image
                  src={card.src}
                  alt="Portfolio work"
                  fill
                  className="object-cover"
                  sizes="160px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
