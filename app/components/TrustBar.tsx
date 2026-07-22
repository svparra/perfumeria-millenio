const badges = [
  {
    title: "Garantía",
    desc: "Verificación de autenticidad",
    icon: (
      <path
        d="M12 3 5 6v6c0 4.4 3 7.6 7 9 4-1.4 7-4.6 7-9V6l-7-3Zm-1.2 10.4L8.4 11l-1.4 1.4 3.8 3.8 6-6-1.4-1.4-4.6 4.6Z"
        fill="currentColor"
      />
    ),
  },
  {
    title: "Pagos seguros",
    desc: "Contraentrega o en línea",
    icon: (
      <path
        d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5Zm0 2a3 3 0 0 1 3 3v3H9V7a3 3 0 0 1 3-3Z"
        fill="currentColor"
      />
    ),
  },
  {
    title: "Envíos 100% gratis",
    desc: "Desde $250.000 COP",
    icon: (
      <path
        d="M3 6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v3h2.4a1 1 0 0 1 .87.5l2.3 3.9c.16.27.23.53.23.85V16a1 1 0 0 1-1 1h-1.2a2.5 2.5 0 0 1-4.9 0H9.8a2.5 2.5 0 0 1-4.9 0H4a1 1 0 0 1-1-1V6Zm14 3v3.3l1.9 0-1.1-2.9-.8-.4ZM7.35 15.4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm10 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
        fill="currentColor"
      />
    ),
  },
  {
    title: "Verificación",
    desc: "Certificado de origen",
    icon: (
      <path
        d="M12 2 3 5v6c0 5 3.6 8.7 9 11 5.4-2.3 9-6 9-11V5l-9-3Zm0 2.2 7 2.5V11c0 3.9-2.7 6.9-7 8.8-4.3-1.9-7-4.9-7-8.8V6.7l7-2.5Z"
        fill="currentColor"
      />
    ),
  },
];

export default function TrustBar() {
  return (
    <section className="border-b border-black/5 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 lg:grid-cols-4">
        {badges.map((b) => (
          <div key={b.title} className="flex items-start gap-3">
            <svg
              viewBox="0 0 24 24"
              className="h-9 w-9 shrink-0 text-emerald"
              aria-hidden="true"
            >
              {b.icon}
            </svg>
            <div>
              <p className="font-display text-base font-semibold text-ink">{b.title}</p>
              <p className="text-sm text-ink/60">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
