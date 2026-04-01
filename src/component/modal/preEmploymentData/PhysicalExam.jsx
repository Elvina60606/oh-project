import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

const PhysicalExam = () => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  // BMI
  const height = watch("physicalExam.height");
  const weight = watch("physicalExam.weight");
  useEffect(() => {
    if (height && weight) {
      const bmiData = (weight / (height / 100) ** 2).toFixed(1);
      setValue("physicalExam.bmi", bmiData);
    } else {
      setValue("physicalExam.bmi", "");
    }
  }, [height, weight, setValue]);

  return (
    <>
      <div className="modal-body my-3 mx-md-5">
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="height" className="form-label">
              身高 Height
            </label>
            <input
              type="number"
              className={`form-control ${errors.physicalExam?.height ? "is-invalid" : ""} `}
              id="height"
              placeholder="請輸入身高(cm)"
              {...register("physicalExam.height", { required: "**身高為必填" })}
            />
            {errors.physicalExam?.height && (
              <div className="invalid-feedback">
                {errors.physicalExam?.height.message}
              </div>
            )}
          </div>
          <div className="col-md-6">
            <label htmlFor="weight" className="form-label">
              體重 Weight
            </label>
            <input
              type="number"
              className={`form-control ${errors.physicalExam?.weight ? "is-invalid" : ""} `}
              id="weight"
              placeholder="請輸入體重(kg)"
              {...register("physicalExam.weight", { required: "**體重為必填" })}
            />
            {errors.physicalExam?.weight && (
              <div className="invalid-feedback">
                {errors.physicalExam?.weight.message}
              </div>
            )}
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="bmi" className="form-label">
              身體質量指數 BMI
            </label>
            <input
              readOnly
              type="number"
              step="0.1"
              className="form-control"
              id="bmi"
              placeholder="輸入身高體重後將自動帶入"
              {...register("physicalExam.bmi")}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="waistline" className="form-label">
              腰圍 Waistline
            </label>
            <input
              type="number"
              className={`form-control ${errors.physicalExam?.waistline ? "is-invalid" : ""} `}
              id="waistline"
              placeholder="請輸入腰圍(cm)"
              {...register("physicalExam.waistline", {
                required: "**腰圍為必填",
              })}
            />
            {errors.physicalExam?.waistline && (
              <div className="invalid-feedback">
                {errors.physicalExam?.waistline.message}
              </div>
            )}
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="sbp" className="form-label">
              收縮壓 Systolic Pressure
            </label>
            <input
              type="number"
              className={`form-control ${errors.physicalExam?.sbp ? "is-invalid" : ""} `}
              id="sbp"
              placeholder="請輸入收縮壓"
              {...register("physicalExam.sbp", {
                required: "**收縮壓為必填",
                minLength: {
                  value: 2,
                  message: "**數值至少爲 2 位數",
                },
              })}
            />
            {errors.physicalExam?.sbp && (
              <div className="invalid-feedback">
                {errors.physicalExam?.sbp.message}
              </div>
            )}
          </div>
          <div className="col-md-6">
            <label htmlFor="dbp" className="form-label">
              舒張壓 Diastolic Pressure
            </label>
            <input
              type="number"
              className={`form-control ${errors.physicalExam?.dbp ? "is-invalid" : ""} `}
              id="dbp"
              placeholder="請輸入舒張壓"
              {...register("physicalExam.dbp", {
                required: "**舒張壓為必填",
                minLength: {
                  value: 2,
                  message: "**數值至少爲 2 位數",
                },
              })}
            />
            {errors.physicalExam?.dbp && (
              <div className="invalid-feedback">
                {errors.physicalExam?.dbp.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PhysicalExam;
