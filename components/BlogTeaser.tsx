import Image from "next/image";
import Link from "next/link";
import { articles } from "@/lib/journal";

export default function BlogTeaser() {
  return (
    <section className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl font-bold text-foreground">From the Journal</h2>
          <Link href="/journal" className="text-sm font-semibold text-copper-dark hover:text-copper">
            All articles →
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {articles.map((post) => (
            <Link
              key={post.slug}
              href={`/journal/${post.slug}`}
              className="group overflow-hidden rounded-2xl border border-border bg-background transition hover:border-copper"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-base font-bold text-foreground">{post.title}</h3>
                <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
                <span className="mt-3 inline-block text-sm font-semibold text-copper-dark">Read article →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
