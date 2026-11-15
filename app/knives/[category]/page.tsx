import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageBanner from "@/components/PageBanner";
import ProductCard from "@/components/ProductCard";
import { categories, getCategory, getProductsByCategory, products } from "@/lib/products";

type Props = { params: Promise<{ category: string }> };

// Unknown slugs wait for the full render, so notFound() can send a real 404 status.
export const ensureStatic = "navigation";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return {
    title: category.name,
    description: category.description,
    alternates: { canonical: `/knives/${slug}` },
    openGraph: {
      title: `${category.name} | Ridge Cutlery`,
      description: category.description,
      url: `/knives/${slug}`,
      images: [{ url: category.image, alt: category.imageAlt }],
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const inCategory = getProductsByCategory(slug);
  const others = products.filter((p) => p.category !== slug).slice(0, 4);

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "All Knives", href: "/knives" },
          { label: category.name, href: `/knives/${slug}` },
        ]}
      />
      <PageBanner
        eyebrow="Collection"
        title={category.name}
        description={category.description}
        image={category.image}
        imageAlt={category.imageAlt}
      />

      <section className="mx-auto max-w-7xl px-6 py-12">
        <p className="mb-6 text-sm text-muted">
          {inCategory.length} {inCategory.length === 1 ? "product" : "products"}
        </p>
        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
          {inCategory.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <h2 className="font-display mb-8 text-2xl font-bold text-foreground">More From Ridge Cutlery</h2>
          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
            {others.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
