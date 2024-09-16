import { Button } from "@/components/ui/button.tsx";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from "@/components/ui/drawer.tsx";
import { ReactNode, useState } from "react";
import { XIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion.tsx";
import { Calendar, CheckCircleGreen } from "@/components/icons";

interface ConsultingSelectDrawerProps {
  trigger: ReactNode;
}

export const ConsultingSelectDrawer = ({
  trigger
}: ConsultingSelectDrawerProps) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [accordionValue, setAccordionValue] = useState([""]);

  return (
    <Drawer>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent
        className="max-w-[390px] w-full mx-auto"
        withHandle={false}>
        <DrawerHeader className="flex justify-between items-center px-[20px] pt-[20px] pb-[24px]">
          <DrawerTitle className="text-[16px]">상담 선택</DrawerTitle>
          <DrawerClose asChild>
            <XIcon className="h-[24px] w-[24px] cursor-pointer" />
          </DrawerClose>
          <DrawerDescription className="hidden" />
        </DrawerHeader>
        <section className="flex flex-col px-[20px]">
          <Accordion
            type="multiple"
            className="my-[8px]"
            value={accordionValue}
            onValueChange={setAccordionValue}>
            <AccordionItem
              value="accordion-content"
              className="bg-gray-900 border border-gray-800 rounded-[8px]">
              <AccordionTrigger
                className="px-[16px] text-[14px] font-normal py-3"
                chevronClassName="h-[24px] w-[24px]">
                {selected ? (
                  <span className="flex gap-[6px] items-center">
                    <CheckCircleGreen
                      width={18}
                      height={18}
                      color="white"
                    />
                    2024.03.10(월) 오후 07:00 ~ 오후 08:00
                  </span>
                ) : (
                  <span className="flex gap-[4px] items-center">상담 확정</span>
                )}
              </AccordionTrigger>
              {Array.from({ length: 3 }).map((_, index) => (
                <AccordionContent
                  key={index}
                  className="px-[16px] text-[14px] flex items-center py-[15px] dark:hover:bg-gray-800 cursor-pointer"
                  onClick={() => {
                    setSelected(index);
                    setAccordionValue([""]);
                  }}>
                  <span className="flex gap-[4px] items-center">
                    <Calendar
                      width={18}
                      height={18}
                      color="white"
                    />
                    2024.03.10(월) 오후 07:00 ~ 오후 08:00
                  </span>
                </AccordionContent>
              ))}
            </AccordionItem>
          </Accordion>
          <Button className="h-[50px] dark:bg-gray-900 dark:hover:bg-gray-800 border dark:border-gray-800 dark:text-white rounded-[8px] flex justify-start">
            상담 거절
          </Button>
        </section>
        <DrawerFooter className="flex flex-row gap-[10px] justify-center">
          <DrawerClose asChild>
            <Button className="w-full h-[50px] rounded-[8px] text-[16px]">
              취소
            </Button>
          </DrawerClose>
          <Button className="w-full h-[50px] rounded-[8px] text-[16px] dark:bg-green-400 dark:hover:bg-green-400/80 dark:text-white">
            확인
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
