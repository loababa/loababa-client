import { Button } from "@/components/ui/button.tsx";
import { Label } from "@/components/ui/label.tsx";
import { Input } from "@/components/ui/input.tsx";

interface SetJobImprintStepProps {
  handleNext: () => void;
}

export const TutorSetJobImprintStep = ({
  handleNext
}: SetJobImprintStepProps) => {
  return (
    <div className="w-full">
      <form onSubmit={(data) => console.log(data)}>
        <fieldset>
          <div className="flex flex-col mt-[40px]">
            <Label
              htmlFor="job-imprint-1"
              className="flex flex-col gap-[8px]">
              <span className="font-semibold text-[16px]">
                직업 각인을 입력해주세요
              </span>
              <span className="text-[12px] text-gray-400">
                (3글자 이내) 직업의 각인을 입력 해주세요. ex:만개,분망,포강,화강
              </span>
            </Label>
            <div className="flex flex-col gap-[12px] mt-[20px]">
              <Input
                id="job-imprint-1"
                className="dark:bg-gray-900 dark:placeholder:text-gray-600 dark:border-gray-800 h-[52px] rounded-[8px]"
                placeholder="공백 포함 3글자 이내"
              />
              <Input
                id="job-imprint-2"
                className="dark:bg-gray-900 dark:placeholder:text-gray-600 dark:border-gray-800 h-[52px] rounded-[8px]"
                placeholder="공백 포함 3글자 이내"
              />
            </div>
          </div>
          <div className="flex flex-col mt-[40px]">
            <Label
              htmlFor="user-level"
              className="flex flex-col gap-[8px]">
              <span className="font-semibold text-[16px]">
                레벨을 입력해주세요.
              </span>
              <span className="text-[12px] text-gray-400">
                (4글자 이내) 멘토의 가장 높은 캐릭터 레벨을 작성 합니다.
              </span>
            </Label>
            <div className="flex flex-col gap-[12px] mt-[20px]">
              <Input
                id="user-level"
                className="dark:bg-gray-900 dark:placeholder:text-gray-600 dark:border-gray-800 h-[52px] rounded-[8px]"
                placeholder="숫자만 입력해주세요"
              />
            </div>
          </div>
        </fieldset>
        <Button
          type="submit"
          className="w-full mt-[300px]"
          onClick={handleNext}>
          다음
        </Button>
      </form>
    </div>
  );
};
