import { ConsultingQuestionStep } from "@/components/Stepper/ConsultingRequestStep/ConsultingQuestionStep.tsx";
import { ConsultingScheduleStep } from "@/components/Stepper/ConsultingRequestStep/ConsultingScheduleStep.tsx";
import { ConsultingRequestCompleteStep } from "@/components/Stepper/ConsultingRequestStep/ConsultingRequestCompleteStep.tsx";

export const consultingRequestStepInfo = [
  {
    label: "일정 선택",
    step: (handleNext: () => void) => (
      <ConsultingScheduleStep handleNext={handleNext} />
    )
  },
  {
    label: "질문 작성",
    step: (handleNext: () => void) => (
      <ConsultingQuestionStep handleNext={handleNext} />
    )
  },
  {
    label: "요청 완료",
    step: (handleNext: () => void) => (
      <ConsultingRequestCompleteStep handleNext={handleNext} />
    )
  }
];
