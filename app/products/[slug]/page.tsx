import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import ProductCard from "@/components/ProductCard";
import ProductGallery from "@/components/product/ProductGallery";
import BuyBox from "@/components/product/BuyBox";
import { CheckIcon, GiftIcon, LockIcon, ReturnIcon, TruckIcon } from "@/components/Icons";
import { FREE_GIFT_SLUG, getCategory, getProduct, products } from "@/lib/products";
import { formatPrice, store } from "@/lib/store";

type Props = { params: Promise<{ slug: string }> };

// Unknown slugs wait for the full render, so notFound() can send a real 404 status.
export const ensureStatic = "navigation";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
    alternates: { canonical: `/products/${slug}` },
    openGraph: {
      title: product.name,
      description: product.description,
      url: `/products/${slug}`,
      images: [{ url: product.images[0].src, alt: product.images[0].alt }],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = getCategory(product.category)!;
  const gift = getProduct(FREE_GIFT_SLUG)!;
  const related = [
    ...products.filter((p) => p.category === product.category && p.slug !== slug),
    ...products.filter((p) => p.category !== product.category),
  ].slice(0, 4);
  const url = `${store.url}/products/${slug}`;

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "All Knives", href: "/knives" },
          { label: category.name, href: `/knives/${category.slug}` },
          { label: product.name, href: `/products/${slug}` },
        ]}
      />

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-8 lg:grid-cols-2 lg:gap-14">
        <ProductGallery images={product.images} />

        <div>
          {product.badge && (
            <span className="inline-block rounded-md bg-copper px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-white">
              {product.badge}
            </span>
          )}
          <h1 className="font-display mt-3 text-3xl font-bold leading-tight text-foreground md:text-4xl">
            {product.name}
          </h1>
          <p className="mt-2 text-muted">{product.tagline}</p>

          <div className="mt-5 flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <span className="font-display text-3xl font-bold text-foreground">{formatPrice(product.price)}</span>
            <span className="flex items-center gap-1.5 text-sm font-semibold text-emerald-700">
              <span className="h-2 w-2 rounded-full bg-emerald-600" />
              {product.inStock ? "In stock, ready to ship" : "Out of stock"}
            </span>
          </div>
          <p className="mt-1 text-xs text-muted">SKU: {product.sku}</p>

          <p className="mt-5 leading-relaxed text-foreground/90">{product.description}</p>

          <ul className="mt-5 space-y-2">
            {product.highlights.map((h) => (
              <li key={h} className="flex gap-2.5 text-sm">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-copper" />
                {h}
              </li>
            ))}
          </ul>

          {product.freeGift && (
            <div className="mt-6 flex items-center gap-4 rounded-xl border border-copper/40 bg-copper/5 p-4">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-background">
                <Image src={gift.images[0].src} alt={gift.images[0].alt} fill sizes="56px" className="object-cover" />
              </div>
              <div>
                <p className="flex items-center gap-1.5 text-sm font-bold text-foreground">
                  <GiftIcon className="h-4 w-4 text-copper" />
                  Free {gift.name} included
                </p>
                <p className="text-xs text-muted">
                  A {formatPrice(gift.price)} value, added to your order automatically.
                </p>
              </div>
            </div>
          )}

          <div className="mt-6">
            <BuyBox slug={product.slug} />
          </div>

          <ul className="mt-6 space-y-3 border-t border-border pt-6 text-sm">
            <li className="flex gap-3">
              <TruckIcon className="h-5 w-5 shrink-0 text-copper" />
              <span>
                <strong>Free US shipping.</strong> Tracked delivery in {store.deliveryEstimate}.
              </span>
            </li>
            <li className="flex gap-3">
              <ReturnIcon className="h-5 w-5 shrink-0 text-copper" />
              <span>
                <strong>{store.returnDays}-day returns.</strong>{" "}
                <Link href="/shipping-returns" className="text-copper-dark underline underline-offset-2">
                  Read the policy
                </Link>
              </span>
            </li>
            <li className="flex gap-3">
              <LockIcon className="h-5 w-5 shrink-0 text-copper" />
              <span>
                <strong>Secure checkout.</strong> Questions first?{" "}
                <a href={`mailto:${store.email}`} className="text-copper-dark underline underline-offset-2">
                  Email us
                </a>
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-bold text-foreground">Product Details</h2>
            {product.details.map((p) => (
              <p key={p} className="mt-4 leading-relaxed text-foreground/90">
                {p}
              </p>
            ))}
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground">Specifications</h2>
            <dl className="mt-4 divide-y divide-border rounded-2xl border border-border bg-background">
              {[...product.specs, { label: "SKU", value: product.sku }].map((s) => (
                <div key={s.label} className="flex justify-between gap-4 px-5 py-3 text-sm">
                  <dt className="text-muted">{s.label}</dt>
                  <dd className="text-right font-medium">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="font-display mb-8 text-2xl font-bold text-foreground">You May Also Like</h2>
        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
          {related.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: product.name,
          description: product.description,
          sku: product.sku,
          category: category.name,
          image: product.images.map((i) => `${store.url}${i.src}`),
          brand: { "@type": "Brand", name: store.name },
          offers: {
            "@type": "Offer",
            url,
            priceCurrency: "USD",
            price: product.price.toFixed(2),
            availability: product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
            itemCondition: "https://schema.org/NewCondition",
            seller: { "@type": "Organization", name: store.name },
            shippingDetails: {
              "@type": "OfferShippingDetails",
              shippingRate: { "@type": "MonetaryAmount", value: 0, currency: "USD" },
              shippingDestination: { "@type": "DefinedRegion", addressCountry: "US" },
            },
            hasMerchantReturnPolicy: {
              "@type": "MerchantReturnPolicy",
              applicableCountry: "US",
              returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
              merchantReturnDays: store.returnDays,
            },
          },
        }}
      />
    </>
  );
}
