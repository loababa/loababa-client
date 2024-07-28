import { MockAvatar } from "@/components/icons";
import { Badge } from "@/components/ui/badge.tsx";
import { clsx } from "clsx";
import Divider from "@/components/Divider/Divider.tsx";
import { Button } from "@/components/ui/button.tsx";
import { useNavigate } from "react-router-dom";
import ROUTE_PATH from "@/constants/routePath.ts";

const TutorDetailPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section className="flex flex-col gap-[10px] px-[20px] mb-[30px]">
        <div className="flex gap-[8px]">
          <MockAvatar
            width={40}
            height={40}
          />
          <div className="flex flex-col">
            <span className="flex gap-[4px] items-center">
              <span className="text-[12px]">로쌤만믿어</span>
              <div className="text-c1 text-gray-300 py-[4px] px-[6px] bg-gray-800 rounded-[4px]">
                Lv.1670+
              </div>
            </span>
            <div className="flex gap-[4px] items-center">
              <span className="flex gap-[4px] items-center">
                <div className="w-[14px] h-[14px] rounded-full bg-gray-800" />
                <span className="text-[12px] text-gray-500">직업1</span>
              </span>
              <span className="flex gap-[4px] items-center">
                <div className="w-[14px] h-[14px] rounded-full bg-gray-800" />
                <span className="text-[12px] text-gray-500">직업2</span>
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-[4px] items-center">
          <Badge
            variant="outline"
            className={clsx(
              "w-fit min-h-[24px]",
              "dark:bg-gray-900 dark:text-[10px] dark:text-gray-200 dark:font-normal dark:border-gray-800"
            )}>
            키워드글자수
          </Badge>
          <Badge
            variant="outline"
            className={clsx(
              "w-fit min-h-[24px]",
              "dark:bg-gray-900 dark:text-[10px] dark:text-gray-200 dark:font-normal dark:border-gray-800"
            )}>
            키워드글자수
          </Badge>
          <Badge
            variant="outline"
            className={clsx(
              "w-fit min-h-[24px]",
              "dark:bg-gray-900 dark:text-[10px] dark:text-gray-200 dark:font-normal dark:border-gray-800"
            )}>
            키워드글자수
          </Badge>
          <Badge
            variant="outline"
            className={clsx(
              "w-fit min-h-[24px]",
              "dark:bg-gray-900 dark:text-[10px] dark:text-gray-200 dark:font-normal dark:border-gray-800"
            )}>
            키워드글자수
          </Badge>
        </div>
      </section>
      <Divider
        size={4}
        className="mb-[30px]"
      />
      <section className="px-[20px]">
        <p className="flex flex-col gap-[16px] mb-[40px]">
          <span className="text-[18px] font-semibold">
            당신을 최고의 서포터로 만들겠습니다.
          </span>
          <span className="text-[14px] text-gray-400">
            당신을 최고의 서포터로 만들어 드리겠습니다. 모코코 언제든 환영 🙌🏻
            글자는 공백 포함 700글자까지 가능
          </span>
        </p>
        <div className="flex flex-col gap-[4px]">
          <span className="text-[16px] font-semibold">
            로쌤과 가능한 대화 주제
          </span>
          <div className="flex flex-col gap-[8px] mt-[10px] mb-[78px]">
            <div className="w-full bg-gray-950 rounded-[8px] border-2 border-[#75FFBF]/10 py-[15px] px-[20px]">
              <span className="text-gray-200 text-[14px]">
                공백포함8글자 내외
              </span>
            </div>
            <div className="w-full bg-gray-950 rounded-[8px] border-2 border-[#75FFBF]/10 py-[15px] px-[20px]">
              <span className="text-gray-200 text-[14px]">
                공백포함8글자 내외
              </span>
            </div>
            <div className="w-full bg-gray-950 rounded-[8px] border-2 border-[#75FFBF]/10 py-[15px] px-[20px]">
              <span className="text-gray-200 text-[14px]">
                공백포함8글자 내외
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col p-[20px] bg-gray-950">
        <p className="flex flex-col mb-[16px]">
          <span className="text-[20px] font-semibold">로쌤에게 상담받기</span>
          <span className="text-[14px] text-gray-600">
            로쌤에게 상담을 요청해보세요!
          </span>
        </p>
        <Button
          variant="ghost"
          className="w-full bg-green-400 min-h-[56px] rounded-[8px] font-semibold"
          onClick={() => navigate(ROUTE_PATH.CONSULTING_REQUEST("1"))}>
          상담 요청하기
        </Button>
      </section>
    </div>
  );
};

export default TutorDetailPage;
