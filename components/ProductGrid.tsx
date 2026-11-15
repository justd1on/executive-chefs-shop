import { products } from "@/lib/products";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <section id="collection" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-copper-light">
          The Collection
        </span>
        <h2 className="font-display mt-3 text-4xl tracking-wide text-foreground md:text-5xl">
          Seven Blades. Zero Compromise.
        </h2>
        <p className="mt-4 text-steel">
          Every Ridge Cutlery knife is forged for a single purpose: to be the
          last knife you ever need to buy for that job.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
}
