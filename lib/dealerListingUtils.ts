import type { Dealer, DealerListingFilters, DealerSortOption } from "@/types/dealers";

export function filterDealers(
  dealers: Dealer[],
  location: string,
  brand: string,
): Dealer[] {
  return dealers.filter((dealer) => {
    const matchesLocation = !location || dealer.state === location;
    const matchesBrand = !brand || dealer.brand === brand;

    return matchesLocation && matchesBrand;
  });
}

export function sortDealers(dealers: Dealer[], sortBy: DealerSortOption): Dealer[] {
  const sorted = [...dealers];

  switch (sortBy) {
    case "name":
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case "rating":
      return sorted.sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount);
    case "reviews":
      return sorted.sort((a, b) => b.reviewCount - a.reviewCount);
    case "date":
    default:
      return sorted.sort(
        (a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime(),
      );
  }
}

export function paginateDealers(dealers: Dealer[], page: number, perPage: number): Dealer[] {
  const start = (page - 1) * perPage;
  return dealers.slice(start, start + perPage);
}

export function getDealerTotalPages(totalItems: number, perPage: number): number {
  return Math.max(1, Math.ceil(totalItems / perPage));
}

export function getDealerListingResults(
  dealers: Dealer[],
  filters: DealerListingFilters,
) {
  const filtered = filterDealers(dealers, filters.location, filters.brand);
  const sorted = sortDealers(filtered, filters.sortBy);
  const totalPages = getDealerTotalPages(sorted.length, filters.perPage);
  const page = Math.min(filters.page, totalPages);
  const items = paginateDealers(sorted, page, filters.perPage);

  return {
    items,
    totalItems: sorted.length,
    totalPages,
    page,
  };
}
