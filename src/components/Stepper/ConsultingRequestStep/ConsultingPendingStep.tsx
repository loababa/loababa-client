import { Button } from "@/components/ui/button.tsx";

interface ConsultingPendingStepProps {
  handleNext: () => void;
}

export const ConsultingPendingStep = ({
  handleNext
}: ConsultingPendingStepProps) => {
  return (
    <div>
      <Button onClick={handleNext}>다음</Button>
    </div>
  );
};
