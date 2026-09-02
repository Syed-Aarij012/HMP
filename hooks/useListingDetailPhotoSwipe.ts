"use client";

import PhotoSwipeLightbox from "photoswipe/lightbox";
import { useEffect, useRef } from "react";
import type { ListingDetailGalleryImage } from "@/data/listingDetailV1Gallery";

import "photoswipe/style.css";

export function useListingDetailPhotoSwipe(images: ListingDetailGalleryImage[]) {
  const lightboxRef = useRef<PhotoSwipeLightbox | null>(null);
  const photoswipeSourceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gallery = photoswipeSourceRef.current;
    if (!gallery) {
      return;
    }

    const lightbox = new PhotoSwipeLightbox({
      gallery,
      children: "a",
      pswpModule: () => import("photoswipe"),
    });

    lightbox.init();
    lightboxRef.current = lightbox;

    return () => {
      lightbox.destroy();
      lightboxRef.current = null;
    };
  }, [images]);

  const openGallery = (index: number) => {
    lightboxRef.current?.loadAndOpen(index);
  };

  return { photoswipeSourceRef, openGallery };
}
