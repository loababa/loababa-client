import { Button } from "@/components/ui/button.tsx";

interface SetJobImprintStepProps {
  handleNext: () => void;
}

export const TutorSetJobImprintStep = ({
  handleNext
}: SetJobImprintStepProps) => {
  return (
    <div>
      SetJobImprintStep
      <Button
        className="w-full mt-[300px]"
        onClick={handleNext}>
        다음
      </Button>
    </div>
  );
};
