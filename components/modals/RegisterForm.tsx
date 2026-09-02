"use client";

export default function RegisterForm() {
  return (
    <form
      className="comment-form form-submit"
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
      <div className="flex gap-30">
        <fieldset className="w-50">
          <label className="fw-6">Password</label>
          <input
            id="password-field"
            type="password"
            className="input-form password-input"
            placeholder="Your password"
          />
        </fieldset>
        <fieldset className="w-50">
          <label className="fw-6">Confirm password</label>
          <input
            id="password-field1"
            type="password"
            className="input-form password-input"
            placeholder="Confirm password"
          />
        </fieldset>
      </div>
      <div className="remember-me">
        <label className="flex-three fw-6 mb-0">
          <input name="newsletter" type="checkbox" />
          <span className="btn-checkbox" />
          <span className="text-p font-2">Remember me</span>
        </label>
      </div>
      <button className="sc-button" type="submit">
        <span>Sign Up</span>
      </button>
    </form>
  );
}
