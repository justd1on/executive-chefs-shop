import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import ProductGrid from "@/components/ProductGrid";
import { categories, getCategory, getProductsByCategory } from "@/lib/products";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return {
    title: category.name,
    description: category.description,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const categoryProducts = getProductsByCategory(slug);

  return (
    <>
      <Header />
      <main>
        <PageBanner
          eyebrow="Collection"
          title={category.name}
          description={category.description}
          image={category.image}
        />
        <ProductGrid
          heading={category.name}
          subheading={`${categoryProducts.length} piece${categoryProducts.length === 1 ? "" : "s"} in this collection.`}
          products={categoryProducts}
          viewAllHref="/knives"
        />
      </main>
      <Footer />
    </>
  );
}
