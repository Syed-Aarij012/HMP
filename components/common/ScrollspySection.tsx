"use client";

import type { ScrollspyItem } from "@/hooks/useScrollspy";
import { useScrollspySectionRef } from "@/components/common/ScrollspyProvider";
import type { ReactNode } from "react";

type ScrollspySectionProps<T extends string> = {
  id: T;
  className?: string;
  children: ReactNode;
};

export default function ScrollspySection<T extends string>({
  id,
  className,
  children,
}: ScrollspySectionProps<T>) {
  const registerSectionRef = useScrollspySectionRef<T>();

  return (
    <div ref={registerSectionRef(id)} id={id} className={className}>
      {children}
    </div>
  );
}

export type { ScrollspyItem };
