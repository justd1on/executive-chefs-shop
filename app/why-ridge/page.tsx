import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import Reviews from "@/components/Reviews";

export const metadata: Metadata = {
  title: "Why Ridge Cutlery",
  description:
    "Why Ridge Cutlery knives are forged from high-carbon steel, built full-tang, and designed for real kitchens and real BBQ pits.",
};

const pillars = [
  {
    title: "Forged, Not Stamped",
    body: "Each blade is forged from high-carbon steel for an edge that holds longer than mass-produced stamped knives. Forging aligns the steel's grain, giving the edge more strength and a longer-lasting sharpness than a blade punched from a sheet.",
  },
  {
    title: "Built for Real Kitchens",
    body: "Full-tang handles and balanced weight mean every cut feels controlled, from delicate herbs to heavy bone. We test every design in real kitchens before it ever reaches the collection.",
  },
  {
    title: "From Kitchen to Campfire",
    body: "Our collection covers the chef's block and the grill, so one brand handles every blade you own — whether you're breaking down a brisket outdoors or plating dinner at home.",
  },
  {
    title: "A Small, Curated Collection",
    body: "Instead of a thousand generic blades, we offer seven pieces — each chosen for a specific job, so you never have to guess which knife to buy.",
  },
];

export default function WhyRidgePage() {
  return (
    <>
      <Header />
      <main>
        <PageBanner
          eyebrow="Our Story"
          title="Why Ridge Cutlery"
          description="Built by people who actually cook — forged steel, honest pricing, and a collection small enough to get right."
          image="/images/artisan-pitmaster-knife.png"
        />
        <section className="mx-auto max-w-5xl px-6 py-16">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-2xl border border-border bg-surface p-8">
                <h2 className="font-display text-lg font-bold text-foreground">
                  {pillar.title}
                </h2>
                <p className="mt-2 text-sm text-muted">{pillar.body}</p>
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
        <Reviews />
      </main>
      <Footer />
    </>
  );
}
