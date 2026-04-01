import { useFormContext } from "react-hook-form";

const BiochemistryTest = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <div className="modal-body my-3 mx-md-5">
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="alt" className="form-label">
              血清丙胺酸轉胺酶 ALT(GPT)
            </label>
            <input
              type="number"
              className={`form-control ${errors.physicalExam?.alt ? "is-invalid" : ""} `}
              id="alt"
              placeholder="請輸入數值"
              {...register("physicalExam.alt", {
                required: "**請輸入檢驗數值",
              })}
            />
            {errors.physicalExam?.alt && (
              <div className="invalid-feedback">
                {errors.physicalExam?.alt.message}
              </div>
            )}
          </div>
          <div className="col-md-6">
            <label htmlFor="ac_sugar" className="form-label">
              飯前血糖檢查 AC
            </label>
            <input
              type="number"
              className={`form-control ${errors.physicalExam?.ac_sugar ? "is-invalid" : ""} `}
              id="ac_sugar"
              placeholder="請輸入飯前血糖"
              {...register("physicalExam.ac_sugar", {
                required: "**請輸入飯前血糖數值",
              })}
            />
            {errors.physicalExam?.ac_sugar && (
              <div className="invalid-feedback">
                {errors.physicalExam?.ac_sugar.message}
              </div>
            )}
          </div>
        </div>
        //從這裡開始寫下去～～～～～
      </div>
    </>
  );
};

export default BiochemistryTest;
