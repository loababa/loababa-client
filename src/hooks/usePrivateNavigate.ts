import authStore from "@/stores/authStore.ts";
import { NavigateOptions, useNavigate } from "react-router-dom";

export const usePrivateNavigate = () => {
  const { isSignedIn } = authStore();
  const navigate = useNavigate();

  const privateNavigate = (to: string, options?: NavigateOptions) => {
    if (!isSignedIn) {
      console.log("You are not signed in");
      return;
    }
    navigate(to, options);
  };
  return { privateNavigate };
};
