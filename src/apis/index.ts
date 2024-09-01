import axios from "axios";
import authStore from "@/stores/authStore.ts";

export const baseInstance = axios.create({
  baseURL: import.meta.env.VITE_API_HOST
});

baseInstance.interceptors.request.use((config) => {
  const acToken = authStore.getState().accessToken.value;
  if (acToken) {
    config.headers.Authorization = `Bearer ${acToken}`;
  }
  return config;
});
