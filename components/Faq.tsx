import JsonLd from "./JsonLd";
import { store } from "@/lib/store";

export const faqs = [
  {
    question: "Do you ship within the United States?",
    answer: `Yes. Every order ships free to all 50 US states with tracking. Most orders arrive in ${store.deliveryEstimate}.`,
  },
  {
    question: "What is your return policy?",
    answer: `You can return unused items within ${store.returnDays} days of delivery. Email ${store.email} to start a return.`,
  },
  {
    question: "Which knife should I buy first?",
    answer:
      "If you're replacing a whole drawer, start with The Executive Chef Collection. It covers chopping, slicing, and detail work, and ships with a free 4-in-1 Pro Sharpener. If you'd rather start with one knife, The Signature Dual-Purpose Cleaver handles most everyday prep.",
  },
  {
    question: "Is the Damascus-pattern knife real Damascus steel?",
    answer:
      "We call it Damascus-pattern because it describes the look of the blade: a rippling pattern with a hammered finish. We don't market it as traditional hand-folded Damascus steel.",
  },
  {
    question: "How do I care for my knives?",
    answer:
      "Hand wash with warm, soapy water, dry right away, and store them in a block or on a magnetic strip. Never put a good knife in the dishwasher. A few strokes on a honing steel before each use keeps the edge aligned.",
  },
  {
    question: "Do you ship outside the US?",
    answer: "Not yet. We currently ship to US addresses only.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-32 border-t border-border bg-background">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-copper-dark">
            Frequently Asked Questions
          </span>
          <h2 className="font-display mt-2 text-3xl font-bold text-foreground md:text-4xl">Know Before You Buy</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-2xl border border-border bg-surface p-5 open:pb-6">
              <summary className="font-display flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-foreground">
                {faq.question}
                <span className="text-xl text-copper transition group-open:rotate-45" aria-hidden>
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }}
      />
    </section>
  );
}
