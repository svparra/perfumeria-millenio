"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCart, type CartLine } from "./CartProvider";
import { products, type Product } from "../data/products";
import { formatCOP } from "../lib/format";
import PerfumeGlyph from "./PerfumeGlyph";

const WHATSAPP_NUMBER = "573000000000";

type ResolvedLine = { line: CartLine; product: Product };

export default function CartDrawer() {
  const { lines, subtotal, isOpen, closeCart, removeLine, setQty } = useCart();

  const resolved: ResolvedLine[] = lines
    .map((line) => ({ line, product: products.find((p) => p.id === line.productId) }))
    .filter((entry): entry is ResolvedLine => Boolean(entry.product));

  const checkoutMessage = resolved
    .map(({ line, product }) => `• ${product.name} (${line.size}) x${line.qty}`)
    .join("%0A");

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola, quiero finalizar mi pedido:")}%0A${checkoutMessage}%0A%0ATotal: ${encodeURIComponent(
    formatCOP(subtotal)
  )}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[70] bg-ink/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeCart}
        >
          <motion.aside
            className="ml-auto flex h-full w-full max-w-md flex-col bg-white"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 32, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-black/5 p-5">
              <h2 className="font-display text-lg font-semibold text-ink">Tu carrito</h2>
              <button
                onClick={closeCart}
                aria-label="Cerrar carrito"
                className="flex h-8 w-8 items-center justify-center rounded-full text-ink/50 hover:bg-black/5 hover:text-ink"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5">
              {resolved.length === 0 ? (
                <p className="mt-10 text-center text-sm text-ink/50">Tu carrito está vacío.</p>
              ) : (
                <ul className="space-y-4">
                  {resolved.map(({ line, product }) => (
                    <li key={`${product.id}-${line.size}`} className="flex gap-3">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sand to-cream">
                        <PerfumeGlyph className="h-9 w-9 text-emerald/70" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-semibold uppercase text-gold-dark">{product.brand}</p>
                        <p className="text-sm font-medium text-ink">{product.name}</p>
                        <p className="text-xs text-ink/50">{line.size}</p>
                        <div className="mt-2 flex items-center gap-2">
                          <button
                            onClick={() => setQty(product.id, line.size, line.qty - 1)}
                            className="flex h-6 w-6 items-center justify-center rounded-full border border-black/10 text-xs hover:border-emerald hover:text-emerald"
                          >
                            −
                          </button>
                          <span className="w-4 text-center text-xs font-semibold">{line.qty}</span>
                          <button
                            onClick={() => setQty(product.id, line.size, line.qty + 1)}
                            className="flex h-6 w-6 items-center justify-center rounded-full border border-black/10 text-xs hover:border-emerald hover:text-emerald"
                          >
                            +
                          </button>
                          <button
                            onClick={() => removeLine(product.id, line.size)}
                            className="ml-auto text-[11px] font-medium text-ink/40 hover:text-red-500"
                          >
                            Quitar
                          </button>
                        </div>
                      </div>
                      <p className="shrink-0 text-sm font-semibold text-emerald">
                        {formatCOP(product.price * line.qty)}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {resolved.length > 0 && (
              <div className="space-y-3 border-t border-black/5 p-5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-ink/60">Subtotal</span>
                  <span className="font-display text-lg font-semibold text-ink">{formatCOP(subtotal)}</span>
                </div>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-full bg-emerald py-3.5 text-center text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-emerald-light"
                >
                  Finalizar por WhatsApp
                </a>
                <p className="text-center text-[11px] text-ink/40">
                  Envío gratis desde $250.000 · Pago contraentrega disponible
                </p>
              </div>
            )}
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
