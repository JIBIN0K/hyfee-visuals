import Link from "next/link";
import Image from "next/image";
import { prompts } from "@/content/prompts";

export default function FeaturedPrompts() {
  return (
    <section className="border-y border-white/10 bg-gradient-to-b from-zinc-950 to-black py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
            🚀 NEW
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Free AI Prompt Library
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            Professional prompts for ChatGPT, GPT Image, Gemini,
            Flux, Midjourney and more.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {prompts.slice(0, 2).map((prompt) => (
            <Link
              key={prompt.slug}
              href={`/prompts/${prompt.slug}`}
              className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 transition hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={prompt.image}
                  alt={prompt.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">

                <span className="text-xs text-purple-300">
                  {prompt.category}
                </span>

                <h3 className="mt-2 text-2xl font-bold">
                  {prompt.title}
                </h3>

                <p className="mt-3 text-zinc-400">
                  {prompt.description}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm text-zinc-500">
                    Free Prompt
                  </span>

                  <span className="font-semibold text-purple-400">
                    Explore →
                  </span>
                </div>

              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/prompts"
            className="inline-flex rounded-xl border border-purple-500 px-8 py-3 text-purple-300 transition hover:bg-purple-600 hover:text-white"
          >
            View All Prompts
          </Link>
        </div>

      </div>
    </section>
  );
}