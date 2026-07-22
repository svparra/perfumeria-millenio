import ProductCard from "./ProductCard";
import { products } from "../data/products";

export default function FeaturedProducts() {
  return (
    <section id="lo-nuevo" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-10 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
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

        <div id="ofertas" className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
