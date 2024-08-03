import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { useNavigate } from "react-router-dom";
import ROUTE_PATH from "@/constants/routePath.ts";

interface StepperProps {
  stepInfo: {
    label: string;
    step: (handleNext: () => void) => JSX.Element;
  }[];
}
const Stepper = ({ stepInfo }: StepperProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // TODO: 임시 로직. 추후 SignUpTutor 페이지로부터 넘겨받는 handleComplete 함수 실행 로직으로 대체
    if (currentStep >= stepInfo.length) {
      navigate(ROUTE_PATH.HOME);
    }
  }, [currentStep]);
  return (
    <div className="w-full flex flex-col items-center px-[20px] pb-[30px]">
      <div className="w-full flex justify-center items-center min-h-[65px] rounded-[8px] bg-gray-950 px-[5px] py-[16px]">
        {stepInfo.map((step, index) => (
          <div
            className="flex items-center"
            key={`stepper-step-${index}`}>
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
                    index === stepInfo.length - 1
                      ? "border-transparent"
                      : "border-gray-600"
                  )}
                />
              </div>
            </div>
            <div
              className={clsx(
                "flex items-center h-0.5 min-w-[30px] max-w-[40px] bg-gray-600 mt-[23px]",
                index === stepInfo.length - 1 ? "hidden" : "block"
              )}
            />
          </div>
        ))}
      </div>
      {currentStep < stepInfo.length &&
        stepInfo[currentStep].step(() => setCurrentStep((prev) => prev + 1))}
    </div>
  );
};

export default Stepper;
