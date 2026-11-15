const pillars = [
  {
    title: "Forged, Not Stamped",
    body: "Each blade is forged from high-carbon steel for an edge that holds longer than mass-produced stamped knives.",
  },
  {
    title: "Built for Real Kitchens",
    body: "Full-tang handles and balanced weight mean every cut feels controlled, from delicate herbs to heavy bone.",
  },
  {
    title: "From Kitchen to Campfire",
    body: "Our collection covers the chef's block and the grill, so one brand handles every blade you own.",
  },
];

export default function WhyRidge() {
  return (
    <section id="why-ridge" className="border-y border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-copper-light">
            Why Ridge Cutlery
          </span>
          <h2 className="font-display mt-3 text-4xl tracking-wide text-foreground md:text-5xl">
            Built By People Who Actually Cook
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-border bg-surface-raised p-8"
            >
              <h3 className="font-display text-2xl tracking-wide text-copper-light">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm text-steel">{pillar.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
