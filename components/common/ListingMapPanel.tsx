"use client";

import MapComponent from "@/components/common/MapComponent";
import { useListingMap } from "@/components/common/ListingMapContext";

type ListingMapPanelProps = {
  zoom?: number;
};

export default function ListingMapPanel({ zoom = 16 }: ListingMapPanelProps) {
  const {
    mapLocations,
    selectedIndex,
    hoveredIndex,
    setSelectedIndex,
    setHoveredIndex,
  } = useListingMap();

  return (
    <MapComponent
      zoom={zoom}
      listings={mapLocations}
      selectedIndex={selectedIndex}
      hoveredIndex={hoveredIndex}
      onSelectIndex={setSelectedIndex}
      onHoverIndex={setHoveredIndex}
    />
  );
}
