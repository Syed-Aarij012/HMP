import { PRICING_PLANS, getPlanPrice, type PricingBilling } from "@/data/pricingPlans";
import PricingCard from "./PricingCard";

type PricingGridProps = {
  billing: PricingBilling;
};

export default function PricingGrid({ billing }: PricingGridProps) {
  return (
    <div className="grid-4 gap-48 pricing-wrap">
      {PRICING_PLANS.map((plan) => (
        <PricingCard
          key={plan.id}
          plan={plan}
          price={getPlanPrice(plan.monthlyPrice, billing)}
        />
      ))}
    </div>
  );
}
