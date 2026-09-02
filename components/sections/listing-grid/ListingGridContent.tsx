"use client";

import { useMemo } from "react";
import Filters from "@/components/common/Filters";
import ListingResultsPanel from "@/components/common/ListingResultsPanel";
import Pagination from "@/components/common/Pagination";
import { setCurrentPage } from "@/components/reducer/listingFilterActions";
import { useListingFilterState } from "@/components/listings/useListingFilterState";
import SaleAgentListingCard from "@/components/sections/sale-agents-detail/SaleAgentListingCard";
import { listingGridCars } from "@/data/cars";
import {
  buildListingPriceOptions,
  getListingPriceBounds,
} from "@/lib/buildListingPriceOptions";

export default function ListingGridContent() {
  const priceBounds = useMemo(
    () => getListingPriceBounds(listingGridCars),
    [],
  );
  const priceOptions = useMemo(
    () => buildListingPriceOptions(listingGridCars),
    [],
  );

  const { state, dispatch, visibleListings, totalPages } =
    useListingFilterState({
      listings: listingGridCars,
      itemPerPage: 10,
      priceMax: priceBounds.max,
    });

  return (
    <>
      <div className="flat-filter-search tf-section-listing">
        <div className="container">
          <div className="flat-tabs">
            <Filters
              state={state}
              dispatch={dispatch}
              priceOptions={priceOptions}
            />
          </div>
        </div>
      </div>
      <section className="tf-section listing-detail">
        <div className="container">
          <ListingResultsPanel
            defaultView="grid"
            gridColumns={4}
            showMobileFilter={false}
            resultCount={state.sorted.length}
            filterState={state}
            filterDispatch={dispatch}
            footer={
              <Pagination
                className="center mt-40"
                listClassName="justify-center"
                totalPages={totalPages}
                currentPage={state.currentPage}
                onPageChange={(page) => setCurrentPage(page, dispatch)}
              />
            }
          >
            {(view) =>
              visibleListings.length > 0 ? (
                visibleListings.map((car) => (
                  <SaleAgentListingCard
                    key={car.id}
                    car={car}
                    layout={view}
                  />
                ))
              ) : (
                <div className="no-results">
                  <p>No listings match your filters.</p>
                </div>
              )
            }
          </ListingResultsPanel>
        </div>
      </section>
    </>
  );
}
