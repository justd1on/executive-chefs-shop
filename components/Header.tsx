import Link from "next/link";
import TopBar from "./TopBar";
import CategoryNav from "./CategoryNav";
import MobileMenu from "./MobileMenu";
import SearchForm from "./SearchForm";
import CartButton from "./cart/CartButton";

export default function Header() {
  return (
    <>
      <TopBar />
      <header className="sticky top-0 z-50 bg-background">
        <div className="relative border-b border-border">
          <div className="mx-auto flex max-w-7xl items-center gap-4 px-6 py-3 md:gap-8 md:py-4">
            <MobileMenu />
            <Link href="/" className="font-display shrink-0 text-lg font-bold tracking-tight text-foreground md:text-xl">
              RIDGE <span className="text-copper">CUTLERY</span>
            </Link>
            <div className="hidden max-w-xl flex-1 md:block">
              <SearchForm id="site-search" />
            </div>
            <div className="ml-auto">
              <CartButton />
            </div>
          </div>
        </div>
        <CategoryNav />
      </header>
    </>
  );
}
