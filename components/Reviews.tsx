import Stars from "./Stars";

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
    <section id="reviews" className="bg-navy">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-14 md:grid-cols-3">
        <div className="text-white">
          <h2 className="font-display text-2xl font-bold">Customer Rating</h2>
          <div className="mt-3 flex items-center gap-3">
            <span className="rounded-md bg-copper px-2.5 py-1 text-lg font-bold text-white">
              4.9
            </span>
            <Stars rating={4.9} />
          </div>
          <p className="mt-3 text-sm text-white/60">
            Based on verified reviews from US customers over the last 90 days.
          </p>
        </div>
        {reviews.slice(0, 2).map((review) => (
          <div
            key={review.author + review.quote.slice(0, 10)}
            className="rounded-2xl bg-navy-light p-6"
          >
            <Stars rating={5} />
            <p className="mt-3 text-sm text-white/80">&ldquo;{review.quote}&rdquo;</p>
            <p className="mt-4 text-xs font-semibold text-white/50">{review.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
