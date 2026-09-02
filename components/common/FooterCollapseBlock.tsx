"use client";

import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
} from "react";
import { resetSlideToggleStyles, slideToggle } from "@/lib/slideToggle";

const MOBILE_COLLAPSE_QUERY = "(max-width: 575px)";

type FooterCollapseBlockProps = {
  id?: string;
  className?: string;
  desktopHeading: ReactNode;
  mobileHeading: ReactNode;
  desktopHeadingClassName?: string;
  mobileHeadingClassName?: string;
  contentClassName?: string;
  contentTag?: ElementType;
  children: ReactNode;
  afterContent?: ReactNode;
};

export default function FooterCollapseBlock({
  id,
  className = "",
  desktopHeading,
  mobileHeading,
  desktopHeadingClassName = "footer-heading-desktop",
  mobileHeadingClassName = "footer-heading-mobie",
  contentClassName = "tf-collapse-content",
  contentTag: ContentTag = "div",
  children,
  afterContent,
}: FooterCollapseBlockProps) {
  const contentRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_COLLAPSE_QUERY);

    const handleChange = () => {
      if (!mediaQuery.matches) {
        setIsOpen(false);
        const content = contentRef.current;
        if (content) {
          resetSlideToggleStyles(content);
        }
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const handleMobileHeadingClick = (event: MouseEvent | KeyboardEvent) => {
    const mediaQuery = window.matchMedia(MOBILE_COLLAPSE_QUERY);
    if (!mediaQuery.matches) {
      return;
    }

    event.preventDefault();
    const content = contentRef.current;
    if (!content) {
      return;
    }

    setIsOpen((open) => !open);
    slideToggle(content);
  };

  const blockClassName = ["footer-col-block", isOpen ? "open" : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div id={id} className={blockClassName}>
      <div className={desktopHeadingClassName}>{desktopHeading}</div>
      <div
        className={mobileHeadingClassName}
        role="button"
        tabIndex={0}
        onClick={handleMobileHeadingClick}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            handleMobileHeadingClick(event);
          }
        }}
      >
        {mobileHeading}
      </div>
      <ContentTag ref={contentRef} className={contentClassName}>
        {children}
      </ContentTag>
      {afterContent}
    </div>
  );
}
