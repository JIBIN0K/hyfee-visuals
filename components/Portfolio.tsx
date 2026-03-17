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
      <h2 className="text-5xl text-center font-semibold tracking-wide mb-6">
        Portfolio
      </h2>

      {/* Short intro */}
      <p className="max-w-xl mx-auto text-center text-gray-400 mb-20 leading-relaxed">
        Cinematic storytelling through light, emotion and natural aesthetics.
        HYFEE VISUALS focuses on creating timeless imagery with a cinematic
        editing style that captures authentic moments.
      </p>

      {/* Image grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl group"
          >
            <img
              src={img}
              alt="portfolio"
              className="w-full h-[420px] object-cover transform group-hover:scale-110 transition duration-700"
            />
          </div>
        ))}

      </div>

    </section>
  )
}