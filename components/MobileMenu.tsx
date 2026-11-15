"use client";

import { useState } from "react";
import Link from "next/link";
import SearchForm from "./SearchForm";
import { infoLinks, shopLinks } from "@/lib/nav";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="-ml-2 rounded-full p-2 text-foreground"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
          {open ? <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" /> : <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />}
        </svg>
      </button>
      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-border bg-background px-6 pb-8 pt-4 shadow-lg"
        >
          <div onSubmit={close}>
            <SearchForm id="mobile-search" />
          </div>
          <nav aria-label="Mobile">
            <p className="mt-6 text-xs font-bold uppercase tracking-widest text-copper-dark">Shop</p>
            <ul className="mt-2 divide-y divide-border">
              {shopLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} onClick={close} className="block py-3 text-base font-medium">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs font-bold uppercase tracking-widest text-copper-dark">Help &amp; Info</p>
            <ul className="mt-2 divide-y divide-border">
              {infoLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} onClick={close} className="block py-3 text-base font-medium">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
