import Link from "next/link";
import { shopLinks } from "@/lib/nav";
import { store } from "@/lib/store";

const careLinks = [
  { label: "Shipping & Returns", href: "/shipping-returns" },
  { label: "Contact Us", href: "/contact" },
  { label: "FAQ", href: "/#faq" },
];

const learnLinks = [
  { label: "Why Ridge Cutlery", href: "/why-ridge" },
  { label: "The Journal", href: "/journal" },
];

function Column({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-bold text-white">{title}</h3>
      <ul className="space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="hover:text-copper-light">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-navy text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="font-display text-xl font-bold text-white">
              RIDGE <span className="text-copper-light">CUTLERY</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm">
              Premium kitchen and BBQ knives for people who actually cook.
            </p>
            <div className="mt-4 space-y-1 text-sm">
              <a href={`mailto:${store.email}`} className="block hover:text-copper-light">
                {store.email}
              </a>
              <p>{store.supportHours}</p>
            </div>
          </div>
          <Column title="Shop" links={shopLinks} />
          <Column title="Customer Care" links={careLinks} />
          <Column title="Learn" links={learnLinks} />
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs sm:flex-row">
          <span>&copy; 2026 Ridge Cutlery. All rights reserved.</span>
          <span>Free shipping to all 50 US states</span>
        </div>
      </div>
    </footer>
  );
}
