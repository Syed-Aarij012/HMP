"use client";

import { useEffect, useRef } from "react";
import { useGoogleMap } from "@react-google-maps/api";
import { getListingLatLng, type ListingMapLocation } from "@/data/listingMapLocations";
import { panMapToLocation } from "@/lib/listingMapUtils";

type ListingMapCameraProps = {
  listings: ListingMapLocation[];
  selectedIndex: number | null;
  onFocusStart?: () => void;
  onFocusComplete?: (index: number) => void;
};

export default function ListingMapCamera({
  listings,
  selectedIndex,
  onFocusStart,
  onFocusComplete,
}: ListingMapCameraProps) {
  const map = useGoogleMap();
  const cancelFocusRef = useRef<(() => void) | null>(null);
  const selectedIndexRef = useRef(selectedIndex);

  useEffect(() => {
    selectedIndexRef.current = selectedIndex;
  }, [selectedIndex]);

  useEffect(() => {
    if (!map || selectedIndex === null) {
      cancelFocusRef.current?.();
      cancelFocusRef.current = null;
      return;
    }

    const listing = listings[selectedIndex];
    if (!listing) {
      return;
    }

    const focusIndex = selectedIndex;
    const position = getListingLatLng(listing);

    onFocusStart?.();
    cancelFocusRef.current?.();
    cancelFocusRef.current = panMapToLocation(map, position, () => {
      if (selectedIndexRef.current === focusIndex) {
        onFocusComplete?.(focusIndex);
      }
    });

    return () => {
      cancelFocusRef.current?.();
      cancelFocusRef.current = null;
    };
  }, [map, selectedIndex, listings, onFocusStart, onFocusComplete]);

  return null;
}
