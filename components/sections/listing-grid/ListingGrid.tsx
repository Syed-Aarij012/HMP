import Filters from "@/components/common/Filters";

function ListingGrid() {
  return (
    <>
      <div className="flat-filter-search tf-section-listing">
        <div className="container">
          <div className="flat-tabs">
            <Filters />
          </div>
        </div>
      </div>
    </>
  );
}

export default ListingGrid;
