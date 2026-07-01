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
    <main className="min-h-screen bg-black text-white">

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-20">

        <span className="inline-flex rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
          {prompt.category}
        </span>

        <h1 className="mt-6 text-5xl font-bold">
          {prompt.title}
        </h1>

        <p className="mt-5 max-w-3xl text-lg text-zinc-400">
          {prompt.description}
        </p>

        <div className="mt-10 overflow-hidden rounded-3xl border border-zinc-800">
          <Image
            src={prompt.image}
            alt={prompt.title}
            width={1400}
            height={900}
            className="w-full object-cover"
            priority
          />
        </div>

        {/* Models */}

        <div className="mt-8 flex flex-wrap gap-3">
          {prompt.models.map((model) => (
            <span
              key={model}
              className="rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm"
            >
              {model}
            </span>
          ))}
        </div>

        {/* Copy */}

        <div className="mt-10">
          <CopyButton text={prompt.prompt} />
        </div>

        {/* Prompt */}

        <div className="mt-8 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
          <h2 className="mb-6 text-2xl font-semibold">
            Prompt
          </h2>

          <pre className="whitespace-pre-wrap text-sm leading-7 text-zinc-300">
            {prompt.prompt}
          </pre>
        </div>

        {/* How to Use */}

        <div className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

          <h2 className="mb-6 text-2xl font-semibold">
            🚀 How to Use
          </h2>

          <ol className="space-y-5 text-zinc-300">

            <li>
              1. Open ChatGPT, GPT Image, Gemini, Flux or Midjourney.
            </li>

            <li>
              2. Upload your image if required.
            </li>

            <li>
              3. Click <strong>Copy Prompt</strong>.
            </li>

            <li>
              4. Paste into your AI tool and generate.
            </li>

          </ol>

        </div>

        {/* Related */}

        <div className="mt-14">

          <h2 className="mb-8 text-3xl font-bold">
            Related Prompts
          </h2>

          <div className="grid gap-6 md:grid-cols-2">

            {relatedPrompts.map((item) => (

              <Link
                key={item.slug}
                href={`/prompts/${item.slug}`}
                className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-purple-500"
              >

                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-zinc-400">
                  {item.description}
                </p>

              </Link>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}