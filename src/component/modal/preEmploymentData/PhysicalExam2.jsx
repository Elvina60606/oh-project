import { useFormContext } from "react-hook-form";
//import { useSelector } from "react-redux";

const PhysicalExam2 = () => {
  //const currentStep = useSelector((state) => state.modals.currentStep);
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <div className="modal-body my-3 mx-md-5">
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="right_va" className="form-label">
              裸視右眼 Uncorrected Visual Acuity(Right)
            </label>
            <input
              type="number"
              step="0.1"
              className={`form-control ${errors.physicalExam?.right_va ? "is-invalid" : ""} `}
              id="right_va"
              placeholder="請輸入右眼視力"
              {...register("physicalExam.right_va", {
                required: "**請輸入視力",
                setValueAs: (v) => (v ? Number(parseFloat(v).toFixed(1)) : v),
                min: { value: 0.1, message: "**視力最小為 0.1" },
                max: { value: 2.0, message: "**視力最大為 2.0" },
                validate: (v) => {
                  if (v === undefined || v === "") return true; // 空值交給 required
                  return Number(v) * 10 === Math.floor(Number(v) * 10)
                    ? true
                    : "最多只能到小數點後一位";
                },
              })}
            />
            {errors.physicalExam?.right_va && (
              <div className="invalid-feedback">
                {errors.physicalExam?.right_va.message}
              </div>
            )}
          </div>
          <div className="col-md-6">
            <label htmlFor="left_va" className="form-label">
              裸視左眼 Uncorrected Visual Acuity(Right)
            </label>
            <input
              type="number"
              step="0.1"
              className={`form-control ${errors.physicalExam?.left_va ? "is-invalid" : ""} `}
              id="left_va"
              placeholder="請輸入左眼視力"
              {...register("physicalExam.left_va", {
                required: "**請輸入視力",
                setValueAs: (v) => (v ? Number(parseFloat(v).toFixed(1)) : v),
                min: { value: 0.1, message: "**視力最小為 0.1" },
                max: { value: 2.0, message: "**視力最大為 2.0" },
                validate: (v) => {
                  if (v === undefined || v === "") return true;
                  return Number(v) * 10 === Math.floor(Number(v) * 10)
                    ? true
                    : "最多只能到小數點後一位";
                },
              })}
            />
            {errors.physicalExam?.left_va && (
              <div className="invalid-feedback">
                {errors.physicalExam?.left_va.message}
              </div>
            )}
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="right_bcva" className="form-label">
              矯正視力右眼 <br />
              Best-Corrected Visual Acuity(Right)
            </label>
            <input
              type="number"
              step="0.1"
              className={`form-control ${errors.physicalExam?.right_bcva ? "is-invalid" : ""} `}
              id="right_bcva"
              placeholder="請輸入右眼矯正視力"
              {...register("physicalExam.right_bcva", {
                required: "**請輸入視力",
                setValueAs: (v) => (v ? Number(parseFloat(v).toFixed(1)) : v),
                min: { value: 0.1, message: "**視力最小為 0.1" },
                max: { value: 2.0, message: "**視力最大為 2.0" },
                validate: (v) => {
                  if (v === undefined || v === "") return true;
                  return Number(v) * 10 === Math.floor(Number(v) * 10)
                    ? true
                    : "最多只能到小數點後一位";
                },
              })}
            />
            {errors.physicalExam?.right_bcva && (
              <div className="invalid-feedback">
                {errors.physicalExam?.right_bcva.message}
              </div>
            )}
          </div>
          <div className="col-md-6">
            <label htmlFor="left_bcva" className="form-label">
              矯正視力左眼 <br />
              Best-Corrected Visual Acuity(Left)
            </label>
            <input
              type="number"
              step="0.1"
              className={`form-control ${errors.physicalExam?.left_bcva ? "is-invalid" : ""} `}
              id="left_bcva"
              placeholder="請輸入左眼矯正視力"
              {...register("physicalExam.left_bcva", {
                required: "**請輸入視力",
                setValueAs: (v) => (v ? Number(parseFloat(v).toFixed(1)) : v),
                min: { value: 0.1, message: "**視力最小為 0.1" },
                max: { value: 2.0, message: "**視力最大為 2.0" },
                validate: (v) => {
                  if (v === undefined || v === "") return true;
                  return Number(v) * 10 === Math.floor(Number(v) * 10)
                    ? true
                    : "最多只能到小數點後一位";
                },
              })}
            />
            {errors.physicalExam?.left_bcva && (
              <div className="invalid-feedback">
                {errors.physicalExam?.left_bcva.message}
              </div>
            )}
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="color_vision" className="form-label">
              辨色力 Color Vision
            </label>
            <input
              type="text"
              className={`form-control ${errors.physicalExam?.color_vision ? "is-invalid" : ""} `}
              id="color_vision"
              placeholder="請輸入正常或異常"
              {...register("physicalExam.color_vision", {
                required: "**請輸入檢查結果",
              })}
            />
            {errors.physicalExam?.color_vision && (
              <div className="invalid-feedback">
                {errors.physicalExam?.color_vision.message}
              </div>
            )}
          </div>
          <div className="col-md-6">
            <label htmlFor="hearing_test" className="form-label">
              聽力檢測 Hearing Test
            </label>
            <input
              type="text"
              className={`form-control ${errors.physicalExam?.hearing_test ? "is-invalid" : ""} `}
              id="hearing_test"
              placeholder="請輸入正常或異常"
              {...register("physicalExam.hearing_test", {
                required: "**請輸入檢查結果",
              })}
            />
            {errors.physicalExam?.hearing_test && (
              <div className="invalid-feedback">
                {errors.physicalExam?.hearing_test.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PhysicalExam2;
