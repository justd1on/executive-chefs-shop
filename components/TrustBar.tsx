const items = [
  { label: "Forged High-Carbon Steel" },
  { label: "Full-Tang Construction" },
  { label: "30-Day Edge Guarantee" },
  { label: "Free US Shipping" },
];

export default function TrustBar() {
  return (
    <div className="border-b border-border bg-surface">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-6 py-6 text-center text-xs font-semibold uppercase tracking-wider text-steel md:grid-cols-4">
        {items.map((item) => (
          <div key={item.label} className="flex items-center justify-center">
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}
