import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm, FormProvider } from "react-hook-form";
import { closeModal } from "../../../slice/modalSlice";
import { emptyPreEmploymentForm } from "../../../data/emptyPreEmploymentForm";
import { stepFields } from "../../../data/stepFields";

import DateAndCenter from "./DateAndCenter";
import PhysicalExam from "./PhysicalExam";
import PhysicalExam2 from "./PhysicalExam2";
import BiochemistryTest from "./BiochemistryTest";
import BloodTest from "./BloodTest";
import UrineTest from "./UrineTest";
import ChestXRay from "./ChestXRay";
import Suggestion from "./Suggestion";
import UploadFiles from "./UploadFiles";

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

  //最後一頁表單
  const stepKeys = Object.keys(stepFields).map(Number);
  const isLastStep = currentStep === Math.max(...stepKeys);

  const nextStep = async () => {
    const fieldsToValidate = stepFields[currentStep] || [];
    const isValid = await trigger(fieldsToValidate);
    if (isValid) setCurrentStep((prev) => prev + 1);
  };

  // 轉型別工具函數：遞迴轉換 **
  const convertStringToNumber = (obj) => {
    if (Array.isArray(obj)) {
      return obj.map(convertStringToNumber);
    } else if (obj && typeof obj === "object") {
      const result = {};
      for (const key in obj) {
        result[key] = convertStringToNumber(obj[key]);
      }
      return result;
    } else if (typeof obj === "string") {
      const num = Number(obj);
      return obj.trim() !== "" && !isNaN(num) ? num : obj;
    } else {
      return obj;
    }
  };

  const onSubmit = (data) => {
    const formattedData = convertStringToNumber({
      ...data,
      bloodTest: {
        ...data.bloodTest,
        rbc: data.bloodTest.rbc * 1000000,
        wbc: data.bloodTest.wbc * 1000000,
        platelets: data.bloodTest.platelets * 1000,
      },
    });
    console.log("提交資料", formattedData);
    dispatch(closeModal());
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="modal-layout" tabIndex="-1">
            <div className="modal-box">
              <div className="modal-header mt-2 mb-3">
                <h5 className="text-secondary ms-3">新進人員體格檢查資料</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => dispatch(closeModal())}
                ></button>
              </div>

              {currentStep === 0 && <DateAndCenter />}
              {currentStep === 1 && <PhysicalExam />}
              {currentStep === 2 && <PhysicalExam2 />}
              {currentStep === 3 && <BiochemistryTest />}
              {currentStep === 4 && <BloodTest />}
              {currentStep === 5 && <UrineTest />}
              {currentStep === 6 && <ChestXRay />}
              {currentStep === 7 && <Suggestion />}
              {currentStep === 8 && <UploadFiles />}

              <div className="modal-footer justify-content-center mt-5 mb-4 gap-3">
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
                    className="btn w-25 btnOutlineCheckup text-nowrap"
                    onClick={prevStep}
                  >
                    上一步
                  </button>
                )}
                {isLastStep ? (
                  <button type="submit" className="btn w-25 btnCheckup">
                    確認
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn w-25 btnCheckup text-nowrap"
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
