import { site } from "@/data/site";

export function Footer({ logoSrc }: { logoSrc: string | null }) {
  return (
    <footer className="relative bg-[var(--color-ink)] pb-28 pt-16 text-[var(--color-cream)]/80 md:pb-16">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/50 to-transparent"
      />
      <div className="container-editorial grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            {logoSrc && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={logoSrc} alt="Iconic Scents" className="h-8 w-auto rounded-md bg-[var(--color-cream)] p-1" />
            )}
            <p className="font-serif-display text-2xl uppercase tracking-[0.2em] text-[var(--color-cream)]">
              Iconic Scents
            </p>
          </div>
          <p className="mt-2 text-sm">{site.category}</p>
          <p className="mt-1 text-sm">{site.location}</p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed">{site.delivery}</p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-cream)]/50">Contacto</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a
                href={site.whatsapp.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-[var(--color-cream)]"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 5h16v11H8l-4 4V5Z" />
                </svg>
                WhatsApp · {site.whatsapp.display}
              </a>
            </li>
            <li>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-[var(--color-cream)]"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="4" width="16" height="16" rx="4.5" />
                  <circle cx="12" cy="12" r="3.4" />
                  <path d="M16.2 7.4h.01" strokeLinecap="round" />
                </svg>
                Instagram · {site.social.instagramHandle}
              </a>
            </li>
            {site.email && (
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-[var(--color-cream)]">
                  {site.email}
                </a>
              </li>
            )}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-cream)]/50">Explorar</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="#coleccion" className="hover:text-[var(--color-cream)]">Colección</a>
            </li>
            <li>
              <a href="#contacto" className="hover:text-[var(--color-cream)]">Contacto</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-editorial mt-12 flex flex-col gap-2 border-t border-[var(--color-cream)]/10 pt-6 text-xs text-[var(--color-cream)]/40 sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Iconic Scents.</span>
        <span>{site.trustBadge}</span>
      </div>
    </footer>
  );
}
