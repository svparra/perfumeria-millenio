"use client";

import { useState } from "react";
import PerfumeGlyph from "./PerfumeGlyph";
import RatingStars from "./RatingStars";
import { useCart } from "./CartProvider";
import { useQuickView } from "./QuickViewProvider";
import { formatCOP } from "../lib/format";
import type { Product } from "../data/products";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const { open } = useQuickView();
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [wishlisted, setWishlisted] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = () => {
    addItem(product.id, selectedSize);
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1600);
  };

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white transition hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald/10">
      <div className="relative flex aspect-[4/5] items-center justify-center bg-gradient-to-br from-sand to-cream">
        {product.tag && (
          <span className="absolute left-3 top-3 rounded-full bg-emerald px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
            {product.tag}
          </span>
        )}
        <button
          aria-label={wishlisted ? "Quitar de favoritos" : "Agregar a favoritos"}
          onClick={() => setWishlisted((v) => !v)}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-ink/60 shadow-sm transition hover:scale-110 hover:text-red-500"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill={wishlisted ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path
              d="M12 20.5s-7.5-4.6-10-9.1C.5 8.1 2.2 4.5 5.8 4c2-.3 3.9.7 5.2 2.4C12.3 4.7 14.2 3.7 16.2 4c3.6.5 5.3 4.1 3.8 7.4-2.5 4.5-8 9.1-8 9.1Z"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <PerfumeGlyph className="h-24 w-24 text-emerald/70 transition group-hover:scale-105" />

        <button
          onClick={() => open(product)}
          className="absolute inset-x-3 bottom-3 translate-y-2 rounded-full bg-ink/85 py-2 text-xs font-semibold uppercase tracking-wide text-white opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100"
        >
          Vista rápida
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">{product.brand}</p>
        <h3 className="font-display text-base font-semibold leading-snug text-ink">{product.name}</h3>
        <RatingStars rating={product.rating} reviewCount={product.reviewCount} />

        <div className="mt-1 flex flex-wrap gap-1.5">
          {product.sizes.map((s) => (
            <button
              key={s}
              onClick={() => setSelectedSize(s)}
              className={`rounded-full px-2.5 py-0.5 text-[11px] transition ${
                selectedSize === s
                  ? "bg-emerald text-white"
                  : "bg-black/[0.04] text-ink/60 hover:bg-black/10"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        {product.stock <= 5 && (
          <p className="text-[11px] font-medium text-red-600">¡Quedan solo {product.stock} unidades!</p>
        )}

        <div className="mt-auto flex items-end justify-between pt-4">
          <div>
            {product.originalPrice && (
              <p className="text-xs text-ink/40 line-through">{formatCOP(product.originalPrice)}</p>
            )}
            <p className="font-display text-lg font-semibold text-emerald">{formatCOP(product.price)}</p>
          </div>
          <button
            aria-label={`Agregar ${product.name} al carrito`}
            onClick={handleAdd}
            className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition ${
              justAdded ? "bg-emerald-dark" : "bg-emerald hover:bg-emerald-light"
            }`}
          >
            {justAdded ? "Agregado ✓" : "Agregar"}
          </button>
        </div>
      </div>
    </article>
  );
}
