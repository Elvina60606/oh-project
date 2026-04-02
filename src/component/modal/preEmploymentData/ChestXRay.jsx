import { useFormContext } from "react-hook-form";

const ChestXRay = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <div className="modal-body my-3 mx-md-5">
        <h5 className="my-2 text-primary">
          <i className="bi bi-flask me-2"></i> X 光檢查
        </h5>
        <div className="mb-3">
          <label htmlFor="chestXRay" className="form-label d-flex flex-wrap">
            胸部X光 Chest X-ray
          </label>
          <input
            type="text"
            className={`form-control ${errors.chestXRay ? "is-invalid" : ""} `}
            id="chestXRay"
            placeholder="請輸入胸部 X 光檢查結果"
            {...register("chestXRay", { required: "**請輸入檢查結果" })}
          />
          {errors.chestXRay && (
            <div className="invalid-feedback">{errors.chestXRay.message}</div>
          )}
        </div>
      </div>
    </>
  );
};

export default ChestXRay;
