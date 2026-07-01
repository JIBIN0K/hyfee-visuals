import { notFound } from "next/navigation";
import Image from "next/image";

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

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1 text-sm text-purple-300">
          {prompt.category}
        </span>

        <h1 className="mt-6 text-5xl font-bold">{prompt.title}</h1>

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

        <div className="mt-10">
          <CopyButton text={prompt.prompt} />
        </div>

        <div className="mt-8 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
          <h2 className="mb-6 text-2xl font-semibold">Prompt</h2>

          <pre className="whitespace-pre-wrap text-sm leading-7 text-zinc-300">
            {prompt.prompt}
          </pre>
        </div>
      </section>
    </main>
  );
}