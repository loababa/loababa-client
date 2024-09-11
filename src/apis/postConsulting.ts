import { DailySchedule, WeeklySchedule } from "@/stores/consultingInfoStore.ts";
import { baseInstance } from "@/apis/index.ts";

type PostConsultingRequest = {
  title: string;
  contents: string;
  topics: string[];
  weekly: WeeklySchedule;
  daily: DailySchedule;
};

export const postConsulting = async (data: PostConsultingRequest) => {
  try {
    const res = await baseInstance.post<PostConsultingRequest, void>(
      "/api/v1/consulting",
      data
    );
    return res;
  } catch (error) {
    console.error(error);
  }
};
