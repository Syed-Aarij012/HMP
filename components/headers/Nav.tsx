"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNavMenu } from "@/data/navigation";
import {
  getNavItemClassName,
  isNavLinkActive,
} from "@/lib/navigation";
import type { NavMenuItem } from "@/types/navigation";

function renderDesktopItem(item: NavMenuItem, pathname: string) {
  if (item.children?.length) {
    return (
      <li
        key={item.id}
        className={getNavItemClassName(item, pathname, { dropdown: true })}
      >
        <a href="#">{item.label}</a>
        <ul>
          {item.children.map((child) => renderDesktopItem(child, pathname))}
        </ul>
      </li>
    );
  }

  if (!item.href) {
    return null;
  }

  return (
    <li
      key={item.id}
      className={isNavLinkActive(pathname, item.href) ? "current" : undefined}
    >
      <Link href={item.href}>{item.label}</Link>
    </li>
  );
}

export default function Nav() {
  const pathname = usePathname();

  return <>{mainNavMenu.map((item) => renderDesktopItem(item, pathname))}</>;
}
