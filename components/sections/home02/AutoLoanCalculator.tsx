import AutoLoanCalculatorForm from "./AutoLoanCalculatorForm";

function AutoLoanCalculator() {
  return (
    <>
      <section className="loan-calculator inner-2">
        <div className="container">
          <div className="loan-calculator-form w-560 wow fadeInLeft">
            <div className="box-title">
              <h2 className="title-ct heading-tittle">Auto Loan Calculator</h2>
              <p className="fs-14 fw-4">
                Use our calculator to estimate your monthly car payments.
              </p>
            </div>
            <div id="comments" className="comments">
              <div className="respond-comment">
                <AutoLoanCalculatorForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AutoLoanCalculator;
