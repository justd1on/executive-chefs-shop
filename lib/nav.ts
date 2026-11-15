import { categories } from "./products";

export const shopLinks = [
  { label: "All Knives", href: "/knives" },
  ...categories.map((c) => ({ label: c.name, href: `/knives/${c.slug}` })),
];

export const infoLinks = [
  { label: "Why Ridge", href: "/why-ridge" },
  { label: "Journal", href: "/journal" },
  { label: "Shipping & Returns", href: "/shipping-returns" },
  { label: "Contact", href: "/contact" },
];
