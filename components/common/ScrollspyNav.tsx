"use client";

import type { RefObject } from "react";
import type { ScrollspyItem } from "@/hooks/useScrollspy";

type ScrollspyNavProps<T extends string> = {
  navRef: RefObject<HTMLElement | null>;
  navId: string;
  className?: string;
  items: readonly ScrollspyItem<T>[];
  activeId: T;
  onNavigate: (id: T) => void;
};

export default function ScrollspyNav<T extends string>({
  navRef,
  navId,
  className = "navbar tab-listing-scroll listing-detail-scrollspy-nav",
  items,
  activeId,
  onNavigate,
}: ScrollspyNavProps<T>) {
  return (
    <nav ref={navRef} id={navId} className={className}>
      <ul className="nav nav-pills">
        {items.map((item) => (
          <li className="nav-item" key={item.id}>
            <a
              className={`nav-link${activeId === item.id ? " active" : ""}`}
              href={`#${item.id}`}
              onClick={(event) => {
                event.preventDefault();
                onNavigate(item.id);
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
