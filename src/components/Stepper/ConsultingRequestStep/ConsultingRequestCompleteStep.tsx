import { Button } from "@/components/ui/button.tsx";
import { CheckCircleGreen } from "@/components/icons";
import Divider from "@/components/Divider/Divider.tsx";

interface ConsultingPendingStepProps {
  handleNext: () => void;
}

export const ConsultingRequestCompleteStep = ({
  handleNext
}: ConsultingPendingStepProps) => {
  return (
    <div className="w-full flex flex-col items-center">
      <section className="flex flex-col items-center gap-[24px] pt-[40px] pb-[60px] px-[20px]">
        <CheckCircleGreen
          width={36}
          height={36}
        />
        <div className="flex flex-col items-center gap-[8px]">
          <h1 className="text-[20px] font-semibold">
            상담 요청이 완료되었습니다!
          </h1>
          <h2 className="text-[14px] text-gray-400">
            로쌤의 확인 후 알림으로 안내할게요.
          </h2>
        </div>
      </section>
      <Divider
        size={1}
        className="border-gray-400"
      />
      <section className="w-full flex flex-col gap-[16px] pt-[18px] pb-[60px]">
        <div className="flex flex-col items-center gap-[16px]">
          <p className="w-full flex items-center justify-between gap-[12px]">
            <span className="text-[14px] text-gray-600">일정 선택 1</span>
            <span className="flex text-[14px] text-gray-400">
              2024.03.10(월) 오후 07:00 ~ 오후 08:00
            </span>
          </p>
          <p className="w-full flex items-center justify-between gap-[12px]">
            <span className="text-[14px] text-gray-600">일정 선택 1</span>
            <span className="flex text-[14px] text-gray-400">
              2024.03.10(월) 오후 07:00 ~ 오후 08:00
            </span>
          </p>
          <p className="w-full flex items-center justify-between gap-[12px]">
            <span className="text-[14px] text-gray-600">일정 선택 1</span>
            <span className="flex text-[14px] text-gray-400">
              2024.03.10(월) 오후 07:00 ~ 오후 08:00
            </span>
          </p>
        </div>
        <Divider
          size={0.5}
          className="border-gray-800"
        />
        <div className="flex flex-col items-center gap-[16px]">
          <p className="w-full flex items-center justify-between gap-[12px]">
            <span className="text-[14px] text-gray-600">캐릭터명</span>
            <span className="flex text-[14px] text-gray-400">로아바바</span>
          </p>
          <p className="w-full flex items-center justify-between gap-[12px]">
            <span className="text-[14px] text-gray-600">직업 각인</span>
            <span className="flex text-[14px] text-gray-400">질풍</span>
          </p>
          <p className="w-full flex items-center justify-between gap-[12px]">
            <span className="text-[14px] text-gray-600">아이템 레벨</span>
            <span className="flex text-[14px] text-gray-400">1610</span>
          </p>
        </div>
        <Divider
          size={0.5}
          className="border-gray-800"
        />
        <div className="flex flex-col items-center gap-[16px]">
          <p className="w-full flex justify-between gap-[12px]">
            <span className="text-[14px] text-gray-600 whitespace-nowrap">
              궁금한 사항
            </span>
            <span className="flex text-[14px] text-gray-400 text-end">
              성장 방향성, 원정대 컨설팅, 매너세팅, 작업 세부세팅, 고점 뽑기
            </span>
          </p>
          <p className="w-full flex items-center justify-between gap-[12px]">
            <span className="text-[14px] text-gray-600">로아 경력</span>
            <span className="flex text-[14px] text-gray-400">3년</span>
          </p>
        </div>
        <Divider
          size={0.5}
          className="border-gray-800"
        />
        <p className="w-full flex items-center justify-between gap-[12px]">
          <span className="text-[14px] text-gray-600">연락처</span>
          <span className="flex text-[14px] text-gray-400">010-1234-1234</span>
        </p>
      </section>
      <Button
        className="w-full text-[16px] font-semibold dark:bg-green-400 dark:hover:bg-green-400/80 dark:text-white py-[16px] h-fit max-h-[50px]"
        onClick={handleNext}>
        완료
      </Button>
    </div>
  );
};
