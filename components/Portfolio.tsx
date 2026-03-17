export default function Portfolio() {

  const images = [
    "/photo1.jpg",
    "/photo2.jpg",
    "/photo3.jpg",
    "/photo4.jpg",
    "/photo5.jpg",
    "/photo6.jpg",
  ]

  return (
    <section id="portfolio" className="bg-black text-white py-32 px-10">

      {/* Title */}
      <h2 className="text-6xl text-center font-semibold tracking-[0.25em] uppercase mb-8">
        Portfolio
      </h2>

      {/* Professional intro */}
      <p className="max-w-lg mx-auto text-center text-gray-400 leading-relaxed text-[15px] mb-24">
        Cinematic storytelling through light, emotion and natural aesthetics.
        HYFEE VISUALS focuses on creating timeless imagery with a cinematic
        editing style that captures authentic moments and visual depth.
      </p>

      {/* Image grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {images.map((img, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl group cursor-pointer"
          >

            {/* Image */}
            <img
              src={img}
              alt="portfolio"
              className="w-full h-[440px] object-cover transform group-hover:scale-110 transition duration-700"
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-500 flex items-center justify-center">

              <span className="opacity-0 group-hover:opacity-100 text-sm tracking-widest uppercase border border-white px-6 py-2 transition">
                View
              </span>

            </div>

          </div>
        ))}

      </div>

    </section>
  )
}