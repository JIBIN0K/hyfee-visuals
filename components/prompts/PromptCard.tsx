import Link from "next/link";
import { Prompt } from "@/lib/prompts";

interface PromptCardProps {
  prompt: Prompt;
}

export default function PromptCard({ prompt }: PromptCardProps) {
  return (
    <Link
      href={`/prompts/${prompt.slug}`}
      className="group block rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 hover:border-white hover:-translate-y-1 hover:shadow-2xl"
    >
      <div className="mb-3">
        <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300">
          {prompt.category}
        </span>
      </div>

      <h2 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
        {prompt.title}
      </h2>

      <p className="mt-3 text-zinc-400 leading-relaxed">
        {prompt.description}
      </p>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-sm text-zinc-500">
          Free Prompt
        </span>

        <span className="font-semibold text-white">
          View →
        </span>
      </div>
    </Link>
  );
}