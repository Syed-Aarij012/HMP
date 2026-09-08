import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ComponentType } from "react";
import { saleAgents, getAgentById, getAgentDetailTitle } from "@/data/agents";
import { parseNumericRouteId } from "@/lib/routes";
import type { Agent } from "@/types/agents";

type AgentDetailPageProps = {
  params: Promise<{ id: string }>;
};

export type AgentDetailSectionProps = {
  agent: Agent;
};

export function createAgentDetailPageConfig(
  Hero: ComponentType<{ agent: Agent }>,
  SaleAgentsDetail: ComponentType<AgentDetailSectionProps>,
) {
  function generateStaticParams() {
    return saleAgents.map((agent) => ({ id: String(agent.id) }));
  }

  async function generateMetadata({
    params,
  }: AgentDetailPageProps): Promise<Metadata> {
    const { id } = await params;
    const agentId = parseNumericRouteId(id);

    if (agentId === null) {
      return {
        title: "Sale Agents Detail | HMP - Car Dealer, Rental & Listing",
      };
    }

    const title = getAgentDetailTitle(agentId);

    return {
      title: `${title} | HMP`,
      description: "HMP - Car Dealer, Rental & Listing",
    };
  }

  async function Page({ params }: AgentDetailPageProps) {
    const { id } = await params;
    const agentId = parseNumericRouteId(id);

    if (agentId === null || !getAgentById(agentId)) {
      notFound();
    }

    const agent = getAgentById(agentId)!;

    return (
      <>
        <Hero agent={agent} />
        <SaleAgentsDetail agent={agent} />
      </>
    );
  }

  return { generateStaticParams, generateMetadata, default: Page };
}
