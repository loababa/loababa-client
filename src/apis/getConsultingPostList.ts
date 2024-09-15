import { baseInstance } from "@/apis/index.ts";
import { ConsultingPostListItem } from "@/types";

type GetTutorInfoListResponse = {
  code: string;
  message: string;
  data: {
    consultingListForm: ConsultingPostListItem[];
  };
};

export const getConsultingPostList = async () => {
  const response = await baseInstance.get<GetTutorInfoListResponse>(
    "/api/v1/consulting/posts"
  );
  return response.data;
};
