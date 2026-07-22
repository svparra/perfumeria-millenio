"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { products, type Vibe, type Occasion, type Intensity, type Product } from "../data/products";
import { formatCOP } from "../lib/format";
import { Reveal } from "./motion";
import { useQuickView } from "./QuickViewProvider";
import PerfumeGlyph from "./PerfumeGlyph";

type Category = Product["category"];

type Answers = {
  category?: Category;
  occasion?: Occasion;
  vibe?: Vibe;
  intensity?: Intensity;
};

const steps: {
  key: keyof Answers;
  question: string;
  options: { value: string; label: string }[];
}[] = [
  {
    key: "category",
    question: "¿Para quién buscas el aroma?",
    options: [
      { value: "Mujer", label: "Mujer" },
      { value: "Hombre", label: "Hombre" },
      { value: "Unisex", label: "Unisex" },
    ],
  },
  {
    key: "occasion",
    question: "¿Para qué ocasión?",
    options: [
      { value: "dia", label: "Uso diario" },
      { value: "noche", label: "Noche / eventos" },
      { value: "ambas", label: "Para todo" },
    ],
  },
  {
    key: "vibe",
    question: "¿Qué tipo de aroma prefieres?",
    options: [
      { value: "fresco", label: "Fresco" },
      { value: "citrico", label: "Cítrico" },
      { value: "dulce", label: "Dulce" },
      { value: "floral", label: "Floral" },
      { value: "amaderado", label: "Amaderado" },
      { value: "especiado", label: "Especiado" },
    ],
  },
  {
    key: "intensity",
    question: "¿Qué tan intenso te gusta?",
    options: [
      { value: "suave", label: "Suave" },
      { value: "moderada", label: "Moderada" },
      { value: "intensa", label: "Intensa" },
    ],
  },
];

function scoreProduct(p: Product, a: Answers) {
  let score = 0;
  if (a.category && (p.category === a.category || p.category === "Unisex")) score += 3;
  if (a.occasion && (p.occasion === a.occasion || p.occasion === "ambas")) score += 2;
  if (a.vibe && p.vibe.includes(a.vibe)) score += 4;
  if (a.intensity && p.intensity === a.intensity) score += 1;
  return score;
}

export default function Quiz() {
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const { open } = useQuickView();

  const done = stepIndex >= steps.length;
  const progress = Math.min(stepIndex, steps.length) / steps.length;

  const recommendations = useMemo(() => {
    if (!done) return [];
    return [...products]
      .map((p) => ({ product: p, score: scoreProduct(p, answers) }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map((r) => r.product);
  }, [done, answers]);

  const selectOption = (key: keyof Answers, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setTimeout(() => setStepIndex((i) => i + 1), 220);
  };

  const restart = () => {
    setAnswers({});
    setStepIndex(0);
  };

  const currentStep = steps[stepIndex];

  return (
    <section id="quiz" className="bg-sand/40 py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal className="mb-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">
            Asesoría personalizada
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Encuentra tu aroma ideal en 30 segundos
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-ink/60">
            Responde 4 preguntas rápidas y te recomendamos las fragancias de nuestro catálogo que más
            se ajustan a ti.
          </p>
        </Reveal>

        <div className="overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm">
          {!done && (
            <div className="h-1.5 w-full bg-black/5">
              <motion.div
                className="h-full bg-gold"
                animate={{ width: `${progress * 100}%` }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          )}

          <div className="p-6 sm:p-10">
            <AnimatePresence mode="wait">
              {!done ? (
                <motion.div
                  key={stepIndex}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-ink/40">
                    Pregunta {stepIndex + 1} de {steps.length}
                  </p>
                  <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                    {currentStep.question}
                  </h3>

                  <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {currentStep.options.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => selectOption(currentStep.key, opt.value)}
                        className={`rounded-2xl border px-4 py-4 text-sm font-semibold transition ${
                          answers[currentStep.key] === opt.value
                            ? "border-emerald bg-emerald text-white"
                            : "border-black/10 text-ink/70 hover:border-emerald hover:text-emerald"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>

                  {stepIndex > 0 && (
                    <button
                      onClick={() => setStepIndex((i) => i - 1)}
                      className="mt-6 text-xs font-semibold uppercase tracking-wide text-ink/40 hover:text-ink"
                    >
                      ← Volver
                    </button>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                    Estas fragancias son para ti
                  </h3>
                  <p className="mt-1 text-sm text-ink/60">
                    Basado en tus respuestas, esto es lo que más se acerca a lo que buscas.
                  </p>

                  <div className="mt-6 grid gap-4 sm:grid-cols-3">
                    {recommendations.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => open(p)}
                        className="flex flex-col items-center gap-2 rounded-2xl border border-black/5 p-4 text-center transition hover:-translate-y-1 hover:border-gold/40 hover:shadow-lg"
                      >
                        <PerfumeGlyph className="h-16 w-16 text-emerald/70" />
                        <p className="text-[11px] font-semibold uppercase text-gold-dark">{p.brand}</p>
                        <p className="text-sm font-semibold text-ink">{p.name}</p>
                        <p className="text-sm font-semibold text-emerald">{formatCOP(p.price)}</p>
                        <span className="text-xs font-medium text-ink/40 underline-offset-2 group-hover:underline">
                          Ver detalle
                        </span>
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={restart}
                    className="mt-8 text-xs font-semibold uppercase tracking-wide text-ink/40 hover:text-ink"
                  >
                    ↺ Volver a empezar
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
