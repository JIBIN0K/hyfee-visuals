import Image from "next/image";

import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";
import Card from "@/components/common/Card";
import Section from "@/components/common/Section";

const images = [
  "/photo1.jpg",
  "/photo2.jpg",
  "/photo3.jpg",
  "/photo4.jpg",
  "/photo5.jpg",
  "/photo6.jpg",
];

export default function Portfolio() {
  return (
    <Section
      id="portfolio"
      className="bg-zinc-950"
    >
      <Container>

        <SectionHeader
          badge="PORTFOLIO"
          title="Visual Stories That Feel Cinematic"
          description="A collection of photographs crafted with emotion, light and cinematic colour grading."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {images.map((image, index) => (
            <Card key={index} className="group overflow-hidden p-0">

              <div className="relative aspect-[4/5] overflow-hidden">

                <Image
                  src={image}
                  alt={`Portfolio ${index + 1}`}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="absolute bottom-0 left-0 right-0 translate-y-6 p-6 transition duration-500 group-hover:translate-y-0">

                  <p className="text-xs uppercase tracking-[0.3em] text-purple-300">
                    HYFEE VISUALS
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-white">
                    Cinematic Shot
                  </h3>

                </div>

              </div>

            </Card>
          ))}
        </div>

      </Container>
    </Section>
  );
}