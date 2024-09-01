import { baseInstance } from "@/apis/index.ts";

export const getNicknameCheck = async (nickname: string) => {
  const response = await baseInstance.get(
    `/api/v1/lossam/nickname/check?nickname=${nickname}`
  );
  return response.data;
};
