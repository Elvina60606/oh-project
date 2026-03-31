import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm, FormProvider } from "react-hook-form";
import { closeModal } from "../../../slice/modalSlice";
import { emptyPreEmploymentForm } from "../../../data/emptyPreEmploymentForm";

import DateAndCenter from "./DateAndCenter";
import PhysicalExam from "./PhysicalExam";

const PreEmploymentDataModal = () => {
  const dispatch = useDispatch();
  const [currentStep, setCurrentStep] = useState(0);

  const methods = useForm({
    mode: "onChange",
    defaultValues: emptyPreEmploymentForm,
  });

  const { trigger } = methods;

  const prevStep = () => {
    if (currentStep === 0) return;
    setCurrentStep((prev) => prev - 1);
  };
  const nextStep = async () => {
    const isValid = await trigger();
    if (isValid) setCurrentStep((prev) => prev + 1);
  };

  const onSubmit = (data) => {
    console.log("提交資料", data);
    dispatch(closeModal());
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="modal-layout" tabIndex="-1">
            <div className="modal-box">
              <div className="modal-header">
                <h5 className="text-secondary ms-3">
                  請輸入新進人員體格檢查資料
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => dispatch(closeModal())}
                ></button>
              </div>

              {currentStep === 0 && <DateAndCenter />}
              {currentStep === 1 && <PhysicalExam />}

              <div className="modal-footer justify-content-center my-3 gap-3">
                {currentStep === 0 ? (
                  <button
                    type="button"
                    className="btn w-25 btnOutlineCheckup"
                    onClick={() => dispatch(closeModal())}
                  >
                    取消
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn w-25 btnOutlineCheckup"
                    onClick={prevStep}
                  >
                    上一步
                  </button>
                )}
                {currentStep === 1 ? (
                  <button type="submit" className="btn w-25 btnCheckup">
                    確認
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn w-25 btnCheckup"
                    onClick={(e) => {
                      e.preventDefault();
                      nextStep();
                    }}
                  >
                    下一步
                  </button>
                )}
              </div>
            </div>
          </div>
        </form>
      </FormProvider>
    </>
  );
};
export default PreEmploymentDataModal;
