"use client";

import { useEffect, useRef, useState } from "react";

type UseStickyHeaderOptions = {
  smallScrollThreshold?: number;
};

export function useStickyHeader(options: UseStickyHeaderOptions = {}) {
  const { smallScrollThreshold = 100 } = options;
  const navRef = useRef<HTMLDivElement>(null);
  const offsetTopRef = useRef(0);
  const headerHeightRef = useRef(0);
  const [isFixed, setIsFixed] = useState(false);
  const [isSmall, setIsSmall] = useState(false);
  const [spacerHeight, setSpacerHeight] = useState(0);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const measure = () => {
      offsetTopRef.current = nav.getBoundingClientRect().top + window.scrollY;
      headerHeightRef.current = nav.offsetHeight;
      setSpacerHeight(headerHeightRef.current);
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsFixed(scrollTop > offsetTopRef.current + headerHeightRef.current);
      setIsSmall(scrollTop > smallScrollThreshold);
    };

    const handleResize = () => {
      measure();
      handleScroll();
    };

    measure();
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("load", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("load", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [smallScrollThreshold]);

  const headerClassName = `header-lower${isFixed ? " is-fixed" : ""}${isSmall ? " is-small" : ""}`;

  return {
    navRef,
    isFixed,
    isSmall,
    spacerHeight,
    headerClassName,
  };
}
