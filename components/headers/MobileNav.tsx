"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { mainNavMenu } from "@/data/navigation";
import {
  getNavItemClassName,
  isNavLinkActive,
  isNavItemActive,
} from "@/lib/navigation";
import type { NavMenuItem } from "@/types/navigation";

function MobileNavItem({
  item,
  pathname,
  expandedIds,
  collapsedIds,
  onToggle,
}: {
  item: NavMenuItem;
  pathname: string;
  expandedIds: Set<string>;
  collapsedIds: Set<string>;
  onToggle: (id: string, isOpen: boolean, isActiveParent: boolean) => void;
}) {
  const hasChildren = Boolean(item.children?.length);
  const isActiveParent = hasChildren && isNavItemActive(pathname, item);
  const isOpen =
    expandedIds.has(item.id) ||
    (isActiveParent && !collapsedIds.has(item.id));

  if (hasChildren) {
    return (
      <li
        key={item.id}
        className={getNavItemClassName(item, pathname, { dropdown: true })}
      >
        <a href="#">{item.label}</a>
        <ul style={isOpen ? { display: "block" } : undefined}>
          {item.children!.map((child) => (
            <MobileNavItem
              key={child.id}
              item={child}
              pathname={pathname}
              expandedIds={expandedIds}
              collapsedIds={collapsedIds}
              onToggle={onToggle}
            />
          ))}
        </ul>
        <div
          className="dropdown2-btn"
          onClick={() => onToggle(item.id, isOpen, isActiveParent)}
          role="button"
          aria-label={`Toggle ${item.label} submenu`}
        />
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

export default function MobileNav() {
  const pathname = usePathname();
  const [expandedIds, setExpandedIds] = useState<Set<string>>(() => new Set());
  const [collapsedByPath, setCollapsedByPath] = useState<
    Map<string, Set<string>>
  >(() => new Map());
  const collapsedIds = collapsedByPath.get(pathname) ?? new Set<string>();

  const toggleExpanded = (
    id: string,
    isOpen: boolean,
    isActiveParent: boolean,
  ) => {
    if (isOpen) {
      setExpandedIds((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
      if (isActiveParent) {
        setCollapsedByPath((prev) => {
          const next = new Map(prev);
          const collapsed = new Set(next.get(pathname) ?? []);
          collapsed.add(id);
          next.set(pathname, collapsed);
          return next;
        });
      }
      return;
    }

    setExpandedIds((prev) => new Set(prev).add(id));
    setCollapsedByPath((prev) => {
      const next = new Map(prev);
      const collapsed = new Set(next.get(pathname) ?? []);
      collapsed.delete(id);
      next.set(pathname, collapsed);
      return next;
    });
  };

  return (
    <>
      {mainNavMenu.map((item) => (
        <MobileNavItem
          key={item.id}
          item={item}
          pathname={pathname}
          expandedIds={expandedIds}
          collapsedIds={collapsedIds}
          onToggle={toggleExpanded}
        />
      ))}
    </>
  );
}
