"use client";

export default function ContactDealerForm() {
  return (
    <form
      action=""
      className="form-send-mess"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <div className="form-group">
        <label htmlFor="listing_title">Message (Optional)</label>
        <input
          type="text"
          className="form-control"
          name="listing_title"
          placeholder="Choose"
          defaultValue=""
        />
      </div>
      <div className="form-group">
        <label htmlFor="listing_title">Your name</label>
        <input
          type="text"
          className="form-control"
          name="listing_title"
          placeholder="Choose"
          defaultValue=""
        />
      </div>
      <div className="form-group">
        <label htmlFor="listing_title">Email</label>
        <input
          type="email"
          className="form-control"
          name="listing_title"
          placeholder="Choose"
          defaultValue=""
        />
      </div>
      <div className="form-group">
        <label htmlFor="listing_title">Postcode</label>
        <input
          type="text"
          className="form-control"
          name="listing_title"
          placeholder="Choose"
          defaultValue=""
        />
      </div>
      <div className="form-group tf-amenities bg-white">
        <label className="flex-three">
          <input name="newsletter" type="checkbox" />
          <span className="btn-checkbox" />
          <span>Fill in this form for me next time</span>
        </label>
      </div>
      <div className="form-group">
        <p className="fs-12">
          By proceeding, you agree to carsales network&apos;s T&amp;Cs and Privacy
          Policy. See Personal Information Collection Statement.
        </p>
      </div>
      <div className="button-boxs">
        <button className="sc-button" name="submit" type="submit">
          <span>Send message</span>
        </button>
      </div>
    </form>
  );
}
