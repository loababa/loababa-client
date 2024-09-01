import { baseInstance } from "@/apis/index.ts";

export const getTutorInfoDetail = async (postId: string) => {
  const response = await baseInstance.get(`/api/v1/consulting/posts/${postId}`);
  return response.data;
};
