"use client";

import { useMemo, useState } from "react";
import { useCart } from "./CartProvider";
import { useQuickView } from "./QuickViewProvider";
import { products } from "../data/products";
import { formatCOP } from "../lib/format";

const navLinks = [
  { label: "Ofertas", href: "#ofertas" },
  { label: "Lo Nuevo", href: "#lo-nuevo" },
  { label: "Mujer", href: "#categorias" },
  { label: "Hombre", href: "#categorias" },
  { label: "Unisex", href: "#categorias" },
  { label: "Marcas", href: "#categorias" },
];

export default function Header() {
  const { count, openCart } = useCart();
  const { open } = useQuickView();
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return products
      .filter((p) => `${p.brand} ${p.name}`.toLowerCase().includes(q))
      .slice(0, 5);
  }, [query]);

  const closeSearch = () => {
    setSearchOpen(false);
    setQuery("");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6">
        <a href="#" className="flex items-baseline gap-2">
          <span className="font-display text-2xl font-semibold tracking-wide text-emerald">
            MILLENIO
          </span>
          <span className="hidden text-[11px] uppercase tracking-[0.3em] text-gold-dark sm:inline">
            Perfumería
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wide text-ink/80 transition hover:text-emerald"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="relative">
            {searchOpen && (
              <div className="absolute right-0 top-full mt-2 w-72 rounded-2xl border border-black/5 bg-white p-2 shadow-xl sm:w-80">
                <input
                  autoFocus
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Buscar perfume o marca…"
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-2 text-sm outline-none focus:border-emerald"
                />
                {query.trim() && (
                  <ul className="mt-2 max-h-72 overflow-y-auto">
                    {results.length === 0 && (
                      <li className="px-3 py-4 text-center text-xs text-ink/40">Sin resultados</li>
                    )}
                    {results.map((p) => (
                      <li key={p.id}>
                        <button
                          onClick={() => {
                            open(p);
                            closeSearch();
                          }}
                          className="flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2 text-left hover:bg-black/[0.04]"
                        >
                          <span>
                            <span className="block text-[11px] font-semibold uppercase text-gold-dark">
                              {p.brand}
                            </span>
                            <span className="block text-sm text-ink">{p.name}</span>
                          </span>
                          <span className="shrink-0 text-xs font-semibold text-emerald">
                            {formatCOP(p.price)}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
            <button
              aria-label="Buscar"
              onClick={() => setSearchOpen((v) => !v)}
              className="rounded-full p-2 text-ink/70 transition hover:bg-black/5 hover:text-emerald"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <button
            aria-label="Cuenta"
            className="hidden rounded-full p-2 text-ink/70 transition hover:bg-black/5 hover:text-emerald sm:block"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7" strokeLinecap="round" />
            </svg>
          </button>
          <button
            aria-label="Carrito"
            onClick={openCart}
            className="relative rounded-full p-2 text-ink/70 transition hover:bg-black/5 hover:text-emerald"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M3 4h2l2.4 12.2a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.6L21 8H6" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="10" cy="21" r="1.4" fill="currentColor" stroke="none" />
              <circle cx="17" cy="21" r="1.4" fill="currentColor" stroke="none" />
            </svg>
            <span
              key={count}
              className="absolute -right-0.5 -top-0.5 flex h-4 w-4 animate-pop-in items-center justify-center rounded-full bg-gold text-[10px] font-semibold text-ink"
            >
              {count}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
