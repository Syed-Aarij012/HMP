"use client";

import { Dispatch, ReactNode, useState } from "react";
import ListingToolbarSelects from "@/components/common/ListingToolbarSelects";
import ListingViewToggle from "@/components/common/ListingViewToggle";
import ListingFilterMeta from "@/components/listings/ListingFilterMeta";
import ListingFilterOffcanvas, {
  LISTING_FILTER_OFFCANVAS_ID,
} from "@/components/listings/ListingFilterOffcanvas";
import { setItemPerPage, setSorting } from "@/components/reducer/listingFilterActions";
import type { ListingFilterAction, ListingFilterState } from "@/types/listingFilter";

type ListingView = "grid" | "list";

type ListingResultsPanelProps = {
  defaultView?: ListingView;
  gridColumns?: 3 | 4;
  resultCount?: number;
  showMobileFilter?: boolean;
  wrapClassName?: string;
  children: ReactNode | ((view: ListingView) => ReactNode);
  footer?: ReactNode;
  filterState?: ListingFilterState;
  filterDispatch?: Dispatch<ListingFilterAction>;
  filterOffcanvasId?: string;
};

export default function ListingResultsPanel({
  defaultView = "list",
  gridColumns = 3,
  resultCount,
  showMobileFilter = true,
  wrapClassName = "",
  children,
  footer,
  filterState,
  filterDispatch,
  filterOffcanvasId = LISTING_FILTER_OFFCANVAS_ID,
}: ListingResultsPanelProps) {
  const [view, setView] = useState<ListingView>(defaultView);
  const useFullWidthGrid = view === "grid" && gridColumns === 4;
  const totalResults = resultCount ?? filterState?.sorted.length ?? 0;

  return (
    <div className="sale-agents-detail">
      <div
        className={`listing-list-car-wrap${useFullWidthGrid ? " listing-grid-car-wrap" : ""}${wrapClassName ? ` ${wrapClassName}` : ""}`}
      >
        <div className="category-filter flex justify-space align-center mb-40 flex-wrap gap-8">
          <h2 className="title">Listing</h2>
          <div className="box-2 flex-three flex-wrap gap-8">
            <p className="currently">
              There Are Currently{" "}
              <span className="fw-6 text-color-2">{totalResults} Results</span>
            </p>
            {showMobileFilter && filterState && filterDispatch ? (
              <div className="filter-mobie">
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
            ) : null}
            <ListingViewToggle view={view} onViewChange={setView} />
            <ListingToolbarSelects
              itemPerPage={filterState?.itemPerPage}
              sortingOption={filterState?.sortingOption}
              onItemPerPageChange={(count) =>
                filterDispatch && setItemPerPage(count, filterDispatch)
              }
              onSortingChange={(option) =>
                filterDispatch && setSorting(option, filterDispatch)
              }
            />
          </div>
        </div>
        {filterState && filterDispatch ? (
          <ListingFilterMeta state={filterState} dispatch={filterDispatch} />
        ) : null}
        <div
          className={`list-car-list-1${view === "grid" ? " list-car-grid-1" : " listing-list-section"}`}
        >
          {typeof children === "function" ? children(view) : children}
        </div>
        {footer}
      </div>
      {filterState && filterDispatch ? (
        <ListingFilterOffcanvas
          id={filterOffcanvasId}
          state={filterState}
          dispatch={filterDispatch}
        />
      ) : null}
    </div>
  );
}
