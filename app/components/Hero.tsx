import PerfumeGlyph from "./PerfumeGlyph";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-emerald text-cream">
      <div className="absolute inset-0 bg-hero-radial" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-28">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold-light">
            +20.000 clientes satisfechos
          </p>
          <h1 className="font-display text-balance text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Encuentra tu aroma ideal con asesoría personalizada
          </h1>
          <p className="mt-6 max-w-xl text-lg text-cream/80">
            Más de 1.000 referencias 100% originales y certificadas. Fragancias árabes, de diseñador
            y de nicho, con muestras disponibles antes de tu compra definitiva.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#lo-nuevo"
              className="rounded-full bg-gold px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-ink transition hover:bg-gold-light"
            >
              Explorar catálogo
            </a>
            <a
              href="#por-que"
              className="rounded-full border border-cream/30 px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-cream transition hover:border-cream hover:bg-cream/10"
            >
              ¿Por qué Millenio?
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-cream/15 pt-8 text-sm">
            <div>
              <dt className="text-cream/60">Envíos</dt>
              <dd className="mt-1 font-medium">Gratis desde $250.000</dd>
            </div>
            <div>
              <dt className="text-cream/60">Pago</dt>
              <dd className="mt-1 font-medium">Contraentrega</dd>
            </div>
            <div>
              <dt className="text-cream/60">Cobertura</dt>
              <dd className="mt-1 font-medium">Todo Colombia</dd>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto flex h-72 w-72 items-center justify-center sm:h-96 sm:w-96">
          <div className="absolute inset-0 rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute inset-6 rounded-full border border-gold/30" />
          <div className="absolute inset-16 rounded-full border border-cream/15" />
          <PerfumeGlyph className="relative h-40 w-40 text-gold sm:h-52 sm:w-52" />
        </div>
      </div>
    </section>
  );
}
