import { useFormContext } from "react-hook-form";

const BiochemistryTest = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <div className="modal-body my-3 mx-md-5">
        <h5 className="my-2 text-primary">
          <i className="bi bi-flask me-2"></i>生化檢查
        </h5>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="alt" className="form-label">
              血清丙胺酸轉胺酶 ALT(GPT)
            </label>
            <input
              type="number"
              className={`form-control ${errors.biochemistry?.alt ? "is-invalid" : ""} `}
              id="alt"
              placeholder="請輸入數值"
              {...register("biochemistry.alt", {
                required: "**請輸入檢驗數值",
              })}
            />
            {errors.biochemistry?.alt && (
              <div className="invalid-feedback">
                {errors.biochemistry?.alt.message}
              </div>
            )}
          </div>
          <div className="col-md-6">
            <label htmlFor="ac_sugar" className="form-label">
              飯前血糖檢查 AC
            </label>
            <input
              type="number"
              className={`form-control ${errors.biochemistry?.ac_sugar ? "is-invalid" : ""} `}
              id="ac_sugar"
              placeholder="請輸入飯前血糖"
              {...register("biochemistry.ac_sugar", {
                required: "**請輸入檢驗數值",
              })}
            />
            {errors.biochemistry?.ac_sugar && (
              <div className="invalid-feedback">
                {errors.biochemistry?.ac_sugar.message}
              </div>
            )}
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="creatinine" className="form-label">
              肌酸酐 Creatinine
            </label>
            <input
              type="number"
              step="0.1"
              className={`form-control ${errors.biochemistry?.creatinine ? "is-invalid" : ""} `}
              id="creatinine"
              placeholder="請輸入肌酸酐數值"
              {...register("biochemistry.creatinine", {
                required: "**請輸入檢驗數值",
                setValueAs: (v) => (v ? Number(parseFloat(v).toFixed(1)) : v),
                validate: (v) => {
                  if (v === undefined || v === "") return true;
                  return Number(v) * 10 === Math.floor(Number(v) * 10)
                    ? true
                    : "最多只能到小數點後一位";
                },
              })}
            />
            {errors.biochemistry?.creatinine && (
              <div className="invalid-feedback">
                {errors.biochemistry?.creatinine.message}
              </div>
            )}
          </div>
          <div className="col-md-6">
            <label htmlFor="cholesterol" className="form-label">
              膽固醇 Cholesterol
            </label>
            <input
              type="number"
              className={`form-control ${errors.biochemistry?.cholesterol ? "is-invalid" : ""} `}
              id="cholesterol"
              placeholder="請輸入膽固醇數值"
              {...register("biochemistry.cholesterol", {
                required: "**請輸入檢驗數值",
              })}
            />
            {errors.biochemistry?.cholesterol && (
              <div className="invalid-feedback">
                {errors.biochemistry?.cholesterol.message}
              </div>
            )}
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="hdl" className="form-label">
              高密度膽固醇 HDL-Cholesterol
            </label>
            <input
              type="number"
              className={`form-control ${errors.biochemistry?.hdl ? "is-invalid" : ""} `}
              id="hdl"
              placeholder="請輸入高密度膽固醇數值"
              {...register("biochemistry.hdl", {
                required: "**請輸入檢驗數值",
              })}
            />
            {errors.biochemistry?.hdl && (
              <div className="invalid-feedback">
                {errors.biochemistry?.hdl.message}
              </div>
            )}
          </div>
          <div className="col-md-6">
            <label htmlFor="ldl" className="form-label">
              低密度膽固醇 LDL-Cholesterol
            </label>
            <input
              type="number"
              className={`form-control ${errors.biochemistry?.ldl ? "is-invalid" : ""} `}
              id="ldl"
              placeholder="請輸入低密度膽固醇"
              {...register("biochemistry.ldl", {
                required: "**請輸入檢驗數值",
              })}
            />
            {errors.biochemistry?.ldl && (
              <div className="invalid-feedback">
                {errors.biochemistry?.ldl.message}
              </div>
            )}
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="triglycerides" className="form-label">
              三酸甘油酯 Triglycerides
            </label>
            <input
              type="number"
              className={`form-control ${errors.biochemistry?.triglycerides ? "is-invalid" : ""} `}
              id="triglycerides"
              placeholder="請輸入三酸甘油酯數值"
              {...register("biochemistry.triglycerides", {
                required: "**請輸入檢驗數值",
              })}
            />
            {errors.biochemistry?.triglycerides && (
              <div className="invalid-feedback">
                {errors.biochemistry?.triglycerides.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BiochemistryTest;
