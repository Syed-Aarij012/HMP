"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type Ref,
  type RefCallback,
  type RefObject,
} from "react";
import { useStickyHeaderOffset } from "@/contexts/StickyHeaderOffsetContext";

export type ScrollspyItem<T extends string = string> = {
  id: T;
  label: string;
};

type UseScrollspyOptions<T extends string> = {
  items: readonly ScrollspyItem<T>[];
  navRef: RefObject<HTMLElement | null>;
  stickyTopVar?: string;
};

export function useScrollspy<T extends string>({
  items,
  navRef,
  stickyTopVar = "--scrollspy-sticky-top",
}: UseScrollspyOptions<T>) {
  const headerOffset = useStickyHeaderOffset();
  const [activeId, setActiveId] = useState<T>(items[0].id);
  const sectionElementsRef = useRef(new Map<T, HTMLElement>());

  const getNavOffset = useCallback(() => {
    return navRef.current?.offsetHeight ?? 0;
  }, [navRef]);

  const registerSectionRef = useCallback(
    (id: T): RefCallback<HTMLElement> =>
      (node) => {
        if (node) {
          sectionElementsRef.current.set(id, node);
          return;
        }

        sectionElementsRef.current.delete(id);
      },
    [],
  );

  const scrollToSection = useCallback(
    (id: T) => {
      const target = sectionElementsRef.current.get(id);
      if (!target) {
        return;
      }

      setActiveId(id);

      const top =
        target.getBoundingClientRect().top +
        window.scrollY -
        headerOffset -
        getNavOffset() -
        8;

      window.scrollTo({ top, behavior: "smooth" });
    },
    [getNavOffset, headerOffset],
  );

  useEffect(() => {
    const updateActiveSection = () => {
      const offset = headerOffset + getNavOffset() + 16;

      navRef.current?.style.setProperty(stickyTopVar, `${headerOffset}px`);

      const sections = items
        .map((item) => sectionElementsRef.current.get(item.id))
        .filter((section): section is HTMLElement => section !== undefined)
        .sort((a, b) => a.offsetTop - b.offsetTop);

      let current: T = items[0].id;

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= offset) {
          current = section.id as T;
        }
      }

      setActiveId(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("load", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("load", updateActiveSection);
    };
  }, [getNavOffset, headerOffset, items, navRef, stickyTopVar]);

  return {
    activeId,
    scrollToSection,
    registerSectionRef,
  };
}

export function mergeRefs<T>(
  ...refs: Array<Ref<T> | undefined>
): RefCallback<T> {
  return (node) => {
    refs.forEach((ref) => {
      if (!ref) {
        return;
      }

      if (typeof ref === "function") {
        ref(node);
        return;
      }

      ref.current = node;
    });
  };
}
