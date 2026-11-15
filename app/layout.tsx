import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

const siteUrl = "https://ridgecutlery.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ridge Cutlery | Premium Forged Kitchen & BBQ Knives",
    template: "%s | Ridge Cutlery",
  },
  description:
    "Ridge Cutlery crafts premium forged kitchen and BBQ knives for home cooks and pitmasters who demand precision, durability, and a blade built to last a lifetime.",
  keywords: [
    "premium kitchen knives",
    "chef knife set",
    "Damascus pattern knife",
    "BBQ pitmaster knife",
    "forged steel knives",
    "Ridge Cutlery",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Ridge Cutlery",
    title: "Ridge Cutlery | Premium Forged Kitchen & BBQ Knives",
    description:
      "Premium forged kitchen and BBQ knives for home cooks and pitmasters who demand precision and durability.",
    images: [
      {
        url: "/images/hero-executive-chef-collection.png",
        width: 1200,
        height: 675,
        alt: "The Executive Chef Collection knife set on a wooden table",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ridge Cutlery | Premium Forged Kitchen & BBQ Knives",
    description:
      "Premium forged kitchen and BBQ knives for home cooks and pitmasters who demand precision and durability.",
    images: ["/images/hero-executive-chef-collection.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: "Ridge Cutlery",
  url: siteUrl,
  description:
    "Ridge Cutlery crafts premium forged kitchen and BBQ knives for home cooks and pitmasters who demand precision, durability, and a blade built to last a lifetime.",
  image: `${siteUrl}/images/hero-executive-chef-collection.png`,
  areaServed: "US",
  brand: {
    "@type": "Brand",
    name: "Ridge Cutlery",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bebas.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
