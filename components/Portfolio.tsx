import Image from "next/image";

export default function Portfolio() {
  const images = [
    "/photo1.jpg",
    "/photo2.jpg",
    "/photo3.jpg",
    "/photo4.jpg",
    "/photo5.jpg",
    "/photo6.jpg",
  ];

  return (
    <section
      id="portfolio"
      className="bg-black py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2">
            <span className="text-sm font-medium tracking-wide text-purple-300">
              📸 OUR WORK
            </span>
          </div>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Cinematic Portfolio
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
            Every photograph is crafted to tell a story through light,
            emotion and cinematic color. Here's a glimpse of our recent work.
          </p>

        </div>

        {/* Gallery */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {images.map((img, index) => (

            <div
              key={index}
              className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/10"
            >

              <div className="relative aspect-[4/5] overflow-hidden">

                <Image
                  src={img}
                  alt={`Portfolio ${index + 1}`}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/30" />

              </div>

              {/* Footer */}

              <div className="flex items-center justify-between p-5">

                <div>

                  <p className="text-xs uppercase tracking-widest text-zinc-500">
                    HYFEE VISUALS
                  </p>

                  <h3 className="mt-1 text-lg font-semibold">
                    Cinematic Capture
                  </h3>

                </div>

                <span className="rounded-lg border border-purple-500/40 px-4 py-2 text-sm text-purple-300 transition group-hover:bg-purple-600 group-hover:text-white">
                  View
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}