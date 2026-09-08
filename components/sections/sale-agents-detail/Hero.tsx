import Link from "next/link";
import type { Agent } from "@/types/agents";

type HeroProps = {
  agent: Agent;
};

function Hero({ agent }: HeroProps) {
  return (
    <>
      <section className="flat-title style1 mb-78 bg-3">
        <div className="container">
          <div className="title-inner">
            <h1 className="mb-12 font-2">{agent.name}</h1>
            <div className="title-group fs-14">
              <Link className="home text-color-3 fw-7" href={`/`}>
                Home
              </Link>
              <span className="fw-4">Used cars for sale</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
