"use client";

import { useState } from "react";
import { site } from "@/data/site";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "¿Cómo sé que las fragancias son originales?",
    a: "Todo nuestro catálogo es 100% original, sellado de fábrica. No manejamos versiones alternas ni imitaciones — si tienes duda sobre una fragancia en particular, con gusto te mandamos foto y video del frasco exacto que te enviaríamos antes de que confirmes tu pedido.",
  },
  {
    q: "¿En qué tamaño vienen los frascos?",
    a: "La mayoría de las fragancias vienen en presentación de 100ml. El tamaño exacto de cada una aparece en su ficha dentro del catálogo.",
  },
  {
    q: "¿Cómo hago mi pedido?",
    a: "Elige tus fragancias aquí en el catálogo y agrégalas al carrito, o escríbenos directo por WhatsApp o Instagram. Te confirmamos disponibilidad, forma de pago y tiempos de entrega antes de cerrar el pedido.",
  },
  {
    q: "¿Hacen envíos fuera de Mérida?",
    a: "Sí, hacemos envíos a todo México. Dentro de Mérida también coordinamos entrega o recolección en persona por WhatsApp.",
  },
  {
    q: "¿Qué pasa si mi fragancia llega dañada o no es la que pedí?",
    a: "Te la cambiamos sin costo. Solo escríbenos por WhatsApp con fotos del producto dentro de las primeras 24 horas después de recibirlo.",
  },
  {
    q: "¿Qué formas de pago aceptan?",
    a: "Transferencia bancaria y efectivo en entregas personales. Te compartimos los detalles al confirmar tu pedido por WhatsApp.",
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-5 w-5 shrink-0 text-[var(--color-gold-dark)] transition-transform duration-300 ${open ? "rotate-45" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[var(--color-cream)] py-24 md:py-32">
      <div className="container-editorial">
        <Reveal className="max-w-xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold)]">
            Preguntas frecuentes
          </p>
          <h2 className="mt-3 font-serif-display text-3xl text-[var(--color-ink)] sm:text-4xl md:text-5xl">
            Antes de escribirnos
          </h2>
        </Reveal>

        <div className="mt-12 divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left transition duration-150 ease-out active:scale-[0.99]"
                >
                  <span className="text-base font-medium text-[var(--color-ink)] md:text-lg">
                    {f.q}
                  </span>
                  <ChevronIcon open={isOpen} />
                </button>
                <div
                  className={`grid overflow-hidden ${isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  style={{
                    transition:
                      "grid-template-rows 300ms var(--ease-in-out), opacity 250ms var(--ease-out), padding-bottom 300ms var(--ease-in-out)",
                  }}
                >
                  <div className="min-h-0">
                    <p className="max-w-2xl text-sm leading-relaxed text-[var(--color-ink-soft)] md:text-base">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <Reveal delay={0.1} className="mt-8">
          <p className="text-sm text-[var(--color-ink-soft)]">
            ¿Tu duda no está aquí?{" "}
            <a
              href={site.whatsapp.href}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-[var(--color-ink)] underline decoration-[var(--color-gold)] decoration-2 underline-offset-4"
            >
              Escríbenos por WhatsApp
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
