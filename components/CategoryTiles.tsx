import Image from "next/image";

const tiles = [
  {
    label: "Chef Knife Sets",
    href: "#executive-chef-collection",
    image: "/images/hero-executive-chef-collection.png",
  },
  {
    label: "Damascus Collection",
    href: "#damascus-pattern-chef-knife",
    image: "/images/damascus-pattern-chef-knife.png",
  },
  {
    label: "BBQ & Outdoor",
    href: "#artisan-pitmaster-knife",
    image: "/images/artisan-pitmaster-knife.png",
  },
  {
    label: "Sharpening Tools",
    href: "#4-in-1-pro-sharpener",
    image: "/images/pro-grade-sharpening-tools.png",
  },
];

export default function CategoryTiles() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14">
      <h2 className="font-display mb-6 text-xl font-bold text-foreground">
        Shop by Category
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {tiles.map((tile) => (
          <a
            key={tile.label}
            href={tile.href}
            className="group rounded-2xl border border-border bg-surface p-5 text-center transition hover:border-copper"
          >
            <div className="relative mx-auto aspect-square w-full max-w-28 overflow-hidden rounded-xl bg-surface-alt">
              <Image
                src={tile.image}
                alt={tile.label}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
            <p className="mt-4 text-sm font-semibold text-foreground">
              {tile.label}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
