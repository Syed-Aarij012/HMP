import DashboardToggle from "@/components/dashboard/DashboardToggle";
import NiceSelect from "@/components/common/NiceSelect";
import AttachmentsSection from "@/components/sections/add-listing/AttachmentsSection";
import UploadPhotoSection from "@/components/sections/add-listing/UploadPhotoSection";
import {
  ADD_LISTING_YEAR_OPTIONS,
  BODY_TYPE_OPTIONS,
  COLOR_OPTIONS,
  CYLINDER_OPTIONS,
  DRIVER_TYPE_OPTIONS,
  DOOR_OPTIONS,
  ENGINE_SIZE_OPTIONS,
  FUEL_TYPE_OPTIONS,
  MAKE_OPTIONS,
  MILEAGE_OPTIONS,
  MPG_OPTIONS,
  OWNERSHIP_OPTIONS,
  SEAT_OPTIONS,
  SIDEBAR_MODEL_OPTIONS,
  TRANSMISSION_OPTIONS,
} from "@/data/niceSelectOptions";

function AddListing() {
  return (
    <>
      <div id="themesflat-content">
        <DashboardToggle />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="content-area">
                <main id="main" className="main-content">
                  <div className="tfcl-dashboard add-list">
                    <h1 className="admin-title mb-3">Add listing</h1>
                    <UploadPhotoSection />
                    <div className="tfcl-add-listing car-details">
                      <h3>Car details</h3>
                      <div className="parent-item group-checkbox">
                        <input className="form-check-input" type="checkbox" />
                        <label className="fs-16 fw-4">
                          Mark this car as featured?
                        </label>
                      </div>
                      <div className="form-group">
                        <label htmlFor="listing_title">Title *</label>
                        <input
                          type="text"
                          className="form-control"
                          name="listing_title"
                          placeholder="Title"
                          defaultValue=""
                          required
                        />
                      </div>
                      <div className="form-group-4">
                        <div className="form-group">
                          <label htmlFor="listing_title">Make *</label>
                          <NiceSelect
                            options={MAKE_OPTIONS}
                            defaultValue=""
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="listing_title">Model *</label>
                          <NiceSelect
                            options={SIDEBAR_MODEL_OPTIONS}
                            defaultValue=""
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="listing_title">Body *</label>
                          <NiceSelect
                            options={BODY_TYPE_OPTIONS}
                            defaultValue=""
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="listing_title">Years *</label>
                          <NiceSelect
                            options={ADD_LISTING_YEAR_OPTIONS}
                            defaultValue=""
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="form-group-4">
                        <div className="form-group">
                          <label htmlFor="listing_title">Condition *</label>
                          <NiceSelect
                            options={OWNERSHIP_OPTIONS}
                            defaultValue=""
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="listing_title">Stock number *</label>
                          <input
                            type="text"
                            className="form-control"
                            name="listing_title"
                            placeholder="Enter stock number"
                            defaultValue=""
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="listing_title">Vin number *</label>
                          <input
                            type="text"
                            className="form-control"
                            name="listing_title"
                            placeholder="Enter VIN"
                            defaultValue=""
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="listing_title">Mileage *</label>
                          <NiceSelect
                            options={MILEAGE_OPTIONS}
                            defaultValue=""
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="form-group-4">
                        <div className="form-group">
                          <label htmlFor="listing_title">Tranmission *</label>
                          <NiceSelect
                            options={TRANSMISSION_OPTIONS}
                            defaultValue=""
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="listing_title">Drive type *</label>
                          <NiceSelect
                            options={DRIVER_TYPE_OPTIONS}
                            defaultValue=""
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="listing_title">Engine size *</label>
                          <NiceSelect
                            options={ENGINE_SIZE_OPTIONS}
                            defaultValue=""
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="listing_title">Cylinders *</label>
                          <NiceSelect
                            options={CYLINDER_OPTIONS}
                            defaultValue=""
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="form-group-4">
                        <div className="form-group">
                          <label htmlFor="listing_title">Fuel type *</label>
                          <NiceSelect
                            options={FUEL_TYPE_OPTIONS}
                            defaultValue=""
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="listing_title">Door *</label>
                          <NiceSelect
                            options={DOOR_OPTIONS}
                            defaultValue=""
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="listing_title">Color *</label>
                          <NiceSelect
                            options={COLOR_OPTIONS}
                            defaultValue=""
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="listing_title">Seat *</label>
                          <NiceSelect
                            options={SEAT_OPTIONS}
                            defaultValue=""
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="form-group-4">
                        <div className="form-group">
                          <label htmlFor="listing_title">City MPG *</label>
                          <NiceSelect
                            options={MPG_OPTIONS}
                            defaultValue=""
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="listing_title">Highway MPG *</label>
                          <NiceSelect
                            options={MPG_OPTIONS}
                            defaultValue=""
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="form-group mb-0">
                        <label htmlFor="listing_title">Description</label>
                        <textarea
                          name=""
                          id=""
                          placeholder="Your description"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="tfcl-add-listing car-additional">
                      <h3>Additional detail</h3>
                      <div className="additional-detail">
                        <button
                          type="button"
                          className="remove-additional-detail"
                          aria-label="Remove additional detail"
                        >
                          <i className="icon-carus-close" aria-hidden="true" />
                        </button>
                        <div className="group-additional-detail gap-30">
                          <div className="form-group">
                            <label htmlFor="additional-icon">Icon SVG</label>
                            <input
                              type="text"
                              className="form-control"
                              id="additional-icon"
                              name="additional_icon"
                              placeholder="Choose icon"
                              defaultValue=""
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="additional-title">Title</label>
                            <input
                              type="text"
                              className="form-control"
                              id="additional-title"
                              name="additional_title"
                              placeholder="Your title"
                              defaultValue=""
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="additional-value">Value</label>
                            <input
                              type="text"
                              className="form-control"
                              id="additional-value"
                              name="additional_value"
                              placeholder="Add Value"
                              defaultValue=""
                            />
                          </div>
                        </div>
                      </div>
                      <a className="sc-button" href="#">
                        <span>Add new</span>
                      </a>
                    </div>
                    <div className="tfcl-add-listing car-features">
                      <h3>Safety features</h3>
                      <div className="group-features-5">
                        <div className="group-features">
                          <h6>Request Price Label</h6>
                          <div className="parent-item group-checkbox">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                            <label>A/C: Front</label>
                          </div>
                          <div className="parent-item group-checkbox">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                            <label>Backup Camera</label>
                          </div>
                          <div className="parent-item group-checkbox">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                            <label>Cruise Control</label>
                          </div>
                          <div className="parent-item group-checkbox">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                            <label>Navigation</label>
                          </div>
                          <div className="parent-item group-checkbox">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                            <label>Power Locks</label>
                          </div>
                        </div>
                        <div className="group-features">
                          <h6>Entertainment</h6>
                          <div className="parent-item group-checkbox">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                            <label>Audio system</label>
                          </div>
                          <div className="parent-item group-checkbox">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                            <label>Touchscreen display</label>
                          </div>
                          <div className="parent-item group-checkbox">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                            <label>GPS navigation</label>
                          </div>
                          <div className="parent-item group-checkbox">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                            <label>Phone connectivity</label>
                          </div>
                          <div className="parent-item group-checkbox">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                            <label>In-car Wi-Fi</label>
                          </div>
                        </div>
                        <div className="group-features">
                          <h6>Safety</h6>
                          <div className="parent-item group-checkbox">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                            <label>Anti-lock brake system (ABS):</label>
                          </div>
                          <div className="parent-item group-checkbox">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                            <label>Electronic stability control (ESC)</label>
                          </div>
                          <div className="parent-item group-checkbox">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                            <label>Brake assist (BA)</label>
                          </div>
                          <div className="parent-item group-checkbox">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                            <label>Airbags</label>
                          </div>
                          <div className="parent-item group-checkbox">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                            <label>Blind spot monitoring system (BSM)</label>
                          </div>
                        </div>
                        <div className="group-features">
                          <h6>Interior</h6>
                          <div className="parent-item group-checkbox">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                            <label>Premium leather seats</label>
                          </div>
                          <div className="parent-item group-checkbox">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                            <label>Wood trim</label>
                          </div>
                          <div className="parent-item group-checkbox">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                            <label>Mini bar</label>
                          </div>
                          <div className="parent-item group-checkbox">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                            <label>Rear seat ventilation system</label>
                          </div>
                          <div className="parent-item group-checkbox">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                            <label>Large infotainment screen</label>
                          </div>
                        </div>
                        <div className="group-features">
                          <h6>Exterior</h6>
                          <div className="parent-item group-checkbox">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                            <label>Chrome-plated grill</label>
                          </div>
                          <div className="parent-item group-checkbox">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                            <label>Smart headlight cluster</label>
                          </div>
                          <div className="parent-item group-checkbox">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                            <label>Premium wheels</label>
                          </div>
                          <div className="parent-item group-checkbox">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                            <label>Body character lines</label>
                          </div>
                          <div className="parent-item group-checkbox">
                            <input
                              className="form-check-input"
                              type="checkbox"
                            />
                            <label>High-quality paint</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tfcl-add-listing car-price">
                      <h3>Car price</h3>
                      <div className="grid-2 gap-30">
                        <div className="form-group mb-0">
                          <label htmlFor="listing_title">Full price</label>
                          <input
                            type="text"
                            className="form-control"
                            name="listing_title"
                            placeholder="Your price"
                            defaultValue=""
                          />
                        </div>
                        <div className="form-group mb-0">
                          <label htmlFor="listing_title">Sale Price</label>
                          <input
                            type="text"
                            className="form-control"
                            name="listing_title"
                            placeholder="Your price"
                            defaultValue=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="tfcl-add-listing car-location">
                      <h3>Location</h3>
                      <div className="form-group-2">
                        <div className="form-group">
                          <label htmlFor="listing_title">Full Address</label>
                          <input
                            type="text"
                            className="form-control"
                            name="listing_title"
                            defaultValue="2464 Royal Ln. Mesa, New Jersey 45463"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="listing_title">Map location</label>
                          <input
                            type="text"
                            className="form-control"
                            name="listing_title"
                            defaultValue="2464 Royal Ln. Mesa, New Jersey 45463"
                          />
                        </div>
                      </div>
                      <iframe
                        id="map-single"
                        className="map-single map-content"
                        title="Map location"
                        src="https://maps.google.com/maps?q=2464+Royal+Ln.+Mesa,+New+Jersey+45463&hl=en&z=16&output=embed"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        style={{ border: 0, width: "100%" }}
                      />
                    </div>
                    <div className="tfcl-add-listing car-video">
                      <h3>Video</h3>
                      <p className="fs-14">
                        Listing with video gets 6 times higher exposure to
                        buyers. Put your video link here!
                      </p>
                      <div className="form-group mb-0">
                        <label htmlFor="listing_title">Video URL</label>
                        <input
                          type="text"
                          className="form-control"
                          name="listing_title"
                          placeholder="Your URL"
                          defaultValue=""
                        />
                      </div>
                    </div>
                    <AttachmentsSection />
                    <div className="group-button-submit">
                      <button className="pre-btn">List Now</button>
                      <button className="second-btn">Save &amp; Preview</button>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddListing;
