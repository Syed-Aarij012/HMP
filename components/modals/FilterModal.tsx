"use client";

import ListingSidebarFilterForm from "@/components/common/ListingSidebarFilterForm";

export default function FilterModal() {
  return (
    <div
      className="offcanvas offcanvas-start"
      tabIndex={-1}
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div className="offcanvas-header">
        <h4 className="offcanvas-title" id="offcanvasRightLabel">
          Filters and Sort
        </h4>

        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
      <div className="offcanvas-body">
        <div className="form-filter-siderbar">
          <ListingSidebarFilterForm id="filter-form-offcanvas" />
        </div>
      </div>
    </div>
  );
}
