import Image from "next/image";
import { products } from "@/data/products";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative w-full overflow-hidden bg-[var(--color-cream)] pt-24"
    >
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

        <div className="relative mx-auto aspect-square w-full max-w-sm lg:max-w-none">
          <div className="enter-fade-scale absolute inset-[10%] rounded-full bg-[var(--color-gold)]/[0.14] blur-3xl" />
          <div className="enter-fade-scale enter-delay-1 absolute inset-[13%] rounded-full border border-dashed border-[var(--color-gold)]/30" />
          <div className="enter-fade-scale enter-delay-1 absolute inset-[22%] rounded-full border border-[var(--color-line)]" />

          <div className="enter-fade-scale enter-delay-2 absolute left-[4%] top-[10%] h-[52%] w-[52%] drop-shadow-[0_18px_28px_rgba(0,0,0,0.14)]">
            <Image
              src="/images/products/rasasi-hawas-kobra.jpg"
              alt="Rasasi Hawas Kobra"
              fill
              sizes="(min-width: 1024px) 320px, 220px"
              className="object-contain"
              priority
            />
          </div>

          <div className="enter-fade-scale enter-delay-3 absolute bottom-[6%] right-[2%] h-[62%] w-[62%] drop-shadow-[0_26px_38px_rgba(0,0,0,0.18)]">
            <Image
              src="/images/products/dior-sauvage-edt.jpg"
              alt="Dior Sauvage Eau de Toilette"
              fill
              sizes="(min-width: 1024px) 380px, 260px"
              className="object-contain"
              priority
            />
          </div>

          <div className="enter-fade-scale enter-delay-4 absolute right-[4%] top-[4%] rounded-full bg-[var(--color-ink)] px-3.5 py-2 text-[10px] uppercase tracking-[0.14em] text-[var(--color-cream)] shadow-[0_10px_24px_rgba(0,0,0,0.25)]">
            Piezas icónicas
          </div>
        </div>
      </div>
    </section>
  );
}
