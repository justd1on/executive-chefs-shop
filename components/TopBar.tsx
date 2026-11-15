export default function TopBar() {
  return (
    <div className="hidden border-b border-border bg-surface text-xs text-muted md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
        <div className="flex items-center gap-6">
          <a href="#faq" className="hover:text-copper-dark">Shipping &amp; Returns</a>
          <a href="#why-ridge" className="hover:text-copper-dark">Our Promise</a>
          <a href="#reviews" className="hover:text-copper-dark">Reviews</a>
        </div>
        <a href="mailto:support@ridgecutlery.com" className="hover:text-copper-dark">
          support@ridgecutlery.com
        </a>
      </div>
    </div>
  );
}
