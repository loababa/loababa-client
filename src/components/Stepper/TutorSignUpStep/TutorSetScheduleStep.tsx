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
import { Control, Controller, useFieldArray, useForm } from "react-hook-form";
import { weekDayMap } from "@/constants/date.ts";
import {
  consultingInfoStore,
  DailySchedule
} from "@/stores/consultingInfoStore.ts";
import { useNavigate } from "react-router-dom";
import ROUTE_PATH from "@/constants/routePath.ts";

interface SetScheduleStepProps {
  handleComplete: () => Promise<void>;
}

export const TutorSetScheduleStep = ({
  handleComplete
}: SetScheduleStepProps) => {
  const navigate = useNavigate();
  const { setWeekly, setDaily } = consultingInfoStore();
  const [scheduleSelectMode, setScheduleSelectMode] = useState<
    "weekday" | "day"
  >("weekday");
  const { control: weekdayControl, handleSubmit: handleWeekdaySubmit } =
    useForm<{
      weekdayStartTime: string;
      weekdayEndTime: string;
      weekendStartTime: string;
      weekendEndTime: string;
    }>();

  const { control: dayControl, handleSubmit: handleDaySubmit } = useForm<{
    weekSchedule: { day: string; startTime: string; endTime: string }[];
  }>({
    defaultValues: {
      weekSchedule: [
        { day: "monday", startTime: "", endTime: "" },
        { day: "tuesday", startTime: "", endTime: "" },
        { day: "wednesday", startTime: "", endTime: "" },
        { day: "thursday", startTime: "", endTime: "" },
        { day: "friday", startTime: "", endTime: "" },
        { day: "saturday", startTime: "", endTime: "" },
        { day: "sunday", startTime: "", endTime: "" }
      ]
    }
  });
  const [currentDay, setCurrentDay] = useState("");
  const [currentDayIndex, setCurrentDayIndex] = useState(0);

  const { fields } = useFieldArray({
    control: dayControl,
    name: "weekSchedule"
  });

  return (
    <div className="w-full mt-[40px]">
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
      <form
        onSubmit={handleWeekdaySubmit((data) => {
          setWeekly(data);
          handleComplete().then(() => navigate(ROUTE_PATH.SIGNUP_SUCCESS));
        })}>
        {/* 평일 주말 달라요 */}
        {scheduleSelectMode === "weekday" && (
          <div className="flex flex-col gap-[12px] mt-[20px]">
            <span className="font-semibold text-[16px]">평일(월-금)</span>
            <div className="flex gap-[12px] justify-between">
              <div className="w-1/2 flex flex-col gap-[8px]">
                <span className="text-[14px]">시작 시간</span>
                <Controller
                  render={({ field }) => (
                    <Select onValueChange={field.onChange}>
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
                  )}
                  name={"weekdayStartTime"}
                  control={weekdayControl}
                />
              </div>
              <div className="w-1/2 flex flex-col gap-[8px]">
                <span className="text-[14px]">종료 시간</span>
                <Controller
                  render={({ field }) => (
                    <Select onValueChange={field.onChange}>
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
                  )}
                  name={"weekdayEndTime"}
                  control={weekdayControl}
                />
              </div>
            </div>

            <span className="font-semibold text-[16px]">주말(토-일)</span>
            <div className="flex gap-[12px] justify-between">
              <div className="w-1/2 flex flex-col gap-[8px]">
                <span className="text-[14px]">시작 시간</span>
                <Controller
                  render={({ field }) => (
                    <Select onValueChange={field.onChange}>
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
                  )}
                  name={"weekendStartTime"}
                  control={weekdayControl}
                />
              </div>
              <div className="w-1/2 flex flex-col gap-[8px]">
                <span className="text-[14px]">종료 시간</span>
                <Controller
                  render={({ field }) => (
                    <Select onValueChange={field.onChange}>
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
                  )}
                  name={"weekendEndTime"}
                  control={weekdayControl}
                />
              </div>
            </div>
          </div>
        )}
        {scheduleSelectMode === "weekday" && (
          <Button
            type="submit"
            className="w-full mt-[40px] dark:text-green-500">
            확인
          </Button>
        )}
      </form>

      <form
        onSubmit={handleDaySubmit((data) => {
          const processedData: { [key: string]: string } = {};
          data.weekSchedule.forEach((item) => {
            processedData[`${item.day}StartTime`] = item.startTime;
            processedData[`${item.day}EndTime`] = item.endTime;
          });
          setDaily(processedData as DailySchedule);
          handleComplete();
        })}>
        {/* 요일별로 달라요 */}
        {scheduleSelectMode === "day" && (
          <div className="flex flex-col gap-[40px] mt-[20px]">
            <div className="flex flex-col gap-[12px]">
              <span className="font-semibold text-[16px]">요일 선택</span>
              <div className="flex gap-[8px]">
                {fields.map((field, index) => (
                  <div
                    key={field.id}
                    onClick={() => {
                      setCurrentDay(field.day);
                      setCurrentDayIndex(index);
                    }}
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
            {fields.map((_, index) => (
              <DailySchedulePicker
                key={`daily-schedule-${index}`}
                control={dayControl}
                index={index}
                currentDayIndex={currentDayIndex}
              />
            ))}
          </div>
        )}
        {scheduleSelectMode === "day" && (
          <Button
            type="submit"
            className="w-full mt-[40px] dark:text-green-500">
            확인
          </Button>
        )}
      </form>
    </div>
  );
};

interface DailySchedulePickerProps {
  control: Control<{
    weekSchedule: { day: string; startTime: string; endTime: string }[];
  }>;
  index: number;
  currentDayIndex: number;
}

const DailySchedulePicker = ({
  control,
  index,
  currentDayIndex
}: DailySchedulePickerProps) => {
  return (
    <div
      className={clsx(
        "flex flex-col gap-[12px]",
        currentDayIndex !== index && "hidden"
      )}>
      <span className="text-[16px] font-semibold">시간 선택{index}</span>
      <div className="flex gap-[12px] justify-between">
        <div className="w-1/2 flex flex-col gap-[8px]">
          <span className="text-[14px]">시작 시간</span>
          <Controller
            render={({ field }) => (
              <Select onValueChange={field.onChange}>
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
            )}
            name={`weekSchedule.${index}.startTime`}
            control={control}
          />
        </div>
        <div className="w-1/2 flex flex-col gap-[8px]">
          <span className="text-[14px]">종료 시간</span>
          <Controller
            render={({ field }) => (
              <Select onValueChange={field.onChange}>
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
            )}
            name={`weekSchedule.${index}.endTime`}
            control={control}
          />
        </div>
      </div>
    </div>
  );
};
