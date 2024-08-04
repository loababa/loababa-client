import { Button } from "@/components/ui/button.tsx";

interface ConsultingQuestionStepProps {
  handleNext: () => void;
}

export const ConsultingQuestionStep = ({
  handleNext
}: ConsultingQuestionStepProps) => {
  return (
    <div>
      <Button onClick={handleNext}>다음</Button>
    </div>
  );
};
