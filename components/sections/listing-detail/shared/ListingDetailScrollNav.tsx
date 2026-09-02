"use client";

import ScrollspyNav from "@/components/common/ScrollspyNav";
import {
  LISTING_DETAIL_SCROLLSPY_ITEMS,
  type ListingDetailScrollspyId,
} from "@/lib/listingDetailScrollspy";
import type { RefObject } from "react";

type ListingDetailScrollNavProps = {
  navRef: RefObject<HTMLElement | null>;
  activeId: ListingDetailScrollspyId;
  onNavigate: (id: ListingDetailScrollspyId) => void;
};

export default function ListingDetailScrollNav({
  navRef,
  activeId,
  onNavigate,
}: ListingDetailScrollNavProps) {
  return (
    <ScrollspyNav
      navRef={navRef}
      navId="listing-detail-scrollspy-nav"
      items={LISTING_DETAIL_SCROLLSPY_ITEMS}
      activeId={activeId}
      onNavigate={onNavigate}
    />
  );
}
