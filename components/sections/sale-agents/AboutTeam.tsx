import Link from "next/link";
import Image from "next/image";

function AboutTeam() {
  return (
    <>
      <section className="tf-section tf-about-team">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="heading-section">
                <Image
                  className="ls-is-cached lazyloaded"
                  data-src="/assets/images/logo/logo-about.svg"
                  src="/assets/images/logo/logo-about.svg"
                  alt="images"
                  width={165}
                  height={32}
                />
                <h2 className="heading-tittle fw-7">
                  Meet our best consultants, who will help you find your dream
                  car
                </h2>
                <p className="fs-16 fw-4 text-color-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse sit amet auctor dolor, quis gravida purus. Aliquam
                  gravida ipsum quis.
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="flex-three team-wrap-sec">
                <div className="grid-2 gap-48">
                  <div className="agent-item style2">
                    <div className="image">
                      <Link href={`/sale-agents-detail`} className="d-block w-100">
                        <Image
                          className="lazyload w-100 img-fluid"
                          data-src="/assets/images/agent/agent-7.jpg"
                          src="/assets/images/agent/agent-7.jpg"
                          alt="images"
                          width={675}
                          height={472}
                        />
                      </Link>
                      <ul className="social">
                        <li>
                          <a
                            href="https://www.facebook.com/"
                            className="icon-carus-facebook"
                          />
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/" className="icon-carus-in" />
                        </li>
                        <li>
                          <a href="https://x.com/" className="icon-carus-x" />
                        </li>
                      </ul>
                    </div>
                    <div className="content">
                      <div className="fs-18 fw-6 title text-color-2">
                        <Link href={`/sale-agents-detail`}>Arlene McCoy</Link>
                      </div>
                      <p className="sub-title fs-12 fw-4">CEO Themesflat</p>
                    </div>
                  </div>
                  <div className="agent-item style2">
                    <div className="image">
                      <Link href={`/sale-agents-detail`} className="d-block w-100">
                        <Image
                          className="lazyload w-100 img-fluid"
                          data-src="/assets/images/agent/agent-8.jpg"
                          src="/assets/images/agent/agent-8.jpg"
                          alt="images"
                          width={675}
                          height={472}
                        />
                      </Link>
                      <ul className="social">
                        <li>
                          <a
                            href="https://www.facebook.com/"
                            className="icon-carus-facebook"
                          />
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/" className="icon-carus-in" />
                        </li>
                        <li>
                          <a href="https://x.com/" className="icon-carus-x" />
                        </li>
                      </ul>
                    </div>
                    <div className="content">
                      <div className="fs-18 fw-6 title text-color-2">
                        <Link href={`/sale-agents-detail`}>Arlene McCoy</Link>
                      </div>
                      <p className="sub-title fs-12 fw-4">CEO Themesflat</p>
                    </div>
                  </div>
                  <div className="agent-item style2">
                    <div className="image">
                      <Link href={`/sale-agents-detail`} className="d-block w-100">
                        <Image
                          className="lazyload w-100 img-fluid"
                          data-src="/assets/images/agent/agent-9.jpg"
                          src="/assets/images/agent/agent-9.jpg"
                          alt="images"
                          width={675}
                          height={472}
                        />
                      </Link>
                      <ul className="social">
                        <li>
                          <a
                            href="https://www.facebook.com/"
                            className="icon-carus-facebook"
                          />
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/" className="icon-carus-in" />
                        </li>
                        <li>
                          <a href="https://x.com/" className="icon-carus-x" />
                        </li>
                      </ul>
                    </div>
                    <div className="content">
                      <div className="fs-18 fw-6 title text-color-2">
                        <Link href={`/sale-agents-detail`}>Arlene McCoy</Link>
                      </div>
                      <p className="sub-title fs-12 fw-4">CEO Themesflat</p>
                    </div>
                  </div>
                  <div className="agent-item style2">
                    <div className="image">
                      <Link href={`/sale-agents-detail`} className="d-block w-100">
                        <Image
                          className="lazyload w-100 img-fluid"
                          data-src="/assets/images/agent/agent-10.jpg"
                          src="/assets/images/agent/agent-10.jpg"
                          alt="images"
                          width={675}
                          height={472}
                        />
                      </Link>
                      <ul className="social">
                        <li>
                          <a
                            href="https://www.facebook.com/"
                            className="icon-carus-facebook"
                          />
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/" className="icon-carus-in" />
                        </li>
                        <li>
                          <a href="https://x.com/" className="icon-carus-x" />
                        </li>
                      </ul>
                    </div>
                    <div className="content">
                      <div className="fs-18 fw-6 title text-color-2">
                        <Link href={`/sale-agents-detail`}>Arlene McCoy</Link>
                      </div>
                      <p className="sub-title fs-12 fw-4">CEO Themesflat</p>
                    </div>
                  </div>
                </div>
                <Link href={`/sale-agents`} className="btn-join">
                  <span>Join our team</span>
                  <i className=" icon-carus-arright" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutTeam;
