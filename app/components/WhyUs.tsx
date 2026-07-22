const reasons = [
  {
    title: "100% originales",
    desc: "Cada fragancia cuenta con certificado de autenticidad y origen verificable.",
  },
  {
    title: "Asesoría personalizada",
    desc: "Nuestro equipo te ayuda a elegir el aroma ideal según tu estilo y ocasión.",
  },
  {
    title: "Prueba antes de comprar",
    desc: "Muestras de 5ml y 10ml disponibles para que decidas sin riesgo.",
  },
  {
    title: "Pagos flexibles",
    desc: "Contraentrega, tarjeta o financiación con Addi, Sistecredito y SU+ Pay.",
  },
];

export default function WhyUs() {
  return (
    <section id="por-que" className="bg-emerald-dark text-cream">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="mb-12 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-light">
            ¿Por qué Millenio?
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
            Confianza, autenticidad y una experiencia hecha a tu medida
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <div key={r.title} className="rounded-2xl border border-cream/10 bg-white/[0.03] p-6">
              <span className="font-display text-3xl font-semibold text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm text-cream/70">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
