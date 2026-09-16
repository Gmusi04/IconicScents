import { site } from "@/data/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[85svh] w-full flex-col items-start justify-center bg-[var(--color-cream)] pt-24"
    >
      <div className="container-editorial flex w-full flex-col gap-8 py-16">
        <div>
          <p className="enter-fade-up mb-4 text-xs uppercase tracking-[0.3em] text-[var(--color-gold-dark)]">
            {site.social.instagramHandle}
          </p>
          <h1 className="enter-fade-up enter-delay-1 font-serif-display text-6xl leading-[0.95] tracking-tight text-[var(--color-ink)] sm:text-7xl md:text-8xl lg:text-[7rem]">
            Iconic Scents
          </h1>
          <p className="enter-fade-up enter-delay-2 mt-5 max-w-md text-lg text-[var(--color-ink-soft)] md:text-xl">
            {site.tagline}.
          </p>
        </div>

        <div className="enter-fade-up enter-delay-3 flex flex-wrap items-center gap-3">
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
      </div>
    </section>
  );
}
