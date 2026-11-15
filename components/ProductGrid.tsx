import Link from "next/link";
import type { Product } from "@/lib/products";
import ProductCard from "./ProductCard";

type Props = {
  products: Product[];
  eyebrow?: string;
  heading: string;
  subheading?: string;
  viewAllHref?: string;
  id?: string;
  bare?: boolean;
};

export default function ProductGrid({
  products,
  eyebrow,
  heading,
  subheading,
  viewAllHref,
  id,
  bare = false,
}: Props) {
  const content = (
    <div className={bare ? "" : "mx-auto max-w-7xl px-6 py-20"}>
      <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center text-center">
        {eyebrow && (
          <span className="text-xs font-bold uppercase tracking-widest text-copper-dark">
            {eyebrow}
          </span>
        )}
        <h2 className="font-display mt-2 text-3xl font-bold text-foreground md:text-4xl">
          {heading}
        </h2>
        {subheading && <p className="mt-3 text-muted">{subheading}</p>}
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
      {viewAllHref && (
        <div className="mt-10 text-center">
          <Link
            href={viewAllHref}
            className="inline-flex items-center rounded-full border border-copper px-6 py-2.5 text-sm font-semibold text-copper-dark transition hover:bg-copper hover:text-white"
          >
            View All Knives
          </Link>
        </div>
      )}
    </div>
  );

  if (bare) return content;

  return (
    <section id={id} className="border-t border-border bg-surface">
      {content}
    </section>
  );
}
