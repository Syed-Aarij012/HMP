"use client";

import Image from "next/image";
import { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ListingDetailGalleryNavButtons from "@/components/common/listing-detail/ListingDetailGalleryNavButtons";
import ListingDetailGallerySlideContent from "@/components/common/listing-detail/ListingDetailGallerySlideContent";
import ListingDetailPhotoSwipeSource from "@/components/common/listing-detail/ListingDetailPhotoSwipeSource";
import {
  LISTING_DETAIL_V6_GALLERY,
  LISTING_DETAIL_V6_SIDE_IMAGE,
} from "@/data/listingDetailV6Gallery";
import { useListingDetailPhotoSwipe } from "@/hooks/useListingDetailPhotoSwipe";

function ListingDetailV6Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { photoswipeSourceRef, openGallery } = useListingDetailPhotoSwipe(
    LISTING_DETAIL_V6_GALLERY,
  );

  return (
    <div className="listing-gallery style-6">
      <Swiper
        className="swiper slider-listing-details6"
        modules={[Navigation]}
        navigation={{
          prevEl: ".listing-gallery.style-6 .listing-detail-v6-main-prev",
          nextEl: ".listing-gallery.style-6 .listing-detail-v6-main-next",
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {LISTING_DETAIL_V6_GALLERY.map((image, index) => (
          <SwiperSlide key={`main-${index}`}>
            <ListingDetailGallerySlideContent
              image={image}
              onImageClick={() => openGallery(index)}
              onOpenAllImages={() => openGallery(activeIndex)}
            />
          </SwiperSlide>
        ))}
        <ListingDetailGalleryNavButtons
          prevClass="listing-detail-v6-main-prev"
          nextClass="listing-detail-v6-main-next"
        />
      </Swiper>

      <div className="slider-listing-details6 listing-details6-right">
        <Image
          src={LISTING_DETAIL_V6_SIDE_IMAGE.src}
          alt={LISTING_DETAIL_V6_SIDE_IMAGE.alt}
          width={LISTING_DETAIL_V6_SIDE_IMAGE.width}
          height={LISTING_DETAIL_V6_SIDE_IMAGE.height}
        />
      </div>

      <ListingDetailPhotoSwipeSource
        images={LISTING_DETAIL_V6_GALLERY}
        sourceRef={photoswipeSourceRef}
      />
    </div>
  );
}

export default ListingDetailV6Gallery;
