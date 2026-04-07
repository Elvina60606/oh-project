import { useDispatch } from "react-redux";
import { closeModal } from "../../slice/modalSlice";
import { useFieldArray, useForm, useWatch } from "react-hook-form";

import { followUpForm } from "../../data/followUpForm";
import { useEffect } from "react";

const FollowUpModal = () => {
  const dispatch = useDispatch();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const selectSystem = useWatch({ control, name: "system" });
  const selectCategory = useWatch({ control, name: "category" });

  const seletedSystem = followUpForm.find((s) => s.system === selectSystem);
  const categories = seletedSystem?.categories || [];

  const selectedCategory = categories.find(
    (c) => c.category === selectCategory,
  );
  const fields = selectedCategory?.fields || [];

  const selectField = useWatch({ control, name: "field" });
  const selectedField = fields.find((f) => f.name === selectField);

  const {
    fields: formFields,
    append,
    remove,
  } = useFieldArray({
    control,
    name: "items",
  });

  useEffect(() => {
    if (!selectedField) return;

    // 避免重複新增
    const isExist = formFields.some(
      (item) => item.field === selectedField.name,
    );
    if (isExist) return;

    append({
      field: selectedField.name,
      label: selectedField.label,
      unit: selectedField.unit,
      value: "",
    });
  }, [selectedField, append, formFields]);

  const onSubmit = (followUpData) => {
    console.log(followUpData);
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
                  className={`form-control ${errors.followUpDate ? "is-invalid" : ""}`}
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
                    className={`form-select ${errors.system ? "is-invalid" : ""}`}
                    id="system"
                    {...register("system", { required: "**請選擇檢查系統" })}
                  >
                    <option value="">請選擇檢查系統</option>
                    {followUpForm.map((item) => (
                      <option key={item.system} value={item.system}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                  {errors.system && (
                    <div className="invalid-feedback">
                      {errors.system.message}
                    </div>
                  )}
                </div>
                <div className="col-md-6">
                  <select
                    className={`form-select ${errors.category ? "is-invalid" : ""}`}
                    id="category"
                    {...register("category", {
                      required: "**請選擇檢查類別",
                    })}
                  >
                    <option value="">請選擇檢查類別</option>
                    {categories.map((c) => (
                      <option key={c.category} value={c.category}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                  {errors.category && (
                    <div className="invalid-feedback">
                      {errors.category.message}
                    </div>
                  )}
                </div>
                <div className="col-md-6">
                  <select
                    className={`form-select ${errors.field ? "is-invalid" : ""}`}
                    id="field"
                    {...register("field", {
                      required: "**請選擇檢查項目",
                    })}
                  >
                    <option value="">請選擇檢查項目</option>
                    {fields.map((f) => (
                      <option key={f.name} value={f.name}>
                        {f.label}
                      </option>
                    ))}
                  </select>
                  {errors.field && (
                    <div className="invalid-feedback">
                      {errors.field.message}
                    </div>
                  )}
                </div>
                //研究這一段 //刪除最後一筆 // 顯示error
                {formFields.map((item, index) => (
                  <div key={item.id} className="row p-3 align-items-end">
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

                      {errors.items?.[index]?.value && (
                        <div className="invalid-feedback">
                          {errors.items[index].value.message}
                        </div>
                      )}
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
