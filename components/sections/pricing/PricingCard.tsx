import PricingCheckIcon from "./PricingCheckIcon";
import type { PricingPlan } from "@/data/pricingPlans";

type PricingCardProps = {
  plan: PricingPlan;
  price: number;
};

export default function PricingCard({ plan, price }: PricingCardProps) {
  return (
    <div className="widget-pricing pricing-card-equal">
      {plan.recommended ? (
        <div className="badge-table">
          <span>Recommended</span>
        </div>
      ) : null}
      <div className="pricing-heading">
        <h2 className="sub-title">{plan.title}</h2>
        <p className="text-sub">{plan.subtitle}</p>
      </div>
      <div className="title-price flex-three">
        <h2>$</h2>
        <div className="price fw-6 font text-color-2">{price}</div>
      </div>
      <ul className="check">
        {plan.features.map((feature, index) => (
          <li key={`${plan.id}-feature-${index}`} className="flex-three">
            <PricingCheckIcon />
            {feature}
          </li>
        ))}
      </ul>
      <div className="button-pricing">
        <a className="sc-button w-100" href="#">
          <span>Get started</span>
        </a>
      </div>
    </div>
  );
}
