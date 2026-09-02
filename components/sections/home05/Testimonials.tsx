"use client";

import {
  home05Testimonials,
  home05TestimonialsRating,
} from "@/data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const STAR_PATH =
  "M2.77535 6.8442L0.261091 4.9776C-0.213455 4.63726 -0.00532068 3.95284 0.59688 3.87568L4.16291 3.7332L5.68575 0.309233C5.7919 0.119462 6.00767 0 6.24425 0C6.48083 0 6.69659 0.120085 6.80274 0.309233L8.32559 3.7332L11.8916 3.87568C12.4938 3.95284 12.7019 4.63726 12.2274 4.9776L9.71315 6.8442L10.3993 10.4884C10.4784 10.9856 9.90255 11.3576 9.40233 11.133L6.24425 9.333L3.08616 11.1324C2.58525 11.357 2.01011 10.9849 2.0892 10.4878L2.77535 6.8442Z";

function Testimonials() {
  return (
    <>
      <section className=" section-testimonial overflow-hidden">
        <div className="container full">
          <div className="row">
            <div className="col-md-6 pd-0">
              <div className="image-wcs">
                <div className="bg-image-1" />
              </div>
            </div>
            <div className="col-md-6 pd-0 ">
              <div className="bg-2">
                <div className="content-wcs">
                  <div className="heading-section wow fadeInUp">
                    <h2 className="heading-tittle text-color-1">
                      What our customers say
                    </h2>
                  </div>
                  <Swiper
                    modules={[Pagination, Navigation]}
                    className="swiper tf-swiper"
                    {...{
                      slidesPerView: 1,
                      spaceBetween: 30,
                      speed: 800,
                      observer: true,
                      observeParents: true,
                      navigation: {
                        nextEl: ".nav-next-categories",
                        prevEl: ".nav-prev-categories",
                      },
                      pagination: {
                        el: ".sw-pagination-categories",
                        clickable: true,
                      },
                    }}
                  >
                    {home05Testimonials.map((testimonial) => (
                      <SwiperSlide
                        className="swiper-slide"
                        key={testimonial.id}
                      >
                        <div className="tf-testimonial style-1">
                          <div className="inner-top flex-three">
                            <div className="star-wrap flex-three">
                              {Array.from({
                                length: testimonial.starCount,
                              }).map((_, index) => (
                                <svg
                                  key={index}
                                  width={13}
                                  height={12}
                                  viewBox="0 0 13 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d={STAR_PATH}
                                    fill="#FFD023"
                                  />
                                </svg>
                              ))}
                            </div>
                            <p className="fs-14 fw-4">
                              {home05TestimonialsRating}
                            </p>
                          </div>
                          <p className="description">
                            &ldquo;{testimonial.description}&rdquo;
                          </p>
                          <div className="author-box">
                            <div className="content">
                              <h3>{testimonial.author}</h3>
                              <p className="fs-12 lh-16">{testimonial.role}</p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                    <span className="d-flex d-xl-none sw-dot-default sw-pagination-categories " />
                    <div className="button-swiper style1">
                      <div className="swiper-button-prev style-4 nav-prev-categories" />
                      <div className="swiper-button-next style-4 nav-next-categories" />
                    </div>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
