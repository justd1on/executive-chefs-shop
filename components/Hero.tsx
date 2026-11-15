import Image from "next/image";
import { heroProduct, products } from "@/lib/products";

const secondaryProduct = products.find((p) => p.slug === "damascus-pattern-chef-knife")!;

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="relative col-span-2 overflow-hidden rounded-2xl border border-border bg-surface">
          <div className="relative aspect-[16/8] w-full">
            <Image
              src={heroProduct.image}
              alt="The Executive Chef Collection knife set resting on a wooden table outdoors"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/30 to-transparent" />
          </div>
          <div className="absolute inset-y-0 left-0 flex max-w-md flex-col justify-center px-8">
            <span className="mb-3 text-xs font-bold uppercase tracking-widest text-copper-dark">
              Forged for the serious kitchen
            </span>
            <h1 className="font-display text-3xl font-bold leading-tight text-foreground md:text-4xl">
              {heroProduct.name}
            </h1>
            <p className="mt-3 text-sm text-muted">
              {heroProduct.tagline} Precision-forged steel with an edge that
              outlasts every knife you own today.
            </p>
            <a
              href={`#${heroProduct.slug}`}
              className="mt-5 inline-flex w-fit items-center rounded-full bg-copper px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-copper-dark"
            >
              Shop Now &mdash; ${heroProduct.price}
            </a>
          </div>
        </div>

        <a
          href={`#${secondaryProduct.slug}`}
          className="relative col-span-1 overflow-hidden rounded-2xl border border-border bg-navy"
        >
          <span className="absolute right-4 top-4 z-10 rounded-full bg-copper px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
            Collector&apos;s Pick
          </span>
          <div className="relative aspect-[16/8] w-full md:aspect-auto md:h-full">
            <Image
              src={secondaryProduct.image}
              alt="Artisan Damascus-pattern chef knife resting on a moss-covered stone outdoors"
              fill
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
          </div>
          <div className="absolute inset-x-0 bottom-0 p-6">
            <h2 className="font-display text-xl font-bold text-white">
              The Damascus Collection
            </h2>
            <p className="mt-1 text-sm text-white/70">
              A hand-finished blade with the grain of real craftsmanship.
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}
