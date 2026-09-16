import { brands, products } from "@/data/products";

const icons = {
  original:
    "M12 3 4 6.5V11c0 5 3.4 8.4 8 9 4.6-.6 8-4 8-9V6.5L12 3Zm-1.4 10.2-2.3-2.3 1.1-1.1 1.2 1.2 3.6-3.6 1.1 1.1-4.7 4.7Z",
  shipping:
    "M4 7h9v7H4V7Zm9 3h3.5l2.5 3v1h-6v-4ZM6.5 19a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2Zm10 0a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2Z",
  chat:
    "M4 5h16v11H8l-4 4V5Z",
  catalog:
    "M4.5 4.5h6v6h-6v-6Zm9 0h6v6h-6v-6Zm-9 9h6v6h-6v-6Zm9 0h6v6h-6v-6Z",
};

function stat() {
  const count = products.length;
  const brandCount = brands.length;
  return [
    { icon: icons.original, label: "100% originales", sub: "Sin imitaciones" },
    { icon: icons.catalog, label: `${count} fragancias`, sub: `${brandCount} marcas árabes y de diseñador` },
    { icon: icons.shipping, label: "Envíos a todo México", sub: "Entrega o recolección en Mérida" },
    { icon: icons.chat, label: "Atención personalizada", sub: "Por WhatsApp e Instagram" },
  ];
}

export function TrustBar() {
  const items = stat();
  return (
    <section className="border-y border-[var(--color-line)] bg-[var(--color-parchment)] py-8">
      <div className="container-editorial grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
        {items.map((it) => (
          <div key={it.label} className="flex items-start gap-3">
            <svg
              viewBox="0 0 24 24"
              className="mt-0.5 h-6 w-6 shrink-0 text-[var(--color-gold-dark)]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d={it.icon} />
            </svg>
            <div>
              <p className="text-sm font-medium text-[var(--color-ink)]">{it.label}</p>
              <p className="mt-0.5 text-xs leading-snug text-[var(--color-ink-soft)]">{it.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
