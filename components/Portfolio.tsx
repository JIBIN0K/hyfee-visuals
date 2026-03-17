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
    <section id="portfolio" className="bg-black py-20 px-10">

      <h2 className="text-4xl font-bold text-center mb-12">
        Portfolio
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {images.map((img, index) => (
          <div key={index} className="overflow-hidden rounded-xl">
            <img
              src={img}
              alt="portfolio"
              className="w-full h-[300px] object-cover hover:scale-110 transition duration-500"
            />
          </div>
        ))}

      </div>

    </section>
  )
}