import { GiftIcon, LockIcon, ReturnIcon, TruckIcon } from "./Icons";
import { store } from "@/lib/store";

const items = [
  { Icon: TruckIcon, title: "Free US Shipping", body: "On every order, to all 50 states." },
  { Icon: ReturnIcon, title: `${store.returnDays}-Day Returns`, body: "Not the right fit? Send it back." },
  { Icon: GiftIcon, title: "Free Sharpener With Sets", body: "A $39 value with every knife set." },
  { Icon: LockIcon, title: "Secure Checkout", body: "Your payment details stay protected." },
];

export default function TrustBar() {
  return (
    <div className="border-y border-border bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-7 md:grid-cols-4">
        {items.map(({ Icon, title, body }) => (
          <div key={title} className="flex items-start gap-3">
            <Icon className="h-7 w-7 shrink-0 text-copper" />
            <div>
              <p className="text-sm font-bold text-foreground">{title}</p>
              <p className="text-xs text-muted">{body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
