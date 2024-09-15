import { MockAvatar } from "@/components/icons";
import { Badge } from "@/components/ui/badge.tsx";
import { clsx } from "clsx";
import ROUTE_PATH from "@/constants/routePath.ts";
import { ConsultingPostListItem } from "@/types";
import { usePrivateNavigate } from "@/hooks/usePrivateNavigate.ts";

interface ProfileCardProps {
  consultingPostItem: ConsultingPostListItem;
}

const ProfileCard = ({ consultingPostItem }: ProfileCardProps) => {
  const { privateNavigate } = usePrivateNavigate();
  return (
    <div
      className="w-full min-h-[148px] bg-gray-900 rounded-[8px] p-[16px] flex flex-col cursor-pointer"
      onClick={() =>
        privateNavigate(
          ROUTE_PATH.TUTOR_DETAIL(
            consultingPostItem.consultingPostId.toString()
          ),
          { state: { info: consultingPostItem } }
        )
      }>
      <div className="flex gap-[8px]">
        <MockAvatar
          width={40}
          height={40}
        />
        <div className="flex flex-col gap-[4px]">
          <span className="flex gap-[4px] items-center">
            <span className="text-[12px]">{consultingPostItem.nickname}</span>
            <div className="text-c1 text-gray-300 py-[4px] px-[6px] bg-gray-800 rounded-[4px]">
              Lv.{consultingPostItem.highestLevel}
            </div>
          </span>
          <div className="flex gap-[4px] items-center">
            {consultingPostItem.classEngravings.map((item, index) => (
              <span
                className="flex gap-[4px] items-center"
                key={index}>
                <div className="w-[14px] h-[14px] rounded-full bg-gray-800" />
                <span className="text-[12px] text-gray-500">{item}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
      <span className="text-[14px] text-gray-200 font-semibold my-[16px]">
        {consultingPostItem.consultingTitle}
      </span>
      <div className="flex gap-[4px] items-center">
        {consultingPostItem.consultingTopics.map((topic, index) => (
          <Badge
            variant="outline"
            className={clsx(
              "w-fit min-h-[24px] truncate",
              "dark:text-[10px] dark:text-gray-200 dark:font-light dark:border-gray-800"
            )}
            key={index}>
            {topic}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
