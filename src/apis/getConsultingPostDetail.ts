import { baseInstance } from "@/apis/index.ts";
import { ConsultingPostDetail } from "@/types";

type ConsultingPostDetailResponse = {
  code: string;
  message: string;
  data: ConsultingPostDetail;
};

export const getConsultingPostDetail = async (postId: string) => {
  const response = await baseInstance.get<ConsultingPostDetailResponse>(
    `/api/v1/consulting/posts/${postId}`
  );
  return response.data;
};
