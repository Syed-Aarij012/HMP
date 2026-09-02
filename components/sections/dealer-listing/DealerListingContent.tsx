"use client";

import { useMemo, useState } from "react";
import Pagination from "@/components/common/Pagination";
import DealerListingToolbar from "@/components/common/DealerListingToolbar";
import DealerListingCard from "@/components/sections/dealer-listing/DealerListingCard";
import { dealers } from "@/data/dealers";
import { getDealerListingResults } from "@/lib/dealerListingUtils";
import type { DealerSortOption } from "@/types/dealers";

type DealerListingContentProps = {
  title?: string;
};

export default function DealerListingContent({
  title = "Find Car Dealerships",
}: DealerListingContentProps) {
  const [location, setLocation] = useState("");
  const [brand, setBrand] = useState("");
  const [perPage, setPerPage] = useState(8);
  const [sortBy, setSortBy] = useState<DealerSortOption>("date");
  const [page, setPage] = useState(1);

  const results = useMemo(
    () =>
      getDealerListingResults(dealers, {
        location,
        brand,
        sortBy,
        perPage,
        page,
      }),
    [location, brand, sortBy, perPage, page],
  );

  const resetPage = () => setPage(1);

  return (
    <section className="tf-section">
      <div className="container">
        <div className="group-dealer-title">
          <h2>{title}</h2>
          <DealerListingToolbar
            location={location}
            brand={brand}
            perPage={perPage}
            sortBy={sortBy}
            onLocationChange={(value) => {
              setLocation(value);
              resetPage();
            }}
            onBrandChange={(value) => {
              setBrand(value);
              resetPage();
            }}
            onPerPageChange={(value) => {
              setPerPage(value);
              resetPage();
            }}
            onSortChange={(value) => {
              setSortBy(value);
              resetPage();
            }}
          />
        </div>
        <div className="wrap-scoll-dealer">
          {results.items.length > 0 ? (
            <div className="grid-4 gap-30 mb-50">
              {results.items.map((dealer) => (
                <DealerListingCard key={dealer.id} dealer={dealer} />
              ))}
            </div>
          ) : (
            <div className="compare-page-empty mb-50">
              <p>No dealerships match your filters.</p>
            </div>
          )}
          <Pagination
            variant="tfcl"
            styleDealer
            currentPage={results.page}
            totalPages={results.totalPages}
            onPageChange={setPage}
          />
        </div>
      </div>
    </section>
  );
}
