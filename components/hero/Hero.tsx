"use client";

import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import Badge from "@/components/common/Badge";
import Glow from "@/components/common/Glow";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black">
      <Glow />

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/hero.jpg"
          alt="HYFEE VISUALS"
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <Container className="relative z-10">

        <div className="mx-auto w-full max-w-5xl text-center">

          <Badge>
            ✨ CINEMATIC PHOTOGRAPHY
          </Badge>

          <h1 className="mt-8 text-6xl font-bold leading-none text-white md:text-8xl">
            HYFEE
            <br />
            VISUALS
          </h1>

          <p className="mx-auto mt-8 w-full max-w-4xl text-lg leading-8 text-gray-300 md:text-xl">
            Premium cinematic photography, Lightroom presets and AI-powered
            creative resources designed for creators who want visuals that
            stand out.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <Button href="https://wa.me/918943557986">
              📸 Book Your Shoot
            </Button>

            <Button href="#portfolio" variant="secondary">
              View Portfolio
            </Button>

          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-400">

            <span>🎥 Cinematic Editing</span>

            <span>⚡ Fast Delivery</span>

            <span>⭐ Premium Quality</span>

          </div>

        </div>

      </Container>
    </section>
  );
}