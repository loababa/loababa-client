import {
  SetIntroduceStep,
  SetJobImprintStep,
  SetNicknameStep,
  SetScheduleStep
} from "@/components/Stepper/SignUpStep";
import { useState } from "react";
import { clsx } from "clsx";

const STEP_INFO = [
  {
    label: "기본 정보",
    step: <SetNicknameStep />
  },
  {
    label: "직업 정보",
    step: <SetJobImprintStep />
  },
  {
    label: "로쌤 소개",
    step: <SetIntroduceStep />
  },
  {
    label: "일정 선택",
    step: <SetScheduleStep />
  }
];

const TutorSignUpStepper = () => {
  const [currentStep, setCurrentStep] = useState(0);
  return (
    <div className="w-full flex flex-col items-center px-[20px]">
      <div className="w-full flex justify-center items-center min-h-[65px] rounded-[8px] bg-gray-950 px-[20px] py-[16px]">
        {STEP_INFO.map((step, index) => (
          <div className="flex items-center">
            <div
              className="flex flex-col justify-center items-center gap-[7px] cursor-pointer"
              onClick={() => setCurrentStep(index)}>
              <span
                key={index}
                className={clsx(
                  `text-c1`,
                  currentStep === index ? "text-primary" : "text-gray-600"
                )}>
                {step.label}
              </span>
              <div className="flex items-center w-full">
                {/* Step 내부의 왼쪽 라인 */}
                <div
                  className={clsx(
                    "h-0.5 w-full border",
                    index === 0 ? "border-transparent" : "border-gray-600"
                  )}
                />
                <div
                  className={clsx(
                    "w-[12px] h-[12px] rounded-full shrink-0",
                    currentStep === index ? "bg-green-400" : "bg-gray-600"
                  )}
                />
                {/* Step 내부의 오른쪽 라인 */}
                <div
                  className={clsx(
                    "h-0.5 w-full border",
                    index === STEP_INFO.length - 1
                      ? "border-transparent"
                      : "border-gray-600"
                  )}
                />
              </div>
            </div>
            <div
              className={clsx(
                "flex items-center h-0.5 w-[40px] bg-gray-600 mt-[23px]",
                index === STEP_INFO.length - 1 ? "hidden" : "block"
              )}
            />
          </div>
        ))}
      </div>
      {STEP_INFO[currentStep].step}
    </div>
  );
};

export default TutorSignUpStepper;
