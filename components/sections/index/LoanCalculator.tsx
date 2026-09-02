import LoanCalculatorForm from "./LoanCalculatorForm";

function LoanCalculator() {
  return (
    <>
      <section className="loan-calculator inner-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="loan-calculator-form w-560 fl-right wow fadeInRight">
                <div className="box-title">
                  <h2 className="heading-tittle title-ct">
                    Auto Loan Calculator
                  </h2>
                  <p className="fs-14 text-color-2">
                    Use our calculator to estimate your monthly car payments.
                  </p>
                </div>
                <div id="comments" className="comments">
                  <div className="respond-comment">
                    <LoanCalculatorForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoanCalculator;
