import Counter from "@/components/common/Counter";
function CarCounter() {
  return (
    <>
      <section className="tf-section">
        <div className="container">
          <div className="grid-counter-4">
            <div className="tf-counter style-1 center wow fadeInUp">
              <div className="number-counter">
                <div>TOP 1</div>
              </div>
              <p>car sales platform</p>
            </div>
            <div
              className="tf-counter style-1 center wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="number-counter">
                <div className="number">
                  <Counter min={0} max={748} />
                </div>
                <span>K</span>
              </div>
              <p>Cars for sale</p>
            </div>
            <div
              className="tf-counter style-1 center wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="number-counter">
                <div className="number">
                  <Counter min={0} max={972} />
                </div>
                <span>K</span>
              </div>
              <p>Cars listing</p>
            </div>
            <div
              className="tf-counter style-1 center wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="number-counter">
                <div className="number">
                  <Counter min={0} max={326} />
                </div>
                <span>K</span>
              </div>
              <p>Dealers active</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CarCounter;
