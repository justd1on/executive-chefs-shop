import Link from "next/link";
import SearchForm from "@/components/SearchForm";
import { shopLinks } from "@/lib/nav";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-20 text-center">
      <p className="text-xs font-bold uppercase tracking-widest text-copper-dark">Page not found</p>
      <h1 className="font-display mt-3 text-3xl font-bold text-foreground md:text-4xl">
        This page took a wrong turn.
      </h1>
      <p className="mt-3 text-muted">Try a search, or head to one of our collections.</p>
      <div className="mx-auto mt-8 max-w-md">
        <SearchForm id="not-found-search" />
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {shopLinks.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="rounded-full border border-border px-4 py-2 text-sm font-medium hover:border-copper"
          >
            {l.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
