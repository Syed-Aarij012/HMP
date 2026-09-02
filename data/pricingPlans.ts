export type PricingPlan = {
  id: string;
  title: string;
  subtitle: string;
  monthlyPrice: number;
  features: string[];
  recommended?: boolean;
};

const PERSONAL_FEATURES = [
  "Aliquam mollis massa eu",
  "Donec convallis ex sit",
  "Amet leo tempus rutrum",
  "Morbi dignissim ante eget",
  "Curabitur quis elit et ligula",
  "Donec eu nibh congue",
];

const BUSINESS_FEATURES = [
  "30 advertised listings",
  "Top rows (Recent listings)",
  "Renew every 4 hours",
  "Dealer analytics dashboard",
  "Priority listing support",
  "Featured showroom badge",
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "personal",
    title: "Personal",
    subtitle: "For individual customers",
    monthlyPrice: 12,
    features: PERSONAL_FEATURES,
  },
  {
    id: "regular",
    title: "Regular",
    subtitle: "For individual customers",
    monthlyPrice: 22,
    features: BUSINESS_FEATURES,
  },
  {
    id: "premium",
    title: "Premium",
    subtitle: "For small business",
    monthlyPrice: 30,
    features: BUSINESS_FEATURES,
    recommended: true,
  },
  {
    id: "business",
    title: "Business",
    subtitle: "For large showrooms",
    monthlyPrice: 39,
    features: BUSINESS_FEATURES,
  },
];

export const PRICING_TABS = [
  { id: "monthly", label: "Monthly" },
  { id: "annual", label: "Annually -15%" },
] as const;

export type PricingBilling = (typeof PRICING_TABS)[number]["id"];

export const ANNUAL_DISCOUNT = 0.15;

export function getPlanPrice(
  monthlyPrice: number,
  billing: PricingBilling
): number {
  if (billing === "monthly") {
    return monthlyPrice;
  }

  return Math.round(monthlyPrice * (1 - ANNUAL_DISCOUNT));
}
