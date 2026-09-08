import type { NavMenuItem } from "@/types/navigation";

export const mainNavMenu: NavMenuItem[] = [
  {
    id: "home",
    label: "Home",
    children: [
      { id: "home-01", label: "Home Page 01", href: "/" },
      { id: "home-02", label: "Home Page 02", href: "/home02" },
      { id: "home-03", label: "Home Page 03", href: "/home03" },
      { id: "home-04", label: "Home Page 04", href: "/home04" },
      { id: "home-05", label: "Home Page 05", href: "/home05" },
    ],
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
    children: [
      { id: "blog-list", label: "Blog List", href: "/blog" },
      { id: "blog-grid", label: "Blog Grid", href: "/blog-grid" },
      { id: "blog-detail", label: "Blog Detail", href: "/blog-detail/1" },
    ],
  },
  {
    id: "contact",
    label: "Contact",
    href: "/contact",
  },
];
