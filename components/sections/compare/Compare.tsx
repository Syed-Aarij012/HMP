"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import CompareTableSection from "@/components/sections/compare/CompareTableSection";
import CompareVehicleCard from "@/components/sections/compare/CompareVehicleCard";
import ScrollspySection from "@/components/common/ScrollspySection";
import { useListingActions } from "@/components/common/ListingActionsContext";
import { ScrollspyProvider } from "@/components/common/ScrollspyProvider";
import { useScrollspy } from "@/hooks/useScrollspy";
import { COMPARE_SCROLLSPY_ITEMS } from "@/lib/compareScrollspy";
import { getCarById } from "@/data/cars";
import { compareOverviewRows, parseCompareIds } from "@/lib/compareUtils";
import type { Car } from "@/types/cars";

function Compare() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { compareCars, compareIds, syncCompareIds } = useListingActions();
  const navRef = useRef<HTMLElement>(null);
  const { activeId, scrollToSection, registerSectionRef } = useScrollspy({
    items: COMPARE_SCROLLSPY_ITEMS,
    navRef,
    stickyTopVar: "--listing-detail-sticky-top",
  });

  const urlIds = useMemo(
    () => parseCompareIds(searchParams.get("ids")),
    [searchParams],
  );

  useEffect(() => {
    if (urlIds.length === 0) {
      return;
    }

    syncCompareIds(urlIds);
  }, [urlIds, syncCompareIds]);

  useEffect(() => {
    const idsParam = compareIds.join(",");
    const currentParam = searchParams.get("ids") ?? "";

    if (idsParam === currentParam) {
      return;
    }

    const nextUrl =
      compareIds.length > 0
        ? `${pathname}?ids=${idsParam}`
        : pathname;

    router.replace(nextUrl, { scroll: false });
  }, [compareIds, pathname, router, searchParams]);

  const displayCars = useMemo(() => {
    if (compareCars.length > 0) {
      return compareCars;
    }

    return urlIds
      .map((id) => getCarById(id))
      .filter((car): car is Car => car !== undefined);
  }, [compareCars, urlIds]);

  const headerClass =
    displayCars.length === 2 ? "header-compare--count-2" : "header-compare--scroll";

  return (
    <section className="tf-section3 flat-blog-list flat-property">
      <div className="container">
        <div className="inner-heading flex-two flex-wrap gap-20">
          <h1 className="heading-listing">Compare vehicle</h1>
          <div className="social-listing flex-six flex-wrap">
            <p>Share this page:</p>
            <div className="icon-social style1">
              <a href="facebook.com">
                <i className="icon-carus-facebook" />
              </a>
              <a href="linkein.com">
                <i className="icon-carus-in" />
              </a>
              <a href="x.com">
                <i className="icon-carus-x" />
              </a>
              <a href="instagram.com">
                <i className="icon-carus-instagram" />
              </a>
            </div>
          </div>
        </div>
        <div className="wrap-single-compare">
          <ScrollspyProvider registerSectionRef={registerSectionRef}>
          <div className="inner-respond">
            <nav
              ref={navRef}
              id="navbar-example2"
              className="navbar tab-listing-scroll mb-30"
            >
              <ul className="nav nav-pills">
                <li className="nav-item">
                  <a
                    className={`nav-link${activeId === "scrollspyHeading1" ? " active" : ""}`}
                    href="#scrollspyHeading1"
                    onClick={(event) => {
                      event.preventDefault();
                      scrollToSection("scrollspyHeading1");
                    }}
                  >
                    Overview
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link${activeId === "scrollspyHeading2" ? " active" : ""}`}
                    href="#scrollspyHeading2"
                    onClick={(event) => {
                      event.preventDefault();
                      scrollToSection("scrollspyHeading2");
                    }}
                  >
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link${activeId === "scrollspyHeading3" ? " active" : ""}`}
                    href="#scrollspyHeading3"
                    onClick={(event) => {
                      event.preventDefault();
                      scrollToSection("scrollspyHeading3");
                    }}
                  >
                    Specification
                  </a>
                </li>
              </ul>
            </nav>

            {displayCars.length > 0 ? (
              <>
                <div className={`header-compare ${headerClass}`.trim()}>
                  {displayCars.map((car) => (
                    <CompareVehicleCard key={car.id} car={car} />
                  ))}
                </div>
                <div className="scrollspy-example">
                  <ScrollspySection id="scrollspyHeading1">
                    <CompareTableSection
                      title="Car Overview"
                      cars={displayCars}
                      rows={compareOverviewRows}
                    />
                  </ScrollspySection>
                  <ScrollspySection id="scrollspyHeading2">
                    <div className="tf-compare-fatures compare-table">
                      <h3 className="title-table">Features</h3>
                      <div className="col-lg-12 flat-accordion">
                        <div className="flat-toggle style-1">
                          <div className="toggle-title flex align-center">
                            <h4 className="fw-6">Interior</h4>
                            <div className="btn-toggle" />
                          </div>
                          <div className="toggle-content section-desc">
                            <p className="texts">
                              Compare interior comfort, seating, and cabin
                              features across your selected vehicles.
                            </p>
                          </div>
                        </div>
                        <div className="flat-toggle style-1">
                          <div className="toggle-title flex align-center">
                            <h4 className="fw-6">Exterior</h4>
                            <div className="btn-toggle" />
                          </div>
                          <div className="toggle-content section-desc">
                            <p className="texts">
                              Review body style, lighting, wheels, and exterior
                              design details for each selected listing.
                            </p>
                          </div>
                        </div>
                        <div className="flat-toggle style-1">
                          <div className="toggle-title flex align-center">
                            <h4 className="fw-6">Safety</h4>
                            <div className="btn-toggle" />
                          </div>
                          <div className="toggle-content section-desc">
                            <p className="texts">
                              See safety-related equipment and driver assistance
                              options available on the compared vehicles.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollspySection>
                  <ScrollspySection id="scrollspyHeading3">
                    <div className="tf-compare-overview compare-table">
                      <h3 className="title-table">Specification</h3>
                      <div className="col-lg-12 flat-accordion">
                        <div className="flat-toggle style-1">
                          <div className="toggle-title flex align-center">
                            <h5 className="fw-6">Engine and transmission</h5>
                            <div className="btn-toggle" />
                          </div>
                          <div className="toggle-content section-desc">
                            <p className="texts">
                              Engine, fuel, and transmission specifications are
                              summarized in the overview table above for each
                              selected vehicle.
                            </p>
                          </div>
                        </div>
                        <div className="flat-toggle style-1">
                          <div className="toggle-title flex align-center">
                            <h4 className="fw-6">Dimensions &amp; capacity</h4>
                            <div className="btn-toggle" />
                          </div>
                          <div className="toggle-content section-desc">
                            <p className="texts">
                              Detailed dimension and capacity data can be added
                              per listing when available in the vehicle
                              dataset.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollspySection>
                </div>
              </>
            ) : (
              <div className="compare-page-empty">
                <p>No vehicles selected for comparison yet.</p>
                <Link href="/listing-grid" className="tf-btn-primary">
                  Browse listings
                </Link>
              </div>
            )}
          </div>
          </ScrollspyProvider>
        </div>
      </div>
    </section>
  );
}

export default Compare;
