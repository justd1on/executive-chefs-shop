"use client";

import { cart } from "@/lib/cart";

type Props = { slug: string; qty?: number; className?: string; label?: string };

export default function AddToCartButton({ slug, qty = 1, className, label = "Add to Cart" }: Props) {
  return (
    <button type="button" onClick={() => cart.add(slug, qty)} className={className}>
      {label}
    </button>
  );
}
