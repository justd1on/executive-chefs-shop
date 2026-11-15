import Link from "next/link";
import JsonLd from "./JsonLd";
import { store } from "@/lib/store";

export type Crumb = { label: string; href: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all = [{ label: "Home", href: "/" }, ...items];
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-6 pt-6 text-xs text-muted">
      <ol className="flex flex-wrap items-center gap-1.5">
        {all.map((c, i) => (
          <li key={c.href} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden>›</span>}
            {i < all.length - 1 ? (
              <Link href={c.href} className="hover:text-copper-dark">
                {c.label}
              </Link>
            ) : (
              <span aria-current="page" className="font-medium text-foreground">
                {c.label}
              </span>
            )}
          </li>
        ))}
      </ol>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: all.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.label,
            item: `${store.url}${c.href === "/" ? "" : c.href}`,
          })),
        }}
      />
    </nav>
  );
}
