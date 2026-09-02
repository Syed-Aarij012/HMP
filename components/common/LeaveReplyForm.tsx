"use client";

import { FormEvent, useState } from "react";
import ReviewRatingInput from "@/components/common/ReviewRatingInput";

export default function LeaveReplyForm() {
  const [replyRating, setReplyRating] = useState(0);
  const [replyMessage, setReplyMessage] = useState("");

  const handleReplySubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (replyRating === 0 || !replyMessage.trim()) {
      return;
    }

    setReplyMessage("");
    setReplyRating(0);
  };

  return (
    <div className="wrap-contact wrap-form pd-0">
      <div className="title">
        <h2 className="fs-30 fw-5">Leave a Reply</h2>
        <p>Your email address will not be published</p>
      </div>
      <div id="reviews" className="comments">
        <div className="reating-comment">
          <h6 className="mb-16">Whats your rating?</h6>
          <ReviewRatingInput value={replyRating} onChange={setReplyRating} />
        </div>
        <div className="respond-comment">
          <form
            id="contactform"
            className="comment-form form-submit"
            onSubmit={handleReplySubmit}
          >
            <fieldset className="message-wrap">
              <label className="fw-5 fs-18">Review</label>
              <textarea
                id="comment-message"
                name="message"
                rows={4}
                tabIndex={4}
                placeholder="Your Message:"
                aria-required="true"
                value={replyMessage}
                onChange={(event) => setReplyMessage(event.target.value)}
              />
            </fieldset>
            <button className="sc-button" type="submit">
              <span>Post Comment</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
