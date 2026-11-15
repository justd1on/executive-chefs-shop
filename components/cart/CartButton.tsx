"use client";

import { cart, useCart } from "@/lib/cart";

export default function CartButton() {
  const { lines } = useCart();
  const count = lines.reduce((n, l) => n + l.qty, 0);

  return (
    <button
      type="button"
      onClick={cart.open}
      aria-label={`Open cart, ${count} ${count === 1 ? "item" : "items"}`}
      className="relative flex items-center gap-2 rounded-full px-2 py-1.5 text-sm font-medium text-foreground transition hover:text-copper-dark"
    >
      <span className="relative">
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
          <path d="M4 7h16l-1.5 11a2 2 0 0 1-2 1.8H7.5a2 2 0 0 1-2-1.8L4 7Z" strokeLinejoin="round" />
          <path d="M8 7V5.5a4 4 0 0 1 8 0V7" strokeLinecap="round" />
        </svg>
        {count > 0 && (
          <span className="absolute -right-2 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-copper px-1 text-[11px] font-bold text-white">
            {count}
          </span>
        )}
      </span>
      <span className="hidden lg:inline">Cart</span>
    </button>
  );
}
