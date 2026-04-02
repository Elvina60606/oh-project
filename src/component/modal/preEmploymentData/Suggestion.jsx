import { useFormContext } from "react-hook-form";

const Suggestion = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <div className="modal-body my-3 mx-md-5">
        <h5 className="my-2 text-primary">
          <i className="bi bi-file-earmark-medical me-2"></i>醫師建議
        </h5>
        <div className="mb-3">
          <label
            htmlFor="suggestion"
            className="form-label d-flex flex-wrap"
          ></label>
          <textarea
            type="text"
            rows="5"
            className={`form-control ${errors.suggestion ? "is-invalid" : ""} `}
            id="suggestion"
            placeholder="請填寫健檢結果之建議"
            {...register("suggestion", { required: "**請填寫健檢結果之建議" })}
          />
          {errors.suggestion && (
            <div className="invalid-feedback">{errors.suggestion.message}</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Suggestion;
