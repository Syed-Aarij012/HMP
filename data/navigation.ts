import type { NavMenuItem } from "@/types/navigation";

export const mainNavMenu: NavMenuItem[] = [
  {
    id: "home",
    label: "Home",
    href: "/",
  },
  {
    id: "listing-car",
    label: "Listing Car",
    href: "/listing-list",
  },
  {
    id: "page",
    label: "Page",
    children: [
      { id: "about-us", label: "About Us", href: "/about-us" },
      { id: "faq", label: "Faq's", href: "/faq" },
      { id: "pricing", label: "Pricing", href: "/pricing" },
      { id: "compare", label: "Compare", href: "/compare" },
      {
        id: "dealer",
        label: "Dealer",
        href: "/dealer-listing2",
      },
      {
        id: "agents",
        label: "Agents",
        href: "/sale-agents",
      },
      { id: "dashboard", label: "Dashboard", href: "/dashboard" },
    ],
  },
  {
    id: "blog",
    label: "Blog",
    href: "/blog-grid",
  },
  {
    id: "contact",
    label: "Contact",
    href: "/contact",
  },
];
