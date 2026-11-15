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
    <section id="why-ridge" className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-copper-dark">
            Why Ridge Cutlery
          </span>
          <h2 className="font-display mt-2 text-3xl font-bold text-foreground md:text-4xl">
            Built By People Who Actually Cook
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-border bg-surface p-8"
            >
              <h3 className="font-display text-lg font-bold text-foreground">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{pillar.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
