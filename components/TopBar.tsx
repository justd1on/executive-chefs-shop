import Link from "next/link";

export default function TopBar() {
  return (
    <div className="hidden border-b border-border bg-surface text-xs text-muted md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
        <div className="flex items-center gap-6">
          <Link href="/#faq" className="hover:text-copper-dark">Shipping &amp; Returns</Link>
          <Link href="/why-ridge" className="hover:text-copper-dark">Our Promise</Link>
          <Link href="/#reviews" className="hover:text-copper-dark">Reviews</Link>
        </div>
        <a href="mailto:support@ridgecutlery.com" className="hover:text-copper-dark">
          support@ridgecutlery.com
        </a>
      </div>
    </div>
  );
}
