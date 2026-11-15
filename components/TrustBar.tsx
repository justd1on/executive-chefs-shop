const items = [
  {
    title: "In Stock & Ready",
    body: "Orders ship from our own US warehouse.",
    icon: (
      <path d="M5 12l4 4 10-10" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Fast US Shipping",
    body: "Delivered within 2-4 business days.",
    icon: (
      <>
        <path d="M3 7h11v9H3z" strokeLinejoin="round" />
        <path d="M14 10h4l3 3v3h-7z" strokeLinejoin="round" />
        <circle cx="7" cy="18" r="1.6" />
        <circle cx="17" cy="18" r="1.6" />
      </>
    ),
  },
  {
    title: "Loyalty Rewards",
    body: "Earn up to 10% back on every order.",
    icon: (
      <path d="M12 3l2.5 5 5.5.8-4 3.9.9 5.5L12 15.8 7.1 18.2l.9-5.5-4-3.9 5.5-.8L12 3z" strokeLinejoin="round" />
    ),
  },
  {
    title: "Authenticity Guarantee",
    body: "Sourced directly from our own forge.",
    icon: (
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" strokeLinejoin="round" />
    ),
  },
];

export default function TrustBar() {
  return (
    <div className="border-y border-border bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-8 md:grid-cols-4">
        {items.map((item) => (
          <div key={item.title} className="flex items-start gap-3">
            <svg
              viewBox="0 0 24 24"
              className="h-7 w-7 shrink-0 text-copper"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              {item.icon}
            </svg>
            <div>
              <p className="text-sm font-bold text-foreground">{item.title}</p>
              <p className="text-xs text-muted">{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
