"use client";

import { useMemo, useState } from "react";
import ProductGrid from "./ProductGrid";
import type {
  Product,
  ProductCategory,
} from "@/content/products";

type Filter = "All" | ProductCategory | "Featured";

const filters: Filter[] = [
  "All",
  "Cameras",
  "Lenses",
  "Lighting",
  "Creator Gear",
  "Fashion",
  "Jewellery",
  "Accessories",
  "Shoot Essentials",
  "Decor",
  "Featured",
];

export default function StoreProducts({
  products,
}: {
  products: Product[];
}) {
  const [activeFilter, setActiveFilter] =
    useState<Filter>("All");

  const filteredProducts = useMemo(() => {
    if (activeFilter === "All") {
      return products;
    }

    if (activeFilter === "Featured") {
      return products.filter(
        (product) => product.featured === true
      );
    }

    return products.filter(
      (product) => product.category === activeFilter
    );
  }, [products, activeFilter]);

  return (
    <div>
      {/* =====================================================
          FILTERS
      ===================================================== */}
      <div className="mb-10 flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center sm:overflow-visible">
        {filters.map((filter) => {
          const isActive = activeFilter === filter;

          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={isActive}
              className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                isActive
                  ? "border-green-500 bg-green-600 text-white shadow-lg shadow-green-900/20"
                  : "border-white/10 bg-white/[0.03] text-zinc-400 hover:border-green-500/30 hover:bg-green-500/10 hover:text-green-300"
              }`}
            >
              {filter === "Featured"
                ? "★ HYFEE Picks"
                : filter}
            </button>
          );
        })}
      </div>

      {/* =====================================================
          PRODUCT COUNT
      ===================================================== */}
      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm text-zinc-500">
          Showing{" "}
          <span className="font-medium text-zinc-300">
            {filteredProducts.length}
          </span>{" "}
          {filteredProducts.length === 1
            ? "product"
            : "products"}
        </p>

        {activeFilter !== "All" && (
          <button
            type="button"
            onClick={() => setActiveFilter("All")}
            className="text-sm text-green-400 transition hover:text-green-300"
          >
            Clear filter
          </button>
        )}
      </div>

      {/* =====================================================
          PRODUCTS
      ===================================================== */}
      <ProductGrid products={filteredProducts} />
    </div>
  );
}