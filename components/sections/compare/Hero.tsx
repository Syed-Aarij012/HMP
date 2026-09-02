import Link from "next/link";

function Hero() {
  return (
    <>
      <section className="flat-title style2 mb-78">
        <div className="container">
          <div className="title-inner">
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
