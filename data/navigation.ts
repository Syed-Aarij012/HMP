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
    className: "tfcl-mega-menu",
    children: [
      {
        id: "listing",
        label: "Listing",
        children: [
          { id: "listing-list", label: "Listing list", href: "/listing-list" },
          { id: "listing-grid", label: "Listing grid V1", href: "/listing-grid" },
          { id: "listing-grid2", label: "Listing grid V2", href: "/listing-grid2" },
          {
            id: "listing-grid-map",
            label: "Listing map V1",
            href: "/listing-grid-map",
          },
          {
            id: "listing-list-map",
            label: "Listing map V2",
            href: "/listing-list-map",
          },
        ],
      },
      {
        id: "listing-detail",
        label: "Listing detail",
        children: [
          {
            id: "listing-detail-v1",
            label: "Listing detail V1",
            href: "/listing-detail-v1/1",
          },
          {
            id: "listing-detail-v2",
            label: "Listing detail V2",
            href: "/listing-detail-v2/1",
          },
          {
            id: "listing-detail-v3",
            label: "Listing detail V3",
            href: "/listing-detail-v3/1",
          },
          {
            id: "listing-detail-v4",
            label: "Listing detail V4",
            href: "/listing-detail-v4/1",
          },
          {
            id: "listing-detail-v5",
            label: "Listing detail V5",
            href: "/listing-detail-v5/1",
          },
          {
            id: "listing-detail-v6",
            label: "Listing detail V6",
            href: "/listing-detail-v6/1",
          },
        ],
      },
    ],
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
        children: [
          {
            id: "dealer-listing",
            label: "Dealer listing V1",
            href: "/dealer-listing",
          },
          {
            id: "dealer-listing2",
            label: "Dealer listing V2",
            href: "/dealer-listing2",
          },
          { id: "dealer-detail", label: "Dealer detail", href: "/dealer-detail" },
        ],
      },
      {
        id: "agents",
        label: "Agents",
        children: [
          { id: "sale-agents", label: "Sale agents", href: "/sale-agents" },
          {
            id: "sale-agents-detail",
            label: "Sale agents detail",
            href: "/sale-agents-detail",
          },
        ],
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
