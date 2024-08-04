import { ConsultingQuestionStep } from "@/components/Stepper/ConsultingRequestStep/ConsultingQuestionStep.tsx";
import { ConsultingScheduleStep } from "@/components/Stepper/ConsultingRequestStep/ConsultingScheduleStep.tsx";
import { ConsultingPendingStep } from "@/components/Stepper/ConsultingRequestStep/ConsultingPendingStep.tsx";

export const consultingRequestStepInfo = [
  {
    label: "질문 작성",
    step: (handleNext: () => void) => (
      <ConsultingQuestionStep handleNext={handleNext} />
    )
  },
  {
    label: "일정 선택",
    step: (handleNext: () => void) => (
      <ConsultingScheduleStep handleNext={handleNext} />
    )
  },
  {
    label: "상담 대기",
    step: (handleNext: () => void) => (
      <ConsultingPendingStep handleNext={handleNext} />
    )
  }
];
