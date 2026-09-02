"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";

type HeaderSearchContextValue = {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
};

const HeaderSearchContext = createContext<HeaderSearchContextValue | null>(null);

function useHeaderSearch() {
  const context = useContext(HeaderSearchContext);
  if (!context) {
    throw new Error("useHeaderSearch must be used within HeaderSearchProvider");
  }
  return context;
}

export function HeaderSearchProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((open) => !open), []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, close]);

  return (
    <HeaderSearchContext.Provider value={{ isOpen, toggle, close }}>
      {children}
      <HeaderSearchOverlay />
    </HeaderSearchContext.Provider>
  );
}

type HeaderSearchTriggerProps = {
  className?: string;
  iconClassName?: string;
};

export function HeaderSearchTrigger({
  className = "",
  iconClassName = "search-icon fs-20",
}: HeaderSearchTriggerProps) {
  const { isOpen, toggle } = useHeaderSearch();

  return (
    <a
      href="#"
      className={`header-search-icon flex items-center justify-center${isOpen ? " opened" : ""}${className ? ` ${className}` : ""}`}
      onClick={(event) => {
        event.preventDefault();
        toggle();
      }}
      aria-expanded={isOpen}
      aria-label="Search"
    >
      <i className={`icon-carus-search ${iconClassName}`} />
    </a>
  );
}

function HeaderSearchOverlay() {
  const { isOpen, close } = useHeaderSearch();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <div className={`wd-find-selects${isOpen ? " opened" : ""}`}>
      <form
        method="post"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div className="form-group-1 search-form relative">
          <input
            ref={inputRef}
            type="search"
            className="search-field"
            id="search-terms"
            placeholder="Search..."
            defaultValue=""
            name="s"
            title="Search for"
            required
          />
          <button type="submit" className="btn-search">
            <i className="icon-carus-search" />
          </button>
        </div>
      </form>
      <i
        className="icon-carus-close icon-close"
        onClick={close}
        role="button"
        aria-label="Close search"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            close();
          }
        }}
      />
    </div>
  );
}
