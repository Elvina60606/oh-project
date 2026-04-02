import { useFormContext } from "react-hook-form";

const UrineTest = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <div className="modal-body my-3 mx-md-5">
        <h5 className="my-2 text-primary">
          <i className="bi bi-flask me-2"></i>尿液檢查
        </h5>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="urine_protein" className="form-label">
              尿蛋白 Urine Protein
            </label>
            <input
              type="text"
              className={`form-control ${errors.urineTest?.urine_protein ? "is-invalid" : ""} `}
              id="urine_protein"
              placeholder="請輸入尿蛋白檢驗結果"
              {...register("urineTest.urine_protein", {
                required: "**請輸入檢驗結果",
              })}
            />
            {errors.urineTest?.urine_protein && (
              <div className="invalid-feedback">
                {errors.urineTest?.urine_protein.message}
              </div>
            )}
          </div>
          <div className="col-md-6">
            <label htmlFor="urine_ob" className="form-label">
              尿潛血 Urine Occult Blood
            </label>
            <input
              type="text"
              className={`form-control ${errors.urineTest?.urine_ob ? "is-invalid" : ""} `}
              id="urine_ob"
              placeholder="請輸入尿潛血檢驗結果"
              {...register("urineTest.urine_ob", {
                required: "**請輸入檢驗結果",
              })}
            />
            {errors.urineTest?.urine_ob && (
              <div className="invalid-feedback">
                {errors.urineTest?.urine_ob.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UrineTest;
