"use client";

export default function LoginForm() {
  return (
    <form
      className="comment-form form-submit"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <fieldset className="">
        <label className="fw-5">Your name</label>
        <input
          type="text"
          id="text"
          className="tb-my-input"
          name="text"
          placeholder="e.g john doe"
        />
      </fieldset>
      <fieldset className="style-wrap">
        <label className="fw-5">Password</label>
        <input
          type="password"
          className="input-form password-input"
          placeholder="Your password"
        />
      </fieldset>
      <div className="flex-two flex-wrap gap-30 remember-me">
        <label className="flex-three fw-6 mb-0">
          <input name="newsletter" type="checkbox" />
          <span className="btn-checkbox" />
          <span className="text-p font-2">Remember me</span>
        </label>
        <div className="title-forgot">
          <a
            className="text-p"
            data-bs-toggle="modal"
            data-bs-target="#popup_bid3"
            data-bs-dismiss="modal"
          >
            Forgot password?
          </a>
        </div>
      </div>
      <button className="sc-button" type="submit">
        <span>Login</span>
      </button>
    </form>
  );
}
