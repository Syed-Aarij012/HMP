import type { RefObject } from "react";
import type { ListingDetailGalleryImage } from "@/data/listingDetailV1Gallery";

type ListingDetailPhotoSwipeSourceProps = {
  images: ListingDetailGalleryImage[];
  sourceRef: RefObject<HTMLDivElement | null>;
};

export default function ListingDetailPhotoSwipeSource({
  images,
  sourceRef,
}: ListingDetailPhotoSwipeSourceProps) {
  return (
    <div
      ref={sourceRef}
      className="listing-detail-photoswipe-source"
      aria-hidden="true"
    >
      {images.map((image, index) => (
        <a
          key={`pswp-${index}-${image.src}`}
          href={image.src}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          tabIndex={-1}
        >
          {image.alt}
        </a>
      ))}
    </div>
  );
}
