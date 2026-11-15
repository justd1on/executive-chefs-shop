import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import PromoBand from "@/components/PromoBand";
import CategoryTiles from "@/components/CategoryTiles";
import ProductGrid from "@/components/ProductGrid";
import BrandIntro from "@/components/BrandIntro";
import BlogTeaser from "@/components/BlogTeaser";
import WhyRidge from "@/components/WhyRidge";
import Faq from "@/components/Faq";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "Ridge Cutlery | Premium Kitchen & BBQ Knives",
    description:
      "A curated collection of premium kitchen and BBQ knives: Damascus-pattern chef knife sets, pitmaster knives, cleavers, and sharpeners.",
  },
};

const featured = products.filter((p) => p.badge);

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <PromoBand />
      <CategoryTiles />
      <ProductGrid
        id="featured"
        eyebrow="Featured"
        heading="Our Top Picks"
        subheading="The pieces we'd reach for first, from the flagship set to the grill."
        products={featured}
        viewAllHref="/knives"
      />
      <BrandIntro />
      <BlogTeaser />
      <WhyRidge />
      <Faq />
    </>
  );
}
