import { MockAvatar } from "@/components/icons";
import { Badge } from "@/components/ui/badge.tsx";
import { clsx } from "clsx";
import Divider from "@/components/Divider/Divider.tsx";

const MyPage = () => {
  return (
    <div className="flex flex-col">
      <section className="flex flex-col gap-[10px] px-[20px] mb-[30px]">
        <div className="flex gap-[8px]">
          <MockAvatar
            width={40}
            height={40}
          />
          <div className="flex flex-col gap-[4px]">
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
        className="mb-[15px]"
      />
      <section>
        <div className="w-full flex items-center justify-start px-[20px] py-[16px]">
          <span className="text-gray-400 font-normal">프로필 수정</span>
        </div>
        <div className="w-full flex items-center justify-start px-[20px] py-[16px]">
          <span className="text-gray-400 font-normal">로아바바 소개</span>
        </div>
        <div className="w-full flex items-center justify-start px-[20px] py-[16px]">
          <span className="text-gray-400 font-normal">회원탈퇴</span>
        </div>
      </section>
    </div>
  );
};

export default MyPage;
