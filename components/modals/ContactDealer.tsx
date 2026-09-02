import React from "react";
import ContactDealerForm from "./ContactDealerForm";

export default function ContactDealer() {
  return (
    <div
      className="modal fade"
      id="ModalTogglemess"
      aria-hidden="true"
      tabIndex={-1}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5">Get in touch with the dealer</h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            />
          </div>
          <div className="modal-body">
            <ContactDealerForm />
          </div>
        </div>
      </div>
    </div>
  );
}
