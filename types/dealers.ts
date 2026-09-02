export type Dealer = {
  id: number;
  name: string;
  image: string;
  logo: string;
  reviewCount: number;
  rating: number;
  phone: string;
  address: string;
  state: string;
  brand: string;
  dateAdded: string;
};

export type DealerSortOption = "date" | "name" | "rating" | "reviews";

export type DealerListingFilters = {
  location: string;
  brand: string;
  sortBy: DealerSortOption;
  perPage: number;
  page: number;
};
