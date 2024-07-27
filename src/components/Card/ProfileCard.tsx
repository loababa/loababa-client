import { MockAvatar } from "@/components/icons";
import { Badge } from "@/components/ui/badge.tsx";
import { clsx } from "clsx";

const ProfileCard = () => {
  return (
    <div className="w-full min-h-[148px] bg-gray-900 rounded-[8px] p-[16px] flex flex-col">
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
      <span className="text-[14px] text-gray-200 font-semibold my-[16px]">
        당신을 최고의 서포터로 만들겠습니다. (한줄소개)
      </span>
      <div className="flex gap-[4px] items-center">
        <Badge
          variant="outline"
          className={clsx(
            "w-fit min-h-[24px]",
            "dark:text-[10px] dark:text-gray-200 dark:font-light dark:border-gray-800"
          )}>
          키워드글자수
        </Badge>
        <Badge
          variant="outline"
          className={clsx(
            "w-fit min-h-[24px]",
            "dark:text-[10px] dark:text-gray-200 dark:font-light dark:border-gray-800"
          )}>
          키워드글자수
        </Badge>
        <Badge
          variant="outline"
          className={clsx(
            "w-fit min-h-[24px]",
            "dark:text-[10px] dark:text-gray-200 dark:font-light dark:border-gray-800"
          )}>
          키워드글자수
        </Badge>
        <Badge
          variant="outline"
          className={clsx(
            "w-fit min-h-[24px]",
            "dark:text-[10px] dark:text-gray-200 dark:font-light dark:border-gray-800"
          )}>
          키워드글자수
        </Badge>
      </div>
    </div>
  );
};

export default ProfileCard;
