const categoryLinks = [
  "Chef Knife Sets",
  "Damascus Collection",
  "BBQ & Outdoor",
  "Sharpening Tools",
  "All Knives",
];

const infoLinks = [
  "Shipping & Payment",
  "Loyalty Rewards",
  "Returns Policy",
  "Privacy Policy",
  "Terms of Service",
];

const guideLinks = ["How to Choose a Chef's Knife", "Caring for Your Blade"];

export default function Footer() {
  return (
    <footer className="bg-navy text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div>
            <span className="font-display text-xl font-bold text-white">
              RIDGE <span className="text-copper-light">CUTLERY</span>
            </span>
            <p className="mt-3 max-w-xs text-sm">
              Premium forged kitchen and BBQ knives, built for people who
              actually use them.
            </p>
            <div className="mt-4 space-y-1 text-sm">
              <p>support@ridgecutlery.com</p>
              <p>Mon&ndash;Fri, 9am&ndash;5pm ET</p>
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-bold text-white">Categories</h3>
            <ul className="space-y-2 text-sm">
              {categoryLinks.map((l) => (
                <li key={l}>
                  <a href="#collection" className="hover:text-copper-light">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-bold text-white">Information</h3>
            <ul className="space-y-2 text-sm">
              {infoLinks.map((l) => (
                <li key={l}>
                  <a href="#faq" className="hover:text-copper-light">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-bold text-white">Buying Guides</h3>
            <ul className="space-y-2 text-sm">
              {guideLinks.map((l) => (
                <li key={l}>
                  <a href="#why-ridge" className="hover:text-copper-light">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs sm:flex-row">
          <span>&copy; 2026 Ridge Cutlery. All rights reserved.</span>
          <span>Shipping within the United States</span>
        </div>
      </div>
    </footer>
  );
}
