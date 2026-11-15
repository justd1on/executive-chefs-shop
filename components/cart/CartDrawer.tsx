"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cart, useCart } from "@/lib/cart";
import { FREE_GIFT_SLUG, UPSELL_SLUG, getProduct } from "@/lib/products";
import { formatPrice, store } from "@/lib/store";

const gift = getProduct(FREE_GIFT_SLUG)!;
const upsell = getProduct(UPSELL_SLUG)!;

export default function CartDrawer() {
  const { lines, isOpen } = useCart();
  const [checkoutNote, setCheckoutNote] = useState(false);

  const items = lines.flatMap((line) => {
    const product = getProduct(line.slug);
    return product ? [{ ...line, product }] : [];
  });
  const count = items.reduce((n, i) => n + i.qty, 0);
  const subtotal = items.reduce((sum, i) => sum + i.product.price * i.qty, 0);
  const hasSet = items.some((i) => i.product.freeGift);
  const showUpsell = items.length > 0 && !items.some((i) => i.slug === UPSELL_SLUG);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && cart.close();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className={`fixed inset-0 z-[60] ${isOpen ? "" : "pointer-events-none"}`} inert={!isOpen}>
      <div
        onClick={cart.close}
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-background transition-transform duration-300 ${isOpen ? "translate-x-0 shadow-2xl" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <h2 className="font-display text-lg font-bold">
            Your Cart{count > 0 && <span className="text-muted"> ({count})</span>}
          </h2>
          <button
            type="button"
            onClick={cart.close}
            aria-label="Close cart"
            className="rounded-full p-2 text-muted transition hover:bg-surface hover:text-foreground"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <p className="font-display text-lg font-bold">Your cart is empty</p>
            <p className="text-sm text-muted">Find the knife that fits the way you cook.</p>
            <Link
              href="/knives"
              onClick={cart.close}
              className="rounded-full bg-copper px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-copper-dark"
            >
              Shop All Knives
            </Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-border overflow-y-auto px-6">
              {items.map(({ slug, qty, product }) => (
                <li key={slug} className="flex gap-4 py-5">
                  <Link
                    href={`/products/${slug}`}
                    onClick={cart.close}
                    className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-surface"
                  >
                    <Image src={product.images[0].src} alt={product.images[0].alt} fill sizes="80px" className="object-cover" />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between gap-3">
                      <Link
                        href={`/products/${slug}`}
                        onClick={cart.close}
                        className="text-sm font-semibold leading-snug hover:text-copper-dark"
                      >
                        {product.name}
                      </Link>
                      <span className="text-sm font-semibold">{formatPrice(product.price * qty)}</span>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center rounded-full border border-border">
                        <button
                          type="button"
                          onClick={() => cart.setQty(slug, qty - 1)}
                          disabled={qty <= 1}
                          aria-label={`Decrease quantity of ${product.name}`}
                          className="px-3 py-1 text-muted transition hover:text-foreground disabled:opacity-30"
                        >
                          −
                        </button>
                        <span className="w-6 text-center text-sm font-medium" aria-live="polite">
                          {qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => cart.setQty(slug, qty + 1)}
                          disabled={qty >= 10}
                          aria-label={`Increase quantity of ${product.name}`}
                          className="px-3 py-1 text-muted transition hover:text-foreground disabled:opacity-30"
                        >
                          +
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => cart.remove(slug)}
                        className="text-xs text-muted underline-offset-2 hover:text-foreground hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}

              {hasSet && (
                <li className="flex gap-4 py-5">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-surface">
                    <Image src={gift.images[0].src} alt={gift.images[0].alt} fill sizes="80px" className="object-cover" />
                  </div>
                  <div className="flex flex-1 justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold">{gift.name}</p>
                      <p className="mt-1 text-xs font-semibold text-emerald-700">Free gift with your knife set</p>
                    </div>
                    <div className="text-right text-sm">
                      <span className="block text-xs text-muted line-through">{formatPrice(gift.price)}</span>
                      <span className="font-semibold text-emerald-700">FREE</span>
                    </div>
                  </div>
                </li>
              )}
            </ul>

            {showUpsell && (
              <div className="mx-6 mb-4 flex items-center gap-4 rounded-xl border border-border bg-surface p-3">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-background">
                  <Image src={upsell.images[0].src} alt={upsell.images[0].alt} fill sizes="56px" className="object-cover" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-wide text-copper-dark">Complete your kit</p>
                  <p className="text-sm font-semibold">{upsell.name}</p>
                </div>
                <button
                  type="button"
                  onClick={() => cart.add(upsell.slug)}
                  className="rounded-full border border-copper px-3 py-1.5 text-xs font-semibold text-copper-dark transition hover:bg-copper hover:text-white"
                >
                  Add {formatPrice(upsell.price)}
                </button>
              </div>
            )}

            <div className="border-t border-border px-6 py-5">
              <div className="flex justify-between text-sm">
                <span className="text-muted">Subtotal</span>
                <span className="font-semibold">{formatPrice(subtotal)}</span>
              </div>
              <div className="mt-1 flex justify-between text-sm">
                <span className="text-muted">US shipping</span>
                <span className="font-semibold text-emerald-700">Free</span>
              </div>
              <button
                type="button"
                onClick={() => setCheckoutNote(true)}
                className="mt-4 w-full rounded-full bg-copper py-3 text-sm font-semibold text-white transition hover:bg-copper-dark"
              >
                Checkout · {formatPrice(subtotal)}
              </button>
              {checkoutNote ? (
                <p className="mt-3 text-center text-xs text-muted" role="status">
                  Online checkout isn&apos;t live yet. Your cart is saved. Questions? Email{" "}
                  <a href={`mailto:${store.email}`} className="font-semibold text-copper-dark">
                    {store.email}
                  </a>
                  .
                </p>
              ) : (
                <p className="mt-3 text-center text-xs text-muted">
                  {store.returnDays}-day returns · Tracked delivery in {store.deliveryEstimate}
                </p>
              )}
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
