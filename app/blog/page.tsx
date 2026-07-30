export const metadata = {
  title: "Blog | HYFEE Visuals",
  description:
    "Photography tips, editing tutorials, and creative insights from HYFEE Visuals — coming soon.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white pt-24">
      <section className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-5 py-20 text-center md:px-8">

        <span className="inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm text-green-300">
          ✍️ HYFEE VISUALS BLOG
        </span>

        <h1 className="mt-8 text-4xl font-bold leading-tight md:text-6xl">
          Coming Soon
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
          We&apos;re working on something special. Soon this space will be filled
          with photography tips, editing tutorials, behind-the-scenes stories,
          and creative insights. Stay tuned.
        </p>

      </section>
    </main>
  );
}
