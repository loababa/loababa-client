import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthStore = {
  accessToken: {
    value: string;
  };
  refreshToken: {
    value: string;
  };
  setToken: (accessToken: string, refreshToken: string) => void;
  resetAuthInfo: () => void;
};

const authStore = create(
  persist<AuthStore>(
    (set) => ({
      accessToken: {
        value: ""
      },
      refreshToken: {
        value: ""
      },
      setToken: (accessToken: string, refreshToken: string) =>
        set({
          accessToken: {
            value: accessToken
          },
          refreshToken: {
            value: refreshToken
          }
        }),
      resetAuthInfo: () => {
        set({
          accessToken: {
            value: ""
          },
          refreshToken: {
            value: ""
          }
        });
      }
    }),
    {
      name: "auth-storage"
    }
  )
);

export default authStore;
