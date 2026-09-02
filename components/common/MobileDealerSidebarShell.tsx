"use client";

import type { ReactNode } from "react";
import { useMobileDealerSidebar } from "@/hooks/useMobileDealerSidebar";

type MobileDealerSidebarShellProps = {
  children: ReactNode;
  noWrapper?: boolean;
  wrapperClassName?: string;
  sidebarClassName?: string;
  openAriaLabel?: string;
  closeAriaLabel?: string;
};

export default function MobileDealerSidebarShell({
  children,
  noWrapper = false,
  wrapperClassName = "col-lg-4",
  sidebarClassName,
  openAriaLabel = "Open sidebar",
  closeAriaLabel = "Close sidebar",
}: MobileDealerSidebarShellProps) {
  const { isOpen, open, close } = useMobileDealerSidebar();

  const sidebarClasses = ["dealer-sidebar", sidebarClassName, isOpen ? "open" : ""]
    .filter(Boolean)
    .join(" ");

  const shell = (
    <>
      <button
        type="button"
        className={`btn-siderbar-mobie-filter${isOpen ? " d-none" : ""}`}
        aria-label={openAriaLabel}
        aria-expanded={isOpen}
        onClick={open}
      >
        <i className="icon-carus-signout" aria-hidden="true" />
      </button>
      <div
        className={`overlay-siderbar-mobie${isOpen ? " open" : ""}`}
        onClick={close}
        aria-hidden={!isOpen}
      />
      <div className={sidebarClasses}>
        <button
          type="button"
          className="icon-close-listing"
          aria-label={closeAriaLabel}
          onClick={close}
        >
          <i className="icon-carus-close" aria-hidden="true" />
        </button>
        {children}
      </div>
    </>
  );

  if (noWrapper) {
    return shell;
  }

  return <div className={wrapperClassName}>{shell}</div>;
}
