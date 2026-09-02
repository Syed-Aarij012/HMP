"use client";

import ScrollspySection from "@/components/common/ScrollspySection";
import ListingDetailDescriptionSection from "./ListingDetailDescriptionSection";
import ListingDetailOverviewSection from "./ListingDetailOverviewSection";
import ListingDetailFeaturesSection from "./ListingDetailFeaturesSection";
import ListingDetailLoanCalculatorSection from "./ListingDetailLoanCalculatorSection";
import ListingDetailLocationSection from "./ListingDetailLocationSection";
import ListingDetailSimilarCarsSection from "./ListingDetailSimilarCarsSection";
import ListingDetailReviewsSection from "./ListingDetailReviewsSection";

type ListingDetailScrollspySectionsProps = {
  showOverview?: boolean;
};

export default function ListingDetailScrollspySections({
  showOverview = true,
}: ListingDetailScrollspySectionsProps) {
  return (
    <>
      <ListingDetailDescriptionSection />
      {showOverview ? (
        <ScrollspySection id="scrollspyHeading1">
          <ListingDetailOverviewSection />
        </ScrollspySection>
      ) : null}
      <ScrollspySection id="scrollspyHeading2">
        <ListingDetailFeaturesSection />
      </ScrollspySection>
      <ScrollspySection id="scrollspyHeading3">
        <ListingDetailSimilarCarsSection />
      </ScrollspySection>
      <ScrollspySection id="scrollspyHeading4">
        <ListingDetailLoanCalculatorSection />
      </ScrollspySection>
      <ListingDetailLocationSection />
      <ScrollspySection id="scrollspyHeading5">
        <ListingDetailReviewsSection />
      </ScrollspySection>
    </>
  );
}
