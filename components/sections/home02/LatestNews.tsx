"use client";

import BlogSwiperCard from "@/components/common/BlogSwiperCard";
import { home02LatestNews } from "@/data/blogs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

function LatestNews() {
  return (
    <>
      <section className="section-blog tf-section">
        <div className="container">
          <div className="heading-section center wow fadeInUp">
            <h2 className="heading-tittle">The Latest News Car</h2>
          </div>
          <Swiper
            modules={[Pagination, Navigation]}
            className="swiper tf-swiper wow fadeInUp"
            {...{
              slidesPerView: 1,
              spaceBetween: 15,
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
                  spaceBetween: 15,
                  slidesPerGroup: 1,
                },
                "768": {
                  slidesPerView: 2,
                  spaceBetween: 15,
                  slidesPerGroup: 1,
                },
                "1200": {
                  slidesPerView: 3,
                  spaceBetween: 30,
                  slidesPerGroup: 1,
                },
              },
            }}
          >
            {home02LatestNews.map((blog) => (
              <SwiperSlide className="swiper-slide" key={blog.id}>
                <BlogSwiperCard blog={blog} />
              </SwiperSlide>
            ))}

            <span className="d-flex d-xl-none sw-dot-default sw-pagination-categories justify-content-center" />
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default LatestNews;
