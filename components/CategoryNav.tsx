const categories = [
  { label: "All Knives", href: "#collection" },
  { label: "Chef Knife Sets", href: "#executive-chef-collection" },
  { label: "Damascus Collection", href: "#damascus-pattern-chef-knife" },
  { label: "BBQ & Outdoor", href: "#artisan-pitmaster-knife" },
  { label: "Sharpening Tools", href: "#4-in-1-pro-sharpener" },
  { label: "Why Ridge", href: "#why-ridge" },
];

export default function CategoryNav() {
  return (
    <nav className="hidden border-b border-border bg-surface md:block">
      <div className="mx-auto flex max-w-7xl items-center gap-8 px-6 py-3 text-sm font-medium text-foreground">
        {categories.map((c) => (
          <a key={c.label} href={c.href} className="whitespace-nowrap transition hover:text-copper-dark">
            {c.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
