import Image from "next/image";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
};

export default function PageBanner({ eyebrow, title, description, image }: Props) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-navy">
        <div className="relative aspect-[16/6] w-full md:aspect-[16/4]">
          <Image src={image} alt={title} fill priority className="object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/60 to-transparent" />
        </div>
        <div className="absolute inset-y-0 left-0 flex max-w-xl flex-col justify-center px-8">
          <span className="mb-2 text-xs font-bold uppercase tracking-widest text-copper-light">
            {eyebrow}
          </span>
          <h1 className="font-display text-3xl font-bold text-white md:text-4xl">{title}</h1>
          <p className="mt-3 text-sm text-white/70 md:text-base">{description}</p>
        </div>
      </div>
    </section>
  );
}
