import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/products";

export default function CategoryTiles() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14">
      <h2 className="font-display mb-6 text-xl font-bold text-foreground">
        Shop by Category
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/knives/${category.slug}`}
            className="group rounded-2xl border border-border bg-surface p-5 text-center transition hover:border-copper"
          >
            <div className="relative mx-auto aspect-square w-full max-w-28 overflow-hidden rounded-xl bg-surface-alt">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
            <p className="mt-4 text-sm font-semibold text-foreground">
              {category.name}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
