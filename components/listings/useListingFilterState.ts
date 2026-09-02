"use client";

import { useEffect, useMemo, useReducer } from "react";
import {
  listingFilterInitialState,
  listingFilterReducer,
} from "@/components/reducer/listingFilterReducer";
import type { ListingFilterState } from "@/types/listingFilter";
import type { Car } from "@/types/cars";

type UseListingFilterStateOptions = {
  listings: Car[];
  itemPerPage?: number;
  priceMax?: number;
  categoryTab?: ListingFilterState["categoryTab"];
};

export function useListingFilterState({
  listings,
  itemPerPage = 50,
  priceMax,
  categoryTab = "all",
}: UseListingFilterStateOptions) {
  const listingPriceMax =
    priceMax ??
    (listings.length
      ? Math.max(...listings.map((car) => car.price))
      : listingFilterInitialState.listingPriceMax);

  const [state, dispatch] = useReducer(listingFilterReducer, {
    ...listingFilterInitialState,
    categoryTab,
    price: [0, listingPriceMax],
    listingPriceMax,
    filtered: listings,
    sorted: listings,
    itemPerPage,
  });

  useEffect(() => {
    dispatch({ type: "FILTER_LISTINGS", payload: listings });
  }, [
    state.categoryTab,
    state.brand,
    state.modelCategory,
    state.make,
    state.model,
    state.bodyType,
    state.featured,
    state.seats,
    state.ownership,
    state.price,
    state.fuel,
    state.transmission,
    state.driveType,
    state.mileage,
    state.doors,
    state.cylinders,
    state.color,
    state.year,
    state.features,
    listings,
  ]);

  useEffect(() => {
    dispatch({ type: "SORT_LISTINGS" });
  }, [state.sortingOption, state.filtered]);

  const visibleListings = useMemo(() => {
    return state.sorted.slice(
      (state.currentPage - 1) * state.itemPerPage,
      state.currentPage * state.itemPerPage,
    );
  }, [state.sorted, state.currentPage, state.itemPerPage]);

  const totalPages = Math.ceil(state.sorted.length / state.itemPerPage);

  function getFilterCount(filterFunction: (car: Car) => boolean) {
    return listings.filter((car) => filterFunction(car)).length;
  }

  return {
    state: state as ListingFilterState,
    dispatch,
    visibleListings,
    totalPages,
    getFilterCount,
  };
}
