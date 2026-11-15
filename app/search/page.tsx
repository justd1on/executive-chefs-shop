import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import SearchForm from "@/components/SearchForm";
import { categories, searchProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Search",
  robots: { index: false, follow: true },
};

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

async function Results({ searchParams }: { searchParams: SearchParams }) {
  const raw = (await searchParams).q;
  const query = (Array.isArray(raw) ? raw[0] : raw)?.trim() ?? "";
  const results = searchProducts(query);

  return (
    <>
      <div className="max-w-xl">
        <SearchForm id="search-page" defaultValue={query} />
      </div>
      {query && (
        <p className="mt-6 text-sm text-muted">
          {results.length} {results.length === 1 ? "result" : "results"} for{" "}
          <span className="font-semibold text-foreground">&ldquo;{query}&rdquo;</span>
        </p>
      )}
      {results.length > 0 ? (
        <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
          {results.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-2xl border border-border bg-surface p-8">
          <p className="font-display text-lg font-bold">
            {query ? "No products matched your search." : "What are you looking for?"}
          </p>
          <p className="mt-2 text-sm text-muted">Try a word like &ldquo;cleaver&rdquo;, &ldquo;Damascus&rdquo;, or browse a category:</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/knives/${c.slug}`}
                className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium hover:border-copper"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default function SearchPage({ searchParams }: { searchParams: SearchParams }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <h1 className="font-display mb-6 text-3xl font-bold text-foreground">Search</h1>
      <Suspense fallback={<p className="text-sm text-muted">Searching…</p>}>
        <Results searchParams={searchParams} />
      </Suspense>
    </section>
  );
}
