import Image from "next/image";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article
      id={product.slug}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition hover:border-copper/60"
    >
      <div className="relative aspect-square overflow-hidden bg-surface-raised">
        <Image
          src={product.image}
          alt={`${product.name} knife photographed outdoors`}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        />
        {product.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-copper px-3 py-1 text-xs font-semibold uppercase tracking-wide text-background">
            {product.badge}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-6">
        <h3 className="font-display text-xl tracking-wide text-foreground">
          {product.name}
        </h3>
        <p className="text-sm text-steel">{product.tagline}</p>
        <p className="mt-1 text-sm text-steel/80">{product.description}</p>
        <div className="mt-auto flex items-center justify-between pt-6">
          <span className="font-display text-2xl text-copper-light">
            ${product.price}
          </span>
          <button
            type="button"
            className="rounded-full bg-foreground px-5 py-2 text-sm font-semibold text-background transition hover:bg-copper hover:text-background"
          >
            Buy Now
          </button>
        </div>
      </div>
    </article>
  );
}
