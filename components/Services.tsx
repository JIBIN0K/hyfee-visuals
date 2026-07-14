export default function Services() {
  const services = [
    {
      title: "Photography",
      description:
        "Cinematic portraits, couples, events and premium visual storytelling.",
      price: "From ₹2999",
      button: "Book Shoot",
      link: "https://wa.me/918943557986?text=Hi%20I%20want%20to%20book%20a%20photoshoot",
      featured: true,
    },
    {
      title: "Photo Editing",
      description:
        "Professional Lightroom editing with cinematic colors and premium tones.",
      price: "From ₹199",
      button: "Order Now",
      link: "https://wa.me/918943557986?text=Hi%20I%20want%20photo%20editing%20service",
    },
    {
      title: "Video Editing",
      description:
        "High-quality reels, cinematic edits and professional color grading.",
      price: "From ₹399",
      button: "Order Now",
      link: "https://wa.me/918943557986?text=Hi%20I%20want%20video%20editing%20service",
    },
    {
      title: "Lightroom Presets",
      description:
        "Signature HYFEE presets designed for creators and photographers.",
      price: "From ₹249",
      button: "View Presets",
      link: "#presets",
    },
  ];

  return (
    <section
      id="services"
      className="bg-black py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2">
            <span className="text-sm font-medium tracking-wide text-purple-300">
              ✨ WHAT WE DO
            </span>
          </div>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Professional Creative Services
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-400">
            Premium photography, editing and creative resources
            crafted to help creators stand out with cinematic visuals.
          </p>

        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">

          {services.map((service) => (

            <div
              key={service.title}
              className={`group relative flex flex-col rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                service.featured
                  ? "border-purple-500/50 bg-gradient-to-b from-purple-900/20 to-zinc-900 hover:shadow-purple-500/20"
                  : "border-zinc-800 bg-zinc-900 hover:border-purple-500/40 hover:shadow-purple-500/10"
              }`}
            >

              {service.featured && (
                <span className="absolute right-5 top-5 rounded-full bg-purple-600 px-3 py-1 text-[11px] font-medium text-white">
                  Most Popular
                </span>
              )}

              <h3 className="text-2xl font-bold">
                {service.title}
              </h3>

              <p className="mt-4 flex-grow leading-7 text-zinc-400">
                {service.description}
              </p>

              <div className="mt-8">

                <p className="text-sm uppercase tracking-widest text-zinc-500">
                  Starting Price
                </p>

                <p className="mt-2 text-3xl font-bold text-white">
                  {service.price}
                </p>

              </div>

              <a
                href={service.link}
                target={
                  service.link.startsWith("http")
                    ? "_blank"
                    : undefined
                }
                rel={
                  service.link.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className={`mt-8 inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-semibold transition-all duration-300 ${
                  service.featured
                    ? "bg-gradient-to-r from-purple-600 to-purple-800 text-white hover:-translate-y-1"
                    : "border border-purple-500 text-purple-300 hover:bg-purple-600 hover:text-white"
                }`}
              >
                {service.button}
              </a>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}