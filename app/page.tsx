import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ProductGrid from "@/components/ProductGrid";
import WhyRidge from "@/components/WhyRidge";
import Reviews from "@/components/Reviews";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <ProductGrid />
        <WhyRidge />
        <Reviews />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
