import PartnersSlider from "@/components/common/PartnersSlider";

function OurPartners() {
  return (
    <>
      <section className="flat-brand tf-section">
        <div className="container">
          <div className="heading-section center mb-50 wow fadeInUp">
            <h2 className="heading-tittle">Our partners</h2>
            <p>
              HMP is a platform trusted and chosen by over 2,000 partners
            </p>
          </div>
          <div className="fade-edge wow fadeInUp">
            <PartnersSlider />
          </div>
        </div>
      </section>
    </>
  );
}

export default OurPartners;
