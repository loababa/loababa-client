import { baseInstance } from "@/apis/index.ts";

export const getS3PresignedUrl = async (fileName: string, fileType: string) => {
  try {
    const res = await baseInstance.get(
      `/api/v1/${fileType}/presigned-url?filename=${fileName}`
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
