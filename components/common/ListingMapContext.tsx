"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { ListingMapLocation } from "@/data/listingMapLocations";
import {
  carToListingMapLocation,
  hasMapPosition,
} from "@/lib/listingMapUtils";
import type { Car } from "@/types/cars";

type ListingMapContextValue = {
  listings: Car[];
  mapLocations: ListingMapLocation[];
  selectedIndex: number | null;
  hoveredIndex: number | null;
  setSelectedIndex: (index: number | null) => void;
  setHoveredIndex: (index: number | null) => void;
};

const ListingMapContext = createContext<ListingMapContextValue | null>(null);

export function useListingMap() {
  const context = useContext(ListingMapContext);
  if (!context) {
    throw new Error("useListingMap must be used within ListingMapProvider");
  }
  return context;
}

type ListingMapProviderProps = {
  children: ReactNode;
  listings: Car[];
};

export function ListingMapProvider({
  children,
  listings,
}: ListingMapProviderProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [prevListings, setPrevListings] = useState(listings);

  if (listings !== prevListings) {
    setPrevListings(listings);
    setSelectedIndex(null);
    setHoveredIndex(null);
  }

  const mapLocations = useMemo(
    () =>
      listings.filter(hasMapPosition).map((car) => carToListingMapLocation(car)),
    [listings],
  );

  const value = useMemo(
    () => ({
      listings,
      mapLocations,
      selectedIndex,
      hoveredIndex,
      setSelectedIndex,
      setHoveredIndex,
    }),
    [listings, mapLocations, selectedIndex, hoveredIndex],
  );

  return (
    <ListingMapContext.Provider value={value}>
      {children}
    </ListingMapContext.Provider>
  );
}
