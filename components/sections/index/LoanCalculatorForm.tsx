"use client";

import NiceSelect from "@/components/common/NiceSelect";
import {
  LOAN_PERIOD_OPTIONS,
  LOAN_TERMS_OPTIONS,
} from "@/data/niceSelectOptions";

export default function LoanCalculatorForm() {
  return (
    <form
      id="loan-calculator"
      className="comment-form form-submit"
      action="#"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <fieldset className="name-wrap">
        <label className="font-1 fs-14 fw-7">Total Price</label>
        <input
          type="text"
          id="total_price"
          className="tb-my-input format-currency"
          name="total_price"
          placeholder="$"
          required
        />
      </fieldset>
      <div className="grid-sw-2">
        <fieldset className="email-wrap style-text">
          <label className="font-1 fs-14 fw-7">Down payment</label>
          <input
            type="text"
            id="down_payment"
            className="tb-my-input format-percent"
            name="down_payment"
            placeholder="0%"
            required
          />
        </fieldset>
        <fieldset className="phone-wrap style-text">
          <label className="font-1 fs-14 fw-7">Terms</label>
          <NiceSelect
            options={LOAN_TERMS_OPTIONS}
            defaultValue={1}
            className="relative"
            listClassName="style"
            id="terms-select"
          />
        </fieldset>
      </div>
      <div className="grid-sw-2">
        <fieldset className="email-wrap style-text">
          <label className="font-1 fs-14 fw-7">Interest rate</label>
          <input
            type="text"
            id="interest_rate"
            className="tb-my-input format-percent"
            name="interest_rate"
            placeholder="0%"
            required
          />
        </fieldset>
        <fieldset className="phone-wrap style-text">
          <label className="font-1 fs-14 fw-7">Terms (Months)</label>
          <NiceSelect
            options={LOAN_PERIOD_OPTIONS}
            defaultValue={1}
            className="relative"
            listClassName="style"
            id="period-select"
          />
        </fieldset>
      </div>
      <div className="list-total">
        <ul>
          <li className="flex-three">
            <div className="title-total fs-16 fw-7 lh-20 text-color-2 font">
              Down payment amount
            </div>
            <div
              id="res_down_payment"
              className="fs-16 fw-5 lh-20 text-color-2 font"
            >
              $0
            </div>
          </li>
          <li className="flex-three">
            <div className="title-total fs-16 fw-7 lh-20 text-color-2 font">
              Amount financed
            </div>
            <div
              id="res_amount_financed"
              className="fs-16 fw-5 lh-20 text-color-2 font"
            >
              $0.00
            </div>
          </li>
          <li className="flex-three">
            <div className="title-total fs-16 fw-7 lh-20 text-color-3 font">
              Monthly payment
            </div>
            <div
              id="res_monthly_payment"
              className="fs-16 fw-5 lh-20 text-color-3 font"
            >
              $0.00
            </div>
          </li>
        </ul>
      </div>
      <div className="button-boxs">
        <button className="sc-button" id="submit-loan" name="submit" type="submit">
          <span>Apply for a loan</span>
        </button>
      </div>
    </form>
  );
}
