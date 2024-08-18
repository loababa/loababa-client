import { Button } from "@/components/ui/button.tsx";
import { useState } from "react";
import { clsx } from "clsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select.tsx";
import { TIME_HOUR_LIST } from "@/constants/time.ts";
import { useFieldArray, useForm } from "react-hook-form";
import { weekDayMap } from "@/constants/date.ts";

interface SetScheduleStepProps {
  handleNext: () => void;
}

export const TutorSetScheduleStep = ({ handleNext }: SetScheduleStepProps) => {
  const [scheduleSelectMode, setScheduleSelectMode] = useState<
    "weekday" | "day"
  >("weekday");
  const { control, handleSubmit } = useForm<{
    weekday: string;
    weekend: string;
    weekSchedule: { day: string; time: string }[];
  }>({
    defaultValues: {
      weekSchedule: [
        { day: "mon", time: "" },
        { day: "tue", time: "" },
        { day: "wed", time: "" },
        { day: "thu", time: "" },
        { day: "fri", time: "" },
        { day: "sat", time: "" },
        { day: "sun", time: "" }
      ]
    }
  });
  const [currentDay, setCurrentDay] = useState("");

  const { fields } = useFieldArray({
    control,
    name: "weekSchedule"
  });
  return (
    <div className="w-full mt-[40px]">
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          handleNext();
        })}>
        <p className="flex flex-col gap-[8px]">
          <span className="font-semibold text-[18px]">시간 선택</span>
          <span className="text-[14px] text-gray-600">
            멘토링 시간을 알려주세요
          </span>
        </p>
        <div className="flex items-center gap-[8px] mt-[12px]">
          <Button
            type="button"
            variant={"ghost"}
            className={clsx(
              "w-1/2 h-[47px] text-[14px] font-normal rounded-[8px]",
              scheduleSelectMode === "weekday"
                ? "dark:bg-green-400 dark:hover:bg-green-400/80 dark:text-white"
                : "dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white border dark:border-gray-800 dark:hover:text-white"
            )}
            onClick={() => setScheduleSelectMode("weekday")}>
            평일 주말 달라요
          </Button>
          <Button
            type="button"
            variant={"ghost"}
            className={clsx(
              "w-1/2 h-[47px] text-[14px] font-normal rounded-[8px]",
              scheduleSelectMode === "day"
                ? "dark:bg-green-400 dark:hover:bg-green-400/80 dark:text-white"
                : "dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white border dark:border-gray-800 dark:hover:text-white"
            )}
            onClick={() => setScheduleSelectMode("day")}>
            요일별로 달라요
          </Button>
        </div>
        {/* 평일 주말 달라요 */}
        {scheduleSelectMode === "weekday" && (
          <div className="flex flex-col gap-[12px] mt-[20px]">
            <span className="font-semibold text-[16px]">평일(월-금)</span>
            <div className="flex gap-[12px] justify-between">
              <div className="w-1/2 flex flex-col gap-[8px]">
                <span className="text-[14px]">시작 시간</span>
                <Select>
                  <SelectTrigger className="h-[50px] border dark:border-gray-800 dark:bg-gray-900 rounded-[8px]">
                    <SelectValue placeholder={"시간 선택"} />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-gray-800">
                    {TIME_HOUR_LIST.map((item) => (
                      <SelectItem
                        value={item}
                        key={item}
                        className="dark:hover:bg-gray-900 dark:focus:bg-gray-900">
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="w-1/2 flex flex-col gap-[8px]">
                <span className="text-[14px]">종료 시간</span>
                <Select>
                  <SelectTrigger className="h-[50px] border dark:border-gray-800 dark:bg-gray-900 rounded-[8px]">
                    <SelectValue placeholder={"시간 선택"} />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-gray-800">
                    {TIME_HOUR_LIST.map((item) => (
                      <SelectItem
                        value={item}
                        key={item}
                        className="dark:hover:bg-gray-900 dark:focus:bg-gray-900">
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <span className="font-semibold text-[16px]">주말(토-일)</span>
            <div className="flex gap-[12px] justify-between">
              <div className="w-1/2 flex flex-col gap-[8px]">
                <span className="text-[14px]">시작 시간</span>
                <Select>
                  <SelectTrigger className="h-[50px] border dark:border-gray-800 dark:bg-gray-900 rounded-[8px]">
                    <SelectValue placeholder={"시간 선택"} />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-gray-800">
                    {TIME_HOUR_LIST.map((item) => (
                      <SelectItem
                        value={item}
                        key={item}
                        className="dark:hover:bg-gray-900 dark:focus:bg-gray-900">
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="w-1/2 flex flex-col gap-[8px]">
                <span className="text-[14px]">종료 시간</span>
                <Select>
                  <SelectTrigger className="h-[50px] border dark:border-gray-800 dark:bg-gray-900 rounded-[8px]">
                    <SelectValue placeholder={"시간 선택"} />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-gray-800">
                    {TIME_HOUR_LIST.map((item) => (
                      <SelectItem
                        value={item}
                        key={item}
                        className="dark:hover:bg-gray-900 dark:focus:bg-gray-900">
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )}
        {/* 요일별로 달라요 */}
        {scheduleSelectMode === "day" && (
          <div className="flex flex-col gap-[40px] mt-[20px]">
            <div className="flex flex-col gap-[12px]">
              <span className="font-semibold text-[16px]">요일 선택</span>
              <div className="flex gap-[8px]">
                {fields.map((field) => (
                  <div
                    key={field.id}
                    onClick={() => setCurrentDay(field.day)}
                    className={clsx(
                      "w-[45px] h-[50px] flex justify-center items-center rounded-[8px] cursor-pointer",
                      currentDay === field.day
                        ? "bg-green-400 border-none"
                        : "bg-gray-900 border border-gray-800"
                    )}>
                    <span className="text-[14px]">
                      {weekDayMap.get(field.day)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-[12px]">
              <span className="text-[16px] font-semibold">시간 선택</span>
              <div className="flex gap-[12px] justify-between">
                <div className="w-1/2 flex flex-col gap-[8px]">
                  <span className="text-[14px]">시작 시간</span>
                  <Select>
                    <SelectTrigger className="h-[50px] border dark:border-gray-800 dark:bg-gray-900 rounded-[8px]">
                      <SelectValue placeholder={"시간 선택"} />
                    </SelectTrigger>
                    <SelectContent className="dark:bg-gray-800">
                      {TIME_HOUR_LIST.map((item) => (
                        <SelectItem
                          value={item}
                          key={item}
                          className="dark:hover:bg-gray-900 dark:focus:bg-gray-900">
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-1/2 flex flex-col gap-[8px]">
                  <span className="text-[14px]">종료 시간</span>
                  <Select>
                    <SelectTrigger className="h-[50px] border dark:border-gray-800 dark:bg-gray-900 rounded-[8px]">
                      <SelectValue placeholder={"시간 선택"} />
                    </SelectTrigger>
                    <SelectContent className="dark:bg-gray-800">
                      {TIME_HOUR_LIST.map((item) => (
                        <SelectItem
                          value={item}
                          key={item}
                          className="dark:hover:bg-gray-900 dark:focus:bg-gray-900">
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        )}
        <Button
          type="submit"
          className="w-full mt-[40px] dark:text-green-500">
          확인
        </Button>
      </form>
    </div>
  );
};
