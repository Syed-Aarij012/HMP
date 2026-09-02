"use client";

import type { ReactNode } from "react";
import MobileDealerSidebarShell from "@/components/common/MobileDealerSidebarShell";

type ListingDetailDealerSidebarShellProps = {
  children: ReactNode;
};

export default function ListingDetailDealerSidebarShell({
  children,
}: ListingDetailDealerSidebarShellProps) {
  return (
    <MobileDealerSidebarShell
      openAriaLabel="Open dealer information"
      closeAriaLabel="Close dealer information"
    >
      {children}
    </MobileDealerSidebarShell>
  );
}
