import ContactForm from "./ContactForm";

function Contact() {
  return (
    <>
      <section className="tf-section3 flat-property">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-12">
              <div className="heading-section mb-50">
                <h2 className="heading-tittle">
                  Please fill out the contact form below and tell us about your
                  dream car.
                </h2>
                <p className="fs-18 fw-4 text-color-2">
                  We will get back to you as soon as we receive your request.
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
