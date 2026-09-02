export default function ListingDetailLocationSection() {
  return (
    <>
      <div className="listing-line " />
      <div className="listing-location">
        <div className="box-title">
          <h2 className="title-ct">Location</h2>
          <div className="list-icon-pf gap-8 flex-three">
            <i className="icon-carus-map" />
            <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
          </div>
        </div>
        <iframe
          className="map-content"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7302.453092836291!2d90.47477022812872!3d23.77494577893369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1627293157601!5m2!1svi!2s"
          allowFullScreen
          loading="lazy"
        />
      </div>
      <div className="listing-line " />
    </>
  );
}
