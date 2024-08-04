import { Button } from "@/components/ui/button.tsx";

interface ConsultingScheduleStepProps {
  handleNext: () => void;
}

export const ConsultingScheduleStep = ({
  handleNext
}: ConsultingScheduleStepProps) => {
  return (
    <div>
      <Button onClick={handleNext}>다음</Button>
    </div>
  );
};
