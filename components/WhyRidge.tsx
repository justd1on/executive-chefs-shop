import Link from "next/link";
import { store } from "@/lib/store";

const pillars = [
  {
    title: "A Small, Curated Collection",
    body: "Seven pieces, each chosen for a specific job, so you never have to guess which knife to buy.",
  },
  {
    title: "From Kitchen to Campfire",
    body: "Chef's sets for the cutting board, a pitmaster knife for the grill, and the tools to keep them all sharp.",
  },
  {
    title: "Straightforward Policies",
    body: `Free US shipping, ${store.returnDays}-day returns, and real people answering your email.`,
  },
];

export default function WhyRidge() {
  return (
    <section id="why-ridge" className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-copper-dark">Why Ridge Cutlery</span>
          <h2 className="font-display mt-2 text-3xl font-bold text-foreground md:text-4xl">
            Curated for People Who Actually Cook
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="rounded-2xl border border-border bg-surface p-8">
              <h3 className="font-display text-lg font-bold text-foreground">{pillar.title}</h3>
              <p className="mt-2 text-sm text-muted">{pillar.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/why-ridge" className="text-sm font-semibold text-copper-dark hover:text-copper">
            Read our story →
          </Link>
        </div>
      </div>
    </section>
  );
}
