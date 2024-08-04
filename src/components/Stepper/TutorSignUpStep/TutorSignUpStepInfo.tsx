import { TutorSetNicknameStep } from "@/components/Stepper/TutorSignUpStep/TutorSetNicknameStep.tsx";
import { TutorSetJobImprintStep } from "@/components/Stepper/TutorSignUpStep/TutorSetJobImprintStep.tsx";
import { TutorSetIntroduceStep } from "@/components/Stepper/TutorSignUpStep/TutorSetIntroduceStep.tsx";
import { TutorSetScheduleStep } from "@/components/Stepper/TutorSignUpStep/TutorSetScheduleStep.tsx";

// TODO: 각 요소 step에서 handleSubmit도 받아서 Root Form Data에 저장해야 함
export const tutorSignUpStepInfo = [
  {
    label: "기본 정보",
    step: (handleNext: () => void) => (
      <TutorSetNicknameStep handleNext={handleNext} />
    )
  },
  {
    label: "직업 정보",
    step: (handleNext: () => void) => (
      <TutorSetJobImprintStep handleNext={handleNext} />
    )
  },
  {
    label: "로쌤 소개",
    step: (handleNext: () => void) => (
      <TutorSetIntroduceStep handleNext={handleNext} />
    )
  },
  {
    label: "일정 선택",
    step: (handleNext: () => void) => (
      <TutorSetScheduleStep handleNext={handleNext} />
    )
  }
];
