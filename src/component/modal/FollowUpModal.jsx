import { useDispatch } from "react-redux";
import { closeModal } from "../../slice/modalSlice";
import { useFieldArray, useForm, useWatch } from "react-hook-form";

import { followUpForm } from "../../data/followUpForm";
import { useState } from "react";

const FollowUpModal = () => {
  const dispatch = useDispatch();
  const [noData, setNoData] = useState(false);

  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const selectSystem = useWatch({ control, name: "system" });
  const selectCategory = useWatch({ control, name: "category" });

  const selectedSystem = followUpForm.find((s) => s.system === selectSystem);
  const categories = selectedSystem?.categories || [];

  const selectedCategory = categories.find(
    (c) => c.category === selectCategory,
  );
  const fields = selectedCategory?.fields || [];

  const {
    fields: formFields,
    append,
    remove,
  } = useFieldArray({
    control,
    name: "items",
  });

  const handleAppendField = (fieldName) => {
    const field = fields.find((f) => f.name === fieldName);
    if (!field) return;

    const isExist = formFields.some((item) => item.field === field.name);
    if (isExist) return;

    append({
      field: field.name,
      label: field.label,
      unit: field.unit,
      value: "",
    });
    setNoData(false);
  };

  const onSubmit = (data) => {
    if (data.items.length === 0) {
      return setNoData(true);
    }

    const result = {
      followUpDate: data.followUpDate,
      followUpCenter: data.followUpCenter,
      items: data.items,
    };
    console.log(result);
    dispatch(closeModal());
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
                  className={`form-control ${errors.followUpCenter ? "is-invalid" : ""}`}
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
                <div className="mb-3">
                  <select
                    className="form-select"
                    id="system"
                    name="system"
                    value={selectSystem}
                    onChange={(e) => setValue("system", e.target.value)}
                  >
                    <option value="">請選擇檢查類別</option>
                    {followUpForm.map((item) => (
                      <option key={item.system} value={item.system}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-6">
                  <select
                    className="form-select"
                    id="category"
                    name="category"
                    value={selectCategory}
                    onChange={(e) => setValue("category", e.target.value)}
                  >
                    <option value="">請選擇檢查項目</option>
                    {categories.map((c) => (
                      <option key={c.category} value={c.category}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-6">
                  <select
                    className="form-select"
                    id="field"
                    name="field"
                    onChange={(e) => handleAppendField(e.target.value)}
                  >
                    <option value="">請選擇檢查名稱</option>
                    {fields.map((f) => (
                      <option key={f.name} value={f.name}>
                        {f.label}
                      </option>
                    ))}
                  </select>
                </div>
                {noData && <p className="text-danger my-3">**請輸入檢查結果</p>}
                {formFields.map((item, index) => (
                  <div key={item.id} className="row pt-3 align-items-end">
                    <div className="col-md-6">
                      <label>{item.label}</label>
                      <div className="input-group">
                        <input
                          type="number"
                          className={`form-control ${
                            errors.items?.[index]?.value ? "is-invalid" : ""
                          }`}
                          {...register(`items.${index}.value`, {
                            required: `**請輸入${item.label}`,
                          })}
                        />

                        {item.unit && (
                          <span className="input-group-text">{item.unit}</span>
                        )}
                      </div>
                    </div>

                    <div className="col-md-2">
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => remove(index)}
                      >
                        刪除
                      </button>
                    </div>
                  </div>
                ))}
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
