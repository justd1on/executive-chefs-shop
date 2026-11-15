import type { MetadataRoute } from "next";
import { products } from "@/lib/products";

const siteUrl = "https://ridgecutlery.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...products.map((product) => ({
      url: `${siteUrl}/#${product.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
