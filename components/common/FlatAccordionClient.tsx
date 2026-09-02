"use client";

import { useEffect } from "react";
import { slideToggle } from "@/lib/slideToggle";

export default function FlatAccordionClient() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const title = (event.target as HTMLElement).closest(
        ".flat-toggle .toggle-title",
      );
      if (!title) return;

      const content = title.nextElementSibling;
      if (!(content instanceof HTMLElement)) return;
      if (!content.classList.contains("toggle-content")) return;

      title.classList.toggle("active");
      slideToggle(content);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
