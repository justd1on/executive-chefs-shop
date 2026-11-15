const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function TruckIcon({ className }: { className?: string }) {
  return (
    <svg {...base} className={className}>
      <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="17" cy="18" r="1.6" />
    </svg>
  );
}

export function ReturnIcon({ className }: { className?: string }) {
  return (
    <svg {...base} className={className}>
      <path d="M9 14L4 9l5-5" />
      <path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11" />
    </svg>
  );
}

export function LockIcon({ className }: { className?: string }) {
  return (
    <svg {...base} className={className}>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}

export function PinIcon({ className }: { className?: string }) {
  return (
    <svg {...base} className={className}>
      <path d="M12 21s-7-6.5-7-11.5a7 7 0 0 1 14 0C19 14.5 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

export function CheckIcon({ className }: { className?: string }) {
  return (
    <svg {...base} className={className}>
      <path d="M5 12l4 4 10-10" />
    </svg>
  );
}

export function GiftIcon({ className }: { className?: string }) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M5 12v8h14v-8M12 8v12M12 8S10.5 3.5 8 4.5 9 8 12 8zM12 8s1.5-4.5 4-3.5S15 8 12 8z" />
    </svg>
  );
}
