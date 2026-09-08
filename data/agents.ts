import type { Agent } from "@/types/agents";

const SALE_AGENT_NAMES = [
  "Arlene McCoy",
  "Jenny Wilson",
  "Marvin McKinney",
  "Eleanor Pena",
  "Devon Lane",
  "Jerome Bell",
  "Kathryn Murphy",
  "Ronald Richards",
  "Savannah Nguyen",
  "Cody Fisher",
  "Darlene Robertson",
  "Wade Warren",
] as const;

const SALE_AGENT_ROLES = [
  "Senior Sales Agent",
  "Sales Manager",
  "Sales Agent",
  "Leasing Consultant",
  "Client Relations Agent",
  "Sales Agent",
] as const;

const SALE_AGENT_BIOS = [
  "Focused on matching every buyer with the right car, fast and fair pricing every time.",
  "Years of dealership experience helping first-time and returning buyers find their perfect match.",
  "Known for clear communication and a no-pressure approach to every sale.",
  "Specializes in guiding buyers through financing options and trade-in value.",
] as const;

const SALE_AGENT_ADDRESSES = [
  "8502 Preston Rd. Inglewood, Maine 98380",
  "4517 Washington Ave. Manchester, Kentucky 39495",
  "2118 Thornridge Cir. Syracuse, California 35624",
  "3891 Ranchview Dr. Richardson, Texas 62639",
] as const;

export const saleAgents: Agent[] = Array.from({ length: 12 }, (_, index) => {
  const id = 101 + index;
  const imageIndex = 11 + index;

  return {
    id,
    image: `/assets/images/agent/agent-${imageIndex}.jpg`,
    name: SALE_AGENT_NAMES[index],
    role: SALE_AGENT_ROLES[index % SALE_AGENT_ROLES.length],
    phone: `(209) 555-${String(100 + id).slice(-4)}`,
    email: `${SALE_AGENT_NAMES[index].toLowerCase().replace(/\s+/g, "")}@hmp.com`,
    rating: 4.5 + (id % 3) * 0.2,
    bio: SALE_AGENT_BIOS[index % SALE_AGENT_BIOS.length],
    address: SALE_AGENT_ADDRESSES[index % SALE_AGENT_ADDRESSES.length],
    dealerId: (id % 16) + 1,
  };
});

export const home05Agents: Agent[] = [
  {
    id: 1,
    image: "/assets/images/agent/agent-1.jpg",
    name: "Amy Cole",
    role: "Agent",
    phone: "0123456789",
    email: "hmp@example.com",
  },
  {
    id: 2,
    image: "/assets/images/agent/agent-2.jpg",
    name: "Kevin Baker",
    role: "Agent",
    phone: "0123456789",
    email: "hmp@example.com",
  },
  {
    id: 3,
    image: "/assets/images/agent/agent-3.jpg",
    name: "Teresa Ward",
    role: "Agent",
    phone: "0123456789",
    email: "hmp@example.com",
  },
  {
    id: 4,
    image: "/assets/images/agent/agent-4.jpg",
    name: "Grace Ford",
    role: "Agent",
    phone: "0123456789",
    email: "hmp@example.com",
  },
  {
    id: 5,
    image: "/assets/images/agent/agent-5.jpg",
    name: "Nina Fox",
    role: "Agent",
    phone: "0123456789",
    email: "hmp@example.com",
  },
  {
    id: 6,
    image: "/assets/images/agent/agent-6.jpg",
    name: "Oscar Reed",
    role: "Agent",
    phone: "0123456789",
    email: "hmp@example.com",
  },
];

export const allAgents: Agent[] = [...saleAgents, ...home05Agents];

export function getAgentById(id: number): Agent | undefined {
  return allAgents.find((agent) => agent.id === id);
}

export function getAgentDetailTitle(id: number): string {
  return getAgentById(id)?.name ?? "Sale Agent";
}
