"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import CountdownTimer from "./CountdownTimer";
import { products } from "../data/products";

const filters = ["Todos", "Mujer", "Hombre", "Unisex"] as const;

export default function FeaturedProducts() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Todos");

  const visibleProducts =
    filter === "Todos" ? products : products.filter((p) => p.category === filter);

  return (
    <section id="lo-nuevo" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">
              Más vendidos
            </span>
            <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
              Lo nuevo en Millenio
            </h2>
          </div>
          <a
            href="#"
            className="text-sm font-semibold uppercase tracking-wide text-emerald underline-offset-4 hover:underline"
          >
            Ver catálogo completo →
          </a>
        </div>

        <div
          id="ofertas"
          className="mb-8 flex flex-col items-center justify-between gap-4 rounded-2xl bg-emerald-dark px-6 py-4 text-cream sm:flex-row"
        >
          <p className="text-sm font-semibold uppercase tracking-wide">
            🔥 Ofertas del día — termina en:
          </p>
          <CountdownTimer />
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-2 sm:justify-start">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-5 py-2 text-sm font-semibold uppercase tracking-wide transition ${
                filter === f
                  ? "border-emerald bg-emerald text-white"
                  : "border-black/10 text-ink/60 hover:border-emerald hover:text-emerald"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {visibleProducts.length === 0 && (
          <p className="py-12 text-center text-sm text-ink/50">
            No hay productos en esta categoría todavía.
          </p>
        )}
      </div>
    </section>
  );
}
