const partners = ["Addi", "Sistecredito", "SU+ Pay"];

export default function FinancingBar() {
  return (
    <section className="bg-sand/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-4 py-6 text-center sm:flex-row sm:gap-8 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
          Paga a cuotas con
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {partners.map((p) => (
            <span
              key={p}
              className="rounded-full border border-black/10 bg-white px-4 py-1.5 text-sm font-semibold text-ink/70"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
