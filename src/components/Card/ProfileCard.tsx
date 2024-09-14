import { MockAvatar } from "@/components/icons";
import { Badge } from "@/components/ui/badge.tsx";
import { clsx } from "clsx";
import ROUTE_PATH from "@/constants/routePath.ts";
import { TutorInfo } from "@/types";
import { usePrivateNavigate } from "@/hooks/usePrivateNavigate.ts";

interface ProfileCardProps {
  tutorInfo: TutorInfo;
}

const ProfileCard = ({ tutorInfo }: ProfileCardProps) => {
  const { privateNavigate } = usePrivateNavigate();
  return (
    <div
      className="w-full min-h-[148px] bg-gray-900 rounded-[8px] p-[16px] flex flex-col cursor-pointer"
      onClick={() =>
        privateNavigate(
          ROUTE_PATH.TUTOR_DETAIL(tutorInfo.consultingPostId.toString()),
          { state: { info: tutorInfo } }
        )
      }>
      <div className="flex gap-[8px]">
        <MockAvatar
          width={40}
          height={40}
        />
        <div className="flex flex-col gap-[4px]">
          <span className="flex gap-[4px] items-center">
            <span className="text-[12px]">{tutorInfo.nickname}</span>
            <div className="text-c1 text-gray-300 py-[4px] px-[6px] bg-gray-800 rounded-[4px]">
              Lv.{tutorInfo.highestLevel}
            </div>
          </span>
          <div className="flex gap-[4px] items-center">
            {tutorInfo.classEngravings.map((item, index) => (
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
        {tutorInfo.consultingTitle}
      </span>
      <div className="flex gap-[4px] items-center">
        {tutorInfo.consultingTopics.map((topic, index) => (
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
