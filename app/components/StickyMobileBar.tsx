"use client";

import { motion } from "framer-motion";
import { useCart } from "./CartProvider";
import { formatCOP } from "../lib/format";

export default function StickyMobileBar() {
  const { count, subtotal, openCart } = useCart();

  return (
    <motion.div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-black/5 bg-white/95 backdrop-blur sm:hidden"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.6, type: "spring", damping: 26, stiffness: 220 }}
    >
      <div className="flex items-center gap-3 px-4 py-3">
        <a
          href="#lo-nuevo"
          className="flex-1 rounded-full border border-emerald/30 py-2.5 text-center text-xs font-semibold uppercase tracking-wide text-emerald"
        >
          Ver catálogo
        </a>
        <button
          onClick={openCart}
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-emerald py-2.5 text-xs font-semibold uppercase tracking-wide text-white"
        >
          Carrito
          {count > 0 && (
            <span className="rounded-full bg-gold px-1.5 py-0.5 text-[10px] text-ink">
              {count} · {formatCOP(subtotal)}
            </span>
          )}
        </button>
      </div>
    </motion.div>
  );
}
