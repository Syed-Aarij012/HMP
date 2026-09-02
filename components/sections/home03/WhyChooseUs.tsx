"use client";

import { home03WhyChooseUsFeatures } from "@/data/whyChooseUs";
import WhyChooseUsIcon from "@/components/sections/home03/WhyChooseUsIcon";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

function WhyChooseUs() {
  return (
    <>
      <section className="tf-section3">
        <div className="container">
          <div className="heading-section center mb-50 wow fadeInUp">
            <h2 className="heading-tittle">Why Choose Us</h2>
            <p className="fs-18 fw-4 ">
              we provide trusted service, expert guidance, and customer focused
              solutions that ensure satisfaction and long term value.
            </p>
          </div>
          <Swiper
            modules={[Pagination, Navigation]}
            className="swiper tf-swiper wow fadeInUp"
            {...{
              slidesPerView: 1,
              spaceBetween: 12,
              speed: 800,
              observer: true,
              observeParents: true,
              slidesPerGroup: 1,
              navigation: {
                nextEl: ".nav-next-categories",
                prevEl: ".nav-prev-categories",
              },
              pagination: {
                el: ".sw-pagination-categories",
                clickable: true,
              },
              breakpoints: {
                "575": {
                  slidesPerView: 2,
                  spaceBetween: 12,
                  slidesPerGroup: 1,
                },
                "768": {
                  slidesPerView: 3,
                  spaceBetween: 30,
                  slidesPerGroup: 1,
                },
                "1200": {
                  slidesPerView: 4,
                  spaceBetween: 48,
                  slidesPerGroup: 1,
                },
              },
            }}
          >
            {home03WhyChooseUsFeatures.map((feature) => (
              <SwiperSlide className="swiper-slide" key={feature.id}>
                <div className="tf-icon-box style-1">
                  <div className="icon">
                    <WhyChooseUsIcon icon={feature.icon} />
                  </div>
                  <div className="content">
                    <h3>
                      <a href="#">{feature.title}</a>
                    </h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <span className="d-flex d-xl-none sw-dot-default sw-pagination-categories justify-content-center" />
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default WhyChooseUs;
