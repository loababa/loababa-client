import { Button } from "@/components/ui/button.tsx";
import ScheduleSelectDialog from "@/components/Dialog/ScheduleSelectDialog.tsx";
import { useState } from "react";
import { format } from "date-fns";
import { ko } from "date-fns/locale";

interface ConsultingScheduleStepProps {
  handleNext: () => void;
}

export const ConsultingScheduleStep = ({
  handleNext
}: ConsultingScheduleStepProps) => {
  const [firstSchedule, setFirstSchedule] = useState<{
    fromDate: Date;
    toDate: Date;
  }>();
  const [secondSchedule, setSecondSchedule] = useState<{
    fromDate: Date;
    toDate: Date;
  }>();
  const [thirdSchedule, setThirdSchedule] = useState<{
    fromDate: Date;
    toDate: Date;
  }>();

  return (
    <div className="w-full h-full py-[20px] flex flex-col justify-between">
      <div className="flex flex-col gap-[60px]">
        <section className="w-full flex flex-col justify-start">
          <h1 className="text-[18px] font-bold">일정을 선택해주세요.</h1>
          <span className="text-[14px] text-gray-400">
            3개의 일정 중 로쌤이 1개를 선택하여 상담이 확정됩니다.
          </span>
        </section>
        <section className="flex flex-col gap-[8px] ">
          <ScheduleSelectDialog
            trigger={
              <Button className="w-full py-[16px] h-fit max-h-[50px] rounded-[8px] justify-start text-[14px] dark:text-gray-200 border dark:bg-gray-900 dark:hover:bg-gray-900/80 dark:border-gray-800">
                {firstSchedule?.fromDate && firstSchedule.toDate
                  ? format(firstSchedule?.fromDate, "yyyy.MM.dd(E) hh:mm", {
                      locale: ko
                    }) +
                    " ~ " +
                    format(firstSchedule?.toDate, "hh:mm")
                  : "일정 선택 1"}
              </Button>
            }
            handleSubmit={setFirstSchedule}
          />
          <ScheduleSelectDialog
            trigger={
              <Button className="w-full py-[16px] h-fit max-h-[50px] rounded-[8px] justify-start text-[14px] dark:text-gray-200 border dark:bg-gray-900 dark:hover:bg-gray-900/80 dark:border-gray-800">
                {secondSchedule?.fromDate && secondSchedule.toDate
                  ? format(secondSchedule?.fromDate, "yyyy.MM.dd(E) hh:mm", {
                      locale: ko
                    }) +
                    " ~ " +
                    format(secondSchedule?.toDate, "hh:mm")
                  : "일정 선택 2"}
              </Button>
            }
            handleSubmit={setSecondSchedule}
          />
          <ScheduleSelectDialog
            trigger={
              <Button className="w-full py-[16px] h-fit max-h-[50px] rounded-[8px] justify-start text-[14px] dark:text-gray-200 border dark:bg-gray-900 dark:hover:bg-gray-900/80 dark:border-gray-800">
                {thirdSchedule?.fromDate && thirdSchedule.toDate
                  ? format(thirdSchedule?.fromDate, "yyyy.MM.dd(E) hh:mm", {
                      locale: ko
                    }) +
                    " ~ " +
                    format(thirdSchedule?.toDate, "hh:mm")
                  : "일정 선택 3"}
              </Button>
            }
            handleSubmit={setThirdSchedule}
          />
        </section>
      </div>
      <Button
        className="text-[16px] font-semibold dark:bg-green-400 dark:hover:bg-green-400/80 dark:text-white py-[16px] h-fit max-h-[50px]"
        onClick={handleNext}>
        다음
      </Button>
    </div>
  );
};
