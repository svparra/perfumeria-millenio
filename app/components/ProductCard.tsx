import PerfumeGlyph from "./PerfumeGlyph";
import type { Product } from "../data/products";

const formatCOP = (value: number) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white transition hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald/10">
      <div className="relative flex aspect-[4/5] items-center justify-center bg-gradient-to-br from-sand to-cream">
        {product.tag && (
          <span className="absolute left-3 top-3 rounded-full bg-emerald px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-gold-light">
            {product.tag}
          </span>
        )}
        <PerfumeGlyph className="h-24 w-24 text-emerald/70 transition group-hover:scale-105" />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">{product.brand}</p>
        <h3 className="font-display text-base font-semibold leading-snug text-ink">{product.name}</h3>

        <div className="mt-1 flex flex-wrap gap-1.5">
          {product.sizes.map((s) => (
            <span key={s} className="rounded-full bg-black/[0.04] px-2.5 py-0.5 text-[11px] text-ink/60">
              {s}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-end justify-between pt-4">
          <div>
            {product.originalPrice && (
              <p className="text-xs text-ink/40 line-through">{formatCOP(product.originalPrice)}</p>
            )}
            <p className="font-display text-lg font-semibold text-emerald">{formatCOP(product.price)}</p>
          </div>
          <button
            aria-label={`Agregar ${product.name} al carrito`}
            className="rounded-full bg-emerald px-4 py-2 text-xs font-semibold uppercase tracking-wide text-cream transition hover:bg-emerald-light"
          >
            Agregar
          </button>
        </div>
      </div>
    </article>
  );
}
