import PromptCard from "@/components/prompts/PromptCard";
import { prompts } from "@/content/prompts";
import Link from "next/link";

export const metadata = {
  title: "Free AI Prompts | HYFEE Visuals",
  description:
    "Explore premium free AI prompts for ChatGPT, GPT Image, Gemini, Flux, Midjourney and more.",
};

export default function PromptsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white">
      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">

        {/* Hero */}
        <div className="mx-auto max-w-4xl text-center">

          <span className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
            🚀 HYFEE VISUALS
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
            Free AI Prompt Library
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-zinc-400 md:text-lg">
            Discover professional AI prompts crafted for photographers,
            creators and designers. Compatible with ChatGPT, GPT Image,
            Gemini, Flux, Midjourney and many more.
          </p>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 px-6 py-4">
              <p className="text-2xl font-bold text-purple-400">
                {prompts.length}+
              </p>
              <p className="text-sm text-zinc-500">
                Free Prompts
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 px-6 py-4">
              <p className="text-2xl font-bold text-purple-400">
                100%
              </p>
              <p className="text-sm text-zinc-500">
                Free Access
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 px-6 py-4">
              <p className="text-2xl font-bold text-purple-400">
                AI
              </p>
              <p className="text-sm text-zinc-500">
                Optimized
              </p>
            </div>

          </div>

        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {prompts.map((prompt) => (
            <PromptCard
              key={prompt.slug}
              prompt={prompt}
            />
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-24 rounded-3xl border border-purple-500/20 bg-gradient-to-r from-purple-950/30 to-zinc-900 p-8 text-center md:p-12">

          <h2 className="text-3xl font-bold md:text-4xl">
            More AI Prompts Coming Soon
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-zinc-400">
            HYFEE Visuals regularly releases new AI prompts for photography,
            cinematic edits, creative effects and visual storytelling.
            Bookmark this page and check back for new additions.
          </p>

          <div className="mt-10">

            <Link
              href="/"
              className="inline-flex rounded-xl bg-gradient-to-r from-purple-600 to-purple-800 px-8 py-4 font-semibold text-white shadow-lg shadow-purple-500/30 transition-all duration-300 hover:scale-105 hover:shadow-purple-500/60"
            >
              Back to Home
            </Link>

          </div>

        </div>

      </section>
    </main>
  );
}