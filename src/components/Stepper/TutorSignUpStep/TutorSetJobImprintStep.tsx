import { Button } from "@/components/ui/button.tsx";
import { Label } from "@/components/ui/label.tsx";
import { Input } from "@/components/ui/input.tsx";
import { useForm } from "react-hook-form";

interface SetJobImprintStepProps {
  handleNext: () => void;
}

export const TutorSetJobImprintStep = ({
  handleNext
}: SetJobImprintStepProps) => {
  const { register, handleSubmit, formState } = useForm<{
    firstJobImprint: string;
    secondJobImprint: string;
    highestLevel: number;
  }>();
  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit(
          ({ firstJobImprint, secondJobImprint, highestLevel }) => {
            console.log({
              classEngravings: [firstJobImprint, secondJobImprint],
              highestLevel: highestLevel
            });
            // handleNext();
          }
        )}>
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
                {...register("firstJobImprint", {
                  required: true,
                  maxLength: 3
                })}
              />
              <Input
                id="job-imprint-2"
                className="dark:bg-gray-900 dark:placeholder:text-gray-600 dark:border-gray-800 h-[52px] rounded-[8px]"
                placeholder="공백 포함 3글자 이내"
                {...register("secondJobImprint", {
                  required: true,
                  maxLength: 3
                })}
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
                {...register("highestLevel", {
                  required: true,
                  pattern: /^[0-9]+$/
                })}
              />
            </div>
          </div>
        </fieldset>
        <Button
          type="submit"
          disabled={!formState.isValid}
          className="w-full mt-[40px]">
          다음
        </Button>
      </form>
    </div>
  );
};
