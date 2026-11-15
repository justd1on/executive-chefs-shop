import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/cart/CartDrawer";
import JsonLd from "@/components/JsonLd";
import { store } from "@/lib/store";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["600", "700", "800"],
  subsets: ["latin"],
});

const description =
  "Ridge Cutlery offers a curated collection of premium kitchen and BBQ knives: Damascus-pattern chef knife sets, pitmaster knives, cleavers, and sharpeners, with free shipping across the US.";

export const metadata: Metadata = {
  metadataBase: new URL(store.url),
  title: {
    default: "Ridge Cutlery | Premium Kitchen & BBQ Knives",
    template: "%s | Ridge Cutlery",
  },
  description,
  openGraph: {
    type: "website",
    siteName: store.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "OnlineStore",
            name: store.name,
            url: store.url,
            email: store.email,
            description,
            areaServed: "US",
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CartDrawer />
      </body>
    </html>
  );
}
