"use client";

import { useDashboardSidebar } from "@/components/dashboard/DashboardSidebarContext";

export default function DashboardOverlay() {
  const { isOpen, close } = useDashboardSidebar();

  return (
    <div
      className={`dashboard-overlay${isOpen ? " active" : ""}`}
      onClick={close}
      aria-hidden={!isOpen}
    />
  );
}
