import { Button } from "@/components/ui/button.tsx";
import { Label } from "@/components/ui/label.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Plus } from "@/components/icons";
import { Textarea } from "@/components/ui/textarea.tsx";
import { Controller, useFieldArray, useForm } from "react-hook-form";

interface SetIntroduceStepProps {
  handleNext: () => void;
}

export const TutorSetIntroduceStep = ({
  handleNext
}: SetIntroduceStepProps) => {
  const { register, handleSubmit, formState, control } = useForm<{
    shortIntro: string;
    longIntro: string;
    consultingSubjects: { subject: string }[];
  }>({ defaultValues: { consultingSubjects: [{ subject: "" }] } });

  const { fields, append } = useFieldArray({
    control,
    name: "consultingSubjects"
  });
  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          handleNext();
        })}>
        <fieldset>
          <div className="flex flex-col mt-[40px]">
            <Label
              htmlFor="short-introduce"
              className="flex flex-col gap-[8px]">
              <span className="font-semibold text-[16px]">
                로쌤을 간략하게 소개해주세요. (한줄소개)
              </span>
              <span className="text-[12px] text-gray-400">
                한 번에 파악할 수 있도록 간략하게 작성해주세요.
              </span>
            </Label>
            <div className="flex flex-col gap-[4px] mt-[20px]">
              <Controller
                render={({ field }) => (
                  <>
                    <Textarea
                      id="short-introduce"
                      className="dark:bg-gray-900 dark:placeholder:text-gray-800 dark:border-gray-800 min-h-[120px] rounded-[8px]"
                      placeholder="ex. 당신을 최고의 서포터로 만들어 드리겠습니다."
                      value={field.value}
                      onChange={(event) => {
                        if (event.target.value.length <= 31) {
                          field.onChange(event);
                        }
                      }}
                    />
                    <div className="flex justify-between text-[12px] text-gray-800">
                      <span
                        className={
                          formState.errors.shortIntro?.type === "maxLength" ||
                          field.value?.length > 30
                            ? "text-red"
                            : ""
                        }>
                        최대 30자까지 입력 가능합니다
                      </span>
                      <span
                        className={
                          formState.errors.shortIntro?.type === "maxLength" ||
                          field.value?.length > 30
                            ? "text-red"
                            : ""
                        }>
                        {field.value?.length || 0}/30
                      </span>
                    </div>
                  </>
                )}
                control={control}
                name={"shortIntro"}
                rules={{ required: true, maxLength: 30 }}
              />
            </div>
          </div>
          <div className="flex flex-col mt-[40px]">
            <Label
              htmlFor="long-introduce"
              className="flex flex-col gap-[8px]">
              <span className="font-semibold text-[16px]">
                자기소개서를 최대한 자세히 작성해주세요.
              </span>
              <span className="text-[12px] text-gray-400">
                로쌤 프로필 상세 정보에 제공되는 소개글입니다.
              </span>
            </Label>
            <div className="flex flex-col gap-[4px] mt-[20px]">
              <Controller
                render={({ field }) => (
                  <>
                    <Textarea
                      id="long-introduce"
                      className="dark:bg-gray-900 dark:placeholder:text-gray-800 dark:border-gray-800 min-h-[120px] rounded-[8px]"
                      placeholder="ex. 안녕하세요, 저는 OOO에 도움을 줄 수 있는 로쌤입니다. 서포터 힐 사이클부터 레이드별 패턴공략 캐릭터 셋팅까지 알려드리고 있어요."
                      value={field.value}
                      onChange={(event) => {
                        if (event.target.value.length <= 701) {
                          field.onChange(event);
                        }
                      }}
                    />
                    <div className="flex justify-between text-[12px] text-gray-800">
                      <span
                        className={
                          formState.errors.longIntro?.type === "maxLength" ||
                          field.value?.length > 700
                            ? "text-red"
                            : ""
                        }>
                        최대 700자까지 입력 가능합니다
                      </span>
                      <span
                        className={
                          formState.errors.longIntro?.type === "maxLength" ||
                          field.value?.length > 700
                            ? "text-red"
                            : ""
                        }>
                        {field.value?.length || 0}/700
                      </span>
                    </div>
                  </>
                )}
                control={control}
                name={"longIntro"}
                rules={{ required: true, maxLength: 700 }}
              />
            </div>
          </div>
          <div className="flex flex-col mt-[40px]">
            <Label
              htmlFor="consulting-subject-0"
              className="flex flex-col gap-[8px]">
              <span className="font-semibold text-[16px]">
                대화 가능한 주제를 입력해주세요.
              </span>
              <span className="text-[12px] text-gray-400">
                (6글자 이내)로쌤이 가장 자신 있는 주제를 작성합니다.
              </span>
            </Label>
            {fields.map((item, index) => (
              <div
                key={item.id}
                className="flex flex-col mt-[20px]">
                <Input
                  id={`consulting-subject-${index}`}
                  className="dark:bg-gray-900 dark:placeholder:text-gray-600 dark:border-gray-800 h-[52px] rounded-[8px]"
                  placeholder="서포터 케어"
                  {...register(`consultingSubjects.${index}.subject`, {
                    required: true,
                    maxLength: 6
                  })}
                />
              </div>
            ))}
            <div className="flex items-center justify-center w-[50px] h-[50px] bg-gray-800 hover:bg-gray-900 rounded-full mx-auto mt-[20px] cursor-pointer">
              <Plus
                width={22}
                height={22}
                onClick={() => append({ subject: "" })}
              />
            </div>
          </div>
        </fieldset>
        <Button
          type="submit"
          className="w-full mt-[100px]">
          다음
        </Button>
      </form>
    </div>
  );
};
