"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useQuickView } from "./QuickViewProvider";
import { useCart } from "./CartProvider";
import { products } from "../data/products";
import { formatCOP } from "../lib/format";
import PerfumeGlyph from "./PerfumeGlyph";
import RatingStars from "./RatingStars";

const noteRows: { key: "salida" | "corazon" | "fondo"; label: string }[] = [
  { key: "salida", label: "Notas de salida" },
  { key: "corazon", label: "Notas de corazón" },
  { key: "fondo", label: "Notas de fondo" },
];

export default function QuickViewModal() {
  const { product, close, open } = useQuickView();
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const activeSize = selectedSize ?? product?.sizes[0] ?? "";
  const related = product
    ? products
        .filter((p) => p.id !== product.id && (p.category === product.category || p.vibe.some((v) => product.vibe.includes(v))))
        .slice(0, 3)
    : [];

  return (
    <AnimatePresence
      onExitComplete={() => setSelectedSize(null)}
    >
      {product && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-ink/60 backdrop-blur-sm sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
        >
          <motion.div
            className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl bg-white sm:rounded-3xl"
            initial={{ y: 40, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid gap-0 sm:grid-cols-2">
              <div className="relative flex items-center justify-center bg-gradient-to-br from-sand to-cream p-10">
                <button
                  onClick={close}
                  aria-label="Cerrar"
                  className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-ink/60 hover:text-ink"
                >
                  ✕
                </button>
                <PerfumeGlyph className="h-40 w-40 text-emerald/70" />
              </div>

              <div className="flex flex-col gap-4 p-6 sm:p-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">{product.brand}</p>
                  <h3 className="font-display text-2xl font-semibold text-ink">{product.name}</h3>
                  <RatingStars rating={product.rating} reviewCount={product.reviewCount} className="mt-2" />
                </div>

                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                        activeSize === s ? "bg-emerald text-white" : "bg-black/[0.04] text-ink/60 hover:bg-black/10"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>

                <div className="space-y-2 rounded-2xl bg-sand/50 p-4">
                  {noteRows.map((row) => (
                    <div key={row.key} className="flex items-start gap-3 text-sm">
                      <span className="w-28 shrink-0 text-xs font-semibold uppercase tracking-wide text-emerald">
                        {row.label}
                      </span>
                      <span className="text-ink/70">{product.notes[row.key].join(", ")}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-end justify-between">
                  <div>
                    {product.originalPrice && (
                      <p className="text-xs text-ink/40 line-through">{formatCOP(product.originalPrice)}</p>
                    )}
                    <p className="font-display text-2xl font-semibold text-emerald">{formatCOP(product.price)}</p>
                  </div>
                  <button
                    onClick={() => {
                      addItem(product.id, activeSize);
                      close();
                    }}
                    className="rounded-full bg-emerald px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-emerald-light"
                  >
                    Agregar al carrito
                  </button>
                </div>

                {related.length > 0 && (
                  <div className="mt-2 border-t border-black/5 pt-4">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-ink/50">
                      También te puede gustar
                    </p>
                    <div className="flex gap-3">
                      {related.map((r) => (
                        <button
                          key={r.id}
                          onClick={() => open(r)}
                          className="flex-1 rounded-xl border border-black/5 p-3 text-left transition hover:border-gold/40"
                        >
                          <p className="text-[11px] font-semibold uppercase text-gold-dark">{r.brand}</p>
                          <p className="text-xs font-medium text-ink">{r.name}</p>
                          <p className="mt-1 text-xs font-semibold text-emerald">{formatCOP(r.price)}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
