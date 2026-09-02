"use client";

import Link from "next/link";
import Image from "next/image";
import { searchByBrands } from "@/data/brands";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function DealershipsByBrands() {
  return (
    <section className="tf-section2 flat-property">
      <div className="container">
        <div className="inner-heading flex-two flex-wrap gap-20">
          <h1 className="heading-listing">Dealerships by Brands</h1>
          <div className="social-listing flex-six flex-wrap">
            <p>Share this page:</p>
            <div className="icon-social style1">
              <a href="facebook.com">
                <i className="icon-carus-facebook" />
              </a>
              <a href="linkein.com">
                <i className="icon-carus-in" />
              </a>
              <a href="x.com">
                <i className="icon-carus-x" />
              </a>
              <a href="instagram.com">
                <i className="icon-carus-instagram" />
              </a>
            </div>
          </div>
        </div>
        <Swiper
          modules={[Navigation, Pagination]}
          className="swiper tf-swiper"
          slidesPerView={2}
          spaceBetween={12}
          speed={800}
          observer
          observeParents
          slidesPerGroup={1}
          navigation={{
            nextEl: ".dealer-brands-nav-next",
            prevEl: ".dealer-brands-nav-prev",
          }}
          pagination={{
            el: ".dealer-brands-pagination",
            clickable: true,
          }}
          breakpoints={{
            575: { slidesPerView: 3, spaceBetween: 12, slidesPerGroup: 1 },
            768: { slidesPerView: 4, spaceBetween: 12, slidesPerGroup: 1 },
            1200: { slidesPerView: 6, spaceBetween: 30, slidesPerGroup: 1 },
          }}
        >
          {searchByBrands.map((brand) => (
            <SwiperSlide key={brand.id}>
              <Link href="/listing-list" className="partner-item style-2">
                <div className="image">
                  <Image
                    className="lazyload"
                    data-src={brand.image}
                    src={brand.image}
                    alt={brand.title}
                    width={brand.imageWidth}
                    height={brand.imageHeight}
                  />
                </div>
                <div className="content center">
                  <div className="fs-18 fw-6 title text-color-2">
                    {brand.title}
                  </div>
                  <p className="sub-title fs-12 fw-4">
                    {brand.listingCount} {brand.listingLabel ?? "Car Listing"}
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
          <span className="d-flex d-xl-none sw-dot-default dealer-brands-pagination justify-content-center" />
          <div className="nav-next-categories dealer-brands-nav-next" />
          <div className="nav-prev-categories dealer-brands-nav-prev" />
        </Swiper>
      </div>
    </section>
  );
}

export default DealershipsByBrands;
