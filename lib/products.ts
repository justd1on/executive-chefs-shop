export type Product = {
  slug: string;
  sku: string;
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

export const products: Product[] = [
  {
    slug: "executive-chef-collection",
    sku: "RC-SET-001",
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
    slug: "damascus-pattern-chef-knife",
    sku: "RC-KNF-003",
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
    slug: "pro-grade-honing-steel",
    sku: "RC-TL-004",
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
    slug: "artisan-pitmaster-knife",
    sku: "RC-KNF-005",
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
    slug: "4-in-1-pro-sharpener",
    sku: "RC-TL-006",
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
  {
    slug: "signature-dual-purpose-cleaver",
    sku: "RC-KNF-007",
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
];

export const heroProduct = products[0];
