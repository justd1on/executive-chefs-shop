export type CategorySlug =
  | "chef-knife-sets"
  | "damascus-collection"
  | "bbq-outdoor"
  | "sharpening-tools";

export type Category = {
  slug: CategorySlug;
  name: string;
  shortName: string;
  description: string;
  image: string;
};

export type Product = {
  slug: string;
  sku: string;
  category: CategorySlug;
  name: string;
  tagline: string;
  description: string;
  price: number;
  image: string;
  badge?: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
};

export const categories: Category[] = [
  {
    slug: "chef-knife-sets",
    name: "Chef Knife Sets",
    shortName: "Chef Sets",
    description:
      "Complete forged-steel sets built to replace every dull knife in your kitchen drawer.",
    image: "/images/hero-executive-chef-collection.png",
  },
  {
    slug: "damascus-collection",
    name: "Damascus Collection",
    shortName: "Damascus",
    description:
      "Hand-finished blades with a rippling Damascus-pattern steel, made for collectors and serious cooks.",
    image: "/images/damascus-pattern-chef-knife.png",
  },
  {
    slug: "bbq-outdoor",
    name: "BBQ & Outdoor",
    shortName: "BBQ & Outdoor",
    description:
      "Hand-hammered blades built for the grill, the campfire, and the butcher block.",
    image: "/images/artisan-pitmaster-knife.png",
  },
  {
    slug: "sharpening-tools",
    name: "Sharpening Tools",
    shortName: "Sharpening",
    description:
      "Honing steels and multi-stage sharpeners that keep every blade in your collection razor-ready.",
    image: "/images/pro-grade-sharpening-tools.png",
  },
];

export const products: Product[] = [
  {
    slug: "executive-chef-collection",
    sku: "RC-SET-001",
    category: "chef-knife-sets",
    name: "The Executive Chef Collection",
    tagline: "Your entire kitchen, replaced by one forged set.",
    description:
      "A complete forged-steel knife set built to retire every dull blade in your kitchen for good.",
    price: 189,
    image: "/images/hero-executive-chef-collection.png",
    badge: "Best Seller",
    rating: 5,
    reviewCount: 214,
    inStock: true,
  },
  {
    slug: "precision-culinary-master-set",
    sku: "RC-SET-002",
    category: "chef-knife-sets",
    name: "Precision Culinary Master Set",
    tagline: "A statement set for the serious kitchen.",
    description:
      "Full-tang precision blades finished with striking resin handles — as much art as instrument.",
    price: 159,
    image: "/images/hero-executive-chef-collection.png",
    rating: 4.5,
    reviewCount: 68,
    inStock: true,
  },
  {
    slug: "signature-dual-purpose-cleaver",
    sku: "RC-KNF-007",
    category: "chef-knife-sets",
    name: "The Signature Dual-Purpose Cleaver",
    tagline: "One blade. Every cut.",
    description:
      "A versatile chef's cleaver that handles everything from fine dicing to heavy-duty chopping.",
    price: 79,
    image: "/images/signature-dual-purpose-cleaver.png",
    rating: 4.5,
    reviewCount: 51,
    inStock: true,
  },
  {
    slug: "damascus-pattern-chef-knife",
    sku: "RC-KNF-003",
    category: "damascus-collection",
    name: "Artisan Damascus-Pattern Chef Knife",
    tagline: "A blade with the grain of real craftsmanship.",
    description:
      "A hand-finished chef's knife with a rippling Damascus-pattern blade and a hardwood handle.",
    price: 119,
    image: "/images/damascus-pattern-chef-knife.png",
    badge: "Collector's Pick",
    rating: 5,
    reviewCount: 97,
    inStock: true,
  },
  {
    slug: "artisan-pitmaster-knife",
    sku: "RC-KNF-005",
    category: "bbq-outdoor",
    name: "The Artisan Pitmaster Knife",
    tagline: "Built for fire, smoke, and the open flame.",
    description:
      "A hand-hammered boning knife for pitmasters — equally at home at the grill or the butcher block.",
    price: 99,
    image: "/images/artisan-pitmaster-knife.png",
    badge: "BBQ Favorite",
    rating: 5,
    reviewCount: 83,
    inStock: true,
  },
  {
    slug: "pro-grade-honing-steel",
    sku: "RC-TL-004",
    category: "sharpening-tools",
    name: "Pro-Grade Honing Steel",
    tagline: "Keep every edge battle-ready.",
    description:
      "A precision honing steel that realigns your edge in seconds, before every use.",
    price: 29,
    image: "/images/pro-grade-sharpening-tools.png",
    rating: 4.5,
    reviewCount: 142,
    inStock: true,
  },
  {
    slug: "4-in-1-pro-sharpener",
    sku: "RC-TL-006",
    category: "sharpening-tools",
    name: "4-in-1 Pro Sharpener",
    tagline: "One tool. Every edge. Always sharp.",
    description:
      "A four-stage sharpening station that restores any blade in your collection to a razor edge.",
    price: 39,
    image: "/images/pro-grade-sharpening-tools.png",
    badge: "Free With Sets",
    rating: 4.5,
    reviewCount: 176,
    inStock: true,
  },
];

export const heroProduct = products[0];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getProductsByCategory(slug: string): Product[] {
  return products.filter((p) => p.category === slug);
}
