import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageBanner from "@/components/PageBanner";
import CategoryTiles from "@/components/CategoryTiles";
import ProductGrid from "@/components/ProductGrid";
import { heroProduct, products } from "@/lib/products";

const description =
  "Shop the full Ridge Cutlery collection: chef knife sets, the Damascus-pattern chef's knife, a pitmaster BBQ knife, an everyday cleaver, and sharpening tools.";

export const metadata: Metadata = {
  title: "All Knives",
  description,
  alternates: { canonical: "/knives" },
  openGraph: {
    title: "All Knives | Ridge Cutlery",
    description,
    url: "/knives",
    images: [{ url: heroProduct.images[0].src, alt: heroProduct.images[0].alt }],
  },
};

export default function AllKnivesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "All Knives", href: "/knives" }]} />
      <PageBanner
        eyebrow="The Full Collection"
        title="All Knives"
        description={`${products.length} pieces, each chosen for a specific job in your kitchen or at the grill.`}
        image={heroProduct.images[0].src}
        imageAlt={heroProduct.images[0].alt}
      />
      <CategoryTiles />
      <ProductGrid products={products} />
    </>
  );
}
