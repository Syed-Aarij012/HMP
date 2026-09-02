"use client";

import { useState } from "react";
import {
  PRICING_TABS,
  type PricingBilling,
} from "@/data/pricingPlans";
import PricingGrid from "./PricingGrid";

function Pricing() {
  const [billing, setBilling] = useState<PricingBilling>("monthly");

  return (
    <section className="tf-section3 flat-property">
      <div className="container">
        <div className="heading-section center mb-30">
          <h2 className="heading-tittle">Select Your Pricing Plan</h2>
          <p className="fs-18 fw-4 text-color-2">
            From Large Showrooms To Small Individual Investors, We Have Plans
            Designed To Grow With You
          </p>
        </div>
        <div className="flat-tabs themesflat-tabs">
          <div className="box-tab style4 center">
            <ul className="menu-tab tab-title flex-five">
              {PRICING_TABS.map((tab) => (
                <li
                  key={tab.id}
                  className={`item-title${billing === tab.id ? " active" : ""}`}
                >
                  <button
                    type="button"
                    className="inner pricing-tab-button"
                    onClick={() => setBilling(tab.id)}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="content-tab">
            <div className="content-inner tab-content">
              <PricingGrid billing={billing} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
