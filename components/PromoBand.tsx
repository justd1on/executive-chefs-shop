import Image from "next/image";
import Link from "next/link";
import { FREE_GIFT_SLUG, getProduct } from "@/lib/products";
import { formatPrice } from "@/lib/store";

const gift = getProduct(FREE_GIFT_SLUG)!;

export default function PromoBand() {
  return (
    <section className="bg-navy">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-14 md:grid-cols-5">
        <div className="text-white md:col-span-3">
          <span className="text-xs font-bold uppercase tracking-widest text-copper-light">Knife Set Bonus</span>
          <h2 className="font-display mt-2 text-2xl font-bold md:text-3xl">
            Get the {gift.name} free with any knife set
          </h2>
          <p className="mt-3 max-w-xl text-sm text-white/70 md:text-base">
            A {formatPrice(gift.price)} value, added to your order automatically, so every edge stays sharp from
            day one.
          </p>
          <Link
            href="/knives/chef-knife-sets"
            className="mt-6 inline-flex rounded-full bg-copper px-6 py-3 text-sm font-semibold text-white transition hover:bg-copper-dark"
          >
            Shop Knife Sets
          </Link>
        </div>
        <Link
          href={`/products/${gift.slug}`}
          className="relative mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-2xl bg-navy-light md:col-span-2"
        >
          <Image src={gift.images[0].src} alt={gift.images[0].alt} fill sizes="320px" className="object-cover" />
        </Link>
      </div>
    </section>
  );
}
