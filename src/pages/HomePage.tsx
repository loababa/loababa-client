import ProfileCard from "@/components/Card/ProfileCard.tsx";
import { ScrollArea } from "@/components/ui/scroll-area.tsx";

const HomePage = () => {
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
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </div>
      </ScrollArea>
    </div>
  );
};

export default HomePage;
