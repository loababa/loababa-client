import { create } from "zustand";

type WeeklySchedule = {
  weekdayStartTime: string;
  weekdayEndTime: string;
  weekendStartTime: string;
  weekendEndTime: string;
};

type DailySchedule = {
  mondayStartTime: string;
  mondayEndTime: string;
  tuesdayStartTime: string;
  tuesdayEndTime: string;
  wednesdayStartTime: string;
  wednesdayEndTime: string;
  thursdayStartTime: string;
  thursdayEndTime: string;
  fridayStartTime: string;
  fridayEndTime: string;
  saturdayStartTime: string;
  saturdayEndTime: string;
  sundayStartTime: string;
  sundayEndTime: string;
};

type ConsultingInfoStore = {
  title: string;
  contents: string;
  topics: string[];
  weekly: WeeklySchedule;
  daily: DailySchedule;
  setTitle: (title: string) => void;
  setContents: (contents: string) => void;
  setTopics: (topics: string[]) => void;
  setWeekly: (weekly: WeeklySchedule) => void;
  setDaily: (daily: DailySchedule) => void;
};

export const consultingInfoStore = create<ConsultingInfoStore>((set) => ({
  title: "",
  contents: "",
  topics: [],
  weekly: {
    weekdayStartTime: "",
    weekdayEndTime: "",
    weekendStartTime: "",
    weekendEndTime: ""
  },
  daily: {
    mondayStartTime: "",
    mondayEndTime: "",
    tuesdayStartTime: "",
    tuesdayEndTime: "",
    wednesdayStartTime: "",
    wednesdayEndTime: "",
    thursdayStartTime: "",
    thursdayEndTime: "",
    fridayStartTime: "",
    fridayEndTime: "",
    saturdayStartTime: "",
    saturdayEndTime: "",
    sundayStartTime: "",
    sundayEndTime: ""
  },
  setTitle: (title: string) => set({ title }),
  setContents: (contents: string) => set({ contents }),
  setTopics: (topics: string[]) => set({ topics }),
  setDaily: (daily: DailySchedule) => set({ daily }),
  setWeekly: (weekly: WeeklySchedule) => set({ weekly })
}));
