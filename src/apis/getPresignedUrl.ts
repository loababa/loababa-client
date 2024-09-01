import { baseInstance } from "@/apis/index.ts";

export const getPresignedUrl = async (fileName: string) => {
  const response = await baseInstance.get(
    `/api/v1/profile-images/presigned-url?fileName=${fileName}`
  );
  return response.data;
};
