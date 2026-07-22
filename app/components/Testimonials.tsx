import { Reveal, StaggerGroup, StaggerItem } from "./motion";

const testimonials = [
  {
    quote:
      "Ustedes no se imaginan cuando me pongo este perfume, lo mucho que me lo preguntan. La asesoría fue clave para elegir.",
    name: "Camila R.",
    source: "Reseña de Google",
  },
  {
    quote:
      "Pedí una muestra antes de comprar el frasco completo y llegó rapidísimo. Se nota que todo es original.",
    name: "Andrés M.",
    source: "Reseña de Google",
  },
  {
    quote:
      "Excelente atención, me ayudaron a encontrar algo parecido a un nicho pero mucho más económico.",
    name: "Laura P.",
    source: "Reseña de Google",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-gold">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
          <path d="M10 1.5 12.6 7l6 .9-4.3 4.2 1 6-5.3-2.8L4.7 18l1-6L1.4 7.9l6-.9L10 1.5Z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <Reveal className="mb-10 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">
          Clientes Millenio
        </span>
        <h2 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">
          Lo que dicen de nosotros
        </h2>
      </Reveal>

      <StaggerGroup className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <StaggerItem key={t.name}>
            <figure className="flex h-full flex-col gap-4 rounded-2xl border border-black/5 bg-white p-6">
              <Stars />
              <blockquote className="text-sm leading-relaxed text-ink/75">“{t.quote}”</blockquote>
              <figcaption className="mt-auto text-xs font-semibold uppercase tracking-wide text-ink/50">
                {t.name} · {t.source}
              </figcaption>
            </figure>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
