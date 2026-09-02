export const LISTING_DETAIL_SCROLLSPY_ITEMS = [
  { id: "scrollspyHeading1", label: "Overview" },
  { id: "scrollspyHeading2", label: "Specs & features" },
  { id: "scrollspyHeading3", label: "Recommended cars" },
  { id: "scrollspyHeading4", label: "Loan calculator" },
  { id: "scrollspyHeading5", label: "New car reviews" },
] as const;

export type ListingDetailScrollspyId =
  (typeof LISTING_DETAIL_SCROLLSPY_ITEMS)[number]["id"];
