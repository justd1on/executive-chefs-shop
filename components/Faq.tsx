const faqs = [
  {
    question: "What steel does Ridge Cutlery use?",
    answer:
      "Ridge Cutlery knives are forged from high-carbon stainless steel, chosen for edge retention, strength, and corrosion resistance in daily kitchen use.",
  },
  {
    question: "Is the Damascus-pattern knife real Damascus steel?",
    answer:
      "The Artisan Damascus-Pattern Chef Knife features an etched Damascus-style pattern on a high-carbon steel blade, combining the classic rippled look with modern durability.",
  },
  {
    question: "Do you ship within the United States?",
    answer:
      "Yes, Ridge Cutlery ships free to all 50 US states, with tracked delivery on every order.",
  },
  {
    question: "Which knife should I buy first?",
    answer:
      "Most customers start with The Executive Chef Collection, a complete set built to replace every knife currently in your kitchen drawer.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Faq() {
  return (
    <section id="faq" className="border-t border-border bg-background">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-copper-dark">
            Frequently Asked Questions
          </span>
          <h2 className="font-display mt-2 text-3xl font-bold text-foreground md:text-4xl">
            Know Before You Buy
          </h2>
        </div>
        <dl className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <dt className="font-display text-base font-bold text-foreground">
                {faq.question}
              </dt>
              <dd className="mt-2 text-sm text-muted">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </section>
  );
}
