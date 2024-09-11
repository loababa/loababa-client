import { baseInstance } from "@/apis/index.ts";

type PostTutorSignUpRequest = {
  nickname: string;
  profileImageUrl: string;
  classEngravings: string[];
  highestLevel: number;
};

type PostTutorSignUpResponse = {
  code: string;
  status: string;
  data: {
    accessToken: {
      value: string;
    };
    refreshToken: {
      value: string;
    };
  };
};

export const postTutorSignUp = async (
  data: PostTutorSignUpRequest,
  key: string
) => {
  try {
    const res = await baseInstance.post<
      PostTutorSignUpRequest,
      PostTutorSignUpResponse
    >(`/api/v1/lossam?key=${key}`, data);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
