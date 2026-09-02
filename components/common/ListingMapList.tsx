"use client";

import SaleAgentListingCard from "@/components/sections/sale-agents-detail/SaleAgentListingCard";
import { useListingMap } from "@/components/common/ListingMapContext";

type ListingMapListProps = {
  layout?: "list" | "grid";
  listClassName?: string;
};

export default function ListingMapList({
  layout = "list",
  listClassName,
}: ListingMapListProps) {
  const { listings, selectedIndex, setSelectedIndex, setHoveredIndex } =
    useListingMap();

  const listClasses =
    listClassName ??
    (layout === "grid"
      ? "list-car-1 list-car-list-1 list-car-grid-1"
      : "list-car-1 list-car-list-1");

  if (listings.length === 0) {
    return (
      <div className="no-results">
        <p>No listings match your filters.</p>
      </div>
    );
  }

  return (
    <div className={listClasses}>
      {listings.map((car, index) => {
        const markerId = index + 1;
        const isPopupOpen = selectedIndex === index;

        return (
          <div
            key={car.id}
            className="listing-item-container"
            data-marker-id={markerId}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => {
              if (!isPopupOpen) {
                setHoveredIndex(null);
              }
            }}
          >
            <SaleAgentListingCard
              car={car}
              layout={layout}
              onViewClick={() => setSelectedIndex(index)}
            />
          </div>
        );
      })}
    </div>
  );
}
