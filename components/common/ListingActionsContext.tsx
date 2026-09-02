"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  startTransition,
  type ReactNode,
} from "react";
import { favoriteCars, getCarById } from "@/data/cars";
import type { Car } from "@/types/cars";

const COMPARE_STORAGE_KEY = "hmp-compare-ids";
const FAVORITE_STORAGE_KEY = "hmp-favorite-ids";

type ListingActionsContextValue = {
  compareIds: number[];
  favoriteIds: number[];
  compareCars: Car[];
  favoriteCars: Car[];
  isInCompare: (id: number) => boolean;
  isFavorite: (id: number) => boolean;
  addToCompare: (car: Car) => void;
  toggleFavorite: (car: Car) => void;
  removeFromCompare: (id: number) => void;
  removeFromFavorite: (id: number) => void;
  openComparePanel: () => void;
  syncCompareIds: (ids: number[]) => void;
};

const ListingActionsContext = createContext<ListingActionsContextValue | null>(
  null,
);

function readStoredIds(key: string, fallback: number[] = []): number[] {
  if (typeof window === "undefined") {
    return fallback;
  }

  try {
    const raw = window.localStorage.getItem(key);
    if (raw === null) {
      return fallback;
    }

    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) {
      return fallback;
    }

    return parsed.filter((id): id is number => typeof id === "number");
  } catch {
    return fallback;
  }
}

function writeStoredIds(key: string, ids: number[]) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(key, JSON.stringify(ids));
}

function getDefaultFavoriteIds() {
  return favoriteCars.map((car) => car.id);
}

export function useListingActions() {
  const context = useContext(ListingActionsContext);
  if (!context) {
    throw new Error(
      "useListingActions must be used within ListingActionsProvider",
    );
  }
  return context;
}

type ListingActionsProviderProps = {
  children: ReactNode;
};

export function ListingActionsProvider({
  children,
}: ListingActionsProviderProps) {
  const [compareIds, setCompareIds] = useState<number[]>([]);
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);
  const [isStorageReady, setIsStorageReady] = useState(false);

  useEffect(() => {
    startTransition(() => {
      setCompareIds(readStoredIds(COMPARE_STORAGE_KEY));
      setFavoriteIds(
        readStoredIds(FAVORITE_STORAGE_KEY, getDefaultFavoriteIds()),
      );
      setIsStorageReady(true);
    });
  }, []);

  useEffect(() => {
    if (!isStorageReady) {
      return;
    }

    writeStoredIds(COMPARE_STORAGE_KEY, compareIds);
  }, [compareIds, isStorageReady]);

  useEffect(() => {
    if (!isStorageReady) {
      return;
    }

    writeStoredIds(FAVORITE_STORAGE_KEY, favoriteIds);
  }, [favoriteIds, isStorageReady]);

  const compareCars = useMemo(
    () =>
      compareIds
        .map((id) => getCarById(id))
        .filter((car): car is Car => car !== undefined),
    [compareIds],
  );

  const resolvedFavoriteCars = useMemo(
    () =>
      favoriteIds
        .map((id) => getCarById(id))
        .filter((car): car is Car => car !== undefined),
    [favoriteIds],
  );

  const isInCompare = useCallback(
    (id: number) => compareIds.includes(id),
    [compareIds],
  );

  const isFavorite = useCallback(
    (id: number) => favoriteIds.includes(id),
    [favoriteIds],
  );

  const openComparePanel = useCallback(() => {
    const element = document.getElementById("offcanvasBottom");
    if (!element) {
      return;
    }

    void import("bootstrap/js/dist/offcanvas").then(
      ({ default: Offcanvas }) => {
        Offcanvas.getOrCreateInstance(element).show();
      },
    );
  }, []);

  const removeFromCompare = useCallback((id: number) => {
    setCompareIds((current) => current.filter((itemId) => itemId !== id));
  }, []);

  const removeFromFavorite = useCallback((id: number) => {
    setFavoriteIds((current) => current.filter((itemId) => itemId !== id));
  }, []);

  const syncCompareIds = useCallback((ids: number[]) => {
    setCompareIds([...new Set(ids)]);
  }, []);

  const addToCompare = useCallback((car: Car) => {
    setCompareIds((current) => {
      return [...new Set([car.id, ...current])];
    });
  }, []);

  const toggleFavorite = useCallback((car: Car) => {
    setFavoriteIds((current) =>
      current.includes(car.id)
        ? current.filter((id) => id !== car.id)
        : [...current, car.id],
    );
  }, []);

  const value = useMemo(
    () => ({
      compareIds,
      favoriteIds,
      compareCars,
      favoriteCars: resolvedFavoriteCars,
      isInCompare,
      isFavorite,
      addToCompare,
      toggleFavorite,
      removeFromCompare,
      removeFromFavorite,
      openComparePanel,
      syncCompareIds,
    }),
    [
      compareIds,
      favoriteIds,
      compareCars,
      resolvedFavoriteCars,
      isInCompare,
      isFavorite,
      addToCompare,
      toggleFavorite,
      removeFromCompare,
      removeFromFavorite,
      openComparePanel,
      syncCompareIds,
    ],
  );

  return (
    <ListingActionsContext.Provider value={value}>
      {children}
    </ListingActionsContext.Provider>
  );
}
