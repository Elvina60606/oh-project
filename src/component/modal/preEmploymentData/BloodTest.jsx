import { useFormContext } from "react-hook-form";

const BloodTest = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <div className="modal-body my-3 mx-md-5">
        <h5 className="my-2 text-primary">
          <i className="bi bi-flask me-2"></i>血液檢查
        </h5>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="rbc" className="form-label">
              紅血球計數 Red Blood Count
            </label>
            <div className="input-group">
              <input
                type="number"
                step="0.01"
                className={`form-control ${errors.bloodTest?.rbc ? "is-invalid" : ""} `}
                id="rbc"
                placeholder="請輸入紅血球檢驗數值"
                {...register("bloodTest.rbc", {
                  required: "**請輸入檢驗數值",
                })}
              />
              <span className="input-group-text">
                x 10<sup>6</sup> /μL
              </span>
              {errors.bloodTest?.rbc && (
                <div className="invalid-feedback">
                  {errors.bloodTest?.rbc.message}
                </div>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="wbc" className="form-label">
              白血球計數 White Blood Count
            </label>
            <div className="input-group">
              <input
                type="number"
                className={`form-control ${errors.bloodTest?.wbc ? "is-invalid" : ""} `}
                id="wbc"
                placeholder="請輸入白血球檢驗數值"
                {...register("bloodTest.wbc", {
                  required: "**請輸入檢驗數值",
                })}
              />
              <span className="input-group-text">
                x 10<sup>6</sup> /μL
              </span>
              {errors.bloodTest?.wbc && (
                <div className="invalid-feedback">
                  {errors.bloodTest?.wbc.message}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="hemoglobin" className="form-label">
              血色素 Hemoglobin
            </label>
            <div className="input-group">
              <input
                type="number"
                step="0.01"
                className={`form-control ${errors.bloodTest?.hemoglobin ? "is-invalid" : ""} `}
                id="hemoglobin"
                placeholder="請輸入血色素檢驗數值"
                {...register("bloodTest.hemoglobin", {
                  required: "**請輸入檢驗數值",
                })}
              />
              <span className="input-group-text">g/dL</span>
              {errors.bloodTest?.hemoglobin && (
                <div className="invalid-feedback">
                  {errors.bloodTest?.hemoglobin.message}
                </div>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="platelets" className="form-label">
              血小板 Platelets
            </label>
            <div className="input-group">
              <input
                type="number"
                className={`form-control ${errors.bloodTest?.platelets ? "is-invalid" : ""} `}
                id="platelets"
                placeholder="請輸入血小板檢驗數值"
                {...register("bloodTest.platelets", {
                  required: "**請輸入檢驗數值",
                })}
              />
              <span className="input-group-text">
                x 10<sup>3</sup> /μL
              </span>
              {errors.bloodTest?.platelets && (
                <div className="invalid-feedback">
                  {errors.bloodTest?.platelets.message}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BloodTest;
