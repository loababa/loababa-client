import { baseInstance } from "@/apis/index.ts";
import { TutorInfo } from "@/types";

type GetTutorInfoListResponse = {
  code: string;
  message: string;
  data: {
    consultingListForm: TutorInfo[];
  };
};

export const getTutorInfoList = async () => {
  const response = await baseInstance.get<GetTutorInfoListResponse>(
    "/api/v1/consulting/posts"
  );
  return response.data;
};
