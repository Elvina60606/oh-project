import images from "@/assets/images/images.js";
import { useDispatch } from "react-redux";

import ModalManager from "../component/modal/ModalManager";
import { openModal } from "../slice/modalSlice";

import HealthInfoSwiper from "../component/swiper/HealthInfoSwiper";

const Home = () => {
  const dispatch = useDispatch();

  const handleAddPreEmploymentData = () => {
    dispatch(
      openModal({
        type: "PRE_EMPLOYMENT_DATA",
        props: {
          mode: "add",
        },
      }),
    );
  };

  const handleUpdateFollowUp = () => {
    dispatch(
      openModal({
        type: "FOLLOW_UP",
        props: {
          mode: "update",
        },
      }),
    );
  };
  return (
    <>
      <ModalManager />
      <div className="container">
        <section className="row justify-content-center my-5">
          <HealthInfoSwiper />
        </section>

        <section className="row justify-content-center mb-5">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                重要資訊
                <i className="bi bi-calendar2-heart-fill text-danger ms-2"></i>
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  下一次健康訪談日期為 2026 / 9 / 18 ， 14：00
                </h5>
                <p className="card-text mb-3">
                  若有需要調整時段，請提前一週告知。
                </p>
                <button type="button" className="btn btn-success">
                  查看上一次訪談紀錄
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="row justify-content-center mb-5">
          <div className="col-md-3">
            <button type="btn" className="btn w-100">
              <img
                src={images.healthReport}
                alt="healthReport.jpg"
                style={{ width: 200 }}
              />
            </button>
          </div>
          <div className="col-md-3">
            <div className="d-flex flex-column justify-content-center h-100 gap-2">
              <button
                type="button"
                className="btn btnCheckup"
                onClick={handleAddPreEmploymentData}
              >
                <i className="bi bi-file-earmark-medical"></i>
                <span className="mx-2">新進人員體格檢查</span>
              </button>
              <button
                type="button"
                className="btn btnOutlineCheckup"
                onClick={handleUpdateFollowUp}
              >
                <i className="bi bi-shield-fill-check"></i>
                <span className="mx-2">更新健檢後回診數據</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Home;
