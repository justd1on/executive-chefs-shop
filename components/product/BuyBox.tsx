"use client";

import { useState } from "react";
import { cart } from "@/lib/cart";

export default function BuyBox({ slug }: { slug: string }) {
  const [qty, setQty] = useState(1);

  return (
    <div className="flex gap-3">
      <div className="flex items-center rounded-full border border-border">
        <button
          type="button"
          onClick={() => setQty((q) => Math.max(1, q - 1))}
          disabled={qty <= 1}
          aria-label="Decrease quantity"
          className="px-4 py-3 text-lg text-muted transition hover:text-foreground disabled:opacity-30"
        >
          −
        </button>
        <span className="w-6 text-center font-semibold" aria-live="polite">
          {qty}
        </span>
        <button
          type="button"
          onClick={() => setQty((q) => Math.min(10, q + 1))}
          disabled={qty >= 10}
          aria-label="Increase quantity"
          className="px-4 py-3 text-lg text-muted transition hover:text-foreground disabled:opacity-30"
        >
          +
        </button>
      </div>
      <button
        type="button"
        onClick={() => cart.add(slug, qty)}
        className="flex-1 rounded-full bg-copper py-3 text-base font-semibold text-white transition hover:bg-copper-dark"
      >
        Add to Cart
      </button>
    </div>
  );
}
