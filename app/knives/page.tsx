import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import CategoryTiles from "@/components/CategoryTiles";
import ProductGrid from "@/components/ProductGrid";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "All Knives",
  description:
    "Browse the full Ridge Cutlery collection: forged chef knife sets, the Damascus-pattern knife, BBQ and outdoor blades, and sharpening tools.",
};

export default function AllKnivesPage() {
  return (
    <>
      <Header />
      <main>
        <PageBanner
          eyebrow="The Full Collection"
          title="All Knives"
          description="Seven forged pieces, each built for a specific job in your kitchen or at the grill."
          image="/images/hero-executive-chef-collection.png"
        />
        <CategoryTiles />
        <ProductGrid
          heading="Every Ridge Cutlery Knife"
          subheading="From the everyday chef's set to the specialty collector's blade."
          products={products}
        />
      </main>
      <Footer />
    </>
  );
}
