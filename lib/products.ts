export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  image: string;
  badge?: string;
};

export const products: Product[] = [
  {
    slug: "executive-chef-collection",
    name: "The Executive Chef Collection",
    tagline: "Your entire kitchen, replaced by one forged set.",
    description:
      "A complete forged-steel knife set built to retire every dull blade in your kitchen for good.",
    price: 189,
    image: "/images/hero-executive-chef-collection.png",
    badge: "Best Seller",
  },
  {
    slug: "precision-culinary-master-set",
    name: "Precision Culinary Master Set",
    tagline: "A statement set for the serious kitchen.",
    description:
      "Full-tang precision blades finished with striking resin handles — as much art as instrument.",
    price: 159,
    image: "/images/hero-executive-chef-collection.png",
  },
  {
    slug: "damascus-pattern-chef-knife",
    name: "Artisan Damascus-Pattern Chef Knife",
    tagline: "A blade with the grain of real craftsmanship.",
    description:
      "A hand-finished chef's knife with a rippling Damascus-pattern blade and a hardwood handle.",
    price: 119,
    image: "/images/damascus-pattern-chef-knife.png",
    badge: "Collector's Pick",
  },
  {
    slug: "pro-grade-honing-steel",
    name: "Pro-Grade Honing Steel",
    tagline: "Keep every edge battle-ready.",
    description:
      "A precision honing steel that realigns your edge in seconds, before every use.",
    price: 29,
    image: "/images/pro-grade-sharpening-tools.png",
  },
  {
    slug: "artisan-pitmaster-knife",
    name: "The Artisan Pitmaster Knife",
    tagline: "Built for fire, smoke, and the open flame.",
    description:
      "A hand-hammered boning knife for pitmasters — equally at home at the grill or the butcher block.",
    price: 99,
    image: "/images/artisan-pitmaster-knife.png",
    badge: "BBQ Favorite",
  },
  {
    slug: "4-in-1-pro-sharpener",
    name: "4-in-1 Pro Sharpener",
    tagline: "One tool. Every edge. Always sharp.",
    description:
      "A four-stage sharpening station that restores any blade in your collection to a razor edge.",
    price: 39,
    image: "/images/pro-grade-sharpening-tools.png",
    badge: "Free With Sets",
  },
  {
    slug: "signature-dual-purpose-cleaver",
    name: "The Signature Dual-Purpose Cleaver",
    tagline: "One blade. Every cut.",
    description:
      "A versatile chef's cleaver that handles everything from fine dicing to heavy-duty chopping.",
    price: 79,
    image: "/images/signature-dual-purpose-cleaver.png",
  },
];

export const heroProduct = products[0];
