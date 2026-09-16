import Image from "next/image";
import { products } from "@/data/products";
import { site } from "@/data/site";

const showcase = [
  {
    slug: "rasasi-hawas-kobra",
    brand: "Rasasi",
    name: "Hawas Kobra",
    alt: "Rasasi Hawas Kobra",
    className: "left-[2%] top-0 h-[58%] w-[56%]",
    delay: "enter-delay-2",
  },
  {
    slug: "dior-sauvage-edt",
    brand: "Dior",
    name: "Sauvage EDT",
    alt: "Dior Sauvage Eau de Toilette",
    className: "bottom-0 right-0 h-[66%] w-[60%]",
    delay: "enter-delay-3",
    featured: true,
  },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative w-full overflow-hidden bg-[var(--color-cream)] pt-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(var(--color-ink) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 78% 40%, black, transparent)",
        }}
      />

      <div className="container-editorial grid w-full items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
        <div>
          <p className="enter-fade-up mb-4 text-xs uppercase tracking-[0.3em] text-[var(--color-gold-dark)]">
            {site.social.instagramHandle}
          </p>
          <h1 className="enter-fade-up enter-delay-1 font-serif-display text-6xl leading-[0.95] tracking-tight text-[var(--color-ink)] sm:text-7xl md:text-8xl lg:text-[6.5rem]">
            Iconic Scents
          </h1>
          <p className="enter-fade-up enter-delay-2 mt-5 max-w-md text-lg text-[var(--color-ink-soft)] md:text-xl">
            {site.tagline}.
          </p>

          <div className="enter-fade-up enter-delay-3 mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#coleccion"
              className="rounded-full bg-[var(--color-gold)] px-6 py-3 text-sm font-medium text-[var(--color-ink)] transition duration-150 ease-out hover:-translate-y-0.5 hover:bg-[var(--color-gold-dark)] active:scale-[0.97] active:translate-y-0"
            >
              Ver colección
            </a>
            <a
              href={site.whatsapp.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[var(--color-ink)]/25 px-6 py-3 text-sm text-[var(--color-ink)] transition duration-150 ease-out hover:bg-[var(--color-ink)]/5 active:scale-[0.97]"
            >
              Pedir por WhatsApp
            </a>
          </div>

          <div className="enter-fade-up enter-delay-4 mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-[var(--color-line)] pt-6 text-[11px] uppercase tracking-[0.14em] text-[var(--color-ink-soft)]">
            <span>{site.trustBadge}</span>
            <span className="text-[var(--color-gold)]">✦</span>
            <span>+{products.length} fragancias</span>
            <span className="text-[var(--color-gold)]">✦</span>
            <span>{site.location}</span>
          </div>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm lg:max-w-none">
          <div className="enter-fade-scale absolute inset-[10%] rounded-full bg-[var(--color-gold)]/[0.14] blur-3xl" />
          <div className="enter-fade-scale enter-delay-1 absolute inset-x-[6%] inset-y-[12%] rounded-[3rem] border border-dashed border-[var(--color-gold)]/25" />

          <p className="enter-fade-up enter-delay-1 absolute -top-8 left-1 text-[10px] uppercase tracking-[0.22em] text-[var(--color-gold-dark)] lg:left-3">
            Piezas más pedidas
          </p>

          {showcase.map((item) => (
            <div
              key={item.slug}
              className={`enter-fade-scale ${item.delay} absolute flex flex-col overflow-hidden rounded-2xl border bg-white shadow-[0_24px_48px_-18px_rgba(0,0,0,0.22)] ${
                item.featured ? "border-[var(--color-gold)]/60 z-10" : "border-[var(--color-line)]"
              } ${item.className}`}
            >
              {item.featured && (
                <span className="absolute left-3 top-3 z-10 rounded-full bg-[var(--color-ink)]/85 px-3 py-1 text-[9px] uppercase tracking-[0.16em] text-[var(--color-cream)]">
                  Favorito
                </span>
              )}
              <div className="relative flex-1">
                <Image
                  src={`/images/products/${item.slug}.jpg`}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 320px, 220px"
                  className="object-contain p-4"
                  priority
                />
              </div>
              <div className="border-t border-[var(--color-line)] px-3.5 py-2.5">
                <p className="text-[9px] uppercase tracking-[0.14em] text-[var(--color-gold-dark)]">
                  {item.brand}
                </p>
                <p className="truncate text-[13px] text-[var(--color-ink)]">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
