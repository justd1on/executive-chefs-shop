import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageBanner from "@/components/PageBanner";
import { articles } from "@/lib/journal";

export const metadata: Metadata = {
  title: "The Journal",
  description:
    "Practical knife know-how from Ridge Cutlery: how to choose a chef's knife, Damascus pattern vs. Damascus steel, and how to keep a BBQ knife sharp.",
  alternates: { canonical: "/journal" },
};

export default function JournalPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Journal", href: "/journal" }]} />
      <PageBanner
        eyebrow="The Journal"
        title="Knife Know-How"
        description="Straight answers on choosing, using, and caring for kitchen and BBQ knives."
        image="/img/products/precision-culinary-master-set/1621824525739.webp"
        imageAlt="Japanese-style kitchen knives with dark wood handles lined up on a black background"
      />
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/journal/${article.slug}`}
              className="group overflow-hidden rounded-2xl border border-border bg-background transition hover:border-copper hover:shadow-md"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface">
                <Image
                  src={article.image}
                  alt={article.imageAlt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="text-xs text-muted">{article.readMinutes} min read</p>
                <h2 className="font-display mt-1 text-base font-bold text-foreground">{article.title}</h2>
                <p className="mt-2 text-sm text-muted">{article.excerpt}</p>
                <span className="mt-3 inline-block text-sm font-semibold text-copper-dark">
                  Read article &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
