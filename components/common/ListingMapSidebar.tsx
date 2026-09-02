"use client";

import { Dispatch, useState } from "react";
import ListingMapList from "@/components/common/ListingMapList";
import ListingToolbarSelects from "@/components/common/ListingToolbarSelects";
import ListingViewToggle from "@/components/common/ListingViewToggle";
import ListingFilterMeta from "@/components/listings/ListingFilterMeta";
import { setSorting } from "@/components/reducer/listingFilterActions";
import type { ListingFilterAction, ListingFilterState } from "@/types/listingFilter";

type ListingMapView = "grid" | "list";

type ListingMapSidebarProps = {
  title: string;
  defaultView?: ListingMapView;
  filterState: ListingFilterState;
  filterDispatch: Dispatch<ListingFilterAction>;
  filterOffcanvasId: string;
};

export default function ListingMapSidebar({
  title,
  defaultView = "grid",
  filterState,
  filterDispatch,
  filterOffcanvasId,
}: ListingMapSidebarProps) {
  const [view, setView] = useState<ListingMapView>(defaultView);

  return (
    <div className="content-left wg-dream sidebar-left-listing listing-list-car-wrap">
      <div className="category-filter flex justify-space align-center mb-30 flex-wrap gap-20 ">
        <div className="box-1 ">
          <h2 className="heading-listing">{title}</h2>
        </div>
        <div className="box-2 flex flex-wrap gap-8">
          <ListingViewToggle view={view} onViewChange={setView} />
          <div className="wd-find-select flex flex-wrap gap-20">
            <ListingToolbarSelects
              showSelect={false}
              sortingOption={filterState.sortingOption}
              onSortingChange={(option) =>
                setSorting(option, filterDispatch)
              }
            />
          </div>
          <a
            data-bs-toggle="offcanvas"
            data-bs-target={`#${filterOffcanvasId}`}
            aria-controls={filterOffcanvasId}
            className="filter"
          >
            Filter
            <i className="icon-carus-sliders" />
          </a>
        </div>
      </div>
      <ListingFilterMeta state={filterState} dispatch={filterDispatch} />
      <ListingMapList layout={view} />
    </div>
  );
}
