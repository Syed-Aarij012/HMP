import { createListingDetailPageConfig } from "@/lib/listing-detail-page";
import Hero from "@/components/sections/listing-detail-v5/Hero";
import ListingDetail from "@/components/sections/listing-detail-v5/ListingDetail";

const pageConfig = createListingDetailPageConfig(Hero, ListingDetail);

export const generateStaticParams = pageConfig.generateStaticParams;
export const generateMetadata = pageConfig.generateMetadata;
export default pageConfig.default;
