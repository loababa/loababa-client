import { baseInstance } from "@/apis/index.ts";

type GetOAuthLoginResponse = {
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

export const getOAuthLogin = async (provider: string, code: string) => {
  try {
    const res = baseInstance.get<never, GetOAuthLoginResponse>(
      `/api/v1/oauth/${provider}?code=${code}`
    );
    return res;
  } catch (error) {
    console.error(error);
  }
};
