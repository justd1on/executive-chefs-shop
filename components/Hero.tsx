import Image from "next/image";
import { heroProduct } from "@/lib/products";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <Image
        src={heroProduct.image}
        alt="The Executive Chef Collection knife set resting on a wooden table outdoors"
        fill
        priority
        className="object-cover object-center opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start px-6 py-28 md:py-40">
        <span className="mb-4 rounded-full border border-copper/40 bg-copper/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-copper-light">
          Forged for the serious kitchen
        </span>
        <h1 className="font-display max-w-2xl text-5xl leading-[0.95] tracking-wide text-foreground md:text-7xl">
          {heroProduct.name}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-steel">
          {heroProduct.tagline} Precision-forged steel, full-tang balance, and
          an edge that outlasts every knife you own today.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={`#${heroProduct.slug}`}
            className="rounded-full bg-copper px-8 py-3 text-base font-semibold text-background transition hover:bg-copper-light"
          >
            Buy Now &mdash; ${heroProduct.price}
          </a>
          <a
            href="#collection"
            className="rounded-full border border-border px-8 py-3 text-base font-semibold text-foreground transition hover:border-copper"
          >
            View Full Collection
          </a>
        </div>
      </div>
    </section>
  );
}
