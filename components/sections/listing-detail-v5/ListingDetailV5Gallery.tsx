"use client";

import Image from "next/image";
import { useState } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ListingDetailGalleryNavButtons from "@/components/common/listing-detail/ListingDetailGalleryNavButtons";
import ListingDetailGallerySlideContent from "@/components/common/listing-detail/ListingDetailGallerySlideContent";
import ListingDetailPhotoSwipeSource from "@/components/common/listing-detail/ListingDetailPhotoSwipeSource";
import { LISTING_DETAIL_CAROUSEL_BREAKPOINTS } from "@/data/listingDetailGalleryShared";
import { LISTING_DETAIL_V5_GALLERY } from "@/data/listingDetailV5Gallery";
import { useListingDetailPhotoSwipe } from "@/hooks/useListingDetailPhotoSwipe";

import "swiper/css/thumbs";

function ListingDetailV5Gallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperInstance | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { photoswipeSourceRef, openGallery } = useListingDetailPhotoSwipe(
    LISTING_DETAIL_V5_GALLERY,
  );

  return (
    <div className="listing-gallery style-5">
      <Swiper
        className="swiper slider-listing-details3"
        modules={[Navigation, Thumbs]}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        navigation={{
          prevEl: ".listing-gallery.style-5 .listing-detail-v5-main-prev",
          nextEl: ".listing-gallery.style-5 .listing-detail-v5-main-next",
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {LISTING_DETAIL_V5_GALLERY.map((image, index) => (
          <SwiperSlide key={`main-${image.thumb}-${index}`}>
            <ListingDetailGallerySlideContent
              image={image}
              onImageClick={() => openGallery(index)}
              onOpenAllImages={() => openGallery(activeIndex)}
            />
          </SwiperSlide>
        ))}
        <ListingDetailGalleryNavButtons
          prevClass="listing-detail-v5-main-prev"
          nextClass="listing-detail-v5-main-next"
        />
      </Swiper>

      <Swiper
        className="swiper slider-listing-details5"
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        watchSlidesProgress
        slideToClickedSlide
        slidesPerView={4}
        spaceBetween={8}
        breakpoints={LISTING_DETAIL_CAROUSEL_BREAKPOINTS}
      >
        {LISTING_DETAIL_V5_GALLERY.map((image, index) => (
          <SwiperSlide key={`thumb-${image.thumb}-${index}`}>
            <Image src={image.thumb} alt={image.alt} width={251} height={191} />
          </SwiperSlide>
        ))}
      </Swiper>

      <ListingDetailPhotoSwipeSource
        images={LISTING_DETAIL_V5_GALLERY}
        sourceRef={photoswipeSourceRef}
      />
    </div>
  );
}

export default ListingDetailV5Gallery;
