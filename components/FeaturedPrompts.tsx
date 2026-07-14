import Link from "next/link";
import Image from "next/image";
import { prompts } from "@/content/prompts";

export default function FeaturedPrompts() {
  return (
    <section className="border-y border-white/10 bg-gradient-to-b from-zinc-950 via-black to-black py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2">
            <span className="text-sm font-medium tracking-wide text-purple-300">
              🚀 FREE AI PROMPTS
            </span>
          </div>

          <h2 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
            Prompt Library
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
            Carefully crafted AI prompts for ChatGPT, GPT Image,
            Gemini, Flux, Midjourney and other creative AI tools.
          </p>

        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {prompts.slice(0, 2).map((prompt) => (

            <Link
              key={prompt.slug}
              href={`/prompts/${prompt.slug}`}
              className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20"
            >

              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">

                <Image
                  src={prompt.image}
                  alt={prompt.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute left-5 top-5 rounded-full border border-purple-500/30 bg-black/60 px-3 py-1 text-xs uppercase tracking-wider text-purple-300 backdrop-blur">
                  {prompt.category}
                </div>

              </div>

              {/* Content */}
              <div className="p-7">

                <h3 className="text-2xl font-bold transition group-hover:text-purple-300">
                  {prompt.title}
                </h3>

                <p className="mt-4 line-clamp-3 text-base leading-8 text-zinc-400">
                  {prompt.description}
                </p>

                <div className="mt-8 flex items-center justify-between border-t border-zinc-800 pt-5">

                  <div>
                    <p className="text-xs uppercase tracking-widest text-zinc-500">
                      Access
                    </p>

                    <p className="text-sm font-medium text-green-400">
                      Free Prompt
                    </p>
                  </div>

                  <span className="rounded-xl bg-purple-600 px-5 py-2 text-sm font-semibold text-white transition group-hover:bg-purple-500">
                    Explore →
                  </span>

                </div>

              </div>

            </Link>

          ))}

        </div>

        {/* CTA */}
        <div className="mt-14 text-center">

          <Link
            href="/prompts"
            className="inline-flex items-center rounded-xl bg-gradient-to-r from-purple-600 to-purple-800 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-purple-600/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-purple-600/50"
          >
            View All Prompts
          </Link>

        </div>

      </div>
    </section>
  );
}