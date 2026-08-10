import Image from "next/image";
import { FiExternalLink, FiArrowUpRight } from "react-icons/fi";
import type { Product } from "@/content/products";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#111111] transition-all duration-500 hover:-translate-y-2 hover:border-green-500/40 hover:shadow-[0_30px_80px_rgba(22,163,74,0.16)]">
      {/* Product Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />

        {/* Badge */}
        {product.badge && (
          <div className="absolute left-4 top-4 rounded-full border border-green-400/30 bg-black/70 px-3 py-1.5 text-xs font-medium text-green-300 backdrop-blur-md">
            {product.badge}
          </div>
        )}

        {/* Merchant */}
        <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/70 px-3 py-1.5 text-xs text-zinc-300 backdrop-blur-md">
          {product.merchant}
        </div>
      </div>

      {/* Product Content */}
      <div className="p-6">
        {/* Category */}
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-green-400">
          {product.category}
        </p>

        {/* Product Name */}
        <h3 className="mt-3 text-xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-green-300">
          {product.name}
        </h3>

        {/* Brand */}
        <p className="mt-1 text-sm text-zinc-500">{product.brand}</p>

        {/* Description */}
        <p className="mt-4 line-clamp-2 text-sm leading-7 text-zinc-400">
          {product.description}
        </p>

        {/* Bottom */}
        <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
          <div>
            <p className="text-xs text-zinc-600">Price</p>
            <p className="mt-1 text-sm font-medium text-zinc-200">
              {product.price || "Check latest price"}
            </p>
          </div>

          {/* Affiliate Link */}
          <a
            href={product.affiliateUrl}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-500"
            aria-label={`View ${product.name} on ${product.merchant}`}
          >
            View
            <FiArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Affiliate Notice */}
        <div className="mt-4 flex items-center gap-2 text-[11px] leading-5 text-zinc-600">
          <FiExternalLink className="h-3 w-3 shrink-0" />
          <span>Opens on {product.merchant}</span>
        </div>
      </div>
    </article>
  );
}