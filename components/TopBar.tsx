import Link from "next/link";
import { infoLinks } from "@/lib/nav";
import { store } from "@/lib/store";

export default function TopBar() {
  return (
    <div className="hidden border-b border-border bg-surface text-xs text-muted md:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
        <div className="flex items-center gap-6">
          {infoLinks.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-copper-dark">
              {l.label}
            </Link>
          ))}
        </div>
        <p>
          Free US shipping on every order ·{" "}
          <a href={`mailto:${store.email}`} className="hover:text-copper-dark">
            {store.email}
          </a>
        </p>
      </div>
    </div>
  );
}
