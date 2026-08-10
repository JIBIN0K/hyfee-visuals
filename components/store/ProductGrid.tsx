import ProductCard from "./ProductCard";
import type { Product } from "@/content/products";

type ProductGridProps = {
  products: Product[];
};

export default function ProductGrid({
  products,
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="rounded-[28px] border border-dashed border-white/10 bg-white/[0.02] px-6 py-16 text-center">
        <h3 className="text-xl font-semibold text-white">
          No products found
        </h3>

        <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-zinc-500">
          We&apos;re currently updating the HYFEE Store with new creator
          recommendations.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}