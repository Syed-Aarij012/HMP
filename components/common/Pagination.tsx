"use client";

import { useState } from "react";
import { getPaginationPages } from "@/lib/pagination";

type PaginationProps = {
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
  variant?: "themesflat" | "tfcl";
  className?: string;
  listClassName?: string;
  styleDealer?: boolean;
};

export default function Pagination({
  currentPage: controlledPage,
  totalPages = 10,
  onPageChange,
  variant = "themesflat",
  className = "",
  listClassName = "",
  styleDealer = false,
}: PaginationProps) {
  const [uncontrolledPage, setUncontrolledPage] = useState(3);
  const isControlled = controlledPage !== undefined;
  const currentPage = isControlled ? controlledPage : uncontrolledPage;
  const pages = getPaginationPages(currentPage, totalPages);

  if (totalPages <= 1) {
    return null;
  }

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) {
      return;
    }

    if (!isControlled) {
      setUncontrolledPage(page);
    }

    onPageChange?.(page);
  };

  const handleClick =
    (page: number) => (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      handlePageChange(page);
    };

  const renderPageItems = () =>
    pages.map((page, index) => {
      if (page === "ellipsis") {
        if (variant === "tfcl") {
          return (
            <span key={`ellipsis-${index}`} className="page-numbers">
              ...
            </span>
          );
        }

        return (
          <li key={`ellipsis-${index}`}>
            <span className="page-numbers">...</span>
          </li>
        );
      }

      const isCurrent = page === currentPage;
      const pageClassName = `page-numbers${isCurrent ? " current" : ""}`;

      if (variant === "tfcl") {
        return (
          <a
            key={page}
            href="#"
            className={pageClassName}
            onClick={handleClick(page)}
            aria-current={isCurrent ? "page" : undefined}
          >
            {page}
          </a>
        );
      }

      return (
        <li key={page}>
          <a
            href="#"
            className={pageClassName}
            onClick={handleClick(page)}
            aria-current={isCurrent ? "page" : undefined}
          >
            {page}
          </a>
        </li>
      );
    });

  if (variant === "tfcl") {
    const wrapperClassName = [
      "tfcl-pagination",
      "paging-navigation",
      "clearfix",
      styleDealer ? "style-dealer" : "",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className={wrapperClassName}>
        <a
          href="#"
          className="prev page-numbers"
          onClick={handleClick(currentPage - 1)}
          aria-disabled={currentPage === 1}
        >
          <i className="far fa-angle-left" />
        </a>
        {renderPageItems()}
        <a
          href="#"
          className="next page-numbers"
          onClick={handleClick(currentPage + 1)}
          aria-disabled={currentPage === totalPages}
        >
          <i className="far fa-angle-right" />
        </a>
      </div>
    );
  }

  const wrapperClassName = ["themesflat-pagination", "clearfix", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={wrapperClassName}>
      <ul className={listClassName || undefined}>
        <li>
          <a
            href="#"
            className="page-numbers style"
            onClick={handleClick(currentPage - 1)}
            aria-disabled={currentPage === 1}
          >
            <i className="far fa-angle-left" />
          </a>
        </li>
        {renderPageItems()}
        <li>
          <a
            href="#"
            className="page-numbers style"
            onClick={handleClick(currentPage + 1)}
            aria-disabled={currentPage === totalPages}
          >
            <i className="far fa-angle-right" />
          </a>
        </li>
      </ul>
    </div>
  );
}
