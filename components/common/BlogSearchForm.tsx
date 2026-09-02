"use client";

export default function BlogSearchForm() {
  return (
    <form
      method="post"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <div className="wd-find-select">
        <h4 className="widget-title font-2">Search blog</h4>
        <div className="form-group-1 input-form form-style2 relative">
          <label className="fs-18 fw-5">Search</label>
          <input
            type="search"
            className="input-field"
            placeholder="Choose"
            defaultValue=""
            name="s"
            title="Search for"
            required
          />
          <input
            type="submit"
            className="submit-field"
            defaultValue="Search"
          />
        </div>
      </div>
    </form>
  );
}
