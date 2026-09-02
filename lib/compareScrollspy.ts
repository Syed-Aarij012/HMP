export const COMPARE_SCROLLSPY_ITEMS = [
  { id: "scrollspyHeading1", label: "Overview" },
  { id: "scrollspyHeading2", label: "Features" },
  { id: "scrollspyHeading3", label: "Specification" },
] as const;

export type CompareScrollspyId =
  (typeof COMPARE_SCROLLSPY_ITEMS)[number]["id"];
