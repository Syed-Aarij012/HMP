import PartnersSlider from "@/components/common/PartnersSlider";

function OurPartners() {
  return (
    <>
      <section className="flat-brand tf-section3">
        <div className="container">
          <div className="heading-section">
            <div className="heading-section center mb-50">
              <h2 className="heading-tittle">Our partners</h2>
              <p className="fs-16 fw-4 text-color-2">
                HMP is a platform trusted and chosen by over 2,000 partners
              </p>
            </div>
          </div>
          <div className="fade-edge">
            <PartnersSlider />
          </div>
        </div>
      </section>
    </>
  );
}

export default OurPartners;
