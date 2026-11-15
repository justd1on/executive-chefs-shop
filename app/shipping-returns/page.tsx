import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { store } from "@/lib/store";

const description = `Free tracked shipping to all 50 US states and ${store.returnDays}-day returns on every Ridge Cutlery order.`;

export const metadata: Metadata = {
  title: "Shipping & Returns",
  description,
  alternates: { canonical: "/shipping-returns" },
};

const sections = [
  {
    title: "Shipping",
    items: [
      "Shipping is free on every order to all 50 US states.",
      `Most orders arrive in ${store.deliveryEstimate}.`,
      "Every order ships with tracking. You'll receive the tracking number by email as soon as your order ships.",
      "We currently ship to US addresses only.",
    ],
  },
  {
    title: "Returns",
    items: [
      `You can return unused items in their original packaging within ${store.returnDays} days of delivery.`,
      `To start a return, email ${store.email} with your order number. We'll reply ${store.responseTime} with return instructions.`,
      "Once we receive your return, we'll refund the original payment method.",
    ],
  },
  {
    title: "Damaged or Wrong Items",
    items: [
      `If something arrives damaged or isn't what you ordered, email ${store.email} with your order number and a photo, and we'll make it right.`,
    ],
  },
];

export default function ShippingReturnsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Shipping & Returns", href: "/shipping-returns" }]} />
      <section className="mx-auto max-w-3xl px-6 py-10">
        <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl">Shipping &amp; Returns</h1>
        <p className="mt-3 text-muted">{description}</p>
        {sections.map((s) => (
          <div key={s.title} className="mt-10">
            <h2 className="font-display text-xl font-bold text-foreground">{s.title}</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-foreground/90">
              {s.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </>
  );
}
