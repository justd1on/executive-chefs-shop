import Image from "next/image";

const posts = [
  {
    title: "How to Choose the Right Chef's Knife",
    excerpt:
      "Blade length, steel type, and handle balance — what actually matters when picking your first premium knife.",
    image: "/images/hero-executive-chef-collection.png",
  },
  {
    title: "Damascus Pattern vs. Damascus Steel",
    excerpt:
      "What the wavy pattern on a blade really tells you, and why it's about craftsmanship, not just looks.",
    image: "/images/damascus-pattern-chef-knife.png",
  },
  {
    title: "Keeping a BBQ Knife Field-Ready",
    excerpt:
      "A simple routine to keep your pitmaster knife sharp through every brisket, rack, and campfire cookout.",
    image: "/images/artisan-pitmaster-knife.png",
  },
];

export default function BlogTeaser() {
  return (
    <section className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="font-display mb-10 text-center text-3xl font-bold text-foreground">
          From the Journal
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="overflow-hidden rounded-2xl border border-border bg-background">
              <div className="relative aspect-[16/10] w-full">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-base font-bold text-foreground">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
                <span className="mt-3 inline-block text-sm font-semibold text-copper-dark">
                  Read more &rarr;
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
