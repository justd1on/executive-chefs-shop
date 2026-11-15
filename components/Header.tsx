export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="font-display text-2xl tracking-wide text-foreground">
          RIDGE <span className="text-copper">CUTLERY</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-steel md:flex">
          <a href="#collection" className="transition hover:text-foreground">
            Collection
          </a>
          <a href="#why-ridge" className="transition hover:text-foreground">
            Why Ridge
          </a>
          <a href="#reviews" className="transition hover:text-foreground">
            Reviews
          </a>
          <a href="#faq" className="transition hover:text-foreground">
            FAQ
          </a>
        </nav>
        <a
          href="#collection"
          className="rounded-full bg-copper px-5 py-2 text-sm font-semibold text-background transition hover:bg-copper-light"
        >
          Shop Now
        </a>
      </div>
    </header>
  );
}
