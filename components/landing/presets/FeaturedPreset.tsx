import Image from "next/image";
import Link from "next/link";

import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";
import Card from "@/components/common/Card";
import Section from "@/components/common/Section";

const presets = [
  {
    title: "HYFEE Exclusive",
    image: "/premium.jpg",
    href: "/presets/exclusive",
    badge: "AVAILABLE",
    available: true,
    price: "₹249",
  },
  {
    title: "Cinematic",
    image: "/cinematic.jpg",
    href: "/presets/cinematic",
    badge: "COMING SOON",
    available: false,
  },
  {
    title: "Golden Hour",
    image: "/golden.jpg",
    href: "/presets/golden-hour",
    badge: "COMING SOON",
    available: false,
  },
  {
    title: "Moody Travel",
    image: "/moody.jpg",
    href: "/presets/moody-travel",
    badge: "COMING SOON",
    available: false,
  },
  {
    title: "Portrait",
    image: "/portrait.jpg",
    href: "/presets/portrait",
    badge: "COMING SOON",
    available: false,
  },
];

export default function FeaturedPreset() {
  return (
    <Section className="bg-zinc-950">
      <Container>

        <SectionHeader
          title="Lightroom Preset Collection"
          description="Professional Lightroom Mobile presets designed for creators, photographers and filmmakers."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {presets.map((preset) => (
            <Card key={preset.title}>

              <Image
                src={preset.image}
                alt={preset.title}
                width={700}
                height={700}
                className="h-72 w-full object-cover"
              />

              <div className="flex h-full flex-col p-6">

                <span
                  className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ${
                    preset.available
                      ? "bg-green-500/20 text-green-300"
                      : "bg-yellow-500/20 text-yellow-300"
                  }`}
                >
                  {preset.badge}
                </span>

                <h3 className="mt-4 text-3xl font-bold text-white">
                  {preset.title}
                </h3>

                {preset.available ? (
                  <p className="mt-3 text-4xl font-bold text-purple-400">
                    {preset.price}
                  </p>
                ) : (
                  <p className="mt-3 text-zinc-400">
                    Launching Soon
                  </p>
                )}

                <div className="mt-auto pt-6">
                  <Link
                    href={preset.href}
                    className={`inline-flex rounded-xl px-6 py-3 font-semibold transition ${
                      preset.available
                        ? "bg-purple-600 text-white hover:bg-purple-700"
                        : "border border-white/15 text-white hover:border-purple-500"
                    }`}
                  >
                    {preset.available ? "View Pack" : "Learn More"}
                  </Link>
                </div>

              </div>

            </Card>
          ))}
        </div>

      </Container>
    </Section>
  );
}