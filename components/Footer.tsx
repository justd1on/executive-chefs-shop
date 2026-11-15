export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
          <div>
            <span className="font-display text-2xl tracking-wide text-foreground">
              RIDGE <span className="text-copper">CUTLERY</span>
            </span>
            <p className="mt-2 max-w-sm text-sm text-steel">
              Premium forged kitchen and BBQ knives, built for people who
              actually use them.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm text-steel sm:grid-cols-3">
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-foreground">Shop</span>
              <a href="#collection" className="hover:text-copper-light">
                Collection
              </a>
              <a href="#why-ridge" className="hover:text-copper-light">
                Why Ridge
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-foreground">Support</span>
              <a href="#faq" className="hover:text-copper-light">
                FAQ
              </a>
              <a href="mailto:support@ridgecutlery.com" className="hover:text-copper-light">
                Contact
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-foreground">Company</span>
              <span>Shipping within the US</span>
              <span>&copy; 2026 Ridge Cutlery</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
