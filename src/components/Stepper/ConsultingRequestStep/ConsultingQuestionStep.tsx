import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { clsx } from "clsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import { Checkbox } from "@/components/ui/checkbox.tsx";

interface ConsultingQuestionStepProps {
  handleNext: () => void;
}

export const ConsultingQuestionStep = ({
  handleNext
}: ConsultingQuestionStepProps) => {
  return (
    <div className="w-full py-[20px] flex flex-col">
      <section className="w-full flex flex-col justify-start">
        <h1 className="text-[18px] font-bold">무엇이 궁금한가요?</h1>
        <span className="text-[14px] text-gray-400">
          보다 세심한 상담을 위한 질문을 자세히 작성해주세요.
        </span>
      </section>
      <section className="w-full mt-[60px] mb-[50px]">
        <fieldset className="w-full flex flex-col gap-[30px]">
          <div className="flex flex-col gap-[10px]">
            <legend className="text-[14px]">
              Q1.상담을 원하는 캐릭터명, 직업 각인, 아이템 레벨을 입력해주세요.*
            </legend>
            <Input
              placeholder="ex : 로아바바 질풍 1610"
              className={clsx(
                "rounded-[8px] py-[15px] px-[16px] h-fit",
                "dark:bg-gray-900 dark:border-gray-800 dark:placeholder:text-gray-600 dark:placeholder:text-[14px]"
              )}
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <legend className="text-[14px]">
              Q2. 궁금한 사항을 상세히 적어주세요. 원활한 상담에 큰 도움이
              됩니다.*
            </legend>
            <Textarea
              placeholder="ex : 성장 방향성, 원정대 컨설팅, 매너세팅, 작업 세부세팅, 고점 뽑기"
              className={clsx(
                "rounded-[8px] py-[15px] px-[16px] h-fit",
                "dark:bg-gray-900 dark:border-gray-800 dark:placeholder:text-gray-600 dark:placeholder:text-[14px]"
              )}
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <legend className="text-[14px]">
              Q3. 로아 경력을 입력해주세요.*
            </legend>
            <Input
              placeholder="숫자만 입력해주세요."
              className={clsx(
                "rounded-[8px] py-[15px] px-[16px] h-fit",
                "dark:bg-gray-900 dark:border-gray-800 dark:placeholder:text-gray-600 dark:placeholder:text-[14px]"
              )}
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <legend className="text-[14px]">
              Q4. 알림 받을 연락처를 입력해주세요.(알림송부)*
            </legend>
            <Input
              placeholder="숫자만 입력해주세요."
              className={clsx(
                "rounded-[8px] py-[15px] px-[16px] h-fit",
                "dark:bg-gray-900 dark:border-gray-800 dark:placeholder:text-gray-600 dark:placeholder:text-[14px]"
              )}
            />
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-[8px]">
              <Checkbox />
              <legend className="text-[14px] text-gray-200">
                개인정보수집 및 활용에 동의합니다
              </legend>
            </div>
            <a
              className="text-[14px] text-gray-400 underline"
              href="https://naver.com"
              target="_blank">
              보기
            </a>
          </div>
        </fieldset>
      </section>
      <Button
        className="text-[16px] font-semibold dark:bg-green-400 dark:hover:bg-green-400/80 dark:text-white py-[16px] h-fit max-h-[50px]"
        onClick={handleNext}>
        다음
      </Button>
    </div>
  );
};
