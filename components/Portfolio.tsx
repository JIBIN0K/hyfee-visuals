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
    <section id="portfolio" className="bg-black text-white py-24 px-10">

      {/* Section Title */}
      <h2 className="text-5xl font-semibold text-center mb-6 tracking-wide">
        Portfolio
      </h2>

      {/* Professional Introduction */}
      <p className="max-w-2xl mx-auto text-center text-gray-400 mb-16 leading-relaxed">
        Capturing cinematic moments through light, emotion, and storytelling.
        HYFEE VISUALS focuses on creating powerful visuals that blend natural
        aesthetics with a cinematic editing style. From portraits and cultural
        moments to travel photography, every frame is crafted to feel timeless
        and visually immersive.
      </p>

      {/* Image Grid */}
      <div className="grid md:grid-cols-3 gap-6">

        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl group"
          >
            <img
              src={img}
              alt="portfolio"
              className="w-full h-[320px] object-cover transform group-hover:scale-110 transition duration-500"
            />
          </div>
        ))}

      </div>

    </section>
  )
}