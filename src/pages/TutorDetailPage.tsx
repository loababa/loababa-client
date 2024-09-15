import { MockAvatar } from "@/components/icons";
import { Badge } from "@/components/ui/badge.tsx";
import { clsx } from "clsx";
import Divider from "@/components/Divider/Divider.tsx";
import { Button } from "@/components/ui/button.tsx";
import { useLocation, useNavigate } from "react-router-dom";
import ROUTE_PATH from "@/constants/routePath.ts";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getConsultingPostDetail } from "@/apis/getConsultingPostDetail.ts";
import { TutorInfo } from "@/types";
import authStore from "@/stores/authStore.ts";

const TutorDetailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 추후에는 서버에서 받아온 데이터를 사용하도록 변경
  const { nickname, highestLevel, classEngravings, consultingTopics } = location
    .state.info as TutorInfo;
  const { isSignedIn } = authStore();

  useEffect(() => {
    if (!isSignedIn) {
      navigate(ROUTE_PATH.LOGIN);
    }
  }, [isSignedIn]);

  const { data: consultingDetail } = useQuery({
    queryKey: ["consulting_detail", location.state.info.consultingPostId],
    queryFn: () =>
      getConsultingPostDetail(location.state.info.consultingPostId),
    enabled: isSignedIn
  });

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
              <span className="text-[12px]">{nickname}</span>
              <div className="text-c1 text-gray-300 py-[4px] px-[6px] bg-gray-800 rounded-[4px]">
                Lv.{highestLevel}
              </div>
            </span>
            <div className="flex gap-[4px] items-center">
              {classEngravings.map((item, index) => (
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
        <div className="flex gap-[4px] items-center">
          {consultingTopics.map((topic, index) => (
            <Badge
              key={index}
              variant="outline"
              className={clsx(
                "w-fit min-h-[24px]",
                "dark:bg-gray-900 dark:text-[10px] dark:text-gray-200 dark:font-normal dark:border-gray-800"
              )}>
              {topic}
            </Badge>
          ))}
        </div>
      </section>
      <Divider
        size={4}
        className="mb-[30px]"
      />
      <section className="px-[20px]">
        <p className="flex flex-col gap-[16px] mb-[40px]">
          <span className="text-[18px] font-semibold">
            {consultingDetail?.data.title}
          </span>
          <span className="text-[14px] text-gray-400">
            {consultingDetail?.data.contents}
          </span>
        </p>
        <div className="flex flex-col gap-[4px]">
          <span className="text-[16px] font-semibold">
            로쌤과 가능한 대화 주제
          </span>
          <div className="flex flex-col gap-[8px] mt-[10px] mb-[78px]">
            {consultingDetail?.data.topics.map((topic, index) => (
              <div
                key={index}
                className="w-full bg-gray-950 rounded-[8px] border-2 border-[#75FFBF]/10 py-[15px] px-[20px]">
                <span className="text-gray-200 text-[14px]">{topic}</span>
              </div>
            ))}
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
