import { site } from "@/data/site";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contacto" className="bg-[var(--color-parchment)] py-24 md:py-32">
      <div className="container-editorial">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-gold)]">
            Contacto
          </p>
          <h2 className="mt-3 font-serif-display text-3xl text-[var(--color-ink)] sm:text-4xl md:text-5xl">
            Hablemos de tu próxima fragancia
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[var(--color-ink-soft)] md:text-lg">
            {site.delivery}
          </p>
          <p className="mt-2 text-sm text-[var(--color-gold-dark)]">
            {site.trustBadge} · {site.location}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={site.whatsapp.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-gold)] px-6 py-3 text-sm font-medium text-[var(--color-ink)] transition duration-150 ease-out active:scale-[0.97] hover:bg-[var(--color-gold-dark)]"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 5h16v11H8l-4 4V5Z" />
              </svg>
              WhatsApp · {site.whatsapp.display}
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-ink)]/20 px-6 py-3 text-sm text-[var(--color-ink)] transition duration-150 ease-out active:scale-[0.97] hover:border-[var(--color-ink)]/50"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="4" width="16" height="16" rx="4.5" />
                <circle cx="12" cy="12" r="3.4" />
                <path d="M16.2 7.4h.01" />
              </svg>
              Instagram · {site.social.instagramHandle}
            </a>
            {site.email && (
              <a
                href={`mailto:${site.email}`}
                className="rounded-full border border-[var(--color-ink)]/20 px-6 py-3 text-sm text-[var(--color-ink)] transition duration-150 ease-out active:scale-[0.97] hover:border-[var(--color-ink)]/50"
              >
                {site.email}
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
