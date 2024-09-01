import { baseInstance } from "@/apis/index.ts";

export const getTutorInfoList = async () => {
  const response = await baseInstance.get("/api/v1/consulting");
  return response.data;
};
