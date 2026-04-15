import images from "@/assets/images/images.js";

const HealthCheckResult = () => {
  return (
    <>
      <section className="container">breadcrumb待加入</section>

      <section className="container my-5">
        <div className="row justify-content-center">
          <div className="col-8">
            <div className="row">
              <div className="col-md-6">
                <img
                  src={images.healthReport3}
                  alt="healthReport3.png"
                  className="mb-3 mb-md-0"
                />
              </div>
              <div className="col-md-6">
                <div className="d-flex flex-column justify-content-evenly h-100">
                  <button
                    type="button"
                    className="btn btn-primary p-4 mb-3 mb-md-0"
                  >
                    <span className="fs-4">一般員工健康檢查</span>
                  </button>
                  <button
                    type="button"
                    className="btn btn-success p-4 mb-3 mb-md-0"
                  >
                    <span className="fs-4">食品從業人員體檢</span>
                  </button>
                  <button type="button" className="btn btn-warning p-4">
                    <span className="fs-4">初評風險評估</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HealthCheckResult;
