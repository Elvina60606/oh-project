import { useDispatch } from "react-redux";
import { closeModal } from "../../slice/modalSlice";
import { useForm } from "react-hook-form";
import { useState } from "react";

const FollowUpModal = () => {
  const dispatch = useDispatch();
  const [dropdownShow, setDropdownShow] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (followUpData) => {
    console.log(followUpData);
  };

  return (
    <>
      <div className="modal-layout" tabIndex="-1">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="modal-header">
              <h5 className="text-secondary">更新回診數據</h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => dispatch(closeModal())}
              ></button>
            </div>
            <div className="modal-body my-3 mx-5">
              <div className="mb-3">
                <label htmlFor="followUpDate" className="form-label">
                  日期
                </label>
                <input
                  type="date"
                  className={`form-control ${errors.followUpDate ? "is-invalid" : ""}`}
                  id="followUpDate"
                  placeholder="請輸入檢驗日期"
                  {...register("followUpDate", {
                    required: "**請輸入檢查或回診日期",
                  })}
                />
                {errors.followUpDate && (
                  <div className="invalid-feedback">
                    {errors.followUpDate.message}
                  </div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="followUpCenter" className="form-label">
                  醫療機構
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.followUpDate ? "is-invalid" : ""}`}
                  id="followUpCenter"
                  placeholder="請輸入醫療機構名稱"
                  {...register("followUpCenter", {
                    required: "**請輸入醫療機構名稱",
                  })}
                />
                {errors.followUpCenter && (
                  <div className="invalid-feedback">
                    {errors.followUpCenter.message}
                  </div>
                )}
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <div className="dropdown">
                    <div
                      className="form-select"
                      onClick={() => setDropdownShow((prev) => !prev)}
                    >
                      檢驗項目
                    </div>
                    <ul
                      className={`dropdown-menu w-100 ${dropdownShow ? "show" : ""}`}
                    >
                      <li className="dropdown-item">
                        <p>項目</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer justify-content-center gap-3">
              <button type="submit" className="btn w-25 btnCheckup">
                確認
              </button>
              <button
                type="button"
                className="btn w-25 btnOutlineCheckup"
                onClick={() => dispatch(closeModal())}
              >
                取消
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FollowUpModal;

//import follow up data
