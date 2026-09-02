type ListingDetailGalleryNavButtonsProps = {
  prevClass?: string;
  nextClass?: string;
};

export default function ListingDetailGalleryNavButtons({
  prevClass = "",
  nextClass = "",
}: ListingDetailGalleryNavButtonsProps) {
  return (
    <>
      <div className={`swiper-button-prev${prevClass ? ` ${prevClass}` : ""}`} />
      <div className={`swiper-button-next${nextClass ? ` ${nextClass}` : ""}`} />
    </>
  );
}
