"use client";

import {
  GoogleMap,
  OverlayView,
  useLoadScript,
} from "@react-google-maps/api";
import { memo, useCallback, useMemo, useState } from "react";
import ListingMapCamera from "@/components/common/ListingMapCamera";
import MapListingPopup from "@/components/common/MapListingPopup";
import {
  getListingLatLng,
  LISTING_MAP_CENTER,
  LISTING_MAP_LOCATIONS,
  type ListingMapLocation,
} from "@/data/listingMapLocations";
import { LISTING_MAP_STYLES } from "@/data/listingMapStyles";

export type MapComponentProps = {
  zoom?: number;
  listings?: ListingMapLocation[];
  selectedIndex?: number | null;
  hoveredIndex?: number | null;
  onSelectIndex?: (index: number | null) => void;
  onHoverIndex?: (index: number | null) => void;
};

const containerStyle = {
  width: "100%",
  height: "100%",
} as const;

type CustomMarkerProps = {
  isActive: boolean;
  onClick: () => void;
};

const CustomMarker = memo(function CustomMarker({
  isActive,
  onClick,
}: CustomMarkerProps) {
  return (
    <div
      className={`map-marker-container${
        isActive ? " clicked infoBox-opened" : ""
      }`}
      onClick={onClick}
    >
      <div className="marker-container">
        <div className="marker-card">
          <div className="face" />
        </div>
      </div>
    </div>
  );
});

type MapMarkersProps = {
  listings: ListingMapLocation[];
  selectedIndex: number | null;
  hoveredIndex: number | null;
  onSelectIndex: (index: number) => void;
};

const MapMarkers = memo(function MapMarkers({
  listings,
  selectedIndex,
  hoveredIndex,
  onSelectIndex,
}: MapMarkersProps) {
  return (
    <>
      {listings.map((listing, index) => {
        const isActive =
          selectedIndex === index ||
          (hoveredIndex === index && selectedIndex === null);

        return (
          <OverlayView
            key={listing.id}
            position={getListingLatLng(listing)}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <CustomMarker
              isActive={isActive}
              onClick={() => onSelectIndex(index)}
            />
          </OverlayView>
        );
      })}
    </>
  );
});

export default function MapComponent({
  zoom = 16,
  listings = LISTING_MAP_LOCATIONS,
  selectedIndex: selectedIndexProp = null,
  hoveredIndex = null,
  onSelectIndex,
  onHoverIndex,
}: MapComponentProps) {
  const [internalSelectedIndex, setInternalSelectedIndex] = useState<
    number | null
  >(null);
  const [popupIndex, setPopupIndex] = useState<number | null>(null);
  const [initialZoom] = useState(zoom);

  const isControlled = onSelectIndex !== undefined;
  const selectedIndex = isControlled
    ? selectedIndexProp
    : internalSelectedIndex;

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?.trim() ?? "";

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
  });

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      center: LISTING_MAP_CENTER,
      zoom: initialZoom,
      zoomControl: true,
      disableDefaultUI: true,
      styles: LISTING_MAP_STYLES,
      scrollwheel: false,
      gestureHandling: "cooperative",
    }),
    [initialZoom],
  );

  const popupListing =
    popupIndex !== null ? listings[popupIndex] : null;

  const handleSelectIndex = useCallback(
    (index: number | null) => {
      setPopupIndex(null);

      if (isControlled) {
        onSelectIndex?.(index);
      } else {
        setInternalSelectedIndex(index);
      }

      if (index === null) {
        onHoverIndex?.(null);
      }
    },
    [isControlled, onSelectIndex, onHoverIndex],
  );

  const handleMarkerSelect = useCallback(
    (index: number) => {
      handleSelectIndex(index);
    },
    [handleSelectIndex],
  );

  const handleFocusStart = useCallback(() => {
    setPopupIndex(null);
  }, []);

  const handleFocusComplete = useCallback((index: number) => {
    setPopupIndex(index);
  }, []);

  if (!apiKey) {
    return (
      <div
        id="map"
        className="row-height d-flex align-items-center justify-content-center text-center p-4"
        style={{ ...containerStyle, background: "#f2f2f2", minHeight: 400 }}
      >
        <p className="mb-0 text-color-2">
          Add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to .env.local, then restart the
          dev server.
        </p>
      </div>
    );
  }

  if (loadError) {
    return (
      <div
        id="map"
        className="row-height d-flex align-items-center justify-content-center text-center p-4"
        style={{ ...containerStyle, background: "#f2f2f2", minHeight: 400 }}
      >
        <p className="mb-0 text-color-2">
          Google Maps failed to load. Check NEXT_PUBLIC_GOOGLE_MAPS_API_KEY.
        </p>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div
        id="map"
        className="row-height d-flex align-items-center justify-content-center text-center p-4"
        style={{ ...containerStyle, background: "#f2f2f2", minHeight: 400 }}
      >
        <p className="mb-0 text-color-2">Loading map...</p>
      </div>
    );
  }

  return (
    <div id="map" className="row-height" style={containerStyle}>
      <GoogleMap mapContainerStyle={containerStyle} options={mapOptions}>
        <ListingMapCamera
          listings={listings}
          selectedIndex={selectedIndex}
          onFocusStart={handleFocusStart}
          onFocusComplete={handleFocusComplete}
        />
        <MapMarkers
          listings={listings}
          selectedIndex={selectedIndex}
          hoveredIndex={hoveredIndex}
          onSelectIndex={handleMarkerSelect}
        />
        {popupListing && popupIndex !== null ? (
          <OverlayView
            position={getListingLatLng(popupListing)}
            mapPaneName={OverlayView.FLOAT_PANE}
            zIndex={1000}
          >
            <div className="map-box infoBox">
              <MapListingPopup
                listing={popupListing}
                onClose={() => handleSelectIndex(null)}
              />
            </div>
          </OverlayView>
        ) : null}
      </GoogleMap>
    </div>
  );
}
