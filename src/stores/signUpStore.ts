import { create } from "zustand";

type SignUpStore = {
  nickname: string;
  setNickname: (nickname: string) => void;
  profileImage: File | null;
  setProfileImage: (profileImage: File) => void;
  classEngravings: string[];
  setClassEngravings: (classEngravings: string[]) => void;
  highestLevel: number;
  setHighestLevel: (highestLevel: number) => void;
};

export const signUpStore = create<SignUpStore>((set) => ({
  nickname: "",
  setNickname: (nickname: string) => set({ nickname }),
  profileImage: null,
  setProfileImage: (profileImage: File) => set({ profileImage }),
  classEngravings: [],
  setClassEngravings: (classEngravings: string[]) => set({ classEngravings }),
  highestLevel: 0,
  setHighestLevel: (highestLevel: number) => set({ highestLevel })
}));
