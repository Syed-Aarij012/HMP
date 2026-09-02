import PartnersSlider from "@/components/common/PartnersSlider";

function OurPartners() {
  return (
    <>
      <section className="flat-brand tf-section3">
        <div className="container">
          <div className="heading-section">
            <h2 className="heading-tittle">Our partners</h2>
            <p className="text-color-2">
              HMP is a platform trusted and chosen by over 2,000 partners
            </p>
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
