const columns = [
  {
    title: "Ayuda",
    links: ["Política de envíos", "Cambios y devoluciones", "Preguntas frecuentes", "Rastrear pedido"],
  },
  {
    title: "Marcas",
    links: ["Marcas árabes", "Marcas de diseñador", "Marcas de nicho", "Muestras y decants"],
  },
  {
    title: "Empresa",
    links: ["Sobre Millenio", "Términos y condiciones", "Política de privacidad", "Contacto"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/70">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl font-semibold text-cream">MILLENIO</p>
            <p className="mt-3 max-w-xs text-sm">
              Perfumería 100% original certificada. Showroom en Medellín, envíos a todo Colombia.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/15 transition hover:border-gold hover:text-gold"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="TikTok"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/15 transition hover:border-gold hover:text-gold"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 3c.3 2 1.8 3.6 4 3.9v2.7a6.6 6.6 0 0 1-4-1.4v6.3a5.5 5.5 0 1 1-5.5-5.5c.2 0 .4 0 .6.03v2.75a2.8 2.8 0 1 0 2.1 2.7V3H14Z" />
                </svg>
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="font-display text-sm font-semibold uppercase tracking-wide text-cream">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="transition hover:text-gold">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-6 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} Perfumería Millenio. Todos los derechos reservados.</p>
          <p>Hecho con dedicación en Colombia</p>
        </div>
      </div>
    </footer>
  );
}
