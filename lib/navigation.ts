import type { NavMenuItem } from "@/types/navigation";

function normalizePath(path: string) {
  if (!path || path === "/") {
    return "/";
  }

  return path.replace(/\/$/, "");
}

function isDynamicNavRouteActive(pathname: string, href: string) {
  const normalizedPath = normalizePath(pathname);
  const normalizedHref = normalizePath(href);

  const listingDetailHref = normalizedHref.match(
    /^(\/listing-detail-v\d+)\/\d+$/,
  );
  if (listingDetailHref) {
    const base = listingDetailHref[1];

    return (
      normalizedPath === base || normalizedPath.startsWith(`${base}/`)
    );
  }

  if (/^\/blog-detail\/\d+$/.test(normalizedHref)) {
    return (
      normalizedPath === "/blog-detail" ||
      normalizedPath.startsWith("/blog-detail/")
    );
  }

  return false;
}

export function isNavLinkActive(pathname: string, href: string) {
  const normalizedPath = normalizePath(pathname);
  const normalizedHref = normalizePath(href);

  if (normalizedPath === normalizedHref) {
    return true;
  }

  return isDynamicNavRouteActive(normalizedPath, normalizedHref);
}

export function isNavItemActive(pathname: string, item: NavMenuItem): boolean {
  if (item.href && isNavLinkActive(pathname, item.href)) {
    return true;
  }

  return item.children?.some((child) => isNavItemActive(pathname, child)) ?? false;
}

export function getNavItemClassName(
  item: NavMenuItem,
  pathname: string,
  options?: { dropdown?: boolean },
) {
  const classes: string[] = [];

  if (options?.dropdown) {
    classes.push("dropdown2");
  }

  if (item.className) {
    classes.push(item.className);
  }

  if (isNavItemActive(pathname, item)) {
    classes.push("current");
  }

  return classes.join(" ").trim();
}
