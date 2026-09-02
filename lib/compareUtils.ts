import { formatCarPrice } from "@/data/cars";
import type { Car } from "@/types/cars";
import type { ReactNode } from "react";

export function parseCompareIds(idsParam: string | null): number[] {
  if (!idsParam) {
    return [];
  }

  return [...new Set(
    idsParam
      .split(",")
      .map((value) => Number.parseInt(value.trim(), 10))
      .filter((id) => Number.isFinite(id) && id > 0),
  )];
}

export type CompareTableRowConfig = {
  label: string;
  getValue: (car: Car) => ReactNode;
};

export const compareOverviewRows: CompareTableRowConfig[] = [
  {
    label: "Price",
    getValue: (car) => formatCarPrice(car.price),
  },
  {
    label: "Fuel Type",
    getValue: (car) => car.fuel,
  },
  {
    label: "Kms Driven",
    getValue: (car) => `${car.mileage.toLocaleString()} Kms`,
  },
  {
    label: "Ownership",
    getValue: (car) =>
      car.filterOwnership
        ? `${car.filterOwnership.charAt(0).toUpperCase()}${car.filterOwnership.slice(1)}`
        : car.tag === "Used"
          ? "Used"
          : "1st Owner",
  },
  {
    label: "Registration Year",
    getValue: (car) => (car.filterYear ? String(car.filterYear) : "n/a"),
  },
  {
    label: "Transmission",
    getValue: (car) => car.transmission,
  },
  {
    label: "Body Type",
    getValue: (car) =>
      car.bodyType?.join(", ") ??
      car.filterBodyType?.join(", ") ??
      "n/a",
  },
  {
    label: "Seats",
    getValue: (car) =>
      car.filterSeats ? `${car.filterSeats} Seats` : "n/a",
  },
  {
    label: "Condition",
    getValue: (car) => car.tag,
  },
];
