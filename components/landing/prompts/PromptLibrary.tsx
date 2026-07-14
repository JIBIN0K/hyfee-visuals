import Link from "next/link";
import Image from "next/image";

import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";
import Card from "@/components/common/Card";
import Section from "@/components/common/Section";

import { prompts } from "@/content/prompts";

export default function PromptLibrary() {
  return (
    <Section className="bg-black">
      <Container>

        <SectionHeader
          badge="FREE AI PROMPTS"
          title="Create Stunning AI Images"
          description="Professionally engineered prompts for ChatGPT, GPT Image, Gemini, Flux, Midjourney and more."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {prompts.slice(0, 3).map((prompt) => (
            <Card key={prompt.slug} className="group">

              <Link href={`/prompts/${prompt.slug}`} className="flex h-full flex-col">

                <div className="relative aspect-[16/10] overflow-hidden">

                  <Image
                    src={prompt.image}
                    alt={prompt.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                </div>

                <div className="flex h-full flex-col p-7">

                  <span className="text-sm uppercase tracking-wider text-purple-300">
                    {prompt.category}
                  </span>

                  <h3 className="mt-4 text-2xl font-bold text-white">
                    {prompt.title}
                  </h3>

                  <p className="mt-4 flex-1 leading-7 text-zinc-400">
                    {prompt.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between pt-8">

                    <span className="text-sm text-zinc-500">
                      Free Prompt
                    </span>

                    <span className="font-semibold text-purple-400 transition group-hover:translate-x-1">
                      Explore →
                    </span>

                  </div>

                </div>

              </Link>

            </Card>
          ))}
        </div>

        <div className="mt-14 text-center">

          <Link
            href="/prompts"
            className="inline-flex rounded-xl border border-purple-500 px-8 py-4 font-semibold text-purple-300 transition hover:bg-purple-600 hover:text-white"
          >
            View Complete Prompt Library
          </Link>

        </div>

      </Container>
    </Section>
  );
}