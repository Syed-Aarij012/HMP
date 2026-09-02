"use client";

import { useDashboardSidebar } from "@/components/dashboard/DashboardSidebarContext";

export default function DashboardToggle() {
  const { open } = useDashboardSidebar();

  return (
    <div
      className="dashboard-toggle"
      role="button"
      tabIndex={0}
      aria-label="Show dashboard menu"
      onClick={open}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          open();
        }
      }}
    >
      <i className="icon-carus-diamondsfour" aria-hidden="true" />
      Show DashBoard
    </div>
  );
}
