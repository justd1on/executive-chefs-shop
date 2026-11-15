// Policy values below are placeholders until the business confirms them.
export const store = {
  name: "Ridge Cutlery",
  url: "https://ridgecutlery.com",
  email: "support@ridgecutlery.com",
  supportHours: "Mon–Fri, 9am–5pm ET",
  responseTime: "within one business day",
  deliveryEstimate: "5–10 business days",
  returnDays: 30,
};

export function formatPrice(amount: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount);
}
