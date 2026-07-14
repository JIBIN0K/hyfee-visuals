import Link from "next/link";

import Container from "@/components/common/Container";
import Badge from "@/components/common/Badge";
import Section from "@/components/common/Section";

export default function CTA() {
  return (
    <Section className="bg-black">
      <Container>

        <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-zinc-900 via-black to-purple-950">

          {/* Background Glow */}

          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-purple-700/10 blur-3xl" />

          <div className="relative px-8 py-16 md:px-16 md:py-24">

            <div className="mx-auto w-full max-w-5xl text-center">

              <Badge>
                LET'S CREATE SOMETHING AMAZING
              </Badge>

              <h2 className="mt-8 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                Ready To Bring
                <br />
                Your Vision To Life?
              </h2>

              <p className="mx-auto mt-8 w-full max-w-4xl text-base leading-8 text-zinc-400 sm:text-lg">
                Whether you're looking for cinematic photography,
                professional editing, Lightroom presets or AI prompts,
                HYFEE VISUALS is here to help create visuals that truly
                stand out.
              </p>

              <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">

                <Link
                  href="https://wa.me/918943557986"
                  className="inline-flex w-full justify-center rounded-xl bg-purple-600 px-8 py-4 font-semibold text-white transition hover:bg-purple-700 sm:w-auto"
                >
                  📸 Book A Shoot
                </Link>

                <Link
                  href="/prompts"
                  className="inline-flex w-full justify-center rounded-xl border border-purple-500 px-8 py-4 font-semibold text-purple-300 transition hover:bg-purple-600 hover:text-white sm:w-auto"
                >
                  AI Prompt Library
                </Link>

              </div>

            </div>

          </div>

        </div>

      </Container>
    </Section>
  );
}