import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { prompts } from "@/content/prompts";
import CopyButton from "@/components/prompts/CopyButton";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return prompts.map((prompt) => ({
    slug: prompt.slug,
  }));
}

export default async function PromptPage({ params }: PageProps) {
  const { slug } = await params;

  const prompt = prompts.find((p) => p.slug === slug);

  if (!prompt) {
    notFound();
  }

  const relatedPrompts = prompts.filter(
    (p) => p.slug !== prompt.slug
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white">

      {/* HERO */}

      <section className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-20">

        <div className="flex flex-wrap items-center gap-3">

          <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-xs font-medium tracking-wide text-purple-300 md:text-sm">
            {prompt.category}
          </span>

          <span className="rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-xs text-green-300">
            FREE
          </span>

        </div>

        <h1 className="mt-6 text-3xl font-bold leading-tight md:text-5xl lg:text-6xl">
          {prompt.title}
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-400 md:text-lg">
          {prompt.description}
        </p>

        {/* Preview Image */}

        <div className="mt-10 overflow-hidden rounded-3xl border border-zinc-800 shadow-2xl">

          <Image
            src={prompt.image}
            alt={prompt.title}
            width={1400}
            height={900}
            priority
            className="w-full object-cover transition duration-700 hover:scale-[1.02]"
          />

        </div>

        {/* AI Models */}

        <div className="mt-10">

          <h2 className="mb-4 text-lg font-semibold">
            Compatible With
          </h2>

          <div className="flex flex-wrap gap-3">

            {prompt.models.map((model) => (
              <span
                key={model}
                className="rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm text-zinc-200 transition hover:border-purple-500 hover:text-white"
              >
                {model}
              </span>
            ))}

          </div>

        </div>

        {/* Sticky Copy Section */}

        <div className="sticky top-20 z-20 mt-10 rounded-2xl border border-purple-500/20 bg-zinc-950/90 p-5 backdrop-blur">

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

            <div>

              <h3 className="text-lg font-semibold">
                Ready to Generate?
              </h3>

              <p className="mt-1 text-sm text-zinc-400">
                Copy the prompt and paste it into your favourite AI tool.
              </p>

            </div>

            <CopyButton text={prompt.prompt} />

          </div>

        </div>

        {/* Prompt */}

        <div className="mt-12 rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 md:p-8">

          <div className="mb-6 flex items-center justify-between">

            <h2 className="text-2xl font-bold">
              📄 Prompt
            </h2>

            <span className="text-sm text-zinc-500">
              Ready to Copy
            </span>

          </div>

          <pre className="overflow-x-auto whitespace-pre-wrap break-words rounded-2xl bg-black/40 p-6 text-[15px] leading-8 text-zinc-300">
{prompt.prompt}
          </pre>

        </div>

        {/* HOW TO USE */}

        <div className="mt-12">

          <h2 className="mb-8 text-2xl font-bold md:text-3xl">
            🚀 How to Use
          </h2>

          <div className="grid gap-5 md:grid-cols-2">

            {[
              {
                number: "01",
                title: "Open Your AI Tool",
                desc: "Launch ChatGPT, GPT Image, Gemini, Flux, Midjourney or any supported AI platform.",
              },
              {
                number: "02",
                title: "Upload Your Image",
                desc: "If the prompt requires an image, upload your original photo before pasting the prompt.",
              },
              {
                number: "03",
                title: "Copy & Paste",
                desc: "Use the Copy Prompt button above and paste the prompt into the AI tool.",
              },
              {
                number: "04",
                title: "Generate & Enjoy",
                desc: "Generate your image, experiment with small adjustments and create amazing visuals.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 transition-all duration-300 hover:border-purple-500/50 hover:bg-zinc-900"
              >
                <span className="text-3xl font-bold text-purple-500">
                  {step.number}
                </span>

                <h3 className="mt-4 text-xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-zinc-400">
                  {step.desc}
                </p>
              </div>
            ))}

          </div>

        </div>

        {/* RELATED PROMPTS */}

        <div className="mt-20">

          <div className="flex items-center justify-between">

            <h2 className="text-3xl font-bold">
              Related Prompts
            </h2>

            <Link
              href="/prompts"
              className="text-sm text-purple-400 hover:text-purple-300"
            >
              View All →
            </Link>

          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2">

            {relatedPrompts.slice(0, 4).map((item) => (

              <Link
                key={item.slug}
                href={`/prompts/${item.slug}`}
                className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10"
              >

                <div className="relative aspect-[16/10] overflow-hidden">

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                </div>

                <div className="p-6">

                  <span className="text-xs uppercase tracking-wider text-purple-300">
                    {item.category}
                  </span>

                  <h3 className="mt-3 text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 line-clamp-2 text-zinc-400">
                    {item.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between">

                    <span className="text-sm text-zinc-500">
                      Free Prompt
                    </span>

                    <span className="font-semibold text-purple-400 transition group-hover:translate-x-1">
                      Explore →
                    </span>

                  </div>

                </div>

              </Link>

            ))}

          </div>

        </div>

        {/* CTA */}

        <div className="mt-24 rounded-3xl border border-purple-500/20 bg-gradient-to-r from-purple-950/30 to-zinc-900 p-8 text-center md:p-12">

          <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
            ✨ HYFEE Prompt Library
          </span>

          <h2 className="mt-6 text-3xl font-bold md:text-4xl">
            Discover More Professional AI Prompts
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-zinc-400 leading-8">
            Explore our growing collection of premium prompts for photography,
            cinematic edits, creative visuals, AI art and much more.
          </p>

          <div className="mt-10">

            <Link
              href="/prompts"
              className="inline-flex rounded-xl bg-gradient-to-r from-purple-600 to-purple-800 px-8 py-4 font-semibold text-white shadow-lg shadow-purple-500/30 transition-all duration-300 hover:scale-105 hover:shadow-purple-500/60"
            >
              Browse All Prompts
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}