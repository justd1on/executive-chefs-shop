import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import ProductCard from "@/components/ProductCard";
import { articles, getArticle } from "@/lib/journal";
import { getProduct } from "@/lib/products";
import { store } from "@/lib/store";

type Props = { params: Promise<{ slug: string }> };

// Unknown slugs wait for the full render, so notFound() can send a real 404 status.
export const ensureStatic = "navigation";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/journal/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      publishedTime: article.datePublished,
      images: [article.image],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = article.relatedProducts.flatMap((s) => {
    const product = getProduct(s);
    return product ? [product] : [];
  });
  const more = articles.filter((a) => a.slug !== article.slug);
  const url = `${store.url}/journal/${article.slug}`;

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Journal", href: "/journal" },
          { label: article.title, href: `/journal/${article.slug}` },
        ]}
      />
      <article className="mx-auto max-w-7xl px-6 pb-16 pt-8">
        <header className="mx-auto max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-copper-dark">Journal</span>
          <h1 className="font-display mt-2 text-3xl font-bold leading-tight text-foreground md:text-4xl">
            {article.title}
          </h1>
          <p className="mt-3 text-sm text-muted">{article.readMinutes} min read</p>
        </header>
        <div className="relative mx-auto mt-8 aspect-[16/9] max-w-5xl overflow-hidden rounded-2xl bg-surface">
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            preload
            sizes="(min-width: 1024px) 64rem, 100vw"
            className="object-cover"
          />
        </div>
        <div className="mx-auto mt-10 max-w-3xl">
          {article.sections.map((section) => (
            <section key={section.heading} className="mt-10 first:mt-0">
              <h2 className="font-display text-2xl font-bold text-foreground">{section.heading}</h2>
              {section.paragraphs.map((paragraph, i) => (
                <p key={i} className="mt-4 text-[17px] leading-relaxed text-foreground">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-border bg-surface">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <h2 className="font-display mb-10 text-center text-2xl font-bold text-foreground md:text-3xl">
              Shop the products in this article
            </h2>
            <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
              {related.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="font-display mb-8 text-2xl font-bold text-foreground">More from the Journal</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {more.map((a) => (
            <Link
              key={a.slug}
              href={`/journal/${a.slug}`}
              className="group flex gap-5 overflow-hidden rounded-2xl border border-border bg-background p-4 transition hover:border-copper"
            >
              <div className="relative aspect-square w-28 shrink-0 overflow-hidden rounded-xl bg-surface">
                <Image src={a.image} alt={a.imageAlt} fill sizes="112px" className="object-cover" />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="font-display text-base font-bold text-foreground">{a.title}</h3>
                <p className="mt-1 text-sm text-muted">{a.excerpt}</p>
                <span className="mt-2 text-sm font-semibold text-copper-dark">Read article &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.description,
          image: `${store.url}${article.image}`,
          datePublished: article.datePublished,
          dateModified: article.datePublished,
          author: { "@type": "Organization", name: store.name, url: store.url },
          publisher: { "@type": "Organization", name: store.name, url: store.url },
          mainEntityOfPage: { "@type": "WebPage", "@id": url },
        }}
      />
    </>
  );
}
