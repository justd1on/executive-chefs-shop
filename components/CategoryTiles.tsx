import Image from "next/image";
import Link from "next/link";
import { categories, getProductsByCategory } from "@/lib/products";

export default function CategoryTiles() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14">
      <h2 className="font-display mb-6 text-2xl font-bold text-foreground">Shop by Category</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {categories.map((category) => {
          const count = getProductsByCategory(category.slug).length;
          return (
            <Link
              key={category.slug}
              href={`/knives/${category.slug}`}
              className="group overflow-hidden rounded-2xl border border-border bg-surface transition hover:border-copper"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-surface-alt">
                <Image
                  src={category.image}
                  alt={category.imageAlt}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <p className="text-sm font-bold text-foreground">{category.name}</p>
                <p className="text-xs text-muted">
                  {count} {count === 1 ? "product" : "products"}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
