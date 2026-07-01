import PromptCard from "@/components/prompts/PromptCard";
import { prompts } from "@/content/prompts";

export const metadata = {
  title: "Free AI Prompts | HYFEE Visuals",
  description: "Explore premium free AI prompts created by HYFEE Visuals.",
};

export default function PromptsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-zinc-700 px-4 py-1 text-sm text-zinc-400">
            HYFEE VISUALS
          </span>

          <h1 className="mt-6 text-5xl font-bold tracking-tight">
            Free AI Prompt Library
          </h1>

          <p className="mt-5 text-lg text-zinc-400">
            Discover premium AI prompts created by HYFEE Visuals. Every prompt is
            handcrafted to help you create stunning AI-generated visuals.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {prompts.map((prompt) => (
            <PromptCard
              key={prompt.slug}
              prompt={prompt}
            />
          ))}
        </div>
      </section>
    </main>
  );
}