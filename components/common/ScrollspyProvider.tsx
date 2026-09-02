"use client";

import {
  createContext,
  useContext,
  useMemo,
  type ReactNode,
  type RefCallback,
} from "react";

type ScrollspyContextValue<T extends string> = {
  registerSectionRef: (id: T) => RefCallback<HTMLElement>;
};

const ScrollspyContext = createContext<ScrollspyContextValue<string> | null>(
  null,
);

export function ScrollspyProvider<T extends string>({
  registerSectionRef,
  children,
}: {
  registerSectionRef: (id: T) => RefCallback<HTMLElement>;
  children: ReactNode;
}) {
  const value = useMemo(
    () => ({ registerSectionRef }),
    [registerSectionRef],
  );

  return (
    <ScrollspyContext.Provider value={value as ScrollspyContextValue<string>}>
      {children}
    </ScrollspyContext.Provider>
  );
}

export function useScrollspySectionRef<T extends string>() {
  const context = useContext(ScrollspyContext);
  if (!context) {
    throw new Error("useScrollspySectionRef must be used within ScrollspyProvider");
  }

  return context.registerSectionRef as (id: T) => RefCallback<HTMLElement>;
}

export type { ScrollspyContextValue };
