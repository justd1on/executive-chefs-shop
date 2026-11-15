import Image from "next/image";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export default function PageBanner({ eyebrow, title, description, image, imageAlt }: Props) {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-6">
      <div className="grid overflow-hidden rounded-2xl bg-navy md:grid-cols-5">
        <div className="flex flex-col justify-center px-8 py-10 md:col-span-3 md:px-12">
          <span className="mb-2 text-xs font-bold uppercase tracking-widest text-copper-light">
            {eyebrow}
          </span>
          <h1 className="font-display text-3xl font-bold text-white md:text-4xl">{title}</h1>
          <p className="mt-3 max-w-xl text-sm text-white/70 md:text-base">{description}</p>
        </div>
        <div className="relative aspect-[16/9] md:col-span-2 md:aspect-auto md:min-h-64">
          <Image
            src={image}
            alt={imageAlt}
            fill
            preload
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
