export type CategorySlug =
  | "chef-knife-sets"
  | "damascus-collection"
  | "bbq-outdoor"
  | "sharpening-tools";

export type Category = {
  slug: CategorySlug;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
};

export type ProductImage = { src: string; alt: string };

export type Product = {
  slug: string;
  sku: string;
  category: CategorySlug;
  name: string;
  tagline: string;
  description: string;
  details: string[];
  highlights: string[];
  specs: { label: string; value: string }[];
  price: number;
  images: ProductImage[];
  badge?: string;
  freeGift?: boolean;
  inStock: boolean;
};

const img = (slug: string, file: string, alt: string): ProductImage => ({
  src: `/img/products/${slug}/${file}`,
  alt,
});

export const FREE_GIFT_SLUG = "4-in-1-pro-sharpener";
export const UPSELL_SLUG = "pro-grade-honing-steel";

export const categories: Category[] = [
  {
    slug: "chef-knife-sets",
    name: "Chef Knife Sets",
    description:
      "Complete knife sets and everyday chef's blades that cover every job on the cutting board.",
    image: "/img/products/executive-chef-collection/11360212814020.webp",
    imageAlt: "Seven chef knives with blue resin handles standing upright",
  },
  {
    slug: "damascus-collection",
    name: "Damascus Collection",
    description:
      "Hammered, Damascus-pattern blades with light wood handles, made for cooks who notice the details.",
    image: "/img/products/damascus-pattern-chef-knife/ad8bad33-521c-438e-b6ef-4ed8bf1b86c9.webp",
    imageAlt: "Damascus-pattern knives with light wood handles on a kitchen table",
  },
  {
    slug: "bbq-outdoor",
    name: "BBQ & Outdoor",
    description:
      "Rugged blades shaped for meat work at the grill, the smoker, and the campsite.",
    image: "/img/products/artisan-pitmaster-knife/a0137f67-c677-4402-9c73-8ff7f0cd2c1a.webp",
    imageAlt: "Pitmaster boning knives on a wooden cutting board",
  },
  {
    slug: "sharpening-tools",
    name: "Sharpening Tools",
    description:
      "Honing and sharpening tools that keep every knife in your kitchen cutting cleanly.",
    image: "/img/products/pro-grade-honing-steel/1619070837528.webp",
    imageAlt: "Honing steel on a wooden cutting board with fresh vegetables",
  },
];

