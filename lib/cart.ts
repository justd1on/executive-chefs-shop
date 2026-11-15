import { useSyncExternalStore } from "react";

export type CartLine = { slug: string; qty: number };
type CartState = { lines: CartLine[]; isOpen: boolean };

const KEY = "ridge-cart";
const MAX_QTY = 10;
const SERVER_STATE: CartState = { lines: [], isOpen: false };
const listeners = new Set<() => void>();
let state: CartState | null = null;

function read(): CartState {
  if (!state) {
    let lines: CartLine[] = [];
    try {
      const saved = JSON.parse(localStorage.getItem(KEY) ?? "[]");
      if (Array.isArray(saved)) lines = saved;
    } catch {}
    state = { lines, isOpen: false };
  }
  return state;
}

function update(next: Partial<CartState>) {
  state = { ...read(), ...next };
  if (next.lines) {
    try {
      localStorage.setItem(KEY, JSON.stringify(state.lines));
    } catch {}
  }
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

const clamp = (qty: number) => Math.max(1, Math.min(qty, MAX_QTY));

export const cart = {
  add(slug: string, qty = 1) {
    const lines = read().lines;
    const found = lines.some((l) => l.slug === slug);
    update({
      lines: found
        ? lines.map((l) => (l.slug === slug ? { ...l, qty: clamp(l.qty + qty) } : l))
        : [...lines, { slug, qty: clamp(qty) }],
      isOpen: true,
    });
  },
  setQty(slug: string, qty: number) {
    update({ lines: read().lines.map((l) => (l.slug === slug ? { ...l, qty: clamp(qty) } : l)) });
  },
  remove(slug: string) {
    update({ lines: read().lines.filter((l) => l.slug !== slug) });
  },
  open: () => update({ isOpen: true }),
  close: () => update({ isOpen: false }),
};

export function useCart() {
  return useSyncExternalStore(subscribe, read, () => SERVER_STATE);
}
