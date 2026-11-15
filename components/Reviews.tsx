const reviews = [
  {
    quote:
      "The Executive Chef Collection replaced an entire drawer of mismatched knives. The balance alone makes prep work faster.",
    author: "Verified Buyer",
  },
  {
    quote:
      "The Pitmaster Knife holds its edge through a full brisket breakdown. It's the first knife I reach for now.",
    author: "Verified Buyer",
  },
  {
    quote:
      "The Damascus-pattern blade is as beautiful as it is sharp. Feels like a tool that was actually made to last.",
    author: "Verified Buyer",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-copper-light">
          Trusted By Home Cooks
        </span>
        <h2 className="font-display mt-3 text-4xl tracking-wide text-foreground md:text-5xl">
          What Our Customers Say
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {reviews.map((review) => (
          <blockquote
            key={review.author + review.quote.slice(0, 10)}
            className="rounded-2xl border border-border bg-surface p-8"
          >
            <p className="text-steel">&ldquo;{review.quote}&rdquo;</p>
            <footer className="mt-4 text-sm font-semibold text-copper-light">
              {review.author}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
