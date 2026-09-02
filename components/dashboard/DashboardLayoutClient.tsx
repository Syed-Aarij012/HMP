"use client";

import type { ReactNode } from "react";
import DashboardHeader from "@/components/headers/DashboardHeader";
import DashboardSidebar from "@/components/headers/DashboardSidebar";
import DashboardOverlay from "@/components/dashboard/DashboardOverlay";
import { DashboardSidebarProvider } from "@/components/dashboard/DashboardSidebarContext";

type DashboardLayoutClientProps = {
  children: ReactNode;
};

export default function DashboardLayoutClient({
  children,
}: DashboardLayoutClientProps) {
  return (
    <DashboardSidebarProvider>
      <DashboardOverlay />
      <DashboardSidebar />
      <div id="wrapper-dashboard">
        <div id="pagee" className="clearfix">
          <DashboardHeader />
        </div>
        {children}
      </div>
    </DashboardSidebarProvider>
  );
}
