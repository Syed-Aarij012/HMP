"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  trendingCarModels,
  trendingCarTabs,
  type TrendingCarTab,
} from "@/data/trendingCars";

function TrendingCars() {
  const [activeTab, setActiveTab] = useState<TrendingCarTab>(trendingCarTabs[0]);

  const filteredModels = useMemo(() => {
    return trendingCarModels.filter((model) => model.brandTab === activeTab);
  }, [activeTab]);

  return (
    <>
      <section className="tf-section3">
        <div className="container">
          <div className="heading-section flex align-center justify-space flex-wrap gap-20 wow fadeInUp">
            <h2 className="heading-tittle">Trending now</h2>
            <Link
              href={`/listing-grid`}
              className="tf-btn-arrow wow fadeInUpSmall"
              data-wow-delay="0.2s"
              data-wow-duration="1000ms"
            >
              See all
              <i className="icon-carus-arrowcircleright" />
            </Link>
          </div>
          <div className="flat-tabs themesflat-tabs wow fadeInUp">
            <div className="box-tab center">
              <ul className="menu-tab tab-title style flex">
                {trendingCarTabs.map((tab) => (
                  <li
                    key={tab}
                    className={`item-title${activeTab === tab ? " active" : ""}`}
                    onClick={() => setActiveTab(tab)}
                    role="tab"
                    aria-selected={activeTab === tab}
                  >
                    <span className="inner">{tab}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="content-tab">
              <div className="content-inner tab-content">
                <div className="trending-list">
                  {filteredModels.map((model) => (
                    <Link
                      key={model.id}
                      href={model.href ?? "/listing-list"}
                    >
                      {model.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TrendingCars;
