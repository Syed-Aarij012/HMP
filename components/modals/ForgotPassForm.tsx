"use client";

export default function ForgotPassForm() {
  return (
    <form
      method="post"
      className="comment-form form-submit"
      action="#"
      acceptCharset="utf-8"
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <fieldset className="t">
        <label className="fw-6">Email address</label>
        <input
          type="email"
          className="tb-my-input"
          name="email"
          placeholder="e.g john doe"
        />
      </fieldset>
      <button className="sc-button" name="submit" type="submit">
        <span>Reset Password</span>
      </button>
      <a
        className="sc-button back-to"
        data-bs-toggle="modal"
        data-bs-target="#popup_bid"
        data-bs-dismiss="modal"
      >
        <i className="icon-carus-arrowright" />
        <span>Back to Login</span>
      </a>
    </form>
  );
}
