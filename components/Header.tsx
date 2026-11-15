import TopBar from "./TopBar";
import CategoryNav from "./CategoryNav";

export default function Header() {
  return (
    <div className="sticky top-0 z-50 bg-background">
      <TopBar />
      <div className="border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center gap-6 px-6 py-4">
          <a href="/" className="font-display shrink-0 text-xl font-bold tracking-tight text-foreground">
            RIDGE <span className="text-copper">CUTLERY</span>
          </a>
          <div className="hidden flex-1 items-center md:flex">
            <div className="flex w-full items-center rounded-full border border-border bg-surface px-4 py-2">
              <input
                type="text"
                placeholder="Search knives, sets, sharpeners..."
                className="w-full bg-transparent text-sm text-foreground placeholder:text-muted focus:outline-none"
              />
              <svg viewBox="0 0 20 20" className="h-4 w-4 shrink-0 text-muted" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="9" cy="9" r="6" />
                <path d="M17 17l-3.5-3.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
          <div className="ml-auto flex items-center gap-5 text-foreground">
            <a href="#faq" className="hidden items-center gap-1.5 text-sm font-medium sm:flex" aria-label="Account">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="12" cy="8" r="3.5" />
                <path d="M4.5 20c1.5-3.5 4.5-5.5 7.5-5.5s6 2 7.5 5.5" strokeLinecap="round" />
              </svg>
              <span className="hidden lg:inline">Account</span>
            </a>
            <a href="#collection" className="flex items-center gap-1.5 text-sm font-medium" aria-label="Cart">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M4 7h16l-1.5 11a2 2 0 0 1-2 1.8H7.5a2 2 0 0 1-2-1.8L4 7Z" strokeLinejoin="round" />
                <path d="M8 7V5.5a4 4 0 0 1 8 0V7" strokeLinecap="round" />
              </svg>
              <span className="hidden lg:inline">Cart (0)</span>
            </a>
          </div>
        </div>
      </div>
      <CategoryNav />
    </div>
  );
}
