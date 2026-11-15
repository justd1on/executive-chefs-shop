import Image from "next/image";
import Link from "next/link";
import { getProduct, heroProduct } from "@/lib/products";
import { formatPrice } from "@/lib/store";

const secondary = getProduct("damascus-pattern-chef-knife")!;

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-6 md:py-8">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="grid overflow-hidden rounded-2xl border border-border bg-surface sm:grid-cols-2 lg:col-span-2">
          <div className="order-2 flex flex-col justify-center p-7 sm:order-1 md:p-10">
            <span className="text-xs font-bold uppercase tracking-widest text-copper-dark">The Flagship Set</span>
            <h1 className="font-display mt-3 text-3xl font-bold leading-tight text-foreground md:text-4xl">
              {heroProduct.name}
            </h1>
            <p className="mt-3 text-sm text-muted md:text-base">
              {heroProduct.tagline} Ships with a free 4-in-1 Pro Sharpener.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href={`/products/${heroProduct.slug}`}
                className="rounded-full bg-copper px-6 py-3 text-sm font-semibold text-white transition hover:bg-copper-dark"
              >
                Shop the Set · {formatPrice(heroProduct.price)}
              </Link>
              <Link
                href="/knives"
                className="rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:border-copper"
              >
                All Knives
              </Link>
            </div>
          </div>
          <Link
            href={`/products/${heroProduct.slug}`}
            className="relative order-1 aspect-[4/3] sm:order-2 sm:aspect-auto sm:min-h-80"
          >
            <Image
              src={heroProduct.images[1].src}
              alt={heroProduct.images[1].alt}
              fill
              preload
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </Link>
        </div>

        <Link
          href={`/products/${secondary.slug}`}
          className="group relative min-h-72 overflow-hidden rounded-2xl bg-navy"
        >
          <Image
            src={secondary.images[1].src}
            alt={secondary.images[1].alt}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover opacity-80 transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
          <span className="absolute left-5 top-5 rounded-md bg-copper px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-white">
            {secondary.badge}
          </span>
          <div className="absolute inset-x-0 bottom-0 p-6">
            <h2 className="font-display text-xl font-bold text-white">{secondary.name}</h2>
            <p className="mt-1 text-sm text-white/75">{secondary.tagline}</p>
            <p className="mt-3 text-sm font-semibold text-copper-light">
              {formatPrice(secondary.price)} · Shop now →
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}
