import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ComponentType } from "react";
import { dealers, getDealerById, getDealerDetailTitle } from "@/data/dealers";
import { parseNumericRouteId } from "@/lib/routes";
import type { Dealer } from "@/types/dealers";

type DealerDetailPageProps = {
  params: Promise<{ id: string }>;
};

export type DealerDetailSectionProps = {
  dealer: Dealer;
};

export function createDealerDetailPageConfig(
  Hero: ComponentType<{ dealer: Dealer }>,
  DealerDetail: ComponentType<DealerDetailSectionProps>,
) {
  function generateStaticParams() {
    return dealers.map((dealer) => ({ id: String(dealer.id) }));
  }

  async function generateMetadata({
    params,
  }: DealerDetailPageProps): Promise<Metadata> {
    const { id } = await params;
    const dealerId = parseNumericRouteId(id);

    if (dealerId === null) {
      return {
        title: "Dealer Detail | HMP - Car Dealer, Rental & Listing",
      };
    }

    const title = getDealerDetailTitle(dealerId);

    return {
      title: `${title} | HMP`,
      description: "HMP - Car Dealer, Rental & Listing",
    };
  }

  async function Page({ params }: DealerDetailPageProps) {
    const { id } = await params;
    const dealerId = parseNumericRouteId(id);

    if (dealerId === null || !getDealerById(dealerId)) {
      notFound();
    }

    const dealer = getDealerById(dealerId)!;

    return (
      <>
        <Hero dealer={dealer} />
        <DealerDetail dealer={dealer} />
      </>
    );
  }

  return { generateStaticParams, generateMetadata, default: Page };
}
