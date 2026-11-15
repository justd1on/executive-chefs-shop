"use client";

import { useState } from "react";
import Image from "next/image";
import type { ProductImage } from "@/lib/products";

export default function ProductGallery({ images }: { images: ProductImage[] }) {
  const [index, setIndex] = useState(0);
  const current = images[index];
  const go = (step: number) => setIndex((i) => (i + step + images.length) % images.length);

  return (
    <div>
      <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-surface">
        <Image
          src={current.src}
          alt={current.alt}
          fill
          preload
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-foreground shadow transition hover:bg-background"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next image"
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-foreground shadow transition hover:bg-background"
            >
              ›
            </button>
            <span className="absolute bottom-3 right-3 rounded-full bg-background/90 px-2.5 py-1 text-xs font-medium">
              {index + 1} / {images.length}
            </span>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {images.map((image, i) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show image ${i + 1}`}
              aria-current={i === index}
              className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border-2 bg-surface transition sm:h-20 sm:w-20 ${
                i === index ? "border-copper" : "border-transparent hover:border-border"
              }`}
            >
              <Image src={image.src} alt="" fill sizes="80px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
