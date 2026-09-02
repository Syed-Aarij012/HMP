import type { Dispatch } from "react";
import type {
  ListingCategoryTab,
  ListingFilterAction,
  ListingSortingOption,
} from "@/types/listingFilter";
import type { Car } from "@/types/cars";

export function setCategoryTab(
  tab: ListingCategoryTab,
  dispatch: Dispatch<ListingFilterAction>,
): void {
  dispatch({ type: "SET_CATEGORY_TAB", payload: tab });
}

export function setBrand(
  brand: string,
  dispatch: Dispatch<ListingFilterAction>,
): void {
  dispatch({ type: "SET_BRAND", payload: brand });
}

export function setModelCategory(
  modelCategory: string,
  dispatch: Dispatch<ListingFilterAction>,
): void {
  dispatch({ type: "SET_MODEL_CATEGORY", payload: modelCategory });
}

export function setSeats(
  seats: string | number,
  dispatch: Dispatch<ListingFilterAction>,
): void {
  dispatch({ type: "SET_SEATS", payload: seats });
}

export function setOwnership(
  ownership: string,
  dispatch: Dispatch<ListingFilterAction>,
): void {
  dispatch({ type: "SET_OWNERSHIP", payload: ownership });
}

export function setMake(
  make: string,
  dispatch: Dispatch<ListingFilterAction>,
): void {
  dispatch({ type: "SET_MAKE", payload: make });
}

export function setModel(
  model: string,
  dispatch: Dispatch<ListingFilterAction>,
): void {
  dispatch({ type: "SET_MODEL", payload: model });
}

export function setBodyType(
  bodyType: string,
  dispatch: Dispatch<ListingFilterAction>,
): void {
  dispatch({ type: "SET_BODY_TYPE", payload: bodyType });
}

export function setFeatured(
  featured: boolean,
  dispatch: Dispatch<ListingFilterAction>,
): void {
  dispatch({ type: "SET_FEATURED", payload: featured });
}

export function setPriceRange(
  range: [number, number],
  dispatch: Dispatch<ListingFilterAction>,
): void {
  dispatch({ type: "SET_PRICE", payload: range });
}

export function setFuel(
  fuel: string,
  dispatch: Dispatch<ListingFilterAction>,
): void {
  dispatch({ type: "SET_FUEL", payload: fuel });
}

export function setTransmission(
  transmission: string,
  dispatch: Dispatch<ListingFilterAction>,
): void {
  dispatch({ type: "SET_TRANSMISSION", payload: transmission });
}

export function setDriveType(
  driveType: string,
  dispatch: Dispatch<ListingFilterAction>,
): void {
  dispatch({ type: "SET_DRIVE_TYPE", payload: driveType });
}

export function setMileageRange(
  range: [number, number],
  dispatch: Dispatch<ListingFilterAction>,
): void {
  dispatch({ type: "SET_MILEAGE", payload: range });
}

export function setDoors(
  doors: string | number,
  dispatch: Dispatch<ListingFilterAction>,
): void {
  dispatch({ type: "SET_DOORS", payload: doors });
}

export function setCylinders(
  cylinders: string | number,
  dispatch: Dispatch<ListingFilterAction>,
): void {
  dispatch({ type: "SET_CYLINDERS", payload: cylinders });
}

export function setColor(
  color: string,
  dispatch: Dispatch<ListingFilterAction>,
): void {
  dispatch({ type: "SET_COLOR", payload: color });
}

export function setYearRange(
  range: [number, number],
  dispatch: Dispatch<ListingFilterAction>,
): void {
  dispatch({ type: "SET_YEAR", payload: range });
}

export function toggleFeature(
  feature: string,
  dispatch: Dispatch<ListingFilterAction>,
  selectedFeatures: string[],
): void {
  const updated = selectedFeatures.includes(feature)
    ? selectedFeatures.filter((item) => item !== feature)
    : [...selectedFeatures, feature];
  dispatch({ type: "SET_FEATURES", payload: updated });
}

export function setSorting(
  option: ListingSortingOption,
  dispatch: Dispatch<ListingFilterAction>,
): void {
  dispatch({ type: "SET_SORTING_OPTION", payload: option });
}

export function setCurrentPage(
  page: number,
  dispatch: Dispatch<ListingFilterAction>,
): void {
  dispatch({ type: "SET_CURRENT_PAGE", payload: page });
}

export function setItemPerPage(
  count: number,
  dispatch: Dispatch<ListingFilterAction>,
): void {
  dispatch({ type: "SET_ITEM_PER_PAGE", payload: count });
}

export function applyFilter(
  data: Car[],
  dispatch: Dispatch<ListingFilterAction>,
): void {
  dispatch({ type: "FILTER_LISTINGS", payload: data });
  dispatch({ type: "SORT_LISTINGS" });
}

export function clearAllFilters(
  dispatch: Dispatch<ListingFilterAction>,
): void {
  dispatch({ type: "CLEAR_FILTER" });
}
