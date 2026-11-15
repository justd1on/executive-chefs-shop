import Link from "next/link";
import { categories } from "@/lib/products";

const links = [
  { label: "All Knives", href: "/knives" },
  ...categories.map((c) => ({ label: c.name, href: `/knives/${c.slug}` })),
  { label: "Why Ridge", href: "/why-ridge" },
];

export default function CategoryNav() {
  return (
    <nav className="hidden border-b border-border bg-surface md:block">
      <div className="mx-auto flex max-w-7xl items-center gap-8 px-6 py-3 text-sm font-medium text-foreground">
        {links.map((c) => (
          <Link key={c.label} href={c.href} className="whitespace-nowrap transition hover:text-copper-dark">
            {c.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
