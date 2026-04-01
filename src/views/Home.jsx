import images from "@/assets/images/images.js";
import { useDispatch } from "react-redux";

import ModalManager from "../component/modal/ModalManager";
import { openModal } from "../slice/modalSlice";

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
        <section>
          <p>
            section1: 健康促進最新健康促進活動or衛教資訊活動公告 swiper banner
          </p>
        </section>

        <section>
          <p>section2: 回診或訪談時間小提醒</p>
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
