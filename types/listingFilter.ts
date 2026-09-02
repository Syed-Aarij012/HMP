import type { Car } from "./cars";

export type ListingSortingOption =
  | "Sort by (Defaut)"
  | "Low to high"
  | "High to low"
  | string;

export type ListingCategoryTab = "all" | "new" | "used";

export interface ListingFilterState {
  categoryTab: ListingCategoryTab;
  brand: string;
  modelCategory: string;
  make: string;
  model: string;
  bodyType: string;
  featured: boolean;
  seats: string | number;
  ownership: string;
  price: [number, number];
  fuel: string;
  transmission: string;
  driveType: string;
  mileage: [number, number];
  doors: string | number;
  cylinders: string | number;
  color: string;
  year: [number, number];
  features: string[];
  listingPriceMax: number;
  filtered: Car[];
  sortingOption: ListingSortingOption;
  sorted: Car[];
  currentPage: number;
  itemPerPage: number;
}

export type ListingFilterAction =
  | { type: "SET_CATEGORY_TAB"; payload: ListingCategoryTab }
  | { type: "SET_BRAND"; payload: string }
  | { type: "SET_MODEL_CATEGORY"; payload: string }
  | { type: "SET_SEATS"; payload: string | number }
  | { type: "SET_OWNERSHIP"; payload: string }
  | { type: "SET_MAKE"; payload: string }
  | { type: "SET_MODEL"; payload: string }
  | { type: "SET_BODY_TYPE"; payload: string }
  | { type: "SET_FEATURED"; payload: boolean }
  | { type: "SET_PRICE"; payload: [number, number] }
  | { type: "SET_FUEL"; payload: string }
  | { type: "SET_TRANSMISSION"; payload: string }
  | { type: "SET_DRIVE_TYPE"; payload: string }
  | { type: "SET_MILEAGE"; payload: [number, number] }
  | { type: "SET_DOORS"; payload: string | number }
  | { type: "SET_CYLINDERS"; payload: string | number }
  | { type: "SET_COLOR"; payload: string }
  | { type: "SET_YEAR"; payload: [number, number] }
  | { type: "SET_FEATURES"; payload: string[] }
  | { type: "SET_CURRENT_PAGE"; payload: number }
  | { type: "SET_ITEM_PER_PAGE"; payload: number }
  | { type: "FILTER_LISTINGS"; payload: Car[] }
  | { type: "SET_SORTING_OPTION"; payload: ListingSortingOption }
  | { type: "SORT_LISTINGS" }
  | { type: "CLEAR_FILTER" };
