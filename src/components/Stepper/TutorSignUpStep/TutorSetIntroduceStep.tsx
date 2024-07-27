import { Button } from "@/components/ui/button.tsx";

interface SetIntroduceStepProps {
  handleNext: () => void;
}

export const TutorSetIntroduceStep = ({
  handleNext
}: SetIntroduceStepProps) => {
  return (
    <div>
      SetIntroduceStep
      <Button
        className="w-full mt-[300px]"
        onClick={handleNext}>
        다음
      </Button>
    </div>
  );
};
