"use client";

import Link from "next/link";
import Container from "@/components/common/Container";
import Badge from "@/components/common/Badge";
import Button from "@/components/common/Button";

export default function CinematicComingSoon() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center">
      <Container>
        <div className="mx-auto max-w-3xl text-center">

          <Badge>COMING SOON</Badge>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold">
            Portrait Preset Pack
          </h1>

          <p className="mt-6 text-lg text-gray-400 leading-8">
            We're currently crafting this premium Lightroom preset pack.
            It will be released soon with professionally tuned cinematic
            colour grading for creators.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Button href="/presets/exclusive">
              View Exclusive Pack
            </Button>

            <Link
              href="/"
              className="rounded-xl border border-white/10 px-8 py-4 hover:border-purple-500 transition"
            >
              Back Home
            </Link>

          </div>

        </div>
      </Container>
    </main>
  );
}