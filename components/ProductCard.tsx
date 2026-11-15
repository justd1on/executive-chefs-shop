import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/store";
import AddToCartButton from "./cart/AddToCartButton";

export default function ProductCard({ product }: { product: Product }) {
  const href = `/products/${product.slug}`;
  const image = product.images[0];

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition hover:border-copper hover:shadow-md">
      <Link href={href} className="relative block aspect-square overflow-hidden bg-surface">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute left-2 top-2 rounded-md bg-copper px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white sm:left-3 sm:top-3 sm:px-2.5 sm:text-xs">
            {product.badge}
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col gap-1.5 p-3 sm:p-5">
        <h3 className="font-display text-sm font-bold leading-snug text-foreground sm:text-base">
          <Link href={href} className="hover:text-copper-dark">
            {product.name}
          </Link>
        </h3>
        <p className="hidden text-sm text-muted sm:block">{product.tagline}</p>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-x-2 pt-2 sm:pt-3">
          <span className="font-display text-base font-bold text-foreground sm:text-xl">{formatPrice(product.price)}</span>
          <span className="text-[11px] font-semibold text-emerald-700 sm:text-xs">
            {product.inStock ? "In stock" : "Out of stock"}
          </span>
        </div>
        {product.freeGift && (
          <p className="text-[11px] font-semibold text-copper-dark sm:text-xs">+ Free 4-in-1 Pro Sharpener</p>
        )}
        <AddToCartButton
          slug={product.slug}
          className="mt-2 w-full rounded-full bg-copper py-2 text-sm font-semibold text-white transition hover:bg-copper-dark sm:mt-3 sm:py-2.5"
        />
      </div>
    </article>
  );
}
