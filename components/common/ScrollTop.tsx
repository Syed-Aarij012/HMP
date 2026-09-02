"use client";

import { useCallback, useEffect, useState, type CSSProperties } from "react";

export default function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [progressAngle, setProgressAngle] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setProgressAngle((scrollPercent / 100) * 360);
      setIsVisible(scrollTop > 100);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <button
      id="goTop"
      type="button"
      className={isVisible ? "show" : undefined}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <span
        className="border-progress"
        style={
          { "--progress-angle": `${progressAngle}deg` } as CSSProperties
        }
      />
      <span className="icon-carus-up" aria-hidden="true" />
    </button>
  );
}
