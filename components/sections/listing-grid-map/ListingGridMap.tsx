"use client";

import { listingMapCars } from "@/data/cars";
import { ListingMapProvider } from "@/components/common/ListingMapContext";
import ListingMapPanel from "@/components/common/ListingMapPanel";
import ListingMapSidebar from "@/components/common/ListingMapSidebar";
import ListingFilterOffcanvas from "@/components/listings/ListingFilterOffcanvas";
import { useListingFilterState } from "@/components/listings/useListingFilterState";

const MAP_FILTER_OFFCANVAS_ID = "offcanvas-listing-map-filter";

export default function ListingGridMap() {
  const { state, dispatch } = useListingFilterState({
    listings: listingMapCars,
    itemPerPage: listingMapCars.length,
  });

  return (
    <>
      <ListingMapProvider listings={state.sorted}>
        <div className=" wrap-map flat-featured  listing-grid style flex listing-wrap-map">
          <ListingMapSidebar
            title="Listing grid"
            defaultView="grid"
            filterState={state}
            filterDispatch={dispatch}
            filterOffcanvasId={MAP_FILTER_OFFCANVAS_ID}
          />
          <div className="content-right fixed-space po-sticky map-right">
            <ListingMapPanel zoom={16} />
          </div>
        </div>
      </ListingMapProvider>
      <ListingFilterOffcanvas
        id={MAP_FILTER_OFFCANVAS_ID}
        formId="filter-form-map"
        state={state}
        dispatch={dispatch}
      />
    </>
  );
}
