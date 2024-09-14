import authStore from "@/stores/authStore.ts";
import { NavigateOptions, useNavigate } from "react-router-dom";
import { globalDialogStore } from "@/stores/globalDialogStore.ts";

export const usePrivateNavigate = () => {
  const { isSignedIn } = authStore();
  const { setIsNeedLoginDialogOpen } = globalDialogStore();
  const navigate = useNavigate();

  const privateNavigate = (to: string, options?: NavigateOptions) => {
    if (!isSignedIn) {
      setIsNeedLoginDialogOpen(true);
      return;
    }
    navigate(to, options);
  };
  return { privateNavigate };
};
