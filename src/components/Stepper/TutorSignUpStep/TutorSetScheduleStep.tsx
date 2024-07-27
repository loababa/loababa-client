import { Button } from "@/components/ui/button.tsx";

interface SetScheduleStepProps {
  handleNext: () => void;
}

export const TutorSetScheduleStep = ({ handleNext }: SetScheduleStepProps) => {
  return (
    <div>
      SetScheduleStep
      <Button
        className="w-full mt-[300px]"
        onClick={handleNext}>
        다음
      </Button>
    </div>
  );
};
