import { createDealerDetailPageConfig } from "@/lib/dealer-detail-page";
import Hero from "@/components/sections/dealer-detail/Hero";
import DealerDetail from "@/components/sections/dealer-detail/DealerDetail";

const pageConfig = createDealerDetailPageConfig(Hero, DealerDetail);

export const generateStaticParams = pageConfig.generateStaticParams;
export const generateMetadata = pageConfig.generateMetadata;
export default pageConfig.default;
