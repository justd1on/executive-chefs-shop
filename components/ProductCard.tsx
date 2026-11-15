import Image from "next/image";
import type { Product } from "@/lib/products";
import Stars from "./Stars";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article
      id={product.slug}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition hover:border-copper hover:shadow-md"
    >
      <div className="relative aspect-square overflow-hidden bg-surface">
        <Image
          src={product.image}
          alt={`${product.name} knife photographed outdoors`}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-md bg-copper px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-white">
            {product.badge}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-5">
        <h3 className="font-display text-base font-bold leading-snug text-foreground">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <Stars rating={product.rating} />
          <span className="text-xs text-muted">({product.reviewCount})</span>
        </div>
        <p className="text-sm text-muted">{product.description}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="font-display text-xl font-bold text-foreground">
            ${product.price}
          </span>
          <span className="text-xs font-semibold text-emerald-700">
            {product.inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>
        <button
          type="button"
          className="mt-3 w-full rounded-full bg-copper py-2.5 text-sm font-semibold text-white transition hover:bg-copper-dark"
        >
          Add to Cart
        </button>
        <span className="mt-2 text-[11px] text-muted">SKU: {product.sku}</span>
      </div>
    </article>
  );
}
