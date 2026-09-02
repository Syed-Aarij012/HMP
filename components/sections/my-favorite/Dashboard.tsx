"use client";

import { useMemo, useState } from "react";
import Pagination from "@/components/common/Pagination";
import FavoriteListingCard from "@/components/common/FavoriteListingCard";
import DashboardToggle from "@/components/dashboard/DashboardToggle";
import NiceSelect from "@/components/common/NiceSelect";
import { useListingActions } from "@/components/common/ListingActionsContext";
import { DASHBOARD_SORT_OPTIONS } from "@/data/niceSelectOptions";

const FAVORITES_PER_PAGE = 8;

function Dashboard() {
  const { favoriteCars } = useListingActions();
  const [sortBy, setSortBy] = useState<string | number>("new");
  const [currentPage, setCurrentPage] = useState(1);

  const sortedFavorites = useMemo(() => {
    const sorted = [...favoriteCars];

    sorted.sort((a, b) =>
      sortBy === "old" ? a.id - b.id : b.id - a.id,
    );

    return sorted;
  }, [favoriteCars, sortBy]);

  const totalPages = Math.max(
    1,
    Math.ceil(sortedFavorites.length / FAVORITES_PER_PAGE),
  );

  const sortKey = String(sortBy);
  const [prevSortKey, setPrevSortKey] = useState(sortKey);

  if (sortKey !== prevSortKey) {
    setPrevSortKey(sortKey);
    setCurrentPage(1);
  }

  const effectivePage = Math.min(currentPage, totalPages);

  const visibleFavorites = useMemo(() => {
    const start = (effectivePage - 1) * FAVORITES_PER_PAGE;
    return sortedFavorites.slice(start, start + FAVORITES_PER_PAGE);
  }, [sortedFavorites, effectivePage]);

  return (
    <>
      <div id="themesflat-content">
        <DashboardToggle />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="content-area">
                <main id="main" className="main-content">
                  <div className="tfcl-dashboard">
                    <h1 className="admin-title mb-3">My favorite</h1>
                    <div className="tfcl-favorite-listing">
                      <div className="controller-sorting mb-3">
                        <span className="result-text fw-7 text-color-2">
                          <b>{sortedFavorites.length}</b> Car listing
                        </span>
                        <div className="sorting-input">
                          <div className="label">Sort By</div>
                          <NiceSelect
                            options={DASHBOARD_SORT_OPTIONS}
                            value={sortBy}
                            onChange={setSortBy}
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="wrap-favorite-listing">
                        {visibleFavorites.length > 0 ? (
                          visibleFavorites.map((car) => (
                            <FavoriteListingCard key={car.id} car={car} />
                          ))
                        ) : (
                          <p>No favorite listings yet.</p>
                        )}
                      </div>
                      {sortedFavorites.length > FAVORITES_PER_PAGE ? (
                        <Pagination
                          variant="tfcl"
                          totalPages={totalPages}
                          currentPage={effectivePage}
                          onPageChange={setCurrentPage}
                        />
                      ) : null}
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
