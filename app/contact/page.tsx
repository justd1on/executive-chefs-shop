import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { store } from "@/lib/store";

const description = `Questions about a knife or an order? Email ${store.email}. We reply ${store.responseTime}.`;

export const metadata: Metadata = {
  title: "Contact Us",
  description,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />
      <section className="mx-auto max-w-3xl px-6 py-10">
        <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">Contact Us</h1>
        <p className="mt-3 text-muted">
          Not sure which knife fits the way you cook, or need help with an order? We&apos;re happy to help.
        </p>
        <div className="mt-8 rounded-2xl border border-border bg-surface p-8">
          <p className="text-sm font-bold uppercase tracking-widest text-copper-dark">Email</p>
          <a href={`mailto:${store.email}`} className="font-display mt-2 block text-2xl font-bold text-foreground hover:text-copper-dark">
            {store.email}
          </a>
          <p className="mt-3 text-sm text-muted">
            {store.supportHours}. We reply {store.responseTime}.
          </p>
          <a
            href={`mailto:${store.email}`}
            className="mt-6 inline-flex rounded-full bg-copper px-6 py-3 text-sm font-semibold text-white transition hover:bg-copper-dark"
          >
            Send Us an Email
          </a>
        </div>
        <p className="mt-8 text-sm text-muted">
          Looking for shipping or return details? See{" "}
          <Link href="/shipping-returns" className="font-semibold text-copper-dark hover:underline">
            Shipping &amp; Returns
          </Link>{" "}
          or the{" "}
          <Link href="/#faq" className="font-semibold text-copper-dark hover:underline">
            FAQ
          </Link>
          .
        </p>
      </section>
    </>
  );
}
