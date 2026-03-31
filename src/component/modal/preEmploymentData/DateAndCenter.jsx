import { useFormContext } from "react-hook-form";

const DateAndCenter = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <div className="modal-body my-3 mx-md-5">
        <div className="mb-3">
          <label htmlFor="checkUpDate" className="form-label d-flex flex-wrap">
            檢查日期
            <small className="ms-md-3 text-danger">
              * 請確認檢查日期仍在一年有效期限內。
            </small>
          </label>
          <input
            type="date"
            className={`form-control ${errors.checkUpDate ? "is-invalid" : ""} `}
            id="checkUpDate"
            placeholder="請輸入檢驗日期"
            {...register("checkUpDate", { required: "**檢查日期為必填" })}
          />
          {errors.checkUpDate && (
            <div className="invalid-feedback">{errors.checkUpDate.message}</div>
          )}
        </div>
        <div className="mb-3">
          <label
            htmlFor="checkUpCenter"
            className="form-label d-flex flex-wrap"
          >
            檢查機構
            <small className="ms-md-3 text-danger">
              * 請確認為職業安全衛生署認可之醫療機構。
              <a
                className="badge text-bg-success"
                href="https://hrpts.osha.gov.tw/Home/CertifiedHospInfoSearch"
                target="_blank"
                rel="noopener noreferrer"
              >
                查詢
              </a>
            </small>
          </label>
          <input
            type="text"
            className={`form-control ${errors.checkUpCenter ? "is-invalid" : ""} `}
            id="checkUpCenter"
            placeholder="請輸入檢查機構名稱"
            {...register("checkUpCenter", { required: "**檢查機構為必填" })}
          />
          {errors.checkUpCenter && (
            <div className="invalid-feedback">
              {errors.checkUpCenter.message}
            </div>
          )}
        </div>
        <div className="form-check">
          <input
            className={`form-check-input ${errors.confirmDateAndCenter ? "is-invalid" : ""} `}
            type="checkbox"
            value=""
            id="confirmDateAndCenter"
            {...register("confirmDateAndCenter", {
              required: "**請確認資料無誤後勾選",
            })}
          />
          <label className="form-check-label" htmlFor="confirmDateAndCenter">
            我已確認健康檢查日期及醫療機構均符合勞動部職業安全衛生法規定之標準。
            <p>如有問題或不實，本人將自行承擔相關責任。</p>
          </label>
          {errors.confirmDateAndCenter && (
            <div className="invalid-feedback">
              {errors.confirmDateAndCenter.message}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DateAndCenter;
