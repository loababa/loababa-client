import { create } from "zustand";

type GlobalDialogStore = {
  isNeedLoginDialogOpen: boolean;
  setIsNeedLoginDialogOpen: (value: boolean) => void;
};

export const globalDialogStore = create<GlobalDialogStore>((set) => ({
  isNeedLoginDialogOpen: false,
  setIsNeedLoginDialogOpen: (value: boolean) =>
    set({ isNeedLoginDialogOpen: value })
}));
