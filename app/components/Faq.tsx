"use client";

import { useState } from "react";

const faqs = [
  {
    q: "¿Cómo sé que el perfume es 100% original?",
    a: "Cada producto cuenta con certificado de autenticidad y proviene de distribuidores autorizados. Si tienes dudas, nuestro equipo te muestra el respaldo antes de comprar.",
  },
  {
    q: "¿Puedo pedir una muestra antes de comprar el frasco completo?",
    a: "Sí, la mayoría de referencias tienen muestras de 5ml y 10ml para que pruebes el aroma antes de decidir el tamaño completo.",
  },
  {
    q: "¿Cuánto dura el envío y hacen pago contraentrega?",
    a: "Los envíos llegan entre 1 y 4 días hábiles según tu ciudad, y ofrecemos pago contraentrega en todo Colombia, además de tarjeta y financiación.",
  },
  {
    q: "¿Qué pasa si no me gusta el aroma?",
    a: "Puedes solicitar cambios dentro de los primeros días si el producto no ha sido usado, siguiendo nuestra política de cambios y devoluciones.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <div className="mb-10 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">
          Preguntas frecuentes
        </span>
        <h2 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">
          Resolvemos tus dudas
        </h2>
      </div>

      <div className="divide-y divide-black/10 rounded-2xl border border-black/5 bg-white">
        {faqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-display text-sm font-semibold text-ink sm:text-base">
                  {item.q}
                </span>
                <span
                  className={`shrink-0 text-xl text-emerald transition-transform ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {isOpen && (
                <div className="px-6 pb-5 text-sm leading-relaxed text-ink/65">{item.a}</div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
