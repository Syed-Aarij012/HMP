"use client";

import Link from "next/link";
import BlogSwiperCard from "@/components/common/BlogSwiperCard";
import { home05LatestNews } from "@/data/blogs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

function Blogs() {
  return (
    <>
      <section className="section-blog tf-section3">
        <div className="container">
          <div className="heading-section mb-47 flex align-center justify-space flex-wrap gap-20 wow fadeInUp">
            <h2 className="heading-tittle">Read our blogs</h2>
            <Link href={`/blog`} className="tf-btn-arrow">
              See all
              <i className="icon-carus-arrowcircleright" />
            </Link>
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
            {home05LatestNews.map((blog) => (
              <SwiperSlide className="swiper-slide" key={blog.id}>
                <BlogSwiperCard blog={blog} variant="style6" />
              </SwiperSlide>
            ))}
            <span className="d-flex d-xl-none sw-dot-default sw-pagination-categories justify-content-center" />
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default Blogs;
