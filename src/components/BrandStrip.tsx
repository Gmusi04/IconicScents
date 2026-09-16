import { brands } from "@/data/products";

export function BrandStrip() {
  const row = [...brands, ...brands];
  return (
    <section className="overflow-hidden border-b border-[var(--color-line)] bg-[var(--color-cream)] py-6">
      <div className="marquee-mask">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
              {row.map((b, i) => (
                <span key={`${copy}-${b}-${i}`} className="flex items-center">
                  <span className="whitespace-nowrap px-6 font-serif-display text-lg text-[var(--color-ink-soft)] sm:text-xl">
                    {b}
                  </span>
                  <span className="text-[var(--color-gold)]">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
