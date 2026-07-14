export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black py-24 lg:py-32"
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">

        {/* Badge */}

        <div className="mb-6 flex justify-center">
          <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2 text-sm text-purple-300">
            💬 CONTACT
          </span>
        </div>

        {/* Heading */}

        <h2 className="mx-auto max-w-3xl text-center text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
          Let's Work Together
        </h2>

        {/* Description */}

        <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-8 text-zinc-400 md:text-lg">
          Whether it's photography, Lightroom presets or cinematic editing,
          I'd love to hear about your next project.
        </p>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {/* Email */}

          <a
            href="mailto:hyfeetube@gmail.com"
            className="group flex h-full flex-col items-center rounded-3xl border border-zinc-800 bg-zinc-900 p-10 text-center transition-all duration-300 hover:-translate-y-2 hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/20"
          >

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-600/10 text-3xl">
              ✉️
            </div>

            <h3 className="text-2xl font-semibold">
              Email
            </h3>

            <p className="mt-4 text-zinc-400 break-all">
              hyfeetube@gmail.com
            </p>

          </a>

          {/* WhatsApp */}

          <a
            href="https://wa.me/918943557986"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full flex-col items-center rounded-3xl border border-zinc-800 bg-zinc-900 p-10 text-center transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-2xl hover:shadow-green-500/20"
          >

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500/10 text-3xl">
              💬
            </div>

            <h3 className="text-2xl font-semibold">
              WhatsApp
            </h3>

            <p className="mt-4 text-zinc-400">
              +91 8943557986
            </p>

          </a>

          {/* Instagram */}

          <a
            href="https://www.instagram.com/_.hyfee._"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full flex-col items-center rounded-3xl border border-zinc-800 bg-zinc-900 p-10 text-center transition-all duration-300 hover:-translate-y-2 hover:border-pink-500 hover:shadow-2xl hover:shadow-pink-500/20"
          >

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-500/10 text-3xl">
              📷
            </div>

            <h3 className="text-2xl font-semibold">
              Instagram
            </h3>

            <p className="mt-4 text-zinc-400">
              @_.hyfee._
            </p>

          </a>

        </div>

      </div>
    </section>
  );
}