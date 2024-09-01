import ProfileCard from "@/components/Card/ProfileCard.tsx";
import { ScrollArea } from "@/components/ui/scroll-area.tsx";
import { useQuery } from "@tanstack/react-query";
import { getTutorInfoList } from "@/apis/getTutorInfoList.ts";

const HomePage = () => {
  const { data: tutorInfoList } = useQuery({
    queryKey: ["tutor_profile"],
    queryFn: () => getTutorInfoList(),
    staleTime: 1000 * 60 * 60 // 1 hour
  });

  return (
    <div className="flex flex-col h-full overflow-y-scroll">
      <section className="flex flex-col pt-[20px] pb-[40px] px-[20px] gap-[8px]">
        <h2 className="text-[16px] text-gray-400">
          로스트아크를 즐기는데 어려움 없도록
        </h2>
        <h1 className="text-[24px] font-semibold">
          로아바바가 추천하는 <span className="text-green-400">로쌤</span>
        </h1>
      </section>

      <ScrollArea>
        <div className="flex flex-col gap-[16px] px-[20px]">
          {tutorInfoList?.data?.consultingListForm?.map((info, index) => (
            <ProfileCard
              tutorInfo={info}
              key={index}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default HomePage;
