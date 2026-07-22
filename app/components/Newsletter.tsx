"use client";

export default function Newsletter() {
  return (
    <section className="bg-gold/10">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">
          Únete al Club
        </span>
        <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
          Recibe ofertas exclusivas y novedades primero
        </h2>
        <p className="max-w-md text-sm text-ink/60">
          Suscríbete y recibe un 10% de descuento en tu primera compra, además de acceso anticipado
          a lanzamientos y combos especiales.
        </p>

        <form
          className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            required
            placeholder="Tu correo electrónico"
            className="w-full rounded-full border border-black/10 bg-white px-5 py-3 text-sm outline-none transition focus:border-emerald"
          />
          <button
            type="submit"
            className="shrink-0 rounded-full bg-emerald px-6 py-3 text-sm font-semibold uppercase tracking-wide text-cream transition hover:bg-emerald-light"
          >
            Suscribirme
          </button>
        </form>
      </div>
    </section>
  );
}
