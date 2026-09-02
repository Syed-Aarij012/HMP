import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ComponentType } from "react";
import { allCars, getCarById, getCarDetailTitle } from "@/data/cars";
import { parseNumericRouteId } from "@/lib/routes";
import type { Car } from "@/types/cars";

type ListingDetailPageProps = {
  params: Promise<{ id: string }>;
};

export type ListingDetailSectionProps = {
  title: string;
  car: Car;
};

export function createListingDetailPageConfig(
  Hero: ComponentType,
  ListingDetail: ComponentType<ListingDetailSectionProps>,
) {
  function generateStaticParams() {
    return allCars.map((car) => ({ id: String(car.id) }));
  }

  async function generateMetadata({
    params,
  }: ListingDetailPageProps): Promise<Metadata> {
    const { id } = await params;
    const carId = parseNumericRouteId(id);

    if (carId === null) {
      return {
        title:
          "Listing Detail | HMP - Car Dealer, Rental & Listing",
      };
    }

    const title = getCarDetailTitle(carId);

    return {
      title: `${title} | HMP`,
      description: "HMP - Car Dealer, Rental & Listing",
    };
  }

  async function Page({ params }: ListingDetailPageProps) {
    const { id } = await params;
    const carId = parseNumericRouteId(id);

    if (carId === null || !getCarById(carId)) {
      notFound();
    }

    const car = getCarById(carId)!;
    const title = getCarDetailTitle(carId);

    return (
      <>
        <Hero />
        <ListingDetail title={title} car={car} />
      </>
    );
  }

  return { generateStaticParams, generateMetadata, default: Page };
}
