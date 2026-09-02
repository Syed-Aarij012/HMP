"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const MOBILE_MENU_CLASS = "mobile-menu-visible";

export function openMobileMenu() {
  document.body.classList.add(MOBILE_MENU_CLASS);
}

export function closeMobileMenu() {
  document.body.classList.remove(MOBILE_MENU_CLASS);
}

function useCloseMobileMenuOnUnmount() {
  useEffect(() => () => closeMobileMenu(), []);
}

export function MobileMenuBackdrop() {
  return (
    <div
      className="menu-backdrop"
      onClick={closeMobileMenu}
      aria-hidden="true"
    />
  );
}

export function MobileMenuCloser() {
  return (
    <div className="close-btn" onClick={closeMobileMenu} role="button">
      <span className="icon flaticon-cancel-1" />
    </div>
  );
}

export function MobileMenuCloser2() {
  return (
    <div className="close-btn" onClick={closeMobileMenu} role="button">
      <span className="icon-carus-close" />
    </div>
  );
}

export function MobileMenuPathListener() {
  const pathname = usePathname();

  useEffect(() => {
    closeMobileMenu();
  }, [pathname]);

  return null;
}

export function MobileMenuTrigger() {
  useCloseMobileMenuOnUnmount();

  return (
    <div
      className="mobile-nav-toggler mobile-button"
      onClick={openMobileMenu}
      role="button"
      aria-label="Open menu"
    >
      <span />
    </div>
  );
}
