import type { Dealer } from "@/types/dealers";

const DEALER_NAMES = [
  "Autodeal Select",
  "Downtown Auto Group",
  "Premium Motors",
  "Elite Auto Group",
  "City Drive Center",
  "Summit Car Sales",
  "Horizon Motors",
  "Metro Auto Hub",
  "Northline Dealers",
  "Pacific Car Center",
  "Valley Auto Select",
  "Lakeview Motors",
  "Capital Car Group",
  "Bridgeport Auto",
  "Riverside Select",
  "Oakwood Motors",
] as const;

const STATES = [
  "Maine",
  "Kentucky",
  "California",
  "Texas",
  "Florida",
  "Georgia",
  "Ohio",
  "Arizona",
  "Colorado",
  "Washington",
  "Virginia",
  "Nevada",
  "Oregon",
  "Michigan",
  "Illinois",
  "Pennsylvania",
] as const;

const BRANDS = [
  "Toyota",
  "Ford",
  "Honda",
  "Mercedes-Benz",
  "BMW",
  "Audi",
  "Nissan",
  "Hyundai",
  "Mazda",
  "Volkswagen",
  "Subaru",
  "Kia",
  "Chevrolet",
  "Jeep",
  "Lexus",
  "Porsche",
] as const;

const ADDRESSES = [
  "8502 Preston Rd. Inglewood, Maine 98380",
  "4517 Washington Ave. Manchester, Kentucky 39495",
  "2118 Thornridge Cir. Syracuse, California 35624",
  "3891 Ranchview Dr. Richardson, Texas 62639",
  "4140 Parker Rd. Allentown, Florida 31134",
  "6391 Elgin St. Celina, Georgia 10299",
  "8502 Preston Rd. Inglewood, Ohio 98380",
  "2715 Ash Dr. San Jose, Arizona 83475",
  "2464 Royal Ln. Mesa, Colorado 45463",
  "4517 Washington Ave. Manchester, Washington 39495",
  "3891 Ranchview Dr. Richardson, Virginia 62639",
  "2118 Thornridge Cir. Syracuse, Nevada 35624",
  "6391 Elgin St. Celina, Oregon 10299",
  "4140 Parker Rd. Allentown, Michigan 31134",
  "8502 Preston Rd. Inglewood, Illinois 98380",
  "2715 Ash Dr. San Jose, Pennsylvania 83475",
] as const;

export const dealers: Dealer[] = Array.from({ length: 16 }, (_, index) => {
  const id = index + 1;

  return {
    id,
    name: DEALER_NAMES[index],
    image: `/assets/images/section/dealer-list${id}.webp`,
    logo: "/assets/images/section/dealer-list.webp",
    reviewCount: 1200 + id * 105,
    rating: 3 + (id % 3) * 0.5,
    phone: `(217) 555-0${String(100 + id).slice(-3)}`,
    address: ADDRESSES[index],
    state: STATES[index],
    brand: BRANDS[index],
    dateAdded: `2025-${String(((index % 12) + 1)).padStart(2, "0")}-${String(((index % 27) + 1)).padStart(2, "0")}`,
  };
});

export const dealerStates = [...new Set(dealers.map((dealer) => dealer.state))].sort();
export const dealerBrands = [...new Set(dealers.map((dealer) => dealer.brand))].sort();

export function getDealerById(id: number): Dealer | undefined {
  return dealers.find((dealer) => dealer.id === id);
}

export function getDealerDetailTitle(id: number): string {
  return getDealerById(id)?.name ?? "Dealer Detail";
}
