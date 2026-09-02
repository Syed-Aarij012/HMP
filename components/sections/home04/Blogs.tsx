"use client";

import Link from "next/link";
import BlogSwiperCard from "@/components/common/BlogSwiperCard";
import { home04LatestNews } from "@/data/blogs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

function Blogs() {
  return (
    <>
      <section className="section-blog tf-section3 ">
        <div className="container">
          <div className="heading-section flex align-center justify-space flex-wrap gap-20 mb-47 wow fadeInUp">
            <h2 className="heading-tittle">latest from HMP</h2>
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
            {home04LatestNews.map((blog) => (
              <SwiperSlide className="swiper-slide" key={blog.id}>
                <BlogSwiperCard
                  blog={blog}
                  showCommentCount={blog.commentCount > 0}
                />
              </SwiperSlide>
            ))}

            <span className="d-flex sw-dot-default sw-pagination-categories " />
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default Blogs;
