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
import { Controller, useFieldArray, useForm } from "react-hook-form";

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
              "w-1/2 min-h-[50px] text-[14px] font-normal",
              scheduleSelectMode === "weekday"
                ? "dark:bg-white dark:hover:bg-white dark:text-black dark:hover:text-black"
                : "dark:bg-gray-800 dark:hover:bg-gray-800 dark:text-white dark:hover:text-white"
            )}
            onClick={() => setScheduleSelectMode("weekday")}>
            평일 주말 달라요
          </Button>
          <Button
            type="button"
            variant={"ghost"}
            className={clsx(
              "w-1/2 min-h-[50px] text-[14px] font-normal dark:hover:bg-transparent",
              scheduleSelectMode === "day"
                ? "dark:bg-white dark:hover:bg-white dark:text-black dark:hover:text-black"
                : "dark:bg-gray-800 dark:hover:bg-gray-800 dark:text-white dark:hover:text-white"
            )}
            onClick={() => setScheduleSelectMode("day")}>
            요일별로 달라요
          </Button>
        </div>
        {/* 평일 주말 달라요 */}
        {scheduleSelectMode === "weekday" && (
          <div className="flex flex-col gap-[12px] mt-[20px]">
            <span className="font-semibold text-[16px]">평일(월-금)</span>
            <Controller
              control={control}
              render={({ field }) => (
                <Select
                  name="weekday"
                  onValueChange={field.onChange}>
                  <SelectTrigger className="min-h-[47px] dark:border-none dark:bg-gray-800">
                    <SelectValue placeholder={"시간을 선택해주세요!"} />
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
              )}
              name={"weekday"}
            />

            <span className="font-semibold text-[16px]">주말(토-일)</span>
            <Controller
              control={control}
              render={({ field }) => (
                <Select
                  name="weekend"
                  onValueChange={field.onChange}>
                  <SelectTrigger className="min-h-[47px] dark:border-none dark:bg-gray-800">
                    <SelectValue placeholder={"시간을 선택해주세요!"} />
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
              )}
              name={"weekend"}
            />
          </div>
        )}
        {/* 요일별로 달라요 */}
        {scheduleSelectMode === "day" && (
          <div className="flex flex-col gap-[12px] mt-[20px]">
            <span className="font-semibold text-[16px]">
              요일별로 시간을 선택해주세요!
            </span>
            {fields.map((field, index) => (
              <div
                key={field.id}
                className="flex items-center gap-[12px]">
                <span className="text-[14px] min-w-[35px] font-semibold">
                  {field.day.toUpperCase()}
                </span>
                <Controller
                  control={control}
                  render={({ field }) => (
                    <Select
                      name={`weekSchedule.${index}.time`}
                      onValueChange={field.onChange}>
                      <SelectTrigger className="min-h-[47px] dark:border-none dark:bg-gray-800">
                        <SelectValue placeholder={"시간을 선택해주세요!"} />
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
                  )}
                  name={`weekSchedule.${index}.time`}
                />
              </div>
            ))}
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
