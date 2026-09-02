export type PaginationPage = number | "ellipsis";

export function getPaginationPages(
  currentPage: number,
  totalPages: number,
  siblingCount = 1,
): PaginationPage[] {
  if (totalPages <= 0) {
    return [];
  }

  if (totalPages === 1) {
    return [1];
  }

  const pages = new Set<number>([1, totalPages]);

  for (
    let page = currentPage - siblingCount;
    page <= currentPage + siblingCount;
    page += 1
  ) {
    if (page >= 1 && page <= totalPages) {
      pages.add(page);
    }
  }

  const sortedPages = Array.from(pages).sort((a, b) => a - b);
  const result: PaginationPage[] = [];
  let previousPage: number | undefined;

  for (const page of sortedPages) {
    if (previousPage !== undefined && page - previousPage > 1) {
      result.push("ellipsis");
    }

    result.push(page);
    previousPage = page;
  }

  return result;
}
