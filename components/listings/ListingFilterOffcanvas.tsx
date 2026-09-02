"use client";

import { Dispatch } from "react";
import ListingSidebarFilterForm, {
  ListingSidebarClearButton,
} from "@/components/common/ListingSidebarFilterForm";
import type { ListingFilterAction, ListingFilterState } from "@/types/listingFilter";

export const LISTING_FILTER_OFFCANVAS_ID = "offcanvas-listing-filter";

type ListingFilterOffcanvasProps = {
  id?: string;
  formId?: string;
  state: ListingFilterState;
  dispatch: Dispatch<ListingFilterAction>;
};

export default function ListingFilterOffcanvas({
  id = LISTING_FILTER_OFFCANVAS_ID,
  formId = "filter-form-offcanvas",
  state,
  dispatch,
}: ListingFilterOffcanvasProps) {
  const titleId = `${id}-label`;

  return (
    <div
      className="offcanvas offcanvas-start"
      tabIndex={-1}
      id={id}
      aria-labelledby={titleId}
    >
      <div className="offcanvas-header">
        <h4 className="offcanvas-title" id={titleId}>
          Filters and Sort
        </h4>
        <div className="flex align-center gap-12">
          <ListingSidebarClearButton dispatch={dispatch} />
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
      </div>
      <div className="offcanvas-body">
        <div className="form-filter-siderbar">
          <ListingSidebarFilterForm id={formId} state={state} dispatch={dispatch} />
        </div>
      </div>
    </div>
  );
}
