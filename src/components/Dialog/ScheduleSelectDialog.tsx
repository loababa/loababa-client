import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog.tsx";
import Header from "@/components/Header/Header.tsx";
import { ArrowLeft, Calendar as CalendarIcon } from "@/components/icons";
import { Button } from "@/components/ui/button.tsx";
import { Calendar } from "@/components/ui/calendar.tsx";
import Divider from "@/components/Divider/Divider.tsx";
import { useState } from "react";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { clsx } from "clsx";
import { TIME_ONE_HOUR_LIST } from "@/constants/time.ts";
import { ScrollArea } from "@/components/ui/scroll-area.tsx";

interface ScheduleDateSelectItemProps {
  time: string;
  isSelected: boolean;
  setSelectedTime: (time: string) => void;
}

const ScheduleTimeSelectItem = ({
  time,
  isSelected,
  setSelectedTime
}: ScheduleDateSelectItemProps) => {
  return (
    <div
      className={clsx(
        "w-full h-fit max-h-[50px] rounded-[8px] text-[14px] px-[20px] flex items-center justify-start py-[16px] cursor-pointer",
        isSelected
          ? "dark:text-white dark:bg-green-400 dark:hover:bg-green-400/80 font-semibold"
          : "dark:text-gray-200 border dark:bg-gray-900 dark:hover:bg-gray-900/80 dark:border-gray-800"
      )}
      onClick={() => {
        setSelectedTime(time);
      }}>
      {time}
    </div>
  );
};

interface ScheduleSelectDialogProps {
  trigger?: React.ReactNode;
}

const ScheduleSelectDialog = ({ trigger }: ScheduleSelectDialogProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string | undefined>();

  return (
    <Dialog>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent
        className="w-[390px] h-dvh overflow-y-scroll dark:bg-black dark:text-white !rounded-[0px] p-0 border-none"
        overlayClassName="bg-transparent"
        showCloseButton={false}>
        <DialogHeader className="space-y-0">
          <DialogTitle>
            <Header
              title="일정 선택"
              leftUI={
                <DialogClose>
                  <ArrowLeft
                    width={24}
                    height={24}
                  />
                </DialogClose>
              }
            />
          </DialogTitle>
          <DialogDescription className="hidden" />
          <div className="flex flex-col items-center">
            {/* 날짜 선택 영역 */}
            <section className="flex flex-col items-center px-[20px] w-full">
              <div className="w-full h-[50px] flex justify-start items-center p-[16px] rounded-[8px] bg-gray-900 border border-gray-800">
                <div className="flex gap-[4px]">
                  <CalendarIcon
                    width={18}
                    height={18}
                    color="white"
                  />
                  <span className="text-[14px]">
                    {selectedDate
                      ? format(selectedDate, "yyyy.MM.dd(E) ", { locale: ko })
                      : "날짜를 선택해주세요."}
                    {selectedTime && `${selectedTime}`}
                  </span>
                </div>
              </div>
              <Calendar
                mode="single"
                classNames={{ head_row: "flex text-center" }}
                selected={selectedDate}
                onSelect={setSelectedDate}
              />
            </section>
            <Divider
              size={4}
              className="border-gray-900 mb-[24px]"
            />
            {/* 시간 선택 영역 */}
            {selectedDate && (
              <section className="px-[20px] w-full flex flex-col gap-[8px]">
                <h2 className="text-start font-semibold">
                  시간을 선택해주세요.
                </h2>
                <ScrollArea className="h-[200px]">
                  <div className="w-full flex flex-col gap-[8px]">
                    {TIME_ONE_HOUR_LIST.map((time) => (
                      <ScheduleTimeSelectItem
                        time={time}
                        isSelected={selectedTime === time}
                        setSelectedTime={setSelectedTime}
                        key={time}
                      />
                    ))}
                  </div>
                </ScrollArea>
              </section>
            )}
          </div>
        </DialogHeader>

        <DialogFooter className="w-full px-[20px] pb-[20px] sm:justify-center">
          <DialogClose asChild>
            <Button
              disabled={!selectedTime}
              className="w-full text-[16px] font-semibold dark:bg-green-400 dark:hover:bg-green-400/80 dark:text-white py-[16px] h-fit max-h-[50px]">
              확인
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ScheduleSelectDialog;
