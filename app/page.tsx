import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Reviews from "@/components/Reviews";
import CategoryTiles from "@/components/CategoryTiles";
import ProductGrid from "@/components/ProductGrid";
import BrandIntro from "@/components/BrandIntro";
import BlogTeaser from "@/components/BlogTeaser";
import WhyRidge from "@/components/WhyRidge";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Reviews />
        <CategoryTiles />
        <ProductGrid />
        <BrandIntro />
        <BlogTeaser />
        <WhyRidge />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
