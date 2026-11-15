import type { MetadataRoute } from "next";
import { categories, products } from "@/lib/products";
import { articles } from "@/lib/journal";
import { store } from "@/lib/store";

const abs = (path: string) => `${store.url}${path}`;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: store.url, changeFrequency: "weekly", priority: 1 },
    { url: abs("/knives"), changeFrequency: "weekly", priority: 0.9 },
    ...categories.map((c) => ({
      url: abs(`/knives/${c.slug}`),
      changeFrequency: "weekly" as const,
      priority: 0.8,
      images: [abs(c.image)],
    })),
    ...products.map((p) => ({
      url: abs(`/products/${p.slug}`),
      changeFrequency: "weekly" as const,
      priority: 0.9,
      images: p.images.map((i) => abs(i.src)),
    })),
    { url: abs("/journal"), changeFrequency: "monthly", priority: 0.6 },
    ...articles.map((a) => ({
      url: abs(`/journal/${a.slug}`),
      lastModified: a.datePublished,
      changeFrequency: "monthly" as const,
      priority: 0.6,
      images: [abs(a.image)],
    })),
    { url: abs("/why-ridge"), changeFrequency: "monthly", priority: 0.5 },
    { url: abs("/shipping-returns"), changeFrequency: "monthly", priority: 0.5 },
    { url: abs("/contact"), changeFrequency: "yearly", priority: 0.4 },
  ];
}
