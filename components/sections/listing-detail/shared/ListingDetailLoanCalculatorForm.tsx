"use client";

import NiceSelect from "@/components/common/NiceSelect";
import {
  LISTING_LOAN_PERIOD_OPTIONS,
  LISTING_LOAN_TERMS_OPTIONS,
} from "@/data/niceSelectOptions";

export default function ListingDetailLoanCalculatorForm() {
  return (
    <form
      method="post"
      id="loan-calculator"
      className="comment-form form-submit"
      action="#"
      acceptCharset="utf-8"
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <fieldset className="name-wrap">
        <label className="font-1 fs-14 fw-5">Total Price</label>
        <input
          type="number"
          className="tb-my-input"
          name="name"
          placeholder="$"
          required
        />
      </fieldset>
      <div className="grid-sw-2">
        <fieldset className="email-wrap style-text">
          <label className="font-1 fs-14 fw-5">Down payment</label>
          <input
            type="number"
            className="tb-my-input"
            name="number"
            placeholder="0%"
            required
          />
        </fieldset>
        <fieldset className="phone-wrap style-text">
          <label className="font-1 fs-14 fw-5">Terms</label>
          <NiceSelect
            options={LISTING_LOAN_TERMS_OPTIONS}
            defaultValue=""
            className="relative"
            listClassName="style"
          />
        </fieldset>
      </div>
      <div className="grid-sw-2">
        <fieldset className="email-wrap style-text">
          <label className="font-1 fs-14 fw-5">Interest rate</label>
          <input
            type="number"
            className="tb-my-input"
            name="number"
            placeholder="0%"
            required
          />
        </fieldset>
        <fieldset className="phone-wrap style-text">
          <label className="font-1 fs-14 fw-5">Terms</label>
          <NiceSelect
            options={LISTING_LOAN_PERIOD_OPTIONS}
            defaultValue=""
            className="relative"
            listClassName="style"
          />
        </fieldset>
      </div>
      <div className="list-total">
        <ul>
          <li className="flex-three">
            <div className="title-total fs-16 fw-5 lh-20 text-color-2 font">
              Down payment amount
            </div>
            <div className="fs-16 fw-5 lh-20 text-color-2 font">$0</div>
          </li>
          <li className="flex-three">
            <div className="title-total fs-16 fw-5 lh-20 text-color-2 font">
              Amount financed
            </div>
            <div className="fs-16 fw-5 lh-20 text-color-2 font">$600.00</div>
          </li>
          <li className="flex-three">
            <div className="title-total fs-16 fw-5 lh-20 text-color-3 font">
              Monthly payment
            </div>
            <div className="fs-16 fw-5 lh-20 text-color-3 font">$60.00</div>
          </li>
        </ul>
      </div>
      <div className="button-boxs">
        <button className="sc-button" name="submit" type="submit">
          <span>Apply for a loan</span>
        </button>
      </div>
    </form>
  );
}
