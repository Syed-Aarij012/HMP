import Pagination from "@/components/common/Pagination";
import DashboardToggle from "@/components/dashboard/DashboardToggle";
import Image from "next/image";

function Dashboard() {
  return (
    <>
      <div id="themesflat-content">
        <DashboardToggle />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="content-area">
                <main id="main" className="main-content">
                  <div className="tfcl-dashboard">
                    <h1 className="admin-title mb-3">All review</h1>
                    <div className="tfcl-dashboard-middle-right">
                      <div className="tfcl-card tfcl-dashboard-reviews">
                        <ul>
                          <li className="comment-by-user">
                            <div className="group-author">
                              <Image
                                loading="lazy"
                                className="avatar"
                                width={56}
                                height={56}
                                src="/assets/images/dashboard/rate5.png"
                                alt="avatar"
                              />
                              <div className="group-name">
                                <div className="review-name">
                                  <b>Theresa Webb</b>
                                  <span className="review-date">
                                    August 13, 2023
                                  </span>
                                </div>
                                <div className="rating-wrap">
                                  <div className="form-group">
                                    <div className="star-rating-review">
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={1}
                                      />
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={2}
                                      />
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={3}
                                      />
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={4}
                                      />
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={5}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Morbi lacinia sit amet elit sed
                                molestie. Sed neque enim, iaculis id viverra in,
                                scelerisque vitae nulla.
                              </p>
                            </div>
                          </li>
                          <li className="comment-by-user">
                            <div className="group-author">
                              <Image
                                loading="lazy"
                                className="avatar"
                                width={56}
                                height={56}
                                src="/assets/images/dashboard/rate2.png"
                                alt="avatar"
                              />
                              <div className="group-name">
                                <div className="review-name">
                                  <b>Ronald Richards</b>
                                  <span className="review-date">
                                    August 13, 2023
                                  </span>
                                </div>
                                <div className="rating-wrap">
                                  <div className="form-group">
                                    <div className="star-rating-review">
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={1}
                                      />
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={2}
                                      />
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={3}
                                      />
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={4}
                                      />
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={5}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Morbi lacinia sit amet elit sed
                                molestie. Sed neque enim, iaculis id viverra in,
                                scelerisque vitae nulla.
                              </p>
                            </div>
                          </li>
                          <li className="comment-by-user">
                            <div className="group-author">
                              <Image
                                loading="lazy"
                                className="avatar"
                                width={56}
                                height={56}
                                src="/assets/images/dashboard/rate6.png"
                                alt="avatar"
                              />
                              <div className="group-name">
                                <div className="review-name">
                                  <b>Leslie Alexander</b>
                                  <span className="review-date">
                                    August 13, 2023
                                  </span>
                                </div>
                                <div className="rating-wrap">
                                  <div className="form-group">
                                    <div className="star-rating-review">
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={1}
                                      />
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={2}
                                      />
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={3}
                                      />
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={4}
                                      />
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={5}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Morbi lacinia sit amet elit sed
                                molestie. Sed neque enim, iaculis id viverra in,
                                scelerisque vitae nulla.
                              </p>
                            </div>
                          </li>
                          <li className="comment-by-user">
                            <div className="group-author">
                              <Image
                                loading="lazy"
                                className="avatar"
                                width={56}
                                height={56}
                                src="/assets/images/dashboard/rate7.png"
                                alt="avatar"
                              />
                              <div className="group-name">
                                <div className="review-name">
                                  <b>Eleanor Pena</b>
                                  <span className="review-date">
                                    August 13, 2023
                                  </span>
                                </div>
                                <div className="rating-wrap">
                                  <div className="form-group">
                                    <div className="star-rating-review">
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={1}
                                      />
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={2}
                                      />
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={3}
                                      />
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={4}
                                      />
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={5}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Morbi lacinia sit amet elit sed
                                molestie. Sed neque enim, iaculis id viverra in,
                                scelerisque vitae nulla.
                              </p>
                            </div>
                          </li>
                          <li className="comment-by-user">
                            <div className="group-author">
                              <Image
                                loading="lazy"
                                className="avatar"
                                width={56}
                                height={56}
                                src="/assets/images/dashboard/rate1.png"
                                alt="avatar"
                              />
                              <div className="group-name">
                                <div className="review-name">
                                  <b>Esther Howard</b>
                                  <span className="review-date">
                                    August 13, 2023
                                  </span>
                                </div>
                                <div className="rating-wrap">
                                  <div className="form-group">
                                    <div className="star-rating-review">
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={1}
                                      />
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={2}
                                      />
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={3}
                                      />
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={4}
                                      />
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={5}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Morbi lacinia sit amet elit sed
                                molestie. Sed neque enim, iaculis id viverra in,
                                scelerisque vitae nulla.
                              </p>
                            </div>
                          </li>
                          <li className="comment-by-user">
                            <div className="group-author">
                              <Image
                                loading="lazy"
                                className="avatar"
                                width={56}
                                height={56}
                                src="/assets/images/dashboard/rate5.png"
                                alt="avatar"
                              />
                              <div className="group-name">
                                <div className="review-name">
                                  <b>Darrell Steward</b>
                                  <span className="review-date">
                                    August 13, 2023
                                  </span>
                                </div>
                                <div className="rating-wrap">
                                  <div className="form-group">
                                    <div className="star-rating-review">
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={1}
                                      />
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={2}
                                      />
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={3}
                                      />
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={4}
                                      />
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={5}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Morbi lacinia sit amet elit sed
                                molestie. Sed neque enim, iaculis id viverra in,
                                scelerisque vitae nulla.
                              </p>
                            </div>
                          </li>
                          <li className="comment-by-user">
                            <div className="group-author">
                              <Image
                                loading="lazy"
                                className="avatar"
                                width={56}
                                height={56}
                                src="/assets/images/dashboard/rate2.png"
                                alt="avatar"
                              />
                              <div className="group-name">
                                <div className="review-name">
                                  <b>Wade Warren</b>
                                  <span className="review-date">
                                    August 13, 2023
                                  </span>
                                </div>
                                <div className="rating-wrap">
                                  <div className="form-group">
                                    <div className="star-rating-review">
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={1}
                                      />
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={2}
                                      />
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={3}
                                      />
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={4}
                                      />
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={5}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Morbi lacinia sit amet elit sed
                                molestie. Sed neque enim, iaculis id viverra in,
                                scelerisque vitae nulla.
                              </p>
                            </div>
                          </li>
                          <li className="comment-by-user">
                            <div className="group-author">
                              <Image
                                loading="lazy"
                                className="avatar"
                                width={56}
                                height={56}
                                src="/assets/images/dashboard/rate8.png"
                                alt="avatar"
                              />
                              <div className="group-name">
                                <div className="review-name">
                                  <b>Guy Hawkins</b>
                                  <span className="review-date">
                                    August 13, 2023
                                  </span>
                                </div>
                                <div className="rating-wrap">
                                  <div className="form-group">
                                    <div className="star-rating-review">
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={1}
                                      />
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={2}
                                      />
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={3}
                                      />
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={4}
                                      />
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={5}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Morbi lacinia sit amet elit sed
                                molestie. Sed neque enim, iaculis id viverra in,
                                scelerisque vitae nulla.
                              </p>
                            </div>
                          </li>
                          <li className="comment-by-user">
                            <div className="group-author">
                              <Image
                                loading="lazy"
                                className="avatar"
                                width={56}
                                height={56}
                                src="/assets/images/dashboard/rate3.png"
                                alt="avatar"
                              />
                              <div className="group-name">
                                <div className="review-name">
                                  <b>Albert Flores</b>
                                  <span className="review-date">
                                    August 13, 2023
                                  </span>
                                </div>
                                <div className="rating-wrap">
                                  <div className="form-group">
                                    <div className="star-rating-review">
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={1}
                                      />
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={2}
                                      />
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={3}
                                      />
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={4}
                                      />
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={5}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Morbi lacinia sit amet elit sed
                                molestie. Sed neque enim, iaculis id viverra in,
                                scelerisque vitae nulla.
                              </p>
                            </div>
                          </li>
                          <li className="comment-by-user">
                            <div className="group-author">
                              <Image
                                loading="lazy"
                                className="avatar"
                                width={56}
                                height={56}
                                src="/assets/images/dashboard/rate4.png"
                                alt="avatar"
                              />
                              <div className="group-name">
                                <div className="review-name">
                                  <b>Jenny Wilson</b>
                                  <span className="review-date">
                                    August 13, 2023
                                  </span>
                                </div>
                                <div className="rating-wrap">
                                  <div className="form-group">
                                    <div className="star-rating-review">
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={1}
                                      />
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={2}
                                      />
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={3}
                                      />
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={4}
                                      />
                                      <i
                                        className="star disabled-click icon-carus-star active"
                                        data-rating={5}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Morbi lacinia sit amet elit sed
                                molestie. Sed neque enim, iaculis id viverra in,
                                scelerisque vitae nulla.
                              </p>
                            </div>
                          </li>
                        </ul>
                        <Pagination variant="tfcl" totalPages={10} />
                      </div>
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

export default Dashboard;
