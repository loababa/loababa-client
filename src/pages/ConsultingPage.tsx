import { useState } from "react";
import Tab from "@/components/Tab/Tab.tsx";
import { Calendar, MockAvatar } from "@/components/icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion.tsx";
import { Button } from "@/components/ui/button.tsx";
import { clsx } from "clsx";
import { useMediaQuery } from "@/hooks/useMediaQuery.ts";

type TabItem = "pending" | "confirmed" | "past";

const tabList: { label: string; key: TabItem }[] = [
  { label: "대기", key: "pending" },
  { label: "확정", key: "confirmed" },
  { label: "지난", key: "past" }
];

const ConsultingPage = () => {
  const [currentTab, setCurrentTab] = useState<TabItem>("pending");
  const isLongDevice = useMediaQuery("(min-height: 670px)");

  return (
    <>
      <section className="flex">
        {tabList.map(({ key, label }) => (
          <Tab
            key={key}
            label={label}
            isActive={currentTab === key}
            onClick={() => setCurrentTab(key)}
          />
        ))}
      </section>
      <section className="p-[20px] h-full">
        {currentTab === "pending" && (
          <div className="flex flex-col gap-[20px]">
            <span>대기 상담 1</span>
            <div className="flex flex-col">
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
              <span className="mt-[10px]">
                각인 지원이 완료되고 세팅을 해야하는데 어떻게 해야 효율적으로 할
                수 있을까요??? 또 서포터 세팅을 어떻..
              </span>
              <Accordion
                type="multiple"
                className="my-[8px]">
                <AccordionItem
                  value="item-1"
                  className="px-[16px] border-none bg-gray-800 rounded-[8px]">
                  <AccordionTrigger className="text-[14px] font-normal">
                    <span className="flex gap-[4px] items-center">
                      <Calendar
                        width={18}
                        height={18}
                        color="white"
                      />
                      2024.03.10(월) 오후 07:00 ~ 오후 08:00
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-[14px]">
                    <span className="flex gap-[4px] items-center">
                      <Calendar
                        width={18}
                        height={18}
                        color="white"
                      />
                      2024.03.10(월) 오후 07:00 ~ 오후 08:00
                    </span>
                  </AccordionContent>
                  <AccordionContent className="text-[14px]">
                    <span className="flex gap-[4px] items-center">
                      <Calendar
                        width={18}
                        height={18}
                        color="white"
                      />
                      2024.03.10(월) 오후 07:00 ~ 오후 08:00
                    </span>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <div className="flex gap-[10px]">
                <Button
                  variant="outline"
                  className="w-full dark:bg-gray-900 dark:hover:bg-gray-950 dark:border-gray-600">
                  상세 보기
                </Button>
                <Button
                  variant="default"
                  className="w-full">
                  상담 선택
                </Button>
              </div>
            </div>
          </div>
        )}
        {currentTab === "confirmed" && (
          <div className="flex flex-col gap-[20px]">
            <span>다가오는 상담 1</span>
            <div className="flex flex-col">
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
              <span className="mt-[10px]">
                각인 지원이 완료되고 세팅을 해야하는데 어떻게 해야 효율적으로 할
                수 있을까요??? 또 서포터 세팅을 어떻..
              </span>
              <div className="p-[16px] bg-gray-800 rounded-[8px] my-[8px]">
                <span className="text-[14px] font-normal">
                  <span className="flex gap-[4px] items-center">
                    <Calendar
                      width={18}
                      height={18}
                      color="white"
                    />
                    2024.03.10(월) 오후 07:00 ~ 오후 08:00
                  </span>
                </span>
              </div>
              <div className="flex gap-[10px]">
                <Button
                  variant="outline"
                  className="w-full dark:bg-gray-900 dark:hover:bg-gray-950 dark:border-gray-600">
                  상세 보기
                </Button>
              </div>
            </div>
          </div>
        )}
        {currentTab === "past" && (
          <div className="flex flex-col gap-[20px] h-full">
            <span>지난 상담 0</span>
            <div
              className={clsx(
                "flex flex-col gap-[12px] items-center h-full",
                isLongDevice ? "mt-[calc(60%)]" : "mt-[calc(45%)]"
              )}>
              <span className="text-[14px] text-gray-400">
                지난 상담이 없습니다.
              </span>
              <Button
                variant="outline"
                className="w-[170px] h-[50px] text-[16px] text-gray-200 dark:bg-gray-900 dark:hover:bg-gray-950 dark:border-gray-600 rounded-[8px]">
                로쌤 둘러보기
              </Button>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default ConsultingPage;
