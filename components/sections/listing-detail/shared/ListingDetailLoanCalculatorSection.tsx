import ListingDetailLoanCalculatorForm from "./ListingDetailLoanCalculatorForm";

export default function ListingDetailLoanCalculatorSection() {
  return (
    <>
      <div className="listing-line " />
      <div className="listing-calculator loan-calculator-form">
        <div className="box-title">
          <h2 className="title-ct">Auto Loan Calculator</h2>
          <p>Use our calculator to estimate your monthly car payments.</p>
        </div>
        <div id="comments" className="comments">
          <div className="respond-comment">
            <ListingDetailLoanCalculatorForm />
          </div>
        </div>
      </div>
    </>
  );
}
