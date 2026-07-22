import PerfumeGlyph from "./PerfumeGlyph";
import { Reveal, StaggerGroup, StaggerItem } from "./motion";

const categories = [
  { name: "Mujer", desc: "Florales, gourmand y frescas" },
  { name: "Hombre", desc: "Amaderadas, cítricas y especiadas" },
  { name: "Unisex", desc: "Versátiles para cualquier ocasión" },
  { name: "Marcas árabes", desc: "Lattafa, Afnan, Rasasi y más" },
  { name: "Diseñador", desc: "Chanel, Dior, Versace y más" },
  { name: "Nicho", desc: "Creed, Le Labo, Montale y más" },
];

export default function Categories() {
  return (
    <section id="categorias" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <Reveal className="mb-10 flex flex-col gap-2 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">
          Colecciones
        </span>
        <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
          Encuentra por categoría
        </h2>
      </Reveal>

      <StaggerGroup className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {categories.map((c) => (
          <StaggerItem key={c.name}>
            <a
              href="#lo-nuevo"
              className="group flex h-full flex-col items-center gap-4 rounded-2xl border border-black/5 bg-white p-6 text-center transition hover:-translate-y-1 hover:border-gold/40 hover:shadow-lg hover:shadow-emerald/5"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald/5 text-emerald transition group-hover:bg-emerald group-hover:text-gold">
                <PerfumeGlyph className="h-8 w-8" />
              </span>
              <div>
                <p className="font-display text-sm font-semibold text-ink">{c.name}</p>
                <p className="mt-1 text-xs text-ink/55">{c.desc}</p>
              </div>
            </a>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
