import { createAgentDetailPageConfig } from "@/lib/agent-detail-page";
import Hero from "@/components/sections/sale-agents-detail/Hero";
import SaleAgentsDetail from "@/components/sections/sale-agents-detail/SaleAgentsDetail";

const pageConfig = createAgentDetailPageConfig(Hero, SaleAgentsDetail);

export const generateStaticParams = pageConfig.generateStaticParams;
export const generateMetadata = pageConfig.generateMetadata;
export default pageConfig.default;
