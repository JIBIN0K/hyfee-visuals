import Link from "next/link";
import StoreProducts from "@/components/store/StoreProducts";
import { products } from "@/content/products";

export default function StorePage() {
  return (
    <main className="min-h-screen bg-[#09090b] text-white">
      {/* =====================================================
          STORE HERO
      ===================================================== */}
      <section className="relative overflow-hidden border-b border-white/10">
        {/* Background Glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-green-500/10 blur-[140px]" />

        <div className="container relative py-24 text-center sm:py-32 lg:py-40">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-300">
            HYFEE STORE
          </div>

          {/* Heading */}
          <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
            Tools worth having
            <span className="block text-green-400">
              for your creative journey.
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            A curated collection of cameras, lenses and creator gear that I
            recommend for photographers and visual creators.
          </p>

          {/* Affiliate Disclosure */}
          <p className="mx-auto mt-5 max-w-xl text-xs leading-6 text-zinc-500">
            Some links may be affiliate links. If you purchase through them,
            HYFEE may earn a small commission at no additional cost to you.
          </p>

          {/* Scroll CTA */}
          <a
            href="#products"
            className="btn-secondary btn mt-8"
          >
            View HYFEE Picks ↓
          </a>
        </div>
      </section>

      {/* =====================================================
          PRODUCTS
      ===================================================== */}
      <section
        id="products"
        className="section border-t border-white/5"
        style={{ scrollMarginTop: "120px" }}
      >
        <div className="container">
          {/* Section Header */}
          <div className="section-header">
            <div className="section-badge">
              HYFEE Picks
            </div>

            <h2 className="section-title mt-6">
              Recommended gear
            </h2>

            <p className="section-subtitle">
              A small collection of products selected with real-world
              photography and creator workflows in mind.
            </p>
          </div>

          {/* Products */}
          <StoreProducts products={products} />
        </div>
      </section>

      {/* =====================================================
          AFFILIATE DISCLOSURE
      ===================================================== */}
      <section className="border-t border-white/5">
        <div className="container py-10">
          <div className="mx-auto max-w-3xl rounded-2xl border border-white/5 bg-white/[0.02] px-6 py-5 text-center">
            <p className="text-xs leading-6 text-zinc-500">
              <span className="font-medium text-zinc-400">
                Affiliate Disclosure:
              </span>{" "}
              Some product links on this page are affiliate links. This means
              HYFEE may receive a commission if you purchase through a link,
              at no additional cost to you. Product recommendations are based
              on their usefulness for creators and photographers.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}
      <section className="section border-t border-white/5">
        <div className="container">
          <div className="gradient-border relative overflow-hidden rounded-[28px] bg-zinc-900 px-6 py-16 text-center sm:px-12">
            {/* Glow */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 rounded-full bg-green-500/10 blur-[100px]" />

            <div className="relative">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-green-400">
                HYFEE VISUALS
              </p>

              <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">
                Create better.
                <span className="block text-zinc-400">
                  Choose better tools.
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-zinc-500">
                From camera gear to everyday creator essentials, discover
                products that fit the HYFEE creative workflow.
              </p>

              <Link
                href="/"
                className="btn-primary btn mt-8"
              >
                Back to HYFEE
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}