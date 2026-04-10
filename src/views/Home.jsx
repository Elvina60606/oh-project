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
        <section className="row justify-content-center my-4">
          <HealthInfoSwiper />
        </section>

        <section className="row justify-content-center mb-4">
          <div className="col-8">
            <div className="border rounded-4 p-4">
              <h5>* 重要訊息 :</h5>
            </div>
          </div>
        </section>

        <section className="row justify-content-center mb-4">
          <div className="col-md-4">
            <button type="btn" className="btn w-100">
              <img
                src={images.healthReport}
                alt="healthReport.jpg"
                style={{ width: 200 }}
              />
            </button>
          </div>
          <div className="col-md-4">
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
