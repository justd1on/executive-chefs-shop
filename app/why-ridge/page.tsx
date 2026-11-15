import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageBanner from "@/components/PageBanner";
import PromoBand from "@/components/PromoBand";
import { getProduct } from "@/lib/products";
import { store } from "@/lib/store";

const description =
  "Why Ridge Cutlery: a small, curated collection of kitchen and BBQ knives, honest descriptions, free US shipping, and easy returns.";

const bannerProduct = getProduct("artisan-pitmaster-knife")!;

export const metadata: Metadata = {
  title: "Why Ridge Cutlery",
  description,
  alternates: { canonical: "/why-ridge" },
  openGraph: {
    title: "Why Ridge Cutlery",
    description,
    url: "/why-ridge",
    images: [{ url: bannerProduct.images[0].src, alt: bannerProduct.images[0].alt }],
  },
};

const pillars = [
  {
    title: "A Small, Curated Collection",
    body: "Instead of a wall of generic blades, we offer seven pieces, each chosen for a specific job. A flagship set for the whole kitchen, a Damascus-pattern chef's knife, a pitmaster knife, an everyday cleaver, and two sharpening tools. That's it.",
  },
  {
    title: "Honest Descriptions",
    body: "We describe our knives by what you can see and use: blade shape, finish, handle, and size. If a blade has a Damascus pattern, we call it Damascus-pattern. No inflated claims.",
  },
  {
    title: "From Kitchen to Campfire",
    body: "Our lineup covers the cutting board and the grill, so one brand can handle every blade you own, whether you're plating dinner or breaking down a brisket outdoors.",
  },
  {
    title: "Straightforward Policies",
    body: `Free shipping to all 50 states, ${store.returnDays}-day returns, and a real inbox at ${store.email} that answers ${store.responseTime}.`,
  },
];

export default function WhyRidgePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Why Ridge", href: "/why-ridge" }]} />
      <PageBanner
        eyebrow="Our Story"
        title="Why Ridge Cutlery"
        description="Curated for people who actually cook: fewer, better knives, honest descriptions, and policies that make buying easy."
        image={bannerProduct.images[0].src}
        imageAlt={bannerProduct.images[0].alt}
      />
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="rounded-2xl border border-border bg-surface p-8">
              <h2 className="font-display text-lg font-bold text-foreground">{pillar.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{pillar.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/knives"
            className="inline-flex items-center rounded-full bg-copper px-8 py-3 text-sm font-semibold text-white transition hover:bg-copper-dark"
          >
            Shop the Full Collection
          </Link>
        </div>
      </section>
      <PromoBand />
    </>
  );
}