export const products: Product[] = [
  {
    slug: "executive-chef-collection",
    sku: "RC-SET-001",
    category: "chef-knife-sets",
    name: "The Executive Chef Collection",
    tagline: "Damascus-pattern blades set in striking blue resin handles.",
    description:
      "Our flagship knife set: Damascus-pattern blades paired with blue resin and natural wood handles, built to replace every tired knife in your drawer.",
    details: [
      "The Executive Chef Collection is the set we built the Ridge Cutlery lineup around. Every blade carries a rippling Damascus pattern, and every handle pairs deep-blue resin with natural wood, so each one has its own grain and color.",
      "The collection covers the full range of everyday kitchen work: broad chef's blades for chopping and dicing, slimmer knives for slicing and detail work, and a cleaver-style blade for heavier prep.",
      "Every knife set ships with a free 4-in-1 Pro Sharpener, so your edges stay as sharp as the day they arrived.",
    ],
    highlights: [
      "Damascus-pattern finish on every blade",
      "Blue resin and natural wood handles with a polished bolster",
      "Covers chopping, slicing, and detail work in one set",
    ],
    specs: [
      { label: "Blade finish", value: "Damascus pattern" },
      { label: "Handle", value: "Blue resin and natural wood" },
      { label: "Bolster", value: "Polished steel" },
      { label: "Care", value: "Hand wash, dry immediately" },
    ],
    price: 189,
    badge: "Flagship Set",
    freeGift: true,
    inStock: true,
    images: [
      img("executive-chef-collection", "11360212814020.webp", "The Executive Chef Collection: seven knives with blue resin handles standing upright"),
      img("executive-chef-collection", "d6712fbb-e04b-41da-8b81-c23b368ef878.png", "Executive Chef Collection knives laid out on a rustic wooden table"),
      img("executive-chef-collection", "540640536661.webp", "Five knives from the Executive Chef Collection with Damascus-pattern blades"),
      img("executive-chef-collection", "896252019675.webp", "Executive Chef Collection knives arranged on a dark background"),
      img("executive-chef-collection", "6670895273140.webp", "Four Executive Chef Collection knives side by side"),
      img("executive-chef-collection", "4216980336.webp", "Executive Chef Collection chef's knife with a blue resin handle"),
      img("executive-chef-collection", "48503012297298.webp", "Executive Chef Collection cleaver with a Damascus-pattern blade"),
      img("executive-chef-collection", "1961574638966.webp", "Executive Chef Collection knife with its blade guard"),
      img("executive-chef-collection", "458cdb6c-2b93-427c-8547-e9cfa3021037.png", "Executive Chef Collection knife next to its presentation box"),
    ],
  },
  {
    slug: "precision-culinary-master-set",
    sku: "RC-SET-002",
    category: "chef-knife-sets",
    name: "Precision Culinary Master Set",
    tagline: "Japanese-style blades with classic dark wood-grain handles.",
    description:
      "A complete set of Japanese-style kitchen knives with Damascus-pattern blades and warm, dark wood-grain handles: a classic alternative to our flagship collection.",
    details: [
      "The Precision Culinary Master Set takes a more traditional route: Damascus-pattern blades in Japanese-inspired shapes, finished with dark wood-grain handles that suit any kitchen.",
      "Santoku and nakiri profiles handle vegetables, a long chef's knife takes on the big jobs, and slimmer blades cover slicing and detail work, so there's a dedicated tool for nearly every task.",
      "Every knife set ships with a free 4-in-1 Pro Sharpener.",
    ],
    highlights: [
      "Santoku, nakiri, and chef's knife profiles",
      "Damascus-pattern blade finish",
      "Dark wood-grain handles with a classic look",
    ],
    specs: [
      { label: "Blade finish", value: "Damascus pattern" },
      { label: "Blade style", value: "Japanese-inspired" },
      { label: "Handle", value: "Dark wood grain" },
      { label: "Care", value: "Hand wash, dry immediately" },
    ],
    price: 159,
    freeGift: true,
    inStock: true,
    images: [
      img("precision-culinary-master-set", "1621824525739.webp", "Precision Culinary Master Set knives lined up on a black background"),
      img("precision-culinary-master-set", "1621824525738.webp", "Full Precision Culinary Master Set lineup on white"),
      img("precision-culinary-master-set", "1621824525729.webp", "Five Precision Culinary Master Set knives with dark wood handles"),
      img("precision-culinary-master-set", "cae2235e-54f0-4936-a6a8-0a9a4b0b17c0.webp", "Precision Culinary Master Set with its storage case"),
      img("precision-culinary-master-set", "cfa766f4-77b0-4fd2-aeb8-e6e12e3b4b4c.webp", "Precision Culinary Master Set knives with storage case on white"),
      img("precision-culinary-master-set", "1621824525734.webp", "Chef's knife and cleaver from the Precision Culinary Master Set"),
      img("precision-culinary-master-set", "1621824525740.webp", "Three knives from the Precision Culinary Master Set"),
      img("precision-culinary-master-set", "73f5e915-6e72-4ea3-8054-c2080e8f7a49.png", "Santoku, chef's knife, and nakiri from the Precision Culinary Master Set"),
    ],
  },
  {
    slug: "damascus-pattern-chef-knife",
    sku: "RC-KNF-003",
    category: "damascus-collection",
    name: "Artisan Damascus-Pattern Chef Knife",
    tagline: "An 8-inch chef's knife with a hammered, Damascus-pattern blade.",
    description:
      "An 8-inch chef's knife with a hammered, Damascus-pattern blade and a light wood handle, made for cooks who notice the details.",
    details: [
      "The Artisan Damascus-Pattern Chef Knife pairs a hammered blade finish with a rippling Damascus pattern. The hammered dimples aren't only for looks: they can help thin slices release from the blade as you cut.",
      "At 8 inches (20.3 cm), the blade is long enough for big jobs like breaking down squash or slicing a roast, yet nimble enough for everyday dicing.",
      "The light wood handle is finished with a mosaic pin and a steel bolster with a red accent ring.",
    ],
    highlights: [
      "8-inch (20.3 cm) blade, 13.1 inches (33.3 cm) overall",
      "Hammered finish with a Damascus pattern",
      "Light wood handle with a mosaic pin",
      "Steel bolster with a red accent ring",
    ],
    specs: [
      { label: "Blade length", value: "8 in (20.3 cm)" },
      { label: "Overall length", value: "13.1 in (33.3 cm)" },
      { label: "Blade finish", value: "Hammered, Damascus pattern" },
      { label: "Handle", value: "Light wood with mosaic pin" },
      { label: "Care", value: "Hand wash, dry immediately" },
    ],
    price: 119,
    badge: "Collector's Pick",
    inStock: true,
    images: [
      img("damascus-pattern-chef-knife", "f99890a3-b260-47f6-ac00-a51247302919.webp", "Artisan Damascus-Pattern Chef Knife with a light wood handle"),
      img("damascus-pattern-chef-knife", "ad8bad33-521c-438e-b6ef-4ed8bf1b86c9.webp", "Damascus-pattern knives on a wooden table with fresh vegetables"),
      img("damascus-pattern-chef-knife", "f735a8c0-762e-4210-9988-e7a5d2ba8969.webp", "Hammered Damascus-pattern chef's knife blade"),
      img("damascus-pattern-chef-knife", "e9cc2a57-9b19-4d3f-96dd-bc7b9bea51a3.webp", "Damascus-pattern chef's knife on white"),
      img("damascus-pattern-chef-knife", "c4533edd-553c-4a41-ace8-92ca4ccb8141.webp", "Size chart for the Damascus collection: the chef's knife has a 20.3 cm blade"),
    ],
  },
  {
    slug: "pro-grade-honing-steel",
    sku: "RC-TL-004",
    category: "sharpening-tools",
    name: "Pro-Grade Honing Steel",
    tagline: "A 12-inch honing rod that keeps your edge in line.",
    description:
      "A 12-inch emery-coated honing rod that refreshes a dull-feeling edge in a few strokes. The easiest habit for keeping knives sharp.",
    details: [
      "Even a great edge drifts out of line with daily use. A few light strokes on the Pro-Grade Honing Steel before you cook bring it back, so your knives keep cutting cleanly between full sharpenings.",
      "The 12-inch length gives you room to hone long chef's knives and slicers, and the emery-coated surface refreshes the edge as you go.",
      "A black grip with a finger guard keeps your hand safely away from the blade.",
    ],
    highlights: [
      "12-inch length handles chef's knives and slicers",
      "Emery-coated surface refreshes the edge",
      "Black grip with a finger guard",
      "Works with every knife in the collection",
    ],
    specs: [
      { label: "Size", value: "12 in" },
      { label: "Surface", value: "Emery coated" },
      { label: "Handle", value: "Black, with finger guard" },
      { label: "Care", value: "Wipe clean after use" },
    ],
    price: 29,
    inStock: true,
    images: [
      img("pro-grade-honing-steel", "1619070837528.webp", "Pro-Grade Honing Steel on a wooden cutting board with vegetables"),
      img("pro-grade-honing-steel", "1619070834108.webp", "Pro-Grade Honing Steel next to a chef's knife on a cutting board"),
      img("pro-grade-honing-steel", "1619070840816.webp", "Pro-Grade Honing Steel on white"),
    ],
  },
  {
    slug: "artisan-pitmaster-knife",
    sku: "RC-KNF-005",
    category: "bbq-outdoor",
    name: "The Artisan Pitmaster Knife",
    tagline: "A curved, hammered-finish boning knife built for meat work.",
    description:
      "A curved boning knife with a dark hammered-finish blade and a finger hole for control, made for breaking down brisket, ribs, and whole birds.",
    details: [
      "The Artisan Pitmaster Knife is shaped for meat work. The curved, upswept blade follows the bone, the dark hammered finish gives it a rugged look, and the polished edge does the cutting.",
      "A finger hole through the blade gives you a secure pinch grip for detailed trimming, and the wood handle is riveted for strength.",
      "It's the knife to bring to the smoker, the campsite, or the butcher block.",
    ],
    highlights: [
      "Curved boning profile for trimming and breaking down meat",
      "Dark hammered finish with a polished edge",
      "Finger hole for a secure pinch grip",
      "Riveted wood handle",
    ],
    specs: [
      { label: "Blade style", value: "Curved boning" },
      { label: "Blade finish", value: "Dark hammered" },
      { label: "Handle", value: "Riveted wood" },
      { label: "Care", value: "Hand wash, dry immediately" },
    ],
    price: 99,
    badge: "Grill Ready",
    inStock: true,
    images: [
      img("artisan-pitmaster-knife", "a0137f67-c677-4402-9c73-8ff7f0cd2c1a.webp", "Artisan Pitmaster Knives on a wooden cutting board"),
      img("artisan-pitmaster-knife", "322c145c-041e-4dcb-89a6-95c486d30cc4.webp", "Artisan Pitmaster Knife with a black handle"),
      img("artisan-pitmaster-knife", "4e63e531-6296-467f-a501-4de0137b6688.webp", "Artisan Pitmaster Knife with a brown wood handle"),
      img("artisan-pitmaster-knife", "78801d3b-dba6-407e-81fb-9099800dbaef.webp", "Hammered blade of the Artisan Pitmaster Knife"),
      img("artisan-pitmaster-knife", "3e053815-3070-4c1c-9b37-fabdf9eadd3b.webp", "Four Artisan Pitmaster Knives side by side"),
    ],
  },
  {
    slug: "4-in-1-pro-sharpener",
    sku: "RC-TL-006",
    category: "sharpening-tools",
    name: "4-in-1 Pro Sharpener",
    tagline: "Four slots. Every edge in the kitchen.",
    description:
      "A countertop sharpener with three progressive knife stages and a dedicated scissors slot. Free with every Ridge Cutlery knife set.",
    details: [
      "The 4-in-1 Pro Sharpener takes the guesswork out of sharpening. Three progressive slots take a blade from dull to sharp, with no angles to measure.",
      "A separate slot handles kitchen scissors, and the built-in handle lets you hold the sharpener steady while you work.",
      "Every Ridge Cutlery knife set ships with one free.",
    ],
    highlights: [
      "Three progressive stages for knives",
      "Dedicated slot for kitchen scissors",
      "Built-in handle for a steady grip",
      "Free with every knife set",
    ],
    specs: [
      { label: "Slots", value: "4 (3 knife stages + scissors)" },
      { label: "Use", value: "Kitchen knives and scissors" },
      { label: "Care", value: "Wipe clean after use" },
    ],
    price: 39,
    badge: "Free With Sets",
    inStock: true,
    images: [
      img("4-in-1-pro-sharpener", "849624249100.webp", "4-in-1 Pro Sharpener with a knife and scissors"),
      img("4-in-1-pro-sharpener", "3422716697454.webp", "The sharpening stages of the 4-in-1 Pro Sharpener"),
      img("4-in-1-pro-sharpener", "5100015855510.webp", "4-in-1 Pro Sharpener dimensions and compatible blades"),
    ],
  },
  {
    slug: "signature-dual-purpose-cleaver",
    sku: "RC-KNF-007",
    category: "chef-knife-sets",
    name: "The Signature Dual-Purpose Cleaver",
    tagline: "Slice, chop, and scoop with one blade.",
    description:
      "A wide-bladed chef's cleaver with a satin steel finish and a warm wood handle: thin enough to slice, sturdy enough to chop.",
    details: [
      "The Signature Dual-Purpose Cleaver is the knife many cooks end up reaching for every day. Its wide blade slices vegetables and boneless meat cleanly, then doubles as a scoop to carry everything from the board to the pan.",
      "The satin-finished blade is easy to keep clean, and the warm wood handle stays comfortable through long prep sessions.",
      "If you'd rather start with one great knife instead of a full set, start here.",
    ],
    highlights: [
      "Wide blade for slicing, chopping, and scooping",
      "Satin steel finish",
      "Warm wood handle",
      "A versatile alternative to a full set",
    ],
    specs: [
      { label: "Blade style", value: "Chef's cleaver" },
      { label: "Blade finish", value: "Satin" },
      { label: "Handle", value: "Wood" },
      { label: "Care", value: "Hand wash, dry immediately" },
    ],
    price: 79,
    inStock: true,
    images: [
      img("signature-dual-purpose-cleaver", "f41ef0ce-8b7f-4e9e-893f-69eb6cf1f538.webp", "Signature Dual-Purpose Cleaver on a wooden board with lemon"),
      img("signature-dual-purpose-cleaver", "6270e5b5-48f1-479c-b6ab-353623c5e3cb.webp", "Signature Dual-Purpose Cleaver on white"),
      img("signature-dual-purpose-cleaver", "df5af9dd-413e-4cf8-9270-6553256d71f7.webp", "Satin steel blade of the Signature Dual-Purpose Cleaver"),
      img("signature-dual-purpose-cleaver", "1a609831-526c-4b25-8433-6e1bd61ede7f.webp", "Cleavers with wood handles on a cutting board with vegetables"),
      img("signature-dual-purpose-cleaver", "2b142d77-3bbe-4a8c-9432-7f4d200e73ac.webp", "Signature Dual-Purpose Cleaver dimensions"),
    ],
  },
];

export const heroProduct = products[0];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(slug: string) {
  return products.filter((p) => p.category === slug);
}

export function searchProducts(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return products.filter((p) =>
    [p.name, p.tagline, p.description, getCategory(p.category)?.name, ...p.highlights]
      .join(" ")
      .toLowerCase()
      .includes(q),
  );
}
