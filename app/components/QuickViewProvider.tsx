"use client";

import { createContext, useContext, useMemo, useState } from "react";
import type { Product } from "../data/products";

type QuickViewContextValue = {
  product: Product | null;
  open: (product: Product) => void;
  close: () => void;
};

const QuickViewContext = createContext<QuickViewContextValue | null>(null);

export function QuickViewProvider({ children }: { children: React.ReactNode }) {
  const [product, setProduct] = useState<Product | null>(null);

  const value = useMemo(
    () => ({
      product,
      open: (p: Product) => setProduct(p),
      close: () => setProduct(null),
    }),
    [product]
  );

  return <QuickViewContext.Provider value={value}>{children}</QuickViewContext.Provider>;
}

export function useQuickView() {
  const ctx = useContext(QuickViewContext);
  if (!ctx) throw new Error("useQuickView must be used within QuickViewProvider");
  return ctx;
}
